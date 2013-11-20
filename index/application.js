function canvas() {
    //define the animation refresh (frame rendering) with built-in browser timing

  window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,40/60);
};};}

var canvas1;
var canvas2;
var canvas3;
var canvas4;
var ctx1;
var ctx2;
var ctx3;
var ctx4;
var btc1 = new Image();
var btc2 = new Image();
var btc3 = new Image();
var btc4 = new Image();

function init() {
canvas1 = document.getElementById("canvas1");
ctx1 = canvas1.getContext("2d");
// btc2.src ="..images/4.png";
canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");
// btc3.src ="..images/7.png";
canvas3 = document.getElementById("canvas3");
ctx3 = canvas3.getContext("2d");
// btc4.src ="..images/9.png";
canvas4 = document.getElementById("canvas4");
ctx4 = canvas4.getContext("2d");
setInterval(drawAll, 20);
}

function drawAll() {
draw1();
// draw2();
// draw3();
// draw4();
}

function draw1() {
        btc1.src = '../images/1.png'; 
        var particle_count = 30; 
        var particles = [];
        var particle;
        //define properties of a bouncing object, such as where it start, how fast it goes
            var W =canvas1.width = window.innerWidth;
            var H =canvas1.height = window.innerHeight;
            this.radius = 5;
            this.x = 0;
            this.y = 200;

        function Particle() {
            if (this.x > W/2 ){
                this.vx = Math.random() * (-15 - -5) + -5;
            }else{
                this.vx = Math.random() * (15 - 5) + 5;
            }
            this.vy = Math.random() * (-20 - -18) + -18;
            //we will call this function to actually draw the bouncing object at EVERY FRAME
            this.draw = function() {
            ctx1.drawImage(btc1,this.x,this.y);// Bouncing = this.x this.y  
            };
        };

        function renderFrame() {
            //RENDER THE PARTICLEEEEEEES!
            requestAnimationFrame(renderFrame);
            // Clearing screen to prevent trails
            var W =canvas1.width = window.innerWidth;
            var H =canvas1.height = window.innerHeight;
            ctx1.clearRect(0, 0, W, H);
            particles.forEach(function(particle) {
                particle.vy += 1;
                // Adding velocity to x and y axis
                particle.x += particle.vx;
                particle.y += particle.vy;
                //bounce on the bottom of canvas
                if (particle.y > 400) {
                  particle.vy -= 13;
                }
                particle.draw();
            });
        };   
       //create the particles and start to render them
        for (var i = 0; i < particle_count; i++) {
        particle = new Particle();
        console.log(i);
        particles.push(particle);
        }
        //BOUNCE MOFOS!
        renderFrame();            
};
init();
