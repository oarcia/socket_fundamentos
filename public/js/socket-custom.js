let socket = io();

socket.on('connect', function() {
    console.log('conectado al server ')
});
//los on es para escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});
//los emit son para enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'oscar',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuestaserver', resp)
});

//scuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje)
})