var titleInput = document.querySelector(".title");
var bodyInput = document.querySelector("textarea");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");
var saveBtn = document.querySelector(".save");
var userInput = document.querySelector(".user-input");
var cards = [];
var pageOpacity = document.querySelector(".page-opacity")
var filterMobile = document.querySelector(".mobile-filter");
var menuClosed = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
saveBtn.disabled = true;
var menuOpen = false;
var starArr =[];

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
  }
});

form.addEventListener("click", function(event) {
  if (event.target.className === "save") {
    inputFromForm();
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

function removeCard() {
  var targetId = parseInt(event.target.id, 10);
  var deleted = event.target.closest("card");
  deleted = new Idea;
  for (var i = 0; i < cards.length; i++) {
    if (targetId === cards[i].id) {
      cards.splice(i, 1);
      deleted.saveToStorage(cards);
    }
  }
}

function addCard(card) {
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


function addFavoriteCard(card) {
  cardContainer.innerHTML += `
  <div class="card">
    <header>
      <img src="images/star-active.svg" alt="Star" class="star" id="${card.id}">
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

function inputFromForm() {
  var id = Date.now();
  var newIdea = new Idea(titleInput.value, bodyInput.value, id);
  cards.push(newIdea);
  newIdea.saveToStorage(cards);
  addCard(newIdea);
  form.reset();
};

function inputFromStorage(card) {
  card = new Idea(card.title, card.body, card.id, card.favorite);
  cards.push(card);
  card.saveToStorage(cards);
  if (card.favorite) {
    addFavoriteCard(card)
  } else {
  addCard(card);
  }
}


function pullCard() {
  var arrayOfObjects = localStorage.getItem("cardsInfo");
  var cardArray = JSON.parse(arrayOfObjects);
  for (i = 0; i < cardArray.length; i++) {
    console.log(cardArray[i]);
    inputFromStorage(cardArray[i]);
  }
}

function favoriteCard(event) {
  var targetId = parseInt(event.target.id, 10);
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].id == event.target.id) {
      cards[i].updateIdea(cards[i]);
      }
    cards[i].saveToStorage(cards);
  }
};
