const { io } = require('../server');




io.on('connection', (client) => {

    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /* if (mensaje.usuario) {
            callback({
                res: 'todo salio bien '
            });
        } else {
            callback({
                res: 'todo salio mal '
            });
        }

        callback(); */




    });
});