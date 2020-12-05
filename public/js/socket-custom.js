var socket = io();

socket.on('connect', function() {
    console.log('Contectado al servidor');
});
//escuchar 
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'HOla mundo'
}, function(resp) {
    console.log('respuesta:', resp);
});



//Escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});