let Begin = {
    ini: (data) => {
        document.onkeydown = (event) => {
            Begin.tasks.keyDown[event.keyCode] = true;
        }

        document.onkeyup = (event) => {
            Begin.tasks.keyDown[event.keyCode] = false;
        }
        let paused = false;
        let muted = true;
    },

    bUpdate: (data) => {
        let geralt = data.Objects.geralt;

        if (Begin.tasks.keyPressed(39)) {
            geralt.direction = 'right';

            if (geralt.velY == 0) {
                geralt.defaultState = geralt.state.moving;
            } 
			else {
                if (geralt.x < data.canvas.frontCanvas.width / 2 ||
                    data.Objects.map.x <= data.canvas.frontCanvas.width - data.Objects.map.w) {
                    geralt.x += geralt.velX;
                } 
				else {
					
                    data.Objects.map.x -= geralt.velX;
                    data.Objects.moon.x -= geralt.velX / 5;
					
                    for (let i = 0; i < data.Objects.tableofWalls.length; i++) {
                        data.Objects.tableofWalls[i].x -= geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofSpiders.length; i++) {
                        data.Objects.arrayofSpiders[i].x -= geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofCoins.length; i++) {
                        data.Objects.arrayofCoins[i].x -= geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofElixirs.length; i++) {
                        data.Objects.arrayofElixirs[i].x -= geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofSwords.length; i++) {
                        data.Objects.arrayofSwords[i].x -= geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofTorches.length; i++) {
                        data.Objects.arrayofTorches[i].x -= geralt.velX;
                    }
                }
            }
        }
        if (Begin.tasks.keyPressed(37)) {
            geralt.direction = 'left';

            if (geralt.velY == 0) {
                geralt.defaultState = geralt.state.moving;
            } 
			
			else {
                if (geralt.x > data.canvas.frontCanvas.width / 2 ||
                    data.Objects.map.x >= 0) {
                    geralt.x -= geralt.velX;
                } 
				else {
					
                    data.Objects.map.x += geralt.velX;
                    data.Objects.moon.x += geralt.velX / 5;
					
                    for (let i = 0; i < data.Objects.tableofWalls.length; i++) {
                        data.Objects.tableofWalls[i].x += geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofSpiders.length; i++) {
                        data.Objects.arrayofSpiders[i].x += geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofCoins.length; i++) {
                        data.Objects.arrayofCoins[i].x += geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofElixirs.length; i++) {
                        data.Objects.arrayofElixirs[i].x += geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofSwords.length; i++) {
                        data.Objects.arrayofSwords[i].x += geralt.velX;
                    }
                    for (let i = 0; i < data.Objects.arrayofTorches.length; i++) {
                        data.Objects.arrayofTorches[i].x += geralt.velX;
                    }
                }
            }
        }
        if (Begin.tasks.keyPressed(32)) {
            geralt.defaultState = geralt.state.jumping;
        }

    },

    tasks: {
        keyDown: {},
        keyPressed:(code) => {
            return Begin.tasks.keyDown[code];
        }
    }
}