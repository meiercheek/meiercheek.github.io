var Animations = {
    update: function (data) {
        Animations.tasks.Sky(data);
        Animations.tasks.Geralt(data);
        Animations.tasks.Spider(data);
        Animations.tasks.Coin(data);
        Animations.tasks.Elixir(data);
        Animations.tasks.Sword(data);
        Animations.tasks.Torch(data);
    },

    tasks: {
        Sky: function (data) {
            data.Objects.sky.x -= 0.5;

            if (data.Objects.sky.x < -2000) {
                data.Objects.sky.x = 0;
            }
        },

        Geralt: function (data) {
            data.Objects.geralt.defaultState.animation(data);
        },

        Spider: function (data) {
            data.Objects.arrayofSpiders.forEach(function (p) {
                p.defaultState.animation(data);
            });
        },

        Coin: function (data) {
            data.Objects.arrayofCoins.forEach(function (c) {
                c.defaultState.animation(data);
            });
        },

        Elixir: function (data) {
            data.Objects.arrayofElixirs.forEach(function (e) {
                e.defaultState.animation(data);
            });
        },

        Sword: function (data) {
            data.Objects.arrayofSwords.forEach(function (s) {
                s.defaultState.animation(data);

            });
        },
        Torch: function (data) {
            data.Objects.arrayofTorches.forEach(function (t) {
                t.defaultState.animation(data);

            });
        }
    }
};