let Animations = {
    update: (data) => {
        Animations.tasks.Sky(data);
        Animations.tasks.Geralt(data);
        Animations.tasks.Spider(data);
        Animations.tasks.Coin(data);
        Animations.tasks.Elixir(data);
        Animations.tasks.Sword(data);
        Animations.tasks.Torch(data);
    },

    tasks: {
        Sky:  (data) => {
            data.Objects.sky.x -= 0.5;

            if (data.Objects.sky.x < -2000) {
                data.Objects.sky.x = 0;
            }
        },

        Geralt:  (data) => {
            data.Objects.geralt.defaultState.animation(data);
        },

        Spider:  (data) => {
            data.Objects.arrayofSpiders.forEach( (p) => {
                p.defaultState.animation(data);
            });
        },

        Coin:  (data) => {
            data.Objects.arrayofCoins.forEach( (c) => {
                c.defaultState.animation(data);
            });
        },

        Elixir:  (data) => {
            data.Objects.arrayofElixirs.forEach( (e) => {
                e.defaultState.animation(data);
            });
        },

        Sword:  (data) => {
            data.Objects.arrayofSwords.forEach( (s) => {
                s.defaultState.animation(data);

            });
        },
        Torch:  (data) => {
            data.Objects.arrayofTorches.forEach( (t) => {
                t.defaultState.animation(data);

            });
        }
    }
};