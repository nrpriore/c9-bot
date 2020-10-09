const db = require('./../database/index.js');


exports.get = async (guild, event) => {
	const { rows } = await db.query('SELECT active_ind FROM event_reg WHERE guild_id = $1 AND event_name = $2', [guild, event]);
	console.log(rows);
	return rows[0];
}