var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'careers-generate-certificate';
        var msg = '{\n' +
            '        "schedulingGroup": "Prova interna - teste - 31/05",\n' +
            '        "date": "2023-05-31",\n' +
            '        "time": "16:30",\n' +
            '        "courseName": "Copywriting",\n' +
            '        "testId": 30,\n' +
            '        "name": "Paula Salazar",\n' +
            '        "email": "",\n' +
            '        "registration": "711.951.490-34",\n' +
            '        "presence": "Presente",\n' +
            '        "totalGrade": 35.0,\n' +
            '        "hitRate": "88%",\n' +
            '        "zeroResume": "Não",\n' +
            '        "situation": "Aprovado",\n' +
            '        "renderInfo": {\n' +
            '            "courseName": "Copywriting",\n' +
            '            "urlBackground": "url.com/background",\n' +
            '            "textRender": {\n' +
            '                "courseName": {\n' +
            '                    "x": 1.0,\n' +
            '                    "y": 1.0,\n' +
            '                    "fontSize": 16.0,\n' +
            '                    "font": "Arial"\n' +
            '                },\n' +
            '                "studentName": {\n' +
            '                    "x": 12.0,\n' +
            '                    "y": 12.0,\n' +
            '                    "fontSize": 16.0,\n' +
            '                    "font": "Arial"\n' +
            '                },\n' +
            '                "emissionDate": {\n' +
            '                    "x": 20.0,\n' +
            '                    "y": 20.0,\n' +
            '                    "fontSize": 16.0,\n' +
            '                    "font": "Arial"\n' +
            '                }\n' +
            '            }\n' +
            '        }\n' +
            '    }';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 500);
});