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
		const commandName = file.split(".")[0];
		client.commands.set(commandName, command);
		console.log('Adding command ' + commandName);
		console.log(command);
	}
	console.log(client.commands.size + ' commands registered.');
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

	console.log('Received request for command: ' + commandName);
	console.log(client.commands.size + ' commands found in command list');
	client.commands.forEach(keys => {console.log(keys)})

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