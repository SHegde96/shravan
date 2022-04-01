var modeBtn = document.querySelector('.mode-btn');
var container = document.querySelector('.container');
var animeContainer = document.querySelector('.anime-container');
var modeBtnTxt = document.querySelector('.mode-btn-txt');


var isOn = true;
modeBtn.addEventListener('click', ()=>{
    if(isOn){
        container.style.background = 'white'
        animeContainer.style.background = 'white'
        modeBtn.style.background = 'white'
        modeBtnTxt.style.color = 'black'
        isOn = false
    }
    else{
        container.style.background = '#222'
        animeContainer.style.background = '#222'
        modeBtn.style.background = '#222'
        modeBtnTxt.style.color = 'white'
        isOn = true
    }
})