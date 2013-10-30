  $(document).ready(function() {  
    var randomnumber = Math.floor(Math.random()*100);
    console.log(randomnumber);
   
var guesses = 0;
var guess;

clear_inputBox();
Game();
newGame();

function clear_inputBox(){                
        
$(".guess").on("focus",function(){

  $("#dist p").css("display","none");
  $(this).val("");
});
};
        
function Game(){
$(".button").click(function(){

  if(guesses == 0){
          
    guesses++;

    guess = +$(".guess").val();        
    console.log("First Guess = " + guess);
                            
    switch(true){
      case guess > 100 || guess <= 0 || isNaN(guess):  
           //   $(".results div").not('#nul');
              $(".results div").addClass('hide');
              $("#nul").fadeIn('3000');
              break;
      case guess > randomnumber:
              $(".results div").addClass('hide');
              $("#high").fadeIn('3000');
              break;
      case guess < randomnumber:
              $(".results div").addClass('hide');
              $("#low").fadeIn('hide');
              break;
      case guess === randomnumber:
              $("#win").removeClass('hide');
              $(this).append("<p id='right'>You Got It in " + guesses + " guess! Click New Game to Play Again!</p>");
              $(".guess").attr("disabled",true);
              $(this).attr("disabled",true);
              $('#nul, #high, #low, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
              break;
      }        
  }
    else {                        
      var prev_guess = guess;
      console.log("PrevG = " + prev_guess);
      
      var prev_distance = Math.abs(prev_guess - randomnumber);
      console.log("PrevD = " + prev_distance);

      guess = +$(".guess").val();
      console.log("NewG = " + guess);
      
      var new_distance = Math.abs(guess - randomnumber);
      console.log("NewD = " + new_distance);                        

      guesses++;

      switch(true){
        case guess > 100 || guess <= 0 || isNaN(guess):
                $(".results div").addClass('hide');
                $("#nul").fadeIn('3000');
                break;
        case guess === randomnumber:
                $(".guess").attr("disabled",true);
                $(this).attr("disabled",true);
                $(".results div").addClass('hide');
                $("#win").append("<p id='right'>You Got It in " + guesses + " guesses! Click New Game to Play Again!</p>").removeClass("hide");
                break;
        case new_distance > prev_distance && new_distance > 60: //if you're reallyCold
                $(".results div").addClass('hide');
                $("#reallyCold").removeClass("hide");
                break;
        case new_distance > prev_distance && new_distance > 40 && new_distance < 60: //if you're prettyCold
                $(".results div").addClass('hide');
                $("#prettyCold").removeClass("hide");
                break;
        case new_distance > prev_distance && new_distance > 20 && new_distance < 40: //if you're Cold
                $(".results div").addClass('hide');
                $("#cold").removeClass("hide");
                break;
        case new_distance > prev_distance && new_distance > 5 && new_distance < 20: //if you're kindaCold
                $(".results div").addClass('hide');
                $("#kindaCold").removeClass("hide");
                break;
        case new_distance > prev_distance && new_distance > 0 && new_distance < 5: //if you're closeColder
                $(".results div").addClass('hide');
                $("#closeColder").removeClass("hide");
                break;
        case new_distance < prev_distance && new_distance > 60: //if you're hotter but still really hotterCold
                $(".results div").addClass('hide');
                $("#hotterCold").removeClass("hide");
                break;
        case new_distance < prev_distance && new_distance > 40 && new_distance < 60: //if you're Hotter 
                $(".results div").addClass('hide');
                $("#hotter").removeClass("hide");
                break;
        case new_distance < prev_distance && new_distance > 20 && new_distance < 40: //if you're hotterStill 
                $(".results div").addClass('hide');
                $("#hotterStill").removeClass("hide");
                break;
        case new_distance < prev_distance && new_distance > 5 && new_distance < 20: //if you're Hot
                $(".results div").addClass('hide');
                $("#hot").removeClass("hide");
                break;
        case new_distance < prev_distance && new_distance > 0 && new_distance < 5: //if you're reallyHot
                $(".results div").addClass('hide');
                $("#reallyHot").removeClass("hide");
                break;
           
        }
      }
    });
  }        

//Click on New Game to play again
function newGame(){

        $(".newGame").click(function(){
            $(".guess").attr("disabled",false).val("");
            $(".button").attr("disabled",false);
            $(".results div").addClass('hide');
                randomnumber = Math.ceil(Math.random()*100);
                console.log(randomnumber);
                guesses = 0;
                });
        }

});

