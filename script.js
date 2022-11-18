
 alert("Hello There");

function username() {
 let username = prompt("What is your name?");
 while (username == "") {
    username = prompt("Please insert your username");
 }
 console.log("the user's name is:" + username);
document.write("Hi there and welcome to my traveling page, " + username);
return username;
}


function likesTraveling() {
    let response = prompt("Do you like traveling?")
    
    if (response == "yes") {
    alert("You've come to the right place!");
    } else if (response == "no") {
        alert("What are you doing in my swamp!");
        document.write("What are you doing in my swamp!");
    } else {
        alert("I don't seem to understand...")
        document.write("I don't seem to understand...")
    }
}


function numberOfPoles(){
    let number = prompt("How many Poles does the earth have?");
    if (2 == number){
        alert("Corret!");
    } 
    else {
        alert("Wrong!");
    }
}
   

function rateMyPage(){
    let rating = prompt ("How many stars would you rate my page?");
    for (let i = 0; i < rating; i++)
    {
        console.log(i);
        document.write ("<img class='rating pic' src='yoda.jpg' alt='yoda'/>");
        if (i == 4){
            break;
        }
    }
}

    




