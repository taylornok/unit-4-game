$(document).ready(function(){

        // declare win variable to keep tally of wins
        var wins = 0;
        // put results into #wins span
        $('#wins').text(wins);
        //declare losses variable to keep tally of losses
        var losses = 0;
        // put results into #losses span
        $('#losses').text(losses);
        // initialize userTotal
        var userTotal = 0;
        


        //declare the random variables
        //random number to guess at the start of the game between 19-120
        var guessRandom = Math.floor(Math.random()*(120-19+1)+19);
        //put the random number into the empty #randomNumber div
        $('#randomNumber').text(guessRandom);

        //assigning random numbers to four crystals 1-12
        var crystal1 = Math.floor(Math.random()*12+1);
        var crystal2 = Math.floor(Math.random()*12+1);
        var crystal3 = Math.floor(Math.random()*12+1);
        var crystal4 = Math.floor(Math.random()*12+1);
        

        console.log('Random', guessRandom)
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);

        function winner(){
                alert("You won! Awesome!");
        }

        function loser () {
                alert("When you don't succeed, try, try again!")
                
        }
        //set up the .onclick actions for the crystals

        $('#crystal1').on ('click', function (){
                userTotal = userTotal + crystal1;
                console.log("New userTotal= " + userTotal);
                $('#total-score').text(userTotal); 
                      //sets the win or lose conditions
                    if (userTotal === guessRandom){
                      winner()
                    }
                    else if ( userTotal > guessRandom){
                      loser();
                    }   
        })  
        $('#crystal2').on ('click', function (){
                userTotal = userTotal + crystal2;
                console.log("New userTotal= " + userTotal);
                $('#total-score').text(userTotal); 
                      //sets the win or lose conditions
                    if (userTotal === guessRandom){
                      winner()
                    }
                    else if ( userTotal > guessRandom){
                      loser();
                    }   
        })         
        $('#crystal3').on ('click', function (){
                userTotal = userTotal + crystal3;
                console.log("New userTotal= " + userTotal);
                $('#total-score').text(userTotal); 
                      //sets the win or lose conditions
                    if (userTotal === guessRandom){
                      winner()
                    }
                    else if ( userTotal > guessRandom){
                      loser();
                    }   
        })         
        $('#crystal4').on ('click', function (){
                userTotal = userTotal + crystal4;
                console.log("New userTotal= " + userTotal);
                $('#total-score').text(userTotal); 
                      //sets the win or lose conditions
                    if (userTotal === guessRandom){
                      winner()
                    }
                    else if ( userTotal > guessRandom){
                      loser();
                    }   
        }) 
        // function start  () {
        //         Random=Math.floor(Math.random()*101+19);
        //         console.log(Random)
        //         $('#randomNumber').text(Random);
        //         var crystal1 = Math.floor(Math.random()*12+1);
        //         var crystal2 = Math.floor(Math.random()*12+1);
        //         var crystal3 = Math.floor(Math.random()*12+1);
        //         var crystal4 = Math.floor(Math.random()*12+1);
        //         userTotal= 0;
        //         $('#total-score').text(userTotal);
        // }

        
        
        



});
