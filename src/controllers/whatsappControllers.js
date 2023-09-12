const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream("./log.txt"));
const whatsappService = require("../services/whatsappService");
const samples = require("../shared/sampleModels");
const processMessage = require("../shared/processMessage");

/// VERIFICAR TOKEN Y OBTENER ACCESO AL WEBHOOK DE API
const VerifyToken = (req, res) => {
    try {
        var accessToken = "123pruebas";// PUEDE SER CUALQUIERA
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch (e) {
        res.status(400).send();
    }

}


/// RECIBIR MENSAJES //////////
const ReceivedMessage = (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];
        var mensaje = "hola usuario como estas?";

        if (typeof messageObject != "undefined") {

            var messages = messageObject[0];
            var number = messages["from"];
            var text = GetTextUser(messages);

           /*  if(text != ""){                            

                processMessage.Process(text, number)
            } */



               if(text != ""){
                   var data = samples.SampleText(mensaje, number);
                    whatsappService.SendMessageWhatsApp(data);
                }
        


            myConsole.log(text);
           
            myConsole.log(number);

        }

        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e);
        res.send("EVENT_RECEIVED");
    }

}

///OBTENER EL MENSAJE DEL USUARIO 
function GetTextUser(messages) {
    var text = "";
    var typeMessage = messages["type"];



    if (typeMessage == "text") {
        text = (messages["text"])["body"];


    } else if (typeMessage == "image") {
        image = (messages["image"])["link"];
       
    } else {
        myConsole.log("sin mensaje");
    }
    return text;
}

module.exports = { VerifyToken, ReceivedMessage }