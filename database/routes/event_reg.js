const db = require('./../index.js');


exports.get = async (guild, event) => {
	const { res } = await db.query('SELECT * FROM event_reg WHERE guild_id = $1 AND event_name = $2', [guild, event]);
	console.log(res);
	//console.log(res.active_ind);
	//console.log(res[0].active_ind);
	if(!res) {
		console.log('No data found for guild: ' + guild + ', event: ' + event);
		return;
	}
	return res[0];
}