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
  console.log(cardString);
}
// deleteFromStorage(card) {
//
//   // console.log(localStorage);
//   // var targetId = parseInt(event.target.id, 10);
//   // for (var i = 0; i < cards.length; i++) {
//   //   if (cards[i].id === event.target.id) {
//
// //       localStorage.removeItem("cardsInfo", cards[i]);
// //       }
// //     }
// // console.log(localStorage);
//   // for (var i = 0; i < cards.length; i++) {
//   //   if (cards[i].id )
//   //       cards.splice(i, 1);
//         // card.remove();
//         // console.log(cards);
//
// }
updateIdea(card) {
  card.favorite = !card.favorite;
  if (card.favorite) {
    event.target.setAttribute("src","images/star-active.svg");
  } else {
    event.target.setAttribute("src","images/star.svg");
    }

  // var cardUpdate = JSON.stringify(cards);
  // localStorage.setItem("cardsInfo", cardUpdate);
  // console.log(cardUpdate);
}
// starIdea() {
//   this.favorite = !this.favorite;
// }
}
// module.exports = Idea;
