const db = require('./../index.js');


exports.get = async (guild, event) => {
	const { rows } = await db.query('SELECT active_ind FROM event_reg WHERE guild_id = $1 AND event_name = $2', [guild, event]);
	if(!rows) {
		console.log('No data found for guild: ' + guild + ', event: ' + event);
		return;
	}
	return rows[0];
}