var titleInput = document.querySelector(".title");
var bodyInput = document.querySelector("textarea");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");
var saveBtn = document.querySelector(".save");
var userInput = document.querySelector(".user-input");
var cards = [];
// var favorite = false;
var pageOpacity = document.querySelector(".page-opacity")
var filterMobile = document.querySelector(".mobile-filter");
var menuClosed = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
saveBtn.disabled = true;
var menuOpen = false;
// var Idea = require('../ideas')

// window.addEventListener("load", pullCard);
window.addEventListener("load", function(){
  if (localStorage !== null) {
    pullCard();
  }
});

userInput.addEventListener("keyup", checkInputs);
menuClosed.addEventListener("click", dropMenu);

cardContainer.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.className === "star") {
    favoriteCard(event);
  }
  if (event.target.className === "delete") {
    removeCard();

    // event.target.deleteFromStorage;
  }
});

form.addEventListener("click", function(event) {
  if (event.target.className === "save") {
    cardInput();
    // addCard();
    // for (var i = 0; i < cards.length; i++) {
      // cards[i].saveToStorage();
    }
});

function dropMenu () {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuClosed.setAttribute("src","images/menu-close.svg");
    sidebar.classList.add("mobile-menu");
    filterMobile.style.display = "flex";
    pageOpacity.style.display = "flex";

  } else {
    menuClosed.setAttribute("src","images/menu.svg");;
    sidebar.classList.remove("mobile-menu");
    filterMobile.style.display = "none";
    pageOpacity.style.display = "none";
  }
};

function checkInputs(event) {
  event.preventDefault();
   if (userInput.value) {
    saveBtn.disabled = false;
    saveBtn.id = "active";
  }
};

// 1. Find the id of the idea that we clicked on
// 2. Use that id to find the specific idea in your cards array
// 3. Once you have that idea, you can update the cards array to
// include everything BUT that card
// 4. call you saveToStorage() using the idea you currently have selected
// 5. Clear out the DOM and reload all the cards

function removeCard() {

  var targetId = parseInt(event.target.id, 10);
  var deleted = event.target.closest("card");
  deleted = new Idea;
  for (var i = 0; i < cards.length; i++) {
    // console.log(targetId);
    // console.log(cards);
    if (targetId === cards[i].id) {
      // cardContainer.remove(2);
      cards.splice(i, 1);
      console.log(cards);

      // deleted.deleteFromStorage(deleted);
      deleted.saveToStorage(cards);

    }
  }
}



function addCard(card) {

  // for (var i = 0; i < cards.length; i++) {
  // var recent = cards[cards.length - 1];
  cardContainer.innerHTML += `
  <div class="card">
    <header>
      <img src="images/star.svg" alt="Star" class="star" id="${card.id}">
      <img src="images/delete.svg" alt="Delete Icon" class="delete" id="${card.id}">
    </header>
    <h4 contenteditable="true">${card.title}</h4>
    <p contenteditable="true">${card.body}</p>
    <footer>
      <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
      <h5>Comment</h5>
    </footer>
  </div>`;
  saveBtn.disabled = true;
  saveBtn.id = "";
}

// }
// }



function cardInput() {

  var id = Date.now();
  var newIdea = new Idea(titleInput.value, bodyInput.value, id);
  cards.push(newIdea);
  newIdea.saveToStorage(cards);
  addCard(newIdea);
  console.log(cards);
  // for (var i = 0; i < cards.length; i++){

  // localStorage.setItem("cardContainer", JSON.stringify(cards));
  form.reset();
};

function inputOtherWay(card) {
  card = new Idea(card.title, card.body, card.id);
  cards.push(card);
  card.saveToStorage(cards);
  addCard(card);
  console.log(cards);
}




function pullCard() {

  var arrayOfObjects = localStorage.getItem("cardsInfo");
  var cardArray = JSON.parse(arrayOfObjects);


  for (i = 0; i < cardArray.length; i++) {
    console.log(cardArray[i]);
    // cardArray[i] = new Idea(cardArray[i].title, cardArray[i].body, cardArray[i].id);
    inputOtherWay(cardArray[i]);



  // cardContainer.innerHTML += `
  //   <div class="card">
  //     <header>
  //       <img src="images/star.svg" alt="Star" class="star" id=${cardObject.id}>
  //       <img src="images/delete.svg" alt="Delete Icon" class="delete">
  //     </header>
  //     <h4>${cardObject[i].title}</h4>
  //     <p>${cardObject[i].body}</p>
  //     <footer>
  //       <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
  //       <h5>Comment</h5>
  //     </footer>
  //   </div>`;
  // }
}
}



// make into method
function favoriteCard(event) {
  console.log(event.target);
  var targetId = parseInt(event.target.id, 10);

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].id == event.target.id) {
      // cards[i].starIdea();
      cards[i].favorite = !cards[i].favorite;
      }
  }
    if (cards[i].favorite) {
      event.target.setAttribute("src","images/star-active.svg");
    } else {
      event.target.setAttribute("src","images/star.svg");
      }
  };

// make into method
// function deleteCard(event) {
//   for (var i = 0; i < cards.length; i++) {
//
//         cards.splice(i, 1);
//         event.target.closest(".card").remove();
//         console.log(cards);
//         // newIdea.deleteFromStorage();
//   }
// };
