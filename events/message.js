const ping = require("../commands/ping");

module.exports = (client, message) => {
  if (message.content.startsWith("c!ping")) {
    return ping(message);
  }
}