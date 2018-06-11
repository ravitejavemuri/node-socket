const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    //   socket.emit('newEmail', {
    //       from: 'example.com',
    //       text: 'example text',
    //       createdat: 12.00
    //   });
    //   socket.emit('newMessage', {

    //     from: 'CapX',
    //     text: 'Hey',
    //     createdAt:12.58
    // });

    socket.on('createEmail', (Email) => {
        console.log('createEmail to back', Email);
    });


    socket.on('createMessage', (Message) => {
        //console.log("CreateMessage to back", Message);
        io.emit('newMessage', {
            from: Message.from,
            text: Message.text,
            createdAt: new Date().getTime()
        })
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});



server.listen(port, () => {
    console.log(`Server is up on ${port}`);
}); 
