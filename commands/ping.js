const Discord = require('discord.js');

/**
 * @param {Discord.Message} message
**/
module.exports = (message) => {
	message.edit('pong!').catch(console.error);;
	//message.channel.send(message.createdTimestamp);
};