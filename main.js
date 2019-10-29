
var titleInput = document.querySelector(".title");
var bodyInput = document.querySelector("textarea");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");
var saveBtn = document.querySelector(".save");
var userInput = document.querySelector(".user-input");
var cards = [];
var favorite = false;
var pageOpacity = document.querySelector(".page-opacity")
var filterMobile = document.querySelector(".mobile-filter");
var menuClosed = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
saveBtn.disabled = true;
var menuOpen = false;

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
    addCard();
  }
  rememberCard();
});

function rememberCard() {
  var newbieToString = localStorage.getItem('cardInfo');
  var newbieToObject = JSON.parse(newbieToString);

  console.log("Card Info:", newbieToObject);
}

function pullCard() {
  var cardInfo = JSON.parse(localStorage.getItem('cardInfo'));
  for (i = 0; i < cardInfo.length; i++) {
  cardContainer.innerHTML += `
    <div class="card">
      <header>
        <img src="images/star.svg" alt="Star" class="star" >
        <img src="images/delete.svg" alt="Delete Icon" class="delete">
      </header>
      <h4>${cardInfo[i].title}</h4>
      <p>${cardInfo[i].body}</p>
      <footer>
        <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
        <h5>Comment</h5>
      </footer>
    </div>`;
}
}

//when I click Save I should see a new card apper with title/body
function addCard() {
  event.preventDefault();
  var id = Date.now();
  var newbie = new Card(titleInput.value, bodyInput.value, id.value);
  cards.push(newbie);
  var recent = cards[cards.length - 1];
  var cardsString = JSON.stringify(cards);
  localStorage.setItem('cardInfo', cardsString);
  //when I click save I should not see the page reload
  cardContainer.innerHTML += `
  <div class="card">
    <header>
      <img src="images/star.svg" alt="Star" class="star" id=${recent.id}>
      <img src="images/delete.svg" alt="Delete Icon" class="delete">
    </header>
    <h4>${recent.title}</h4>
    <p>${recent.body}</p>
    <footer>
      <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
      <h5>Comment</h5>
    </footer>
  </div>`;
//When I click Save the inputs fields should be cleared out
form.reset();
};

function favoriteCard() {

  var cardInfo = JSON.parse(localStorage.getItem('cardInfo'));

  favorite = !favorite;
  for (var i = 0; i < cardInfo.length; i++) {
    // if (cardInfo[i].id === event.target.id) {
      cardInfo[i].favorite = true;
      // favorite = true;
      if (favorite) {
        event.target.setAttribute("src","images/star-active.svg");
      } else {
        event.target.setAttribute("src","images/star.svg");
        }
        console.log(cardInfo[i]);
    }
  // };

  };


function deleteCard() {
  for (var i = 0; i < cards.length; i++) {
    if (event.target.className === "delete") {
        cards.splice(i, 1);
        event.target.closest(".card").remove();
    }
  }
};
