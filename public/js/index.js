var socket = io();

  socket.on('connect', function()  {
      console.log('Connected to server');
      
//       socket.emit('createEmail',{
//           to:'example@soc.com',
//           text: 'test soc example'

//       });

//       socket.emit('createMessage',{
//           from: 'Someone',
//           text:'regards',
//       });

     
   });

  socket.on('disconnect', function() {
      console.log('Disconnected');
  });

  socket.on('newEmail', function(email) {
      console.log("New Email" ,email);
  });

  socket.on('newMessage', function(message) {
    console.log("New Message",message);
  });