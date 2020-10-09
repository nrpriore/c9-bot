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
			timer = pong.createdTimestamp - timer - args[0];
			await pong.edit('Pong! (Client: ' + timer + 'ms, DB: ' + args[0] + 'ms)');
		}
		catch (error) {
			console.error(error);
		}
	}
}