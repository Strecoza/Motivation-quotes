const button= document.querySelector(".btn");
const quotes= document.querySelector(".quotes");

const quotesArr= ["A problem is a chance for you to do your best. - Duke Ellington ", "Motivation is what gets you started. Habit is what keeps you going.- Jim Rohn ", "A little progress each day adds up to big results.- Satya Nani ", "Success consists of getting up just one more time than you fall.- Oliver Goldsmith ", "Don’t wish it were easier. Wish you were better.― Jim Rohn ", "Nothing is impossible. The word itself says ‘I’m possible!— Audrey Hepburn ", "Success is not final, failure is not fatal: it is the courage to continue that counts.- Winston Churchill ", "It is during our darkest moments that we must focus to see the light.— Aristotle ", "Believe you can and you’re halfway there.- Theodore Roosevelt ", "Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.— Ella Fitzgerald ", "Try to be a rainbow in someone’s cloud.- Maya Angelou ", "I believe that if you’ll just stand up and go, life will open up for you. Something just motivates you to keep moving.— Tina Turner", "Don’t be overwise; fling yourself straight into life, without deliberation; don’t be afraid - the flood will bear you to the bank and set you safe on your feet again. - Fyodor Dostoevsky"];
button.addEventListener("click", ()=>{
    let randomQuote= quotesArr[Math.floor(Math.random()*quotesArr.length)];
    quotes.style.display = "block";
    quotes.textContent = randomQuote;
})