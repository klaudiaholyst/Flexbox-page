const panels = document.querySelectorAll('div.panel');
const text = document.querySelectorAll('p.panel__text')

function managePanel(){
    this.classList.toggle('panel--open');
}

function manageText(e){
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')){
       this.classList.toggle('panel--active'); 
    }
}

panels.forEach(panel=>panel.addEventListener('click', managePanel));
panels.forEach(text=>text.addEventListener('transitionend', manageText))