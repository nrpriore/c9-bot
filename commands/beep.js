const Discord = require('discord.js');

module.exports = {
	name: 'beep',
	description: 'Checks the bot/discord latency.',
	aliases: [],

	/**
	 * Checks the bot/discord latency
	 * @param {Discord.Message} message
	 * @param {string[]} args
	**/
	execute(message, args) {
		var timer = message.createdTimestamp;
		message.channel.send('Oh yeah, speak my language...')
			.then(function(boop) {
				timer = boop.createdTimestamp - timer;
				boop.edit('Boop! (' + timer + 'ms)')
			})
			.catch(error => {console.error(error)});
	}
}