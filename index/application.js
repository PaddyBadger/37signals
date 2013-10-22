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
              $("#nul").removeClass('hide');
              $('#high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
              break;
      case guess > randomnumber:
              $("#high").removeClass('hide');
              $('#nul, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');               
              break;
      case guess < randomnumber:
              $("#low").removeClass('hide');
              $('#nul, #high, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
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
                $("#nul").removeClass("hide");
                $('#high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case guess === randomnumber:
                $("#win").append("<p id='right'>You Got It in " + guesses + " guesses! Click New Game to Play Again!</p>");
                $("#win").removeClass("hide");
                $(".guess").attr("disabled",true);
                $(this).attr("disabled",true);
                $('#nul, #high, #low, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance > prev_distance && new_distance > 60: //if you're reallyCold
                $("#reallyCold").removeClass("hide");
                $('#nul, #high, #low, #win, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance > prev_distance && new_distance > 40 && new_distance < 60: //if you're prettyCold
                $("#prettyCold").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance > prev_distance && new_distance > 20 && new_distance < 40: //if you're Cold
                $("#cold").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance > prev_distance && new_distance > 5 && new_distance < 20: //if you're kindaCold
                $("#kindaCold").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance > prev_distance && new_distance > 0 && new_distance < 5: //if you're closeColder
                $("#closeColder").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance < prev_distance && new_distance > 60: //if you're hotter but still really hotterCold
                $("#hotterCold").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance < prev_distance && new_distance > 40 && new_distance < 60: //if you're Hotter 
                $("#hotter").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotterStill, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance < prev_distance && new_distance > 20 && new_distance < 40: //if you're hotterStill 
                $("#hotterStill").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hot, #reallyHot').addClass('hide');
                break;
        case new_distance < prev_distance && new_distance > 5 && new_distance < 20: //if you're Hot
                $("#hot").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #reallyHot').addClass('hide');
                break;
        case new_distance < prev_distance && new_distance > 0 && new_distance < 5: //if you're reallyHot
                $("#reallyHot").removeClass("hide");
                $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot').addClass('hide');
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
            $('#nul, #high, #low, #win, #reallyCold, #prettyCold, #cold, #kindaCold, #closeColder, #hotterCold, #hotter, #hotterStill, #hot, #reallyHot').addClass('hide');
                randomnumber = Math.ceil(Math.random()*100);
                console.log(randomnumber);
                guesses = 0;
                });
        }

});

