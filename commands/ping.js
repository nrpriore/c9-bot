const Discord = require('discord.js');

exports = {
	name: 'ping',
	description: 'Checks the bot/discord latency.',
	aliases: ['commands'],

	/**
	 * Checks the bot/discord latency
	 * @param {Discord.Message} message
	 * @param {string[]} args
	**/
	execute(message, args) {
		var timer = message.createdTimestamp;
		var ret = '';
		if(args[0] === 'ping') {
			ret = 'Pong';
		}
		else if(args[0] === 'beep') {
			ret = 'Boop';
		}

		message.channel.send('Questioning my reality...')
			.then(function(pong) {
				timer = timer - pong.createdTimestamp;
				pong.edit(ret + '! (' + timer + 'ms)')
			})
			.catch(error => {console.error(error)});
	}
}