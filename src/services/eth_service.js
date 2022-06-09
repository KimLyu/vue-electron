export const ethSend = () => {
    console.log('ethSend');

    var net = require('net-socket');
    var socket = net.connect(9100, '192.168.1.151');
    var echo_msg = '';

    socket.setEncoding('hex');
    socket.setTimeout(5000);
    socket.on('timeout', () => {
        // timeout 事件
        console.log('ethernet connect timeout');
        socket.end();
        socket.destroy();
    });
    socket.on('connect', () => {
        // connected
        console.log('ethernet conndeted');
        const sendCommand = '&GET,PI,E,d\r\n';
        console.log('sendCommand = ', sendCommand);
        socket.write(sendCommand);

        // socket.end();
        // socket.destroy();
    });

    socket.on('data', (data) => {
        // console.log('data =', data);
        echo_msg += data;
        socket.end();
    });

    socket.on('end', function () {
        console.log('echo_msg = ', echo_msg);
        // socket.end();
        socket.destroy();
    });
}