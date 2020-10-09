const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const db = require('./database/routes/index.js');


client.on('ready', () => {
	console.log('I am ready!');
});

// Register database events on startup
db.init();

// Register bot events on startup
fs.readdir('./events/', (err, files) => {
	files.forEach((file) => {
		const eventHandler = require(`./events/${file}`);
		const eventName = file.split(".")[0];
		
		eventHandler.init(client);
		client.on(eventName, (...args) => eventHandler.execute(client, ...args)); 
	});
	console.log(files.length + ' events registered.');
});

client.login(process.env.BOT_TOKEN).catch(error => {console.error(error)});