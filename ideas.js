class Idea {
constructor (title, body, id, favorite) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.favorite = favorite || false;
}

saveToStorage(cardArray) {
  var cardString = JSON.stringify(cardArray);
  localStorage.setItem("cardsInfo", cardString);
}

updateIdea(card) {
  card.favorite = !card.favorite;
  if (card.favorite) {
    event.target.setAttribute("src","images/star-active.svg");
  } else {
    event.target.setAttribute("src","images/star.svg");
    }
  }
}
