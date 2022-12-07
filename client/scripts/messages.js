// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  storage: [],
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  generateNewMessage: function() {
    var message = document.getElementById('message').value;
    console.log('message', message);

    var messageObject = {
      username: App.username,
      text: message,
      roomname: 'Lobby'
    };

    Parse.create(messageObject);
  }

};