function logMessages() {
  console.log('Olá');
  setTimeout(function() {
    console.log('mundo');
  }, 5000); // Delay 'mundo' by 5 seconds (5000 milliseconds)
}

// Log messages initially and then repeat every 10 seconds
logMessages(); // Log initial messages
setInterval(logMessages, 10000); // Repeat every 10 seconds


// It seems like you want to log the messages "Olá" and "mundo" to the console in a specific timing pattern using JavaScript.
// You can achieve this using the setTimeout() function to control the timing of the messages. Here's how you can do it:

// In this code, the logMessages() function is defined to log the messages "Olá" and "mundo" with a 5-second delay between them.
// The initial call to logMessages() logs the messages immediately, and then setInterval() is used to repeatedly call logMessages() every 10 seconds.
// Please note that the setInterval() function repeatedly executes a function at a specified time interval. If you wish to stop this repetition at any point,
//  you can use the clearInterval() function by storing the return value of setInterval() in a variable and passing that variable to clearInterval() when you want to stop the repetition.