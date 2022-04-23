let reset = document.getElementById('reset');
let keys = Array.from(document.getElementsByClassName('key'));
let displayWord = document.getElementById('word');
let listOfWords=['DANNY','CHRIS','SETH','CHRISTOPHER'];

let hiddenWord = listOfWords[Math.floor((Math.random()*listOfWords.length))];
displayWord.innerText = "";

for (let i of hiddenWord){
    displayWord.innerText += " _ " // [' ', '_', ' ', '_', ' ']
}


keys.map(key=>{
    key.addEventListener('click',()=>{
        let updateHiddenWord=Array.from(hiddenWord);
        let dispWord=Array.from(displayWord.innerText);
        console.log(updateHiddenWord)
        console.log(dispWord)
        if (hiddenWord.includes(key.innerText)){
            for (let i =0;i<dispWord;i++){
                if(key.innerText=hiddenWord[i]){
                    dispWord[i*2]=hiddenWord[i];
                }           
            }
            console.log(dispWord)
            console.log(dispWord.join())
            displayWord.innerText =dispWord.join();
        }
        else{
            //update image
            console.error('NO')
        }
    })
})

