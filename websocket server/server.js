const websocket= require('ws');
const server=new websocket.Server({port:8080});
server.on ("connection",ws =>{
console.log("new client connected");

ws.send("hello this is welcome message");
//replay
ws.on("message",(message)=>{

    if(message=="hi")
    {
        ws.send(`your message :${message}`);
    }
    else if (message=='byee')
    {
        ws.send("goodbyee");
    }
    else{
        ws.send("other message")
    }
});
});