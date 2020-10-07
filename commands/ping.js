const Discord = require('discord.js');

/**
 * @param {Discord.Message} message
**/
module.exports = (message) => {
	message.edit('pong!');
	message.channel.send(message.createdTimestamp);
};