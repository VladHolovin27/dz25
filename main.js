let names = ['Art', 'Vlad', 'Stas', 'Sonia'];
let str = " ";

for(let i = 0; i < names.length; i++) {
    str += names[i];
}
console.log(str);

console.log(names.join(" "));

//
let cards = ["ka1", "ka2", "ka3", "ka4"];
let cardsToRemove = cards.splice(2, 1);
let cardsToAdd = cards.splice(4, 0,"ka6");
let cardsToUpdate = cards.splice(2, 1, "ka40");
console.log(cards);