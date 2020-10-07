const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Checks the bot/discord latency.',
	aliases: [],

	/**
	 * Checks the bot/discord latency
	 * @param {Discord.Message} message
	 * @param {string[]} args
	**/
	execute(message, args) {
		var timer = message.createdTimestamp;
		message.channel.send('Questioning my reality...')
			.then(function(pong) {
				timer = pong.createdTimestamp - timer;
				pong.edit('Pong! (' + timer + 'ms)')
			})
			.catch(error => {console.error(error)});
	}
}