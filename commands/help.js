const Discord = require("discord.js");
const prefix = process.env.PREFIX;

/**
 * @param {Discord.Message} message
**/
module.exports = {
	name: "help",
	description: "Checks the bot/discord latency.",
	usage: "\`${prefix}${command.name}\`",
	execute(message, args) {
		var timer = message.createdTimestamp;
		message.channel.send("Waiting for reply...")
			.then()
			.catch(console.error);
	},
};