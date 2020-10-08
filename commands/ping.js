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
		var timer = message.createdTimestamp;
		try {
			const pong = await message.channel.send('Questioning my reality...');
			timer = pong.createdTimestamp - timer;
			await pong.edit('Pong! (' + timer + 'ms)');
		}
		catch (error) {
			console.error(error);
		}
	}
}