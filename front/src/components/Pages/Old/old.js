//Main Images

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mainSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

//Laugh Images

let myIndexL = 0;
carouselL();

function carouselL() {
  let iL;
  let xL = document.getElementsByClassName("laughSlides");
  for (iL = 0; iL < xL.length; iL++) {
    xL[iL].style.display = "none";  
  }
  myIndexL++;
  if (myIndexL > xL.length) {myIndexL = 1}    
  xL[myIndexL-1].style.display = "block";  
  setTimeout(carouselL, 2000); 
}

//Dream Images

let myIndexD = 0;
carouselD();

function carouselD() {
  let iD;
  let xD = document.getElementsByClassName("dreamSlides");
  for (iD = 0; iD < xD.length; iD++) {
    xD[iD].style.display = "none";  
  }
  myIndexD++;
  if (myIndexD > xD.length) {myIndexD = 1}    
  xD[myIndexD-1].style.display = "block";  
  setTimeout(carouselD, 2000); 
}

//Marvel At Images

let myIndexM = 0;
carouselM();

function carouselM() {
  let iM;
  let xM = document.getElementsByClassName("marvelAtSlides");
  for (iM = 0; iM < xM.length; iM++) {
    xM[iM].style.display = "none";  
  }
  myIndexM++;
  if (myIndexM > xM.length) {myIndexM = 1}    
  xM[myIndexM-1].style.display = "block";  
  setTimeout(carouselM, 2000); 
}