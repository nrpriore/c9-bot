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
	async execute(message, args) {
		try {
			var timer = message.createdTimestamp;
			const pong = await message.channel.send('Questioning my reality...');
			timer = pong.createdTimestamp - timer;
			await pong.edit('Pong! (' + timer + 'ms)');
		}
		catch (error) {
			console.error(error);
		}
	}
}