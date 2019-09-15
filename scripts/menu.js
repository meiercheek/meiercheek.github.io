
let canvasMenu = document.getElementById("menu");
let ctx = canvasMenu.getContext("2d");
let width = canvasMenu.getAttribute('width');
let height = canvasMenu.getAttribute('height');

let position = 'start';
let controlsActive = false;
let screen = 'main';
let gamePlay = false;
let mutedSounds = false;


let draw = (select, x, y, w, h) => {
    ctx.drawImage(select, x, y, w, h);
}


let swordsNormal = (position) => {
    let img = new Image();
    img.onload = function() {
        if(position === 'start')
            draw(img, 230, 410, 140, 140);
        else 
            draw(img, 230, 310, 140, 140);
    };
    img.src = 'img/n.png';
}

let swordsShine = (position) =>{
    let img = new Image();
    img.onload = function() {
        if(position === 'start')
            draw(img, 230, 310, 140, 140);
        else if (position === 'about')
            draw(img, 230, 410, 140, 140);
        else
            draw(img, 300, 410, 140, 140);    
    };
    img.src = 'img/h.png';
}

let arrowDown = () =>{
    if(position === 'start'){
        position = 'about';
        swordsShine('about');
        swordsNormal('about');
    }
    else{
        position = 'start';
        swordsShine('start');
        swordsNormal('start');
    }
}

let arrowUp = () =>{
    if(position === 'start'){
        position = 'about';
        swordsShine('about');
        swordsNormal('about');
    }
    else{
        position = 'start';
        swordsShine('start');
        swordsNormal('start');
    }
}
if(gamePlay === false){
    window.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        if (key === 38){//up
            if (controlsActive === false)
                arrowUp();    
        }
        if (key === 40){ //down
            if (controlsActive === false)
                arrowDown();
        }
        /*if (key === 27){
            if(controlsActive === true)
            selected();
            //select.play();
        }*/
    
        if (key === 13){
            if(gamePlay === false && mutedSounds === false){
                select.play();
            }
            selected();
        }

        if (key === 77){
            if (gamePlay === false && mutedSounds == false) {
                theme.pause();
                mutedSounds = true;
            } else if (gamePlay === false && mutedSounds === true) {
                theme.loop = true;
                theme.play();
                mutedSounds = false;
            }
        }
    });
}

let staticStuffMain = () =>{
    ctx.beginPath();
    
    ctx.lineWidth = "1";
    ctx.strokeStyle = "white";
    ctx.rect(280, 90, 450, 220);
    ctx.stroke();
    Render.tasks.Write("super", ctx, 300, 200, "80px", "font");
    Render.tasks.Write("geralt", ctx, 300, 280, "80px", "font");
    Render.tasks.Write("start game", ctx, 370, 400, "48px", "font");
    Render.tasks.Write("controls", ctx, 370, 490, "48px", "font");
    
}

let selected = () => {
    if(gamePlay === false){
        if (position === 'start' && screen === 'main'){
        
            startGame();
        }
            
        else if (position === 'about' && screen === 'main'){
            
            controlsActive = true;
            screen = 'about';
            position = 'controls';
            controls(); 
        }
        else if(position === 'controls' && screen === 'about'){
            
            controlsActive = false;
            screen = 'main';
            position = 'about';
            loop();
        }
    }
    
            
}

let staticStuffControls = () => {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "white";
    ctx.rect(120, 80, 760, 464);
    ctx.stroke(); 
    Render.tasks.Write("controls", ctx, 350, 150, "48px", "font");
    Render.tasks.Write("movement - ⇄", ctx, 340, 230, "36px", "font");
	Render.tasks.Write("space - jump", ctx, 340, 280, "36px", "font");
    Render.tasks.Write("m - sound toggle", ctx, 340, 330, "36px", "font");
    Render.tasks.Write("esc - pause", ctx, 340, 380, "36px", "font");
    Render.tasks.Write("go back", ctx, 445, 490, "36px", "font");
    swordsShine(); 
}

let controls = () => {
    ctx.clearRect(0, 0, width, height);
    staticStuffControls(); 
}

let startGame = () =>{
    gamePlay = true;
    canvasMenu.style ="display:none;"
    theme.pause();
    Engine.ini();
    

}
if(mutedSounds === true){
    Render.tasks.Write("sound off", ctx, 420, 32, "24px", "font");
}
const theme= new Audio("audio/menutheme.ogg");
const select= new Audio("audio/select.ogg");
theme.play();
theme.loop = true;

let loop = () => {
    ctx.clearRect(0, 0, width, height);
    if (controlsActive === false){
        staticStuffMain();
        swordsShine(position);
        swordsNormal(position);
    }
    
    
}
let menuLoop = window.requestAnimationFrame(loop);

