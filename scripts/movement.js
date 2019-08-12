let Movement = {
    update: function (data) {
        Movement.tasks.Geralt(data);
        Movement.tasks.Spider(data);
    },

    tasks: {
        Geralt: function (data) {
            data.Objects.geralt.defaultState.move(data);
        },
        Spider: function (data) {
            data.Objects.arrayofSpiders.forEach(function (p) {
                p.defaultState.moving(data);
            });
        }
    }
};