let Physics = {
    update: function (data) {
        Physics.tasks.Gravity(data.Objects.geralt);

        if (!data.Objects.geralt.isDead)
            Physics.tasks.CollisionDetection(data);

        Physics.tasks.Death(data);


        data.Objects.arrayofSpiders.forEach(function (p) {
            Physics.tasks.Gravity(p);
            Physics.tasks.CollisionDetection2(data, p);
        });

    },

    tasks: {
        Gravity: function (object) {
            if (!object.isDead)
                object.defaultState = object.state.jumping;
            object.velY += 1;
            object.y += object.velY;
        },

        CollisionDetection: function (data) {
            let geralt = data.Objects.geralt;

            let CollisionDetection = function (object) {
                if (geralt.x < object.x + object.w &&
                    geralt.x + geralt.w > object.x &&
                    geralt.y < object.y + object.h &&
                    geralt.h + geralt.y > object.y) {
                    Physics.tasks.Collision(data, object);
                }
            };
            data.Objects.tableofWalls.forEach(function (wall) {
                CollisionDetection(wall);
            });

            data.Objects.arrayofSpiders.forEach(function (spider) {
                CollisionDetection(spider);
            });

            data.Objects.arrayofCoins.forEach(function (coin) {
                CollisionDetection(coin);
            });

            data.Objects.arrayofElixirs.forEach(function (elixir) {
                CollisionDetection(elixir);
            });

            data.Objects.arrayofSwords.forEach(function (sword) {
                CollisionDetection(sword);
            });
        },

        CollisionDetection2: function (data, p) {
            let CollisionDetection2 = function (object) {
                if (p.x < object.x + object.w && p.x + p.w > object.x && p.y < object.y + object.h && p.y + p.h > object.y)
                    Physics.tasks.Collision2(object, p);
            };

            data.Objects.tableofWalls.forEach(function (wall) {
                CollisionDetection2(wall);
            });
        },

        Collision: function (data, object) {
            let geralt = data.Objects.geralt;

            if (object.type === 'wall') {
                if (geralt.y + geralt.h > object.y && geralt.x + geralt.w > object.x + 10 &&
                    geralt.x < object.x + object.w - 10 && geralt.velY >= 0) {
                    geralt.defaultState = geralt.state.states;
                    geralt.y = object.y - geralt.h;
                    geralt.velY = 0;
                    //'floor collision'
                }
                if (geralt.x + geralt.w > object.x + 16 && geralt.x < object.x + object.w - 16 && geralt.y < object.y + object.h && geralt.velY < 0) {
                    geralt.y = object.y + object.h;
                    geralt.velY = 1;
                    //'ceiling collision'
                }
                if (geralt.x < object.x && geralt.y + geralt.h > object.y && geralt.y < object.y + object.h) {
                    geralt.x = object.x - geralt.w;
                    //'side collision'
                }

                if (geralt.x > object.x && geralt.y + geralt.h > object.y && geralt.y < object.y + object.h) {
                    geralt.x = object.x + object.w;
				}
            } 
			else if (object.type === 'spider') {
                let p = object;

                if (geralt.y + geralt.h >= p.y && geralt.x + geralt.w > p.x + 10 &&
                    geralt.x < p.x + p.h - 10 && geralt.velY >= 0) {
					
                    let numberSpider = data.Objects.arrayofSpiders.indexOf(p);
                    data.Objects.arrayofSpiders.splice(numberSpider, 1);
                    geralt.defaultState = geralt.state.jumping;
                    geralt.velY = -20.5;
                    geralt.coins += 50;
                    data.audio.jump.pause();
                    data.audio.jump.currentTime = 0;
                    if (!Begin.ini.muted)
                        data.audio.jump.play();
					
                } else if (geralt.x > p.x && geralt.y < p.y) {
                    geralt.defaultState = geralt.state.death;
                    geralt.velY = -20.5;
                    geralt.isDead = true;
                    if (!Begin.ini.muted)
                        data.audio.hurt.play();
                    setTimeout(function () {
                        Death.calling(data);
                    }, 750);
					
                } else if (geralt.x < p.x && geralt.y < p.y) {
                    geralt.defaultState = geralt.state.death;
                    geralt.velY = -20.5;
                    geralt.isDead = true;
                    if (!Begin.ini.muted)
                        data.audio.hurt.play();
                    setTimeout(function () {
                        Death.calling(data);
                    }, 750);
                }
				
            } 
			else if (object.type === 'coin') {
                geralt.coins++;
                let numberCoin = data.Objects.arrayofCoins.indexOf(object);
                data.Objects.arrayofCoins.splice(numberCoin, 1);
                if (geralt.win == false) {
                    if (!Begin.ini.muted) {
                        data.audio.coin.cloneNode(true).play();
                    }

                }

            } else if (object.type === 'elixir') {
                geralt.coins += 100;
                let numberEl = data.Objects.arrayofElixirs.indexOf(object);
                data.Objects.arrayofElixirs.splice(numberEl, 1);
                if (geralt.win == false) {
                    if (!Begin.ini.muted) {
                        data.audio.elixir.cloneNode(true).play();
                    }

                }

            } else if (object.type === 'sword') {
                let numberSw = data.Objects.arrayofSwords.indexOf(object);
                data.Objects.arrayofSwords.splice(numberSw, 1);
                if (!Begin.ini.muted)
                    data.audio.sword.cloneNode(true).play();
                data.audio.theme.pause();
                setTimeout(function () {
                    geralt.win = true;
                }, 1500);
                setTimeout(function () {
                    location.reload();
                }, 10000);


            }
        },

        Collision2: function (object, p) {
            if (object.type === 'wall') {
                if (p.y + p.h > object.y && p.x + p.w > object.x + 10 && p.x < object.x + object.w - 10 && p.velY >= 0) {
                    p.defaultState = p.state.movement;
                    p.y = object.y - p.h;
                    p.velY = 0;
                }
                if (p.x < object.x && p.y + p.h > object.y && p.y < object.y + object.h) {
                    p.x = object.x - p.w;
                    p.direction = 'left';
                }

                if (p.x > object.x && p.y + p.h > object.y && p.y < object.y + object.h) {
                    p.x = object.x + object.w;
                    p.direction = 'right';
                }
            }
        },

        Death: function (data) {
            if (data.Objects.geralt.y > 624) {
                Death.calling(data);
            }

        }
    }
};