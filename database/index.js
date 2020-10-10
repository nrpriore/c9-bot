const pgp = require('pg-promise')(/*options*/);

const db = pgp(process.env.DATABASE_URL);

module.exports = {
	async query(text, params) {
		const start = Date.now();
		var res;
		try {
			res = await db.any(text, params);
		}
		catch(error) {
			console.error(error);
		}
		const duration = (Date.now() - start) + 'ms';
		console.log('executed query', { text, duration, rows: res.rowCount });
		return res;
	},
}