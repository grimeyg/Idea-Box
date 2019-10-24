var save = document.querySelector(".save");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector("#fat-boy");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");

save.addEventListener("click", addCard)



//when I click Save I should see a new card apper with title/body
function addCard (){
  //when I click save I should not see the page reload
  event.preventDefault();
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
}
