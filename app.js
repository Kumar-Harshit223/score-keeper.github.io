const p1btn=document.querySelector('#p1btn');
const p2btn=document.querySelector('#p2btn');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
const resetbtn=document.querySelector('#reset');
const up=document.querySelector('#upto');

let p1scr=0;
let p2scr=0;
let winscr=3;
let isGameOver=false;

p1btn.addEventListener('click',function(){
   if(!isGameOver){
        p1scr+=1;
        if(p1scr===winscr){
            isGameOver=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
        }
        p1display.textContent=p1scr;
   }
})
p2btn.addEventListener('click',function(){
    if(!isGameOver){
         p2scr+=1;
         if(p2scr===winscr){
             isGameOver=true;
             p2display.classList.add('winner');
             p1display.classList.add('loser');
         }
         p2display.textContent=p2scr;
    }
 })

 up.addEventListener('change',function(){
    winscr=parseInt(this.value);
    reset();
 })

 resetbtn.addEventListener('click',reset)

 function reset(){
    isGameOver=false;
    p1scr=0;
    p2scr=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('loser','winner');
 }