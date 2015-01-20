//  // var myGuess;

//  function guessMyNum(myGuess)
//  {
// 	// var num1 = randomGen();
// 	var num1 = 5;
// 	console.log("My guess: " + myGuess + " is a " + typeof(myGuess));
// 	// myGuess = parseInt(myGuess);
// 	// console.log("Random num after: " + num1);

// 	// myGuess = prompt("Guess a number 1-100!");
// 	var keepPlaying = " ";
// 	var myAnswer = true;

// 	while(myAnswer)
// 	{
// 		if(num1 == myGuess)
// 		{
// 			keepPlaying = confirm("You've FINALLY won with " + num1 + "!\nKEEP PLAYING?");
// 			// $( "p" ).text("Great Job!");

// 			if(keepPlaying)
// 			{
// 				myAnswer = true;
// 				// clear the text box instead of prompt 
// 				// $( "p" ).text("Great Job!");
// 				myGuess = prompt("Guess a number 1-100!");
// 			}
// 			else{
// 				console.log("Opted out, should break loop now" );
// 				myAnswer = false;
// 			}
// 		}
// 		else if(num1 > myGuess)
// 		{
// 			myGuess = prompt("Too low! Guess a number higher than " + myGuess);
// 		}
// 		else if(num1 < myGuess)
// 		{
// 			myGuess = prompt("Too high! Guess a number lower than " + myGuess);
// 		}
// 		else
// 		{
// 			console.log("Error in last else " + typeof(myGuess) + " - keepPlaying = " +typeof(keepPlaying) );
// 			myGuess = prompt("Whoops, you need to enter a number from 1-100, Bub");
// 		}
// 	}
// }
// function randomGen()
// {
// 	return (Math.round(Math.random() * 100)).toString();
// }

// // guessMyNum();

// $( document ).ready(function() {
 
// 	$('#button1').click(function(event) {

// 		var value = $( "#lname" ).val();
// 		console.log("Clicked. Typeof: " + typeof(value));
// 		var numValue = parseInt(value);

// 		console.log("Passing onverted val Typeof: " + typeof(value));

// 		guessMyNum(numValue);
// 	  	$( "p" ).text( value );

// 	});
// }); 

$( document ).ready(function() {
		$('#button1').click(function(event) {

		var value = $( "#lname" ).val();
		console.log("Clicked. Typeof: " + typeof(value));
		var numValue = parseInt(value);
		// clears text box
		$("#lname").val('');

		// clears "Enter another number"
		$(".guess").text('');

		console.log("Passing converted val Typeof: " + typeof(value));

		guessMyNum(numValue);
	  	//$( "p" ).text( value );
	  	// ORRR....
	  	// document.getElementById("demo").innerHTML = res;

	});
// //////////////////////////////////////////////////
 function guessMyNum(myGuess)
 {
	// var num1 = randomGen();
	var num1 = 5;
	console.log("My guess: " + myGuess + " is a " + typeof(myGuess));
	// myGuess = parseInt(myGuess);
	// console.log("Random num after: " + num1);

	// myGuess = prompt("Guess a number 1-100!");
	var keepPlaying = " ";
	var myAnswer = true;

	while(myAnswer)
	{
		if(num1 == myGuess)
		{
			//keepPlaying = confirm("You've FINALLY won with " + num1 + "!\nKEEP PLAYING?");
			// $( "p" ).text("Great Job!");

			if(keepPlaying)
			{
				myAnswer = true;
				// clear the text box instead of prompt 
				$( ".status" ).text("Great job, you guessed correct! ");
				$( ".guess").text("Enter another number to keep playing :D");
				myAnswer = false;

			}
			else{
				console.log("Opted out, should break loop now" );
				$( ".status" ).text("Thanks for playing!");
				myAnswer = false;
			}
		}
		else if(num1 > myGuess)
		{
			// myGuess = prompt("Too low! Guess a number higher than " + myGuess);
			$( ".status" ).text("Too low! Guess a number higher than " + myGuess);
			myAnswer = false;

		}

		else if(num1 < myGuess)
		{
			$( ".status" ).text("Too high! Guess a number lower than " + myGuess);
			myAnswer = false;

		}
		else
		{
			console.log("Error in last else " + typeof(myGuess) + " - keepPlaying = " +typeof(keepPlaying) );
			// myGuess = prompt("Whoops, you need to enter a number from 1-100, Bub");
			$( ".status" ).text("Whoops, you need to enter a number from 1-100, Bub ");
			myAnswer = false;


		}
	}
}
function randomGen()
{
	return (Math.round(Math.random() * 100)).toString();
}
 // ////////////////////////////////////////////////


	


}); 
