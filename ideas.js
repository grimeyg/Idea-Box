class Idea {
  constructor (title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.favorite = false;
  }
  saveToStorage() {
  //   var cardString = JSON.stringify(cards);
  //   localStorage.setItem("cardInfo", cardString);
  }
  deleteFromStorage() {
    for (var i = 0; i < cards.length; i++) {
          cards.splice(i, 1);
          event.target.closest(".card").remove();
          console.log(cards);
    }
  }
  updateIdea() {
  }
  starIdea() {
    this.favorite = !this.favorite;
  }
}
// module.exports = Idea;
