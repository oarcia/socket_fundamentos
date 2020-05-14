const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Ussuario conect')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {


        console.log(data);
        //este es para ver a todo el mundo
        client.broadcast.emit('enviarMensaje', data)
            //
            //    if (mensaje.usuario) {
            //        callback({
            //            resp: 'Todo salio bien'
            //        });
            //    } else {
            //        callback({
            //            resp: 'salio mal'
            //        })
            //    }
    })
});