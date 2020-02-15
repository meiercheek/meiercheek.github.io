let Movement = {
    update: (data) => {
        Movement.tasks.Geralt(data);
        Movement.tasks.Spider(data);
    },

    tasks: {
        Geralt: (data) => {
            data.Objects.geralt.defaultState.move(data);
        },
        Spider: (data) =>{
            data.Objects.arrayofSpiders.forEach((p) => {
                p.defaultState.moving(data);
            });
        }
    }
};