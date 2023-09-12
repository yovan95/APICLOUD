
function MessageText(textResponse, number) {
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
function MessageImagen( number) {
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



module.exports = {
    MessageText, MessageImagen
};