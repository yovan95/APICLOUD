const https = require("https");

/// CONTRUCCION DE COMO SE DEBE ENVIAR EL MENSAJE DE TEXT SENCILLO
function SendMessageWhatsApp(data) {

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
    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });

    });
    req.on("error", error => {
        console.error(error);
    });
    req.write(data);
    req.end()
}
module.exports = {
    SendMessageWhatsApp
}