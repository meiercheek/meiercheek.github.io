let Engine = {
    ini:() => {
        let skyCanvas = document.getElementById("sky");
        let backCanvas = document.getElementById("back");
        let frontCanvas = document.getElementById("front");
        let stars = document.getElementById("stars");


        let canvas = {
            skyCanvas: skyCanvas,
            backCanvas: backCanvas,
            frontCanvas: frontCanvas,
            stars: stars,
            skyCtx: skyCanvas.getContext('2d'),
            backCtx: backCanvas.getContext('2d'),
            frontCtx: frontCanvas.getContext('2d'),
            starCtx: stars.getContext('2d')

        };

        window.addEventListener('keydown', (e) => {
            var key = e.keyCode;
            
            if (key === 27){
                //console.log("27 pressed");
                if (Begin.ini.paused === false) {
                    data.audio.theme.pause();
                    Begin.ini.paused = true;
                } else if (Begin.ini.paused == true && Begin.ini.muted ===false ) {
                    data.audio.theme.play();
                    Begin.ini.paused = false;
                }
                else{
                    Begin.ini.paused = false;
                }
               
            }
            if (key === 77){
                //console.log("77 pressed");
                if (Begin.ini.muted == false) {
                    data.audio.theme.pause();
                    Begin.ini.muted = true;
                } else if (Begin.ini.muted === true) {
                    data.audio.theme.loop = true;
                    data.audio.theme.play();
                    Begin.ini.muted = false;
                }
            }
        });


        let graphics = new Image();
        graphics.src = "img/map.png"

        graphics.addEventListener('load', () => {
            let graphics = this;
        });




        let data = {
            frame: 0,
            canvas: canvas,
            graphics: graphics,
            audio: {
                theme: new Audio("audio/theme1.ogg"),
                jump: new Audio("audio/jump.ogg"),
                coin: new Audio("audio/coin.ogg"),
                elixir: new Audio("audio/elixir.ogg"),
                sword: new Audio("audio/sword.ogg"),
                hurt: new Audio("audio/death.ogg"),
                death: new Audio("audio/gameover.ogg")
            }
        };

        data.canvas.starCtx.imageSmoothingEnabled = false;
        data.canvas.skyCtx.imageSmoothingEnabled = false;
        data.canvas.frontCtx.imageSmoothingEnabled = false;
        data.canvas.backCtx.imageSmoothingEnabled = false;


		data.audio.theme.loop = true;
        Begin.ini.muted = false;
        data.audio.theme.play();


        Begin.ini(data);
        Objects.ini(data);
        Engine.start(data);
    },



    start: (data) => {
        let loop = () => {
            Engine.begin(data);

            if (!Begin.ini.paused) {
                Engine.update(data);
                Engine.render(data);
            }
            if (Begin.ini.paused){
				Render.tasks.Write("PAUSED", data.canvas.frontCtx, 350, 300, "72px", "font");
                Render.tasks.Write("⇄ - move", data.canvas.frontCtx, 20, 550, "16px", "font");
                Render.tasks.Write("space - jump", data.canvas.frontCtx, 20, 570, "16px", "font");
                Render.tasks.Write("m - sound toggle", data.canvas.frontCtx, 20, 590, "16px", "font");
                Render.tasks.Write("esc - unpause", data.canvas.frontCtx, 20, 610, "16px", "font");	
			}
                
			
			if (Begin.ini.muted)
                Render.tasks.Write("sound off", data.canvas.frontCtx, 420, 32, "24px", "font");


            data.frame++;
            window.requestAnimationFrame(loop);

        };

        loop();


    },

    begin:  (data) => {
        Begin.bUpdate(data);
    },

    update: (data)  => {
        Movement.update(data);
        Animations.update(data);
        Physics.update(data);
    },

    render: (data) => {
        Render.update(data);
    }
};



//window.onload = Engine.ini();

