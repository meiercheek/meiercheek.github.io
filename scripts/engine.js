var Engine = {
    ini: function() {
        var skyCanvas = document.getElementById("sky");
        var backCanvas = document.getElementById("back");
        var frontCanvas = document.getElementById("front");
        var stars = document.getElementById("stars");


        var canvas = {
            skyCanvas: skyCanvas,
            backCanvas: backCanvas,
            frontCanvas: frontCanvas,
            stars: stars,
            skyCtx: skyCanvas.getContext('2d'),
            backCtx: backCanvas.getContext('2d'),
            frontCtx: frontCanvas.getContext('2d'),
            starCtx: stars.getContext('2d')

        };


        var graphics = new Image();
        graphics.src = "img/map.png"

        graphics.addEventListener('load', function() {
            var graphics = this;
        });




        var data = {
            frame: 0,
            canvas: canvas,
            graphics: graphics,
            audio: {
                theme: new Audio("audio/theme1.ogg"),
                ambience: new Audio("audio/ambience.ogg"),
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
        //data.audio.theme.play();


        Begin.ini(data);
        Objects.ini(data);
        Engine.start(data);
    },



    start: function(data) {
        var loop = function() {
            Engine.begin(data);

            if (!Begin.ini.paused) {
                Engine.update(data);
                Engine.render(data);
            }
            if (Begin.ini.paused){
				Render.tasks.Write("PAUSED", data.canvas.frontCtx, 350, 300, "72px", "font");
				
				Render.tasks.Write("⇄ - move", data.canvas.frontCtx, 20, 550, "16px", "font");
				 Render.tasks.Write("space - jump", data.canvas.frontCtx, 20, 570, "16px", "font");
				
				 Render.tasks.Write("m - sound off", data.canvas.frontCtx, 20, 590, "16px", "font");
				 Render.tasks.Write("esc - unpause", data.canvas.frontCtx, 20, 610, "16px", "font");
			}
                
			
			if (Begin.ini.muted)
                Render.tasks.Write("sound off", data.canvas.frontCtx, 420, 32, "24px", "font");


            data.frame++;

			if(data.frame < 600){
			 Render.tasks.Write("⇄ - move", data.canvas.frontCtx, 20, 550, "16px", "font");
				 Render.tasks.Write("space - jump", data.canvas.frontCtx, 20, 570, "16px", "font");
				
				 Render.tasks.Write("m - sound off", data.canvas.frontCtx, 20, 590, "16px", "font");
				 Render.tasks.Write("esc - pause", data.canvas.frontCtx, 20, 610, "16px", "font");
		}

            window.requestAnimationFrame(loop);

        };

        loop();


    },

    begin: function(data) {
        Begin.bUpdate(data);
    },

    update: function(data) {
        Movement.update(data);
        Animations.update(data);
        Physics.update(data);
    },

    render: function(data) {
        Render.update(data);
    }
};



window.onload = Engine.ini();