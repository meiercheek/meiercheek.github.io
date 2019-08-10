var Death = {
    calling: function (data) {
        Death.tasks.lossOfLife(data);
    },

    tasks: {
        lossOfLife: function (data) {
            var geralt = data.Objects.geralt;
			

            if (geralt.lifes > 0) {
                geralt.lifes--;
            }
            if (geralt.lifes < 1) {
                if (!Begin.ini.muted)
                    data.audio.death.play();
				
                setTimeout(function () {
                    location.reload();
                }, 4000);
            } 
			else {
                for (var i = 0; i < data.Objects.tableofWalls.length; i++) {
                    data.Objects.tableofWalls[i].x -= data.Objects.map.x;
                }

                for (var i = 0; i < data.Objects.arrayofSpiders.length; i++) {
                    data.Objects.arrayofSpiders[i].x -= data.Objects.map.x;
                }

                for (var i = 0; i < data.Objects.arrayofCoins.length; i++) {
                    data.Objects.arrayofCoins[i].x -= data.Objects.map.x;
                }

                for (var i = 0; i < data.Objects.arrayofElixirs.length; i++) {
                    data.Objects.arrayofElixirs[i].x -= data.Objects.map.x;
                }

                for (var i = 0; i < data.Objects.arrayofSwords.length; i++) {
                    data.Objects.arrayofSwords[i].x -= data.Objects.map.x;
                }
                for (var i = 0; i < data.Objects.arrayofTorches.length; i++) {
                    data.Objects.arrayofTorches[i].x -= data.Objects.map.x;
                }

                data.Objects.moon.x = data.Objects.map.x = geralt.x = geralt.y = 0;
                geralt.velY = 1;
                geralt.defaultState = geralt.state.states;
                geralt.velX = 8;
                geralt.isDead = false;
            }
        }
    }
}