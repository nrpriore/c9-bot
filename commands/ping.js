const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Checks the bot/discord latency.',
	aliases: ['beep'],

	/**
	 * Checks the bot/discord latency
	 * @param {Discord.Message} message
	 * @param {string[]} args
	**/
	execute(message, args) {
		const commandName = args.shift().toLowerCase();
		var ret;
		if(commandName === 'ping') {
			ret = 'Pong';
		}
		else if(commandName === 'beep') {
			ret = 'Boop';
		}

		var timer = message.createdTimestamp;
		message.channel.send('Questioning my reality...')
			.then(function(pong) {
				timer = pong.createdTimestamp - timer;
				pong.edit(ret + '! (' + timer + 'ms)')
			})
			.catch(error => {console.error(error)});
	}
}