const { Collection } = require('discord.js');
const fs = require('fs');

const routes = new Collection();

exports.init = function init() {
	const files = fs.readdirSync('./database/routes').filter(file => file.endsWith('.js'));
	for (const file of files) {
		if(file != 'index.js') {
			const route = require(`./${file}`);
			const routeName = file.split(".")[0];
			routes.set(routeName, route);
		}
	}
	console.log(routes.size + ' database routes registered.')
}

exports.query = function query(routeName) {
	const route = routes.get(routeName);
	if (!route) {
		console.log('Couldn\'t find the route: ' + routeName);
		return;
	}
	return route;
}