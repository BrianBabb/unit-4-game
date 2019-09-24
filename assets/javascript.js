// wins/loss for score.
var wins = 0;
var losses = 0;
// random number by computer
var blackjack = 0;
var hitbox = 0;
var valueClicked = 0;

var addToHitbox = 0;
// win / loss functions   

// Get random numbers between 1-12 for each crystal
var cry1 = Math.floor(Math.random() * 12) + 1;

var cry2 = Math.floor(Math.random() * 12) + 1;

var cry3 = Math.floor(Math.random() * 12) + 1;

var cry4 = Math.floor(Math.random() * 12) + 1;

console.log(cry1, cry2, cry3, cry4)
console.log(hitbox + " hit ");




// console.log(hitbox);    



// game logic that works - sort of  ****  dont edit... 
$(".crystal").on("click", function () {
    var valueClicked = parseInt($(this).attr("value"))
    console.log(valueClicked)
    console.log(valueClicked + hitbox);
    hitbox = valueClicked + hitbox;
    $("#userScore").text(hitbox);
   

    if (hitbox === blackjack) {
        victory();

    } else if (hitbox > blackjack) {
        loser();

    };


})
// dont edit above. ********* yet

// continue until inputted numbers reach "blackjack" or goes "bust"

// 


// console.log(valueClicked);  


// Set new number to reach

// Set sum total to 0


//  console.log(hitbox + " hitbox" );
//  document.write(" Your score is: XXX " + hitbox + valueClicked);




//    start(






startGame();

function victory() {
    alert(" Winner winner chicken dinner");
    wins++;
    $("#win").text(wins + " Winner winner chicken dinner");
    startGame();

};
function loser() {
    alert("dealer wins, try again");
    losses++;
    $("#loss").text(losses + " Losses, get better!! ");
    startGame();

};

function startGame() {
    hitbox = 0
    valueClicked = 0
    blackjack = 0
    blackjack = Math.floor(Math.random() * 120) + 19;
  //  cry1 = Math.floor(Math.random() * 12) + 1;
    //cry2 = Math.floor(Math.random() * 12) + 1;
    //cry3 = Math.floor(Math.random() * 12) + 1;
  //  cry4 = Math.floor(Math.random() * 12) + 1;


    console.log("blackjack score" + blackjack);
    $("#randomNumber").text(blackjack);
    //   $("#userScore").html(hitbox);

    //   hitbox ;
    // valueClicked;




    $("#gem1").attr("value", cry1);


    $("#gem2").attr("value", cry2);



    $("#gem3").attr("value", cry3);


    $("#gem4").attr("value", cry4);







    //  $(".userScore").html ("Your score is :" + hitbox  );


};   