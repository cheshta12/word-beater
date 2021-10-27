window.addEventListener('load',init);
// Differnt levels
const levels ={
    easy :6,
    medium: 3,
    hard:2
}
// TO change level
const currentlevel=levels.easy;
let time=currentlevel;
let score=0;
let isplaying;

const wordinput=document.querySelector("#word-input");
const currentword=document.querySelector("#current-word");
const scoredisp=document.querySelector("#score");
const timedisp=document.querySelector("#time");
const message=document.querySelector("#message");
const seconds=document.querySelector("#seconds");

const words=['bat','sea','fast','lucky','statue','generate','stubborn','cocktail','runaway','developer'
            ,'establishment','javascript','nutrition','revolver','india','independence','republic','craft'
            ,'vehicle','magnitude','bike','private','mirror','suggest','grandfather','me','answer','greedy','scrub','disgusting','famous',
            'rainy','accept','cave','dinner','place',' writer','scrape','hollow','hanging','admit','warlike','basin','develop','basket','packet' ];

// Intialize Game
function init()
{
    seconds.innerHTML=currentlevel;
    showWords(words);
    wordinput.addEventListener('input',startmatch);
    setInterval(countdown,1000);
    setInterval(checkstatus,100);
}

// Picking random words from array of "words"
function showWords(words)
{
    const RandIndex=Math.floor(Math.random() * words.length);
    currentword.innerHTML=words[RandIndex];
}
// countdown below input text tag
function countdown()
{
    if(time>0)
    {      time--;}
    else if(time=== 0)
    {isplaying =false;}
    timedisp.innerHTML=time;
}
// If the game is still running or over
function checkstatus()
{
    if(!isplaying && time===0)
    {   message.innerHTML="GAME OVER!!!!";
        score=-1;
    }
}
function startmatch()
{
    if(matchWords())
    {
        isplaying=true;
        time=currentlevel+1;
        showWords(words);
        wordinput.value='';
        score++;
    }
    if (score ===-1)
    {
        scoredisp.innerHTML=0;
    }
    else
    {
        scoredisp.innerHTML=score;
    }
    
}
function matchWords()
{
    if(wordinput.value === currentword.innerHTML)
    {
        message.innerHTML="Correct!!!";
        return true;
    }
    else
    {
        message.innerHTML=" ";
        return false
    }
}