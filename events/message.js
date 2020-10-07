const ping = require("../commands/ping");
const prefix = process.env.PREFIX;

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("../commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

module.exports = (client, message) => {
	// Only allow messages with the correct prefix and from human users
	if(!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}

	// Split args and check if command exists
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	if (!client.commands.has(commandName)) {
		message.channel.send("That command doesn't exist, silly goober.");
		return;
	}

	// Execute the command
	const command = client.commands.get(commandName);
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send("Uhh, something broke while trying to do that.");
	}
}