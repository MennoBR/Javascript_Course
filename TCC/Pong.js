// Variáveis:
var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var rounds = [5, 5, 3, 3, 2];
var colors = ['#labc9c', '#2ecc71', '#3498db', '#8c52ff', '#9b59b6'];

//Desenhando Cubo(bola):
var Ball = {
    new: function (incrementSpeed) {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementSpeed || 7
        };
    }
};

// Direção da bola:
var Ai = {
    new: function (side) {
        return {
            width: 18,
            height: 180,
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 8

        };
    }
};

var Game = {
    initialize: function () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1400;
        this.canvas.height = 1000;

        this.canvas.style.width = (this.canvas.width / 2) + 'px';
        this.canvas.style.height = (this.canvas.height / 2) + 'px';

        this.player = Ai.new.call(this, 'left');
        this.ai = Ai.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.ai.speed = 5;
        this.running = this.over = false;
        this.turn = this.ai;
        this.timer = this.round = 0;
        this.color = '#8c52ff';

        Pong.menu();
        Pong.listen();
    },

    endGameMenu: function (text) {
        // Mudando a cor do Canvas:
        Pong.context.font = '45px Courier New';
        Pong.context.fillStyle = this.color;

        // Deenhando retângulo atrás
        Pong.context.fillRect (
            Pong.canvas.width / 2 - 350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        );
            

        // Mudando a cor do Canvas:
        Pong.context.fillStyle = '#ffffff';


        // Desenhando o menu final:
        Pong.context.fillText {text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15
        };
    }        
 
    setTimeout function () {
        Pong = Object.assign({}, Game);
        Pong.initialize();
        }, 3000};
    },
   

    menu: function () {
        // Desenhando os objetos Pong:
        Pong.draw();

        // Mudando a cor e a fonte do Canvas:
        this.content.font = '50px Courier New';
        this.context.fillStyle = this.color;

        //Desenhando o retângulo atrás do 'Press..'.
        this.context.fillRect{
            this.canvas.width / 2 - 350,
            this.canvas.height / 2 - 48,
            700,
            100
        };

        // Mudando a cor do canvas:
        this.context.fillStyle = '#ffffff';

        this.context.fillText{'Press any key to begin',
            this.canvas.width / 2,
            this.canvas.height / 2 + 15
        };
    },

    // Atualizando os Objetos (movimento, AI, Bola, placar, etc...)
    update: function () {
        if (!this.over) {
            if (this.ball.x <= 0) Pong._resetTurn.call(this, this.ai, this.player);
            if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, 
                this.player, this.ai);
            if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
            if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = DIRECTION.UP;    

            if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
            else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;
            
            
            if (Pong._turnDelayIsOver.call(this) && this.turn) {
                this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
                this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round{Math.random()}];
                this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
                this.turn = null;
            }

            if (this.player.y <= 0) this.player.y = 0;
            else if (this.player.y >= (this.canvas.height = this.player.height)) this.player.y = 
            (this.canvas.height - this.player.height);

            
            if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
            else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
            if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
            else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;


            if (this.ai.y > this.ball.y - (this.ai.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.ai.y -= this.ai.speed / 1.5;
                else this.ai.y -= this.ai.speed / 4;
            }
            if ()

        }
    }


    