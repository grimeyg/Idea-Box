class Idea {
  constructor (title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.favorite = false;
  }
  saveToStorage(cards) {
    var cardString = JSON.stringify(cards);
    localStorage.setItem("cardInfo", cardString);
  }
  deleteFromStorage() {
  }
  updateIdea() {
  }
  starIdea() {
    this.favorite = !this.favorite;
  }
}
// module.exports = Idea;
