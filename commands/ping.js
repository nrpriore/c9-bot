const Discord = require("discord.js");

/**
 * @param {Discord.Message} message
**/
module.exports = {
	name: "ping",
	description: "Checks the bot/discord latency.",
	usage: "\`${prefix}${command.name}\`",
	execute(message, args) {
		var timer = message.createdTimestamp;
		message.channel.send("Waiting for reply...")
			.then()
			.catch(console.error);
	},
};