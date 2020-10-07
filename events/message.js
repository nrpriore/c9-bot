const Discord = require('discord.js');
const fs = require('fs');

const prefix = process.env.PREFIX;

/**
 * Initializes the message event
 * @param {Discord.Client} client
 */
exports.init = function init(client) {
	client.commands = new Discord.Collection();

	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./../commands/${file}`);
		client.commands.set(file, command);
	}
}

/**
 * Handles the message event routing
 * @param {Discord.Client} client
 * @param {Discord.Message} message
**/
exports.execute = function execute(client, message) {
	// Only allow messages with the correct prefix and from human users
	if (!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}

	// Split args and check if command/alias exists
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) 
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) {
		message.channel.send('That command doesn\'t exist, silly goober.')
		return;
	}

	// Execute the command
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('Uhh, something broke while trying to do that.');
	}
}