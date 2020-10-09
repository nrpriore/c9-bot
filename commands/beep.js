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
	async execute(message, args) {
		try {
			var timer = message.createdTimestamp;
			const boop = await message.channel.send('Oh yeah, speak my language...');
			timer = boop.createdTimestamp - timer;
			await boop.edit('Boop! (' + timer + 'ms)');
		}
		catch (error) {
			console.error(error);
		}
	}
}