(function() {
    //define the animation refresh (frame rendering) with built-in browser timing

  window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,40/60)
}}});

  var c=document.getElementById("animation2");
  var ctx=c.getContext("2d");
  var img = new Image();

        img.onload = function(){
                beginAnimation();
                
        };
       
        img.src = '../images/7.png';

        //how many bouncing objects?
        var particle_count = 100;  
        var particles = [];
        console.log(particles)
        var particle;

        function Particle() {

            //define properties of a bouncing object, such as where it start, how fast it goes

            var W = animation2.width = window.innerWidth;
            var H = animation2.height = window.innerHeight;
            this.radius = 5;
            this.x = 0;
            this.y = 200;

            if (this.x > W/2 ){

                this.vx = Math.random() * (-15 - -5) + -5;

            }else{

                this.vx = Math.random() * (15 - 5) + 5;

            }


            this.vy = Math.random() * (-20 - -18) + -18;

            //we will call this function to actually draw the bouncing object at EVERY FRAME

            this.draw = function() {
                // Bouncing pictures were not bouncing because there were no this.x this.y . Shame on me. 

                 ctx.drawImage(img,this.x,this.y);

            };

        }


        function renderFrame() {

            //RENDER THE PARTICLEEEEEEES!

            requestAnimationFrame(renderFrame);

            // Clearing screen to prevent trails
            var W = animation2.width = window.innerWidth;
            var H = animation2.height = window.innerHeight;
            ctx.clearRect(0, 0, W, H);

            particles.forEach(function(particle) {

                // The bouncing objects simply go upwards
                // It MUST come down, so lets apply gravity
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
        }

        function beginAnimation(){
                    //create the particles and start to render them

                   for (var i = 0; i < particle_count; i++) {
                        particle = new Particle();
                        particles.push(particle);
                    }

                    //BOUNCE MOFOS!
                    renderFrame();

            }




