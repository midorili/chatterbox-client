// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // for loop to access all messages in storage
    for (var i = 0; i < Messages.storage.length; i++) {
      MessagesView.renderMessage(Messages.storage[i]);
    }
    // call renderMessage to render each individual message

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    console.log(message);
    console.log(message.text);
    var newMessage = MessageView.render({
      username: message.username,
      text: message.text
    });
    console.log(newMessage);
    $('#chats').append(newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};

