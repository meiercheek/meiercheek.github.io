let Render = {
    update: function (data) {

        if (data.Objects.geralt.win === true) {
            data.canvas.frontCtx.fillStyle = "#000";
            data.canvas.frontCtx.fillRect(0, 0, data.canvas.frontCanvas.width, data.canvas.frontCanvas.height);
            Render.tasks.Write("You win", data.canvas.frontCtx, 350, 300, "72px", "font");
            Render.tasks.Write("To be continued", data.canvas.frontCtx, 410, 350, "20px", "font");
			Render.tasks.Write("Made by Lubomir Majercik", data.canvas.frontCtx, 315, 600, "24px", "font");
        } else {

            data.canvas.starCtx.fillStyle = "#131325";
            data.canvas.starCtx.fillRect(0, 0, data.canvas.stars.width, data.canvas.stars.height);
            Render.tasks.Draw(data.Objects.moon, data.canvas.starCtx);
            data.canvas.skyCtx.clearRect(0, 0, data.canvas.skyCanvas.width, data.canvas.skyCanvas.height);
            Render.tasks.Draw(data.Objects.sky, data.canvas.skyCtx);
            data.canvas.backCtx.clearRect(0, 0, data.canvas.backCanvas.width, data.canvas.backCanvas.height);
            Render.tasks.Draw(data.Objects.map, data.canvas.backCtx);

            data.canvas.frontCtx.clearRect(0, 0, data.canvas.frontCanvas.width, data.canvas.frontCanvas.height);
            Render.tasks.Draw(data.Objects.geralt, data.canvas.frontCtx);

            Render.tasks.Write("Lives " + data.Objects.geralt.lifes, data.canvas.frontCtx, 16, 32, "24px", "font");
            Render.tasks.Write("score " + data.Objects.geralt.coins, data.canvas.frontCtx, 800, 32, "24px", "font");

            data.Objects.arrayofCoins.forEach(function (c) {
                Render.tasks.Draw(c, data.canvas.frontCtx);
            });

            data.Objects.arrayofElixirs.forEach(function (e) {
                Render.tasks.Draw(e, data.canvas.frontCtx);
            });

            data.Objects.arrayofSpiders.forEach(function (p) {
                Render.tasks.Draw(p, data.canvas.frontCtx);
            });

            data.Objects.arrayofSwords.forEach(function (s) {
                Render.tasks.Draw(s, data.canvas.frontCtx);
            });
            data.Objects.arrayofTorches.forEach(function (t) {
                Render.tasks.Draw(t, data.canvas.backCtx);
            });



            if (data.Objects.geralt.lifes < 1) {
                data.canvas.frontCtx.fillStyle = "#000";
                data.canvas.frontCtx.fillRect(0, 0, data.canvas.frontCanvas.width, data.canvas.frontCanvas.height);
                Render.tasks.Write("Game Over", data.canvas.frontCtx, 260, 300, "72px", "font");
                data.audio.theme.pause();
            }
        }




    },

    tasks: {
        Draw: function (what, where) {
            where.drawImage(what.picture.img, what.picture.x,
                what.picture.y, what.picture.w, what.picture.h,
                what.x, what.y, what.w, what.h);
        },

        Write: function (text, where, x, y, size, font) {
            where.font = size + " " + font;
            where.fillStyle = '#fff';
            where.fillText(text, x, y);

        }
    }
};