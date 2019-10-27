
var titleInput = document.querySelector(".title");
var bodyInput = document.querySelector("textarea");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");
var saveBtn = document.querySelector(".save");
var userInput = document.querySelector(".user-input");
var cards = [];
saveBtn.disabled = true;

userInput.addEventListener("keyup", checkInputs);

cardContainer.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.className === 'star') {
    favoriteCard();
  }
  if (event.target.className === 'delete') {
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

saveBtn.addEventListener("click", addCard)



//when I click Save I should see a new card apper with title/body
function addCard(event) {
  event.preventDefault();
  var id = Date.now();
  var newbie = new Card(titleInput.value, bodyInput.value, id.value);
  cards.push(newbie);
  var recent = cards[cards.length - 1];
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

  for (var i = 0; i < cards.length; i++) {
    if (event.target.id == cards[i].id) {
      cards[i].favorite = !cards[i].favorite;
    };
    if (cards[i].favorite) {
      event.target.setAttribute('src',"images/star-active.svg");
    } else {
      event.target.setAttribute('src',"images/star.svg");
    };
    console.log(cards);
  }
};


function deleteCard() {
  for (var i = 0; i < cards.length; i++) {
    if (event.target.className === 'delete') {
        cards.splice(i, 1);
        event.target.closest('.card').remove();
    }
  }
};
