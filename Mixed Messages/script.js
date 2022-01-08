// Quotes for the generator
let quotes = [
'Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.',

'Clothes make the man. Naked people have little or no influence in society.',

'Insomnia sharpens your math skills because you spend all night calculating how much sleep you will get if you are able to fall asleep right now.',

'Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.'
];

function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};


