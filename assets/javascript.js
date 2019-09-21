/ wins/loss for score.
var wins=0;
var losses=0;
// random number by computer
var blackjack;
var hitbox ; 
// win / loss functions   
function victory(){
    //    alert ("winner winner chicken dinner");
       wins++;
   };
function loser(){
       alert ("dealer wins, try again");
       losses++;   
   };

// Get random numbers between 1-12 for each crystal
   var cry1 = Math.floor(Math.random()*12) +1;

   var cry2 = Math.floor(Math.random()*12) +1;
   
   var cry3 = Math.floor(Math.random()*12) +1;
   
   var cry4 = Math.floor(Math.random()*12) +1;
   
   console.log(cry1, cry2, cry3, cry4)
   
 var addToHitbox = 0;


  
     // console.log(hitbox);    
 

// collection of points to add up to blackjack or "bust"

$(".crystal").on("click", function() {
    var valueClicked = parseInt($(this).attr("value"))
    var hitbox = cry1 + cry2 + cry3 + cry4;
    hitbox = hitbox + valueClicked; 
    console.log( hitbox); 







}) 
// continue until inputted numbers reach "blackjack" or goes "bust"

 // 

 
 // console.log(valueClicked);  
    
 
    // Set new number to reach
    
    // Set sum total to 0


function startGame() {
  
    blackjack = Math.floor(Math.random() * 120) + 19;
    console.log("blackjack Yyy " + blackjack);   
    document.getElementById('randomNumber').innerHTML = blackjack;
    $(".userScore").html(blackjack);
    
  //   hitbox ;
   // valueClicked;
  

   

    $("#gem1").on("click", cry1);
      
    
     
    $("#gem2").attr("value", cry2);
    
    $("#gem3").attr("value", cry3);
    
    $("#gem4").attr("value", cry4);
    
   
    $(".userScore").html ("Your score is  Xyz " + hitbox  );
    
            
};   

   //  console.log(hitbox + " hitbox" );
  //  document.write(" Your score is: XXX " + hitbox + valueClicked);


   

     if(hitbox === blackjack){
        victory ();
      
     // startGame();

        } else {
            (hitbox >= blackjack)
                loser ();
            };
           
          
       //    start(

       
            
           
         

startGame(); 