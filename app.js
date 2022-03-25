alert("Welcome to 20! this is a competition to see which player gets closer to the number 20.You are going to be playing against the computer.\n\n You will draw numbers from 1 to 10. The computer will stop at 16.\n\n Pay attention to the screen to see what your total is, and if you need another number, press 'Y'");

var computerscore = 0

console.log(computerscore)

var userscore = 0

console.log(userscore)

// Compputer


do{

    do {
        var randomNumber = Math.floor(Math.random() * 10) + 1

        var computerscore = computerscore + randomNumber

        console.log(computerscore)


        alert(`The computer's new number is ${randomNumber}  The computer's total is ${computerscore}` )
        

    } while (computerscore < 16)

    if(computerscore > 21 ) {

    alert ("The computer got over 21. you win")

    } else {

    // User

    var userscore = 0

    alert("Its your turn");

    do {
    
        var randomNumber = Math.floor(Math.random() * 10) +1

        userscore = userscore + randomNumber

        console.log(userchoose)

        if (userscore > 21){
            break
        }

        alert(` Your new number is ${randomNumber}  Your total is ${userscore}` )

        var userchoose = prompt("Would you like another number? If so press enter, if you do not whish to play again type no")

    


    } while ((userchoose != "no") && (userscore < 20))


       if ((computerscore > userscore) && (computerscore <= 21) && (userscore <= 21)) {
            alert("The computer wins")
       }
    
    
    
        alert(`Computer's score ${computerscore} ; Your score ${userscore}`)

        var playagain = prompt("Would you like to play again? If so type 'yes', if no type 'no'")

    }


} while(playagain != "no")


