
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
    console.log(newbie);
  }
}

saveBtn.addEventListener("click", addCard)
//when I click Save I should see a new card apper with title/body
function addCard() {
  //when I click save I should not see the page reload
  if(userInput.value === "") {
    return;
  };
  // we have the above line because otherwise addCard runs twice
  cardContainer.innerHTML += `
  <div class="card">
    <header>
      <img src="images/star-active.svg" alt="Active Star">
      <img src="images/delete.svg" alt="Delete Icon">
    </header>
    <h4>${titleInput.value}</h4>
    <p>${bodyInput.value}</p>
    <footer>
      <img src="images/comment.svg" alt="Comment Icon" class="comment-icon">
      <h5>Comment</h5>
    </footer>
  </div>`;
//When I click Save the inputs fields should be cleared out
form.reset();
// return;
};
