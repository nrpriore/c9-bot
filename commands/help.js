const Discord = require('discord.js');
const prefix = process.env.PREFIX;

exports.execute = {
	name: 'help',
	desciprtion: 'Returns the list of possible commands.',
	aliases: ['halp'],

	/**
	 * Returns the list of possible commands
	 * @param {Discord.Message} message
	 * @param {string[]} args
	**/
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can type \`${prefix}help [command name]\` to get info on a specific command!`);
			
			message.channel.send(data, { split: true }).catch(error => {console.error(error);});
		}
	}
}