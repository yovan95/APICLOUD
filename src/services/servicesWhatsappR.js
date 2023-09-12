const https = require('https');
const express = require('express');
const samples = require("../shared/sampleModels");
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

const PORT = 3001;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/enviarMsgApiCloud', (req, res) => {
    const { numero, mensaje } = req.body;


    if (mensaje === undefined) {
        var data = samples.SampleTemplate(numero);

        const options = {
            host: "graph.facebook.com",
            path: "/v17.0/118913867972703/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EAAJnYxq22SQBO7c6KR0hqMp7gZBpOmRWDlnIKsRpgj7sdTTzSG3UZBCqGpMyc7T5ZAz2RQeFCy3CFJiShqZAh8j0tS0LAZCd8RRol1aQK6jaLolNpO5zOojBfqFXe1tLRUON0U5GY0BOOluFCjYwGh8GRyuLiCYKF3ejL2QqqJX3QajdLLU901uZC9OVsnWLppFWq8nHV2J0jRTTmjoRFyozN4C7si0XpzAP8ZD"
            }
        };
        const reqq = https.request(options, res => {
            res.on("data", d => {
                process.stdout.write(d);
            });

        });
        reqq.on("error", error => {
            console.error(error);
        });
        reqq.write(data);
        reqq.end()
       

    } else {
        var data = samples.SampleText(mensaje, numero);
        const options = {
            host: "graph.facebook.com",
            path: "/v17.0/118913867972703/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EAAJnYxq22SQBO7c6KR0hqMp7gZBpOmRWDlnIKsRpgj7sdTTzSG3UZBCqGpMyc7T5ZAz2RQeFCy3CFJiShqZAh8j0tS0LAZCd8RRol1aQK6jaLolNpO5zOojBfqFXe1tLRUON0U5GY0BOOluFCjYwGh8GRyuLiCYKF3ejL2QqqJX3QajdLLU901uZC9OVsnWLppFWq8nHV2J0jRTTmjoRFyozN4C7si0XpzAP8ZD"
            }
        };
        const reqq = https.request(options, res => {
            res.on("data", d => {
                process.stdout.write(d);
            });

        });
        reqq.on("error", error => {
            console.error(error);
        });
        reqq.write(data);
        reqq.end()
        //res.send('Ok');
    }

    //res.json({"resp ": "enviado"});

});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});









/* 
const reqq = https.request(options, res => {
    res.on("data", d => {
        process.stdout.write(d);
    });

});
reqq.on("error", error => {
    console.error(error);
});
reqq.write(data);
reqq.end()
//res.send('Ok');
}

//res.json({"resp ": "enviado"});
);
*/


