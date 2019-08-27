let app = require("express")(),
    socketIO = require('socket.io'),
    http = require('http');


let server = http.createServer(app);
let io = socketIO(server);

app.set('view engine', 'ejs');

io.on('connection', (socket) => {
  socket.on('buttonPressed', () => {
    io.emit('sendAlert');
  });
});


app.get('/msg', (req, res) =>{
  res.render('pressButton');
});

app.get('/res', (req, res) => {
  res.render('receiveMsg');
});

server.listen('7001', ()=> {
  console.log('server running at port 7001');
});
