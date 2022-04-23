let buttons = document.getElementById('keyboard');
let reset = document.getElementById('reset');
let keys = Array.from(document.getElementsByClassName('key'));

keys.map(key=>{
    key.addEventListener('click',()=>{
        console.log(key.innerText)
    })
})



//buttons.addEventListener('click',function(){
 //   console.log('test');
//});

