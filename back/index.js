const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const models = require('./models')

const sendNodeMailer = require('./functions/nodemailer')

const app = express();
const port = 5000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/all_shows', (req, res) => {
    models
        .All_Shows
        .findAll()
        .then(dbRes => dbRes ?
            res.status(200).json(dbRes) :
            res.status(500).json({ dbRes, status: 'is bad' }))
})

app.post('/attend/:id', (req, res) => {
    const dataz = {
        name: req.body.name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date(),
        AllShowId: req.params.id
    }

    models
        .Attended
        .create(dataz)
        .then(dbRes => {
            sendNodeMailer(dataz, dbRes)
            res.status(200).json(dbRes)
        })
})

app.get('/attend', (req, res) => {
    models
        .Attended
        .findAll({ include: [models.All_Shows] })
        .then(dbRes => dbRes ?
            res.status(200).json(dbRes) :
            res.status(500).json({ dbRes, status: 'is bad' }))
})

app.post('/person', (req, res) => {
    const doData = {
        name: req.body.name,
        email: req.body.email,
        adress: req.body.city
    }

    models
        .Person
        .create(doData)
        .then(dbRes => {
            if (dbRes) {
                sendNodeMailer(doData, dbRes)
                res.status(200).json(dbRes)
            }
            else {
                res.status(500).json({ dbRes, status: 'is bad' })
            }
        })
})


models
    .sequelize
    .sync(
        // { force: true }
    )
    .then(() => app.listen(port, () => console.log('Listening on port ' + port)))