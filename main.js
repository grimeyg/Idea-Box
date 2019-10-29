
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

window.addEventListener("load", pullCard);
userInput.addEventListener("keyup", checkInputs);
menuClosed.addEventListener("click", dropMenu);

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

cardContainer.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.className === "star") {
    favoriteCard();
  }
  if (event.target.className === "delete") {
    deleteCard();
  }
});

function checkInputs(event) {
  event.preventDefault();
   if (userInput.value) {
    saveBtn.disabled = false;
    saveBtn.id = "active";
  }
};

form.addEventListener("click", function(event) {
  if (event.target.className === "save") {
    cardInput();
    addCard();
    for (var i = 0; i < cards.length; i++) {
    cards[i].saveToStorage();
  }
  }
});

// var recent = cards[cards.length - 1];
function addCard() {
  for (var i = 0; i < cards.length; i++) {
  cardContainer.innerHTML += `
  <div class="card">
    <header>
      <img src="images/star.svg" alt="Star" class="star" id=${cards[i].id}>
      <img src="images/delete.svg" alt="Delete Icon" class="delete">
    </header>
    <h4 contenteditable="true">${cards[i].title}</h4>
    <p contenteditable="true">${cards[i].body}</p>
    <footer>
      <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
      <h5>Comment</h5>
    </footer>
  </div>`;
}
}

function cardInput() {
  // event.preventDefault();
  var id = Date.now();
  var newIdea = new Idea(titleInput.value, bodyInput.value, id);
  cards.push(newIdea);
  form.reset();
};


function pullCard() {
  var cardInString = localStorage.getItem("cardInfo");
  var cardObject = JSON.parse(cardInString);
  console.log(cardObject);
  for (i = 0; i < cardObject.length; i++) {
  cardContainer.innerHTML += `
    <div class="card">
      <header>
        <img src="images/star.svg" alt="Star" class="star" id=${cardObject.id}>
        <img src="images/delete.svg" alt="Delete Icon" class="delete">
      </header>
      <h4>${cardObject[i].title}</h4>
      <p>${cardObject[i].body}</p>
      <footer>
        <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
        <h5>Comment</h5>
      </footer>
    </div>`;
  }
}


// make into method
function favoriteCard(event) {
  console.log(event.target);
  var targetId = parseInt(event.target.id, 10);

  // favorite = !favorite;
  var cardStored = localStorage.getItem("cardInfo");
  var cardInfo = JSON.parse(cardStored);
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
function deleteCard(event) {
  for (var i = 0; i < cards.length; i++) {
    if (event.target.className === "delete") {
        cards.splice(i, 1);
        event.target.closest(".card").remove();
    }
  }
};
