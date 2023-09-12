////SOLO PARA PRUEBAS DE QUE EL USUARIO ESCOJA UNA PALABRA SABER QUE ENVIAR


//// ENVIO PARA TIPO TEXTO///////

function SampleText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });
    return data;
}

//// ENVIO PARA TIPO IMAGEN///////

function SampleImagen( number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "http://179.50.5.93/cluster/img/solicitudes/img16942075762491f440d5c.jpg"
        }
    });
    return data;
}

//// ENVIO PARA TIPO AUDIO///////
function SampleAudio( number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    });
    return data;
}

//// ENVIO PARA TIPO VIDEO///////
function SampleVideo( number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }
    });
    return data;
}

//// ENVIO PARA TIPO DOCUMENTO///////
function SampleDocument( number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        }
    });
    return data;
}

module.exports = {SampleText, 
    SampleImagen, SampleAudio, SampleVideo, SampleDocument

}