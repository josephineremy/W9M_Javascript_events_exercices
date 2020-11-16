// Fonctionnalité 1

// var footerEl=document.getElementsByTagName("footer")[0];
//
// footerEl.addEventListener("click", function(){
//   console.log("clique")
// });

// Fonctionnalité 1-bis

var footerEl=document.getElementsByTagName("footer")[0];
var i=1
  footerEl.addEventListener("click", function(){
    console.log(`Clique n°${i}`)
    i++
  })

// Fonctionnalité 2

var navHeader = document.getElementById("navbarHeader");
var toggleBtn=document.getElementsByClassName("navbar-toggler-icon")[0];

function collapse(){
  navHeader.classList.toggle("collapse");
}
toggleBtn.addEventListener("click", collapse);

// Fonctionnalité 3

var editBtnFirstCard=document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
editBtnFirstCard.addEventListener("click", function(){this.style.color="red";
});

// Fonctionnalité 4

var editBtnSecondCard=document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

function changeColor(){
  if (editBtnSecondCard.style.color==='green'){
    editBtnSecondCard.style.color='';
  }
  else {
    editBtnSecondCard.style.color="green";
    }
}
editBtnSecondCard.addEventListener("click", changeColor)

// Fonctionnalité 5

var navbar=document.getElementsByClassName("navbar")[0];

var disableStyle = function(){
  if (document.styleSheets[0].disabled === false) {
    document.styleSheets[0].disabled = true;
  }
  else if (document.styleSheets[0].disabled === true) {
    document.styleSheets[0].disabled = false;
  }
}

navbar.addEventListener("dblclick", disableStyle)

// Fonctionnalité 6

// var viewBtnCard=document.getElementsByClassName("btn btn-sm btn-success");
// var reducedCards=cardText.style.display == "none"
//
// for (let i=0; i < viewBtnCard.length; i++){
// viewBtnCard.addEventListener("mouseover", function(){
//   if (reducedCards === true){
//     cardImg=document.getElementsByClassName("card-img-top")[i].style="";
//     cardText=document.getElementsByClassName("card-text")[i].style="";
//     reducedCards = false;
//   }
// else {
// cardText.style="display:none";
// cardImg.style="width: 20%";
// reducedCards = true;
// }})
// }

// Fonctionnalité 6-bis // Nouvelle façon de faire

var viewBtnCard = document.getElementsByClassName("btn btn-sm btn-success");

  for (let i = 0; i < viewBtnCard.length; i++){
    viewBtnCard[i].addEventListener("mouseover" , function(){
      document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
      document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");})
  }

// Fonctionnalité 7

var grayBtn = document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[1]
var allCards = document.getElementsByClassName("row")[1]
var oneCard=document.getElementsByClassName("col-md-4")

grayBtn.addEventListener("click", function(){
  allCards.insertBefore(oneCard[oneCard.length-1], oneCard[0]);
})


// Fonctionnalité 8

var blueBtn = document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[0]
var allCards = document.getElementsByClassName("row")[1]
var oneCard=document.getElementsByClassName("col-md-4")
var thpLink=document.getElementsByTagName("a")[4]

thpLink.removeAttribute("href");

blueBtn.addEventListener("click", function(){
  allCards.insertBefore(oneCard[0], oneCard[oneCard.length]);
})
