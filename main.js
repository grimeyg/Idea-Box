
var titleInput = document.querySelector(".title");
var bodyInput = document.querySelector("textarea");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");
var saveBtn = document.querySelector(".save");
var userInput = document.querySelector('.user-input')
var cards = [];
saveBtn.disabled = true;

userInput.addEventListener("keyup", checkInputs);

function checkInputs() {
  event.preventDefault();
   if (bodyInput.value.length > 0 && titleInput.value.length > 0) {
    saveBtn.disabled = false;
    saveBtn.id = "active";
  }
};

saveBtn.addEventListener("click", addCard)


//when I click Save I should see a new card apper with title/body
function addCard() {
  var id = Date.now();
  var newbie = new Card(titleInput.value, bodyInput.value, id.value);
  cards.push(newbie);
  var recent = cards[cards.length - 1];
  console.log(cards);
  //when I click save I should not see the page reload

  // this.id = date now, need to interpolate
  cardContainer.innerHTML += `
  <div class="card">
    <header>
      <img src="images/star-active.svg" alt="Active Star">
      <img src="images/delete.svg" alt="Delete Icon">
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
// return;
};
