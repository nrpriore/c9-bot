import { Client } from 'discord.js';
import { readdir } from "fs";
const client = new Client();

readdir("./events/", (err, files) => {
	files.forEach((file) => {
		const eventHandler = require(`./events/${file}`);
		const eventName = file.split(".")[0];
		client.on(eventName, (...args) => eventHandler(client, ...args)); 
	});
});

client.on('ready', () => {
	console.log('I am ready!');
});

client.login(process.env.BOT_TOKEN).catch((error) => {console.error(error);});