let Objects = {
    ini: function(data) {
        let sky = {
            picture: new Objects.tasks.Picture(data.graphics, 0, 210, 960, 208),
            x: 0,
            y: 0,
            w: 2880,
            h: 624
        };

        let moon = {
            picture: new Objects.tasks.Picture(data.graphics, 0, 430, 4318, 208),
            x: 0,
            y: 0,
            w: 12954,
            h: 624
        };

        let map = {
            picture: new Objects.tasks.Picture(data.graphics, 0, 0, 4320, 208),
            x: 0,
            y: 0,
            w: 12960,
            h: 624
        };

        let geralt = new Objects.tasks.Geralt(data.graphics, 0, 0, 90, 138);

        let walls = [
            [0, 624, 1, 624],
            [0, 528, 1104, 96],
            [528, 336, 144, 48],
            [576, 144, 48, 48],
            [960, 480, 144, 48],
            [1008, 432, 96, 48],
            [1056, 384, 48, 48],
            [1296, 528, 480, 96],
            [1296, 480, 144, 48],
            [1296, 432, 96, 48],
            [1296, 384, 48, 48],
            [1776, 480, 48, 144],
            [1920, 432, 48, 192],
            [2064, 384, 48, 240],
            [2208, 336, 48, 288],
            [2352, 336, 528, 96],
            [2352, 432, 384, 96],
            [2352, 528, 1814, 96],
            [2256, 96, 144, 48],
            [2544, 96, 48, 48],
            [2736, 96, 48, 48],
            [2928, 96, 48, 48],
            [3120, 144, 48, 48],
            [3024, 336, 48, 48],
            [3216, 336, 48, 48],
            [-48, 0, 48, 624],
			[3783, 489, 75, 39],
            [4353, 528, 684, 96],
            [4671, 417, 318, 207],
            [5097, 312, 48, 48],
			[5529, 192, 48, 48],
            [5289, 312, 48, 48],
            [5613, 528, 4059, 96],
			[5634, 480, 48, 48],
			[5769, 273, 48, 48],
			[6036, 189, 174, 339],
			[6210, 189, 636, 72],
			[7608, 432, 258, 96],
			[9672, 417, 318, 111],
			[10152, 576, 48, 48],
			[10374, 528, 138, 96],
			[10701, 426, 48, 48],
			[10860, 333, 177, 291],
			[11037, 528, 864, 96],
			[11898, 450, 171, 78],
			[12069, 372, 426, 78],
			[12495, 243, 465, 129],
			[12954, 0, 4, 240],
			[7710, 195, 48, 48],
			[8499, 321, 48, 48],
			[8727, 219, 144, 48],
			[8823, 267, 288, 48],
			[8946, 315, 48, 213],
			[9063, 219, 144, 48]

			
        ];

        let spiders = [
            [912, 480],
            [1440, 480],
            [2322, 54],
            [2880, 480],
			[5925, 438],
			[6585, 471],
			[7023, 143],
			[7464, 143],
			[9087, 429],
			[9000, 198],
			[8742, 420],
			[8343, 420],
			[7950, 420],
			[12660, 198],
			[12300, 300],
			[11940, 390],
			[11700, 450],
				
			
        ];

        let coins = [
            [528, 240],
            [624, 240],
            [1920, 384],
            [2061, 336],
			[2545, 48],
            [3120, 96],
            [3798, 390],
			[6222, 270],
			[6315, 270],
			[6222, 370],
			[6315, 370],
			[5400, 72],
			[4700, 324],
			[4800, 324],
			[4900, 324],
			[8895, 207],
			[8946, 207],
			[8877, 465],
			[9003, 207],
			[9009, 465],
			[11958, 240],
			[12159, 174],
			[12285, 174],
			[12402, 174],
        ];

        let elixirs = [
            [588, 100],
            [1185, 96],
            [4257, 267],
			[2286, 153],
			[6280, 320],
			[10584, 297],
			[5979, 444],
			[7725, 86],
			[9006, 327],
			[10584, 468]
			
        ];

        let swords = [
			[12696, 72],
        ];

        let torches = [
            [2370, 276],
            [4380, 468],
			[9690, 357],
			[10869, 273],
			[6057, 129],
			[6810, 129],
			[10164, 516]
        ];


        data.Objects = {}; // object declaration
        data.Objects.moon = moon;
        data.Objects.sky = sky;
        data.Objects.map = map;
        data.Objects.geralt = geralt;
        data.Objects.tableofWalls = [];
        data.Objects.arrayofSpiders = [];
        data.Objects.arrayofCoins = [];
        data.Objects.arrayofElixirs = [];
        data.Objects.arrayofSwords = [];
        data.Objects.arrayofTorches = [];


        walls.forEach(function(z) {
            data.Objects.tableofWalls.push(new Objects.tasks.Wall(z[0], z[1], z[2], z[3]));
        });

        spiders.forEach(function(p) {
            data.Objects.arrayofSpiders.push(new Objects.tasks.Spider(data.graphics, p[0], p[1], 84, 57));
        });

        coins.forEach(function(c) {
            data.Objects.arrayofCoins.push(new Objects.tasks.Coin(data.graphics, c[0], c[1], 42, 40));
        });

        elixirs.forEach(function(e) {
            data.Objects.arrayofElixirs.push(new Objects.tasks.Elixir(data.graphics, e[0], e[1], 24, 36));
        });

        swords.forEach(function(s) {
            data.Objects.arrayofSwords.push(new Objects.tasks.Sword(data.graphics, s[0], s[1], 40, 72));
        });

        torches.forEach(function(t) {
            data.Objects.arrayofTorches.push(new Objects.tasks.Torch(data.graphics, t[0], t[1], 24, 60));
        });

    },

    tasks: {
        Picture: function(img, x, y, w, h) {
            this.img = img;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        },

        Geralt: function(img, x, y, w, h) {
            let inside = this;
            this.picture = new Objects.tasks.Picture(img, 966, 222, 30, 46);
            this.animation = {
                right: {
                    animFrame: [new Objects.tasks.Picture(img, 966, 222, 30, 46),
                        new Objects.tasks.Picture(img, 1126, 222, 30, 46),
                        new Objects.tasks.Picture(img, 966, 222, 30, 46),
                        new Objects.tasks.Picture(img, 1166, 222, 30, 46)
                    ],
                    defaultFrame: 0
                },
                left: {
                    animFrame: [new Objects.tasks.Picture(img, 1008, 222, 30, 46),
                        new Objects.tasks.Picture(img, 1206, 222, 30, 46),
                        new Objects.tasks.Picture(img, 1008, 222, 30, 46),
                        new Objects.tasks.Picture(img, 1246, 222, 30, 46)
                    ],
                    defaultFrame: 0

                },
                standRight: new Objects.tasks.Picture(img, 966, 222, 30, 46),
                standLeft: new Objects.tasks.Picture(img, 1008, 222, 30, 46),
                jumpRight: new Objects.tasks.Picture(img, 1048, 222, 30, 46),
                jumpLeft: new Objects.tasks.Picture(img, 1088, 222, 30, 46),
                death: new Objects.tasks.Picture(img, 1154, 280, 30, 46),
            };
            this.state = {
                states: {
                    move: function(data) {
                        return;
                    },
                    animation: function(data) {
                        if (inside.direction === 'right') {
                            inside.picture = inside.animation.standRight;
                        } 
						else {
                            inside.picture = inside.animation.standLeft;
                        }
                    }
                },
                jumping: {
                    move: function(data) {
                        if (inside.velY == 0) {
                            inside.velY -= 23.5;
                            data.audio.jump.pause();
                            data.audio.jump.currentTime = 0;
                            if (inside.win == false) {
                                if (!Begin.ini.muted)
                                    data.audio.jump.play();
                            }

                        }
                    },
                    animation: function(data) {
                        if (inside.direction === 'right') {
                            inside.picture = inside.animation.jumpRight;
                        } 
						else {
                            inside.picture = inside.animation.jumpLeft;
                        }
                    }

                },
                moving: {
                    move: function(data) {
                        if (inside.direction === 'right') {
                            if (inside.x < data.canvas.frontCanvas.width / 2 ||
                                data.Objects.map.x <= data.canvas.frontCanvas.width - data.Objects.map.w) {
                                inside.x += inside.velX;
                            } 
							else {
                                data.Objects.map.x -= inside.velX;
                                for (let i = 0; i < data.Objects.tableofWalls.length; i++) {
                                    data.Objects.tableofWalls[i].x -= inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofSpiders.length; i++) {
                                    data.Objects.arrayofSpiders[i].x -= inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofCoins.length; i++) {
                                    data.Objects.arrayofCoins[i].x -= inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofElixirs.length; i++) {
                                    data.Objects.arrayofElixirs[i].x -= inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofSwords.length; i++) {
                                    data.Objects.arrayofSwords[i].x -= inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofTorches.length; i++) {
                                    data.Objects.arrayofTorches[i].x -= inside.velX;
                                }
                            }
                        } 
						else {

                            if (inside.x > data.canvas.frontCanvas.width / 2 ||
                                data.Objects.map.x >= 0) {
                                inside.x -= inside.velX;
                            } 
							else {
                                data.Objects.map.x += inside.velX;
                                for (let i = 0; i < data.Objects.tableofWalls.length; i++) {
                                    data.Objects.tableofWalls[i].x += inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofSpiders.length; i++) {
                                    data.Objects.arrayofSpiders[i].x += inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofCoins.length; i++) {
                                    data.Objects.arrayofCoins[i].x += inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofElixirs.length; i++) {
                                    data.Objects.arrayofElixirs[i].x += inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofSwords.length; i++) {
                                    data.Objects.arrayofSwords[i].x += inside.velX;
                                }
                                for (let i = 0; i < data.Objects.arrayofTorches.length; i++) {
                                    data.Objects.arrayofTorches[i].x += inside.velX;
                                }
                            }

                        }
                    },


                    animation: function(data) {
                        if (inside.direction === 'right') {
                            if (data.frame % 5 == 0) {
                                inside.picture = inside.animation
                                    .right.animFrame[inside.animation.right.defaultFrame];
                                inside.animation.right.defaultFrame++;
                            }

                            if (inside.animation.right.defaultFrame > 3) {
                                inside.animation.right.defaultFrame = 0;
                            }
                        } 
						else {
                            if (data.frame % 5 == 0) {
                                inside.picture = inside.animation
                                    .left.animFrame[inside.animation.left.defaultFrame];
                                inside.animation.left.defaultFrame++;
                            }

                            if (inside.animation.left.defaultFrame > 3) {
                                inside.animation.left.defaultFrame = 0;
                            }

                        }
                    }

                },
                death: {
                    move: function(data) {
                        inside.velX = 0;
                    },
                    animation: function(data) {
                        inside.picture = inside.animation.death;
                    }
                }
            };
            this.defaultState = inside.state.states;
            this.direction = 'right';
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.velY = 1;
            this.velX = 8;
            this.lifes = 3;
            this.isDead = false;
            this.win = false;
            this.coins = 0;
        },

        Spider: function(img, x, y, w, h) {
            let inside = this;
            this.picture = new Objects.tasks.Picture(img, 1285, 223, 28, 19);
            this.animation = {
                movement: {
                    frame: [new Objects.tasks.Picture(img, 1285, 223, 28, 19),
                        new Objects.tasks.Picture(img, 1325, 223, 28, 19),
                        new Objects.tasks.Picture(img, 1365, 223, 28, 19),
                        new Objects.tasks.Picture(img, 1285, 223, 28, 19)
                    ],
                    defaultFrame: 0
                },

                jump: new Objects.tasks.Picture(img, 1285, 223, 28, 19)
            };

            this.state = {
                movement: {
                    moving: function(data) {
                        if (inside.direction === 'right') {
                            inside.x += inside.velX;
                        } else {
                            inside.x -= inside.velX;
                        }
                    },
                    animation: function(data) {
                        if (data.frame % 5 == 0) {
                            inside.picture = inside.animation.movement.frame[inside.animation.movement.defaultFrame];
                            inside.animation.movement.defaultFrame++;
                        }
                        if (inside.animation.movement.defaultFrame > 3) {
                            inside.animation.movement.defaultFrame = 0;
                        }
                    }
                },
                jumping: {
                    moving: function(data) {
                        return;
                    },
                    animation: function(data) {
                        inside.picture = inside.animation.jump;
                    }
                }

            };

            this.defaultState = inside.state.movement;
            this.direction = 'right';
            this.velY = 0;
            this.velX = 2;
            this.type = 'spider';
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        },

        Coin: function(img, x, y, w, h) {
            let inside = this;
            this.picture = new Objects.tasks.Picture(img, 1019, 280, 21, 20);
            this.animation = {
                turn: {
                    frame: [new Objects.tasks.Picture(img, 1019, 280, 21, 20),
                        new Objects.tasks.Picture(img, 1019, 280, 21, 20)
                    ],
                    defaultFrame: 0
                }
            };

            this.state = {
                turn: {
                    animation: function(data) {
                        if (data.frame % 30 == 0) {
                            inside.picture = inside.animation.turn.frame[inside.animation.turn.defaultFrame];
                            inside.animation.turn.defaultFrame++;
                        }
                        if (inside.animation.turn.defaultFrame > 1) {
                            inside.animation.turn.defaultFrame = 0;
                        }
                    }
                }
            };
            this.defaultState = inside.state.turn;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.type = 'coin';
        },

        Elixir: function(img, x, y, w, h) {
            let inside = this;
            this.picture = new Objects.tasks.Picture(img, 1099, 280, 12, 18);
            this.animation = {
                turn: {
                    frame: [new Objects.tasks.Picture(img, 1099, 280, 12, 18),
                        new Objects.tasks.Picture(img, 1099, 280, 12, 18)
                    ],
                    defaultFrame: 0
                }
            };

            this.state = {
                turn: {
                    animation: function(data) {
                        if (data.frame % 20 == 0) {
                            inside.picture = inside.animation.turn.frame[inside.animation.turn.defaultFrame];
                            inside.animation.turn.defaultFrame++;
                        }
                        if (inside.animation.turn.defaultFrame > 1) {
                            inside.animation.turn.defaultFrame = 0;
                        }
                    }
                }
            };
            this.defaultState = inside.state.turn;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.type = 'elixir';

        },

        Sword: function(img, x, y, w, h) {
            let inside = this;
            this.picture = new Objects.tasks.Picture(img, 1138, 280, 10, 18);
            this.animation = {
                turn: {
                    frame: [new Objects.tasks.Picture(img, 1138, 280, 10, 18),
                        new Objects.tasks.Picture(img, 1138, 280, 10, 18)
                    ],
                    defaultFrame: 0
                }
            };

            this.state = {
                turn: {
                    animation: function(data) {
                        if (data.frame % 20 == 0) {
                            inside.picture = inside.animation.turn.frame[inside.animation.turn.defaultFrame];
                            inside.animation.turn.defaultFrame++;
                        }
                        if (inside.animation.turn.defaultFrame > 1) {
                            inside.animation.turn.defaultFrame = 0;
                        }
                    }
                }
            };
            this.defaultState = inside.state.turn;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.type = 'sword';

        },

        Torch: function(img, x, y, w, h) {
            let inside = this;
            this.picture = new Objects.tasks.Picture(img, 1200, 280, 8, 20);
            this.animation = {
                turn: {
                    frame: [new Objects.tasks.Picture(img, 1200, 280, 8, 20),
                        new Objects.tasks.Picture(img, 1220, 280, 8, 20),
                        new Objects.tasks.Picture(img, 1240, 280, 8, 20),
                        new Objects.tasks.Picture(img, 1260, 280, 8, 20)
                    ],
                    defaultFrame: 0
                }
            };

            this.state = {
                turn: {
                    animation: function(data) {
                        if (data.frame % 4 == 0) {
                            inside.picture = inside.animation.turn.frame[inside.animation.turn.defaultFrame];
                            inside.animation.turn.defaultFrame++;
                        }
                        if (inside.animation.turn.defaultFrame > 3) {
                            inside.animation.turn.defaultFrame = 0;
                        }
                    }
                }
            };
            this.defaultState = inside.state.turn;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;

        },

        Wall: function(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.type = 'wall';
        }
    }


}