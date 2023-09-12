const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];
    //cuando ingresa un mensaje de saludo
    if (textUser.includes("hola")) {
        var model = whatsappModel.MessageText("hola como estas?", number);
        models.push(model);

    }
    //para despedir
    else if (textUser.includes("gracias") || textUser.includes("adios")) {
        var model = whatsappModel.MessageText("con gusto vuelve pronto", number);
        models.push(model);




    }
    //cuando llega otro mensaje
    else {
        var model = whatsappModel.MessageText("no estoy entrenado para esa respuesta", number);
        models.push(model);
    }
    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });


}
module.exports = {
    Process
}