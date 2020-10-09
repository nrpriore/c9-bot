const pgp = require('pg-promise')(/*options*/);

const db = pgp(process.env.DATABASE_URL);

module.exports = {
	async query(text, params) {
		const start = Date.now();
		const res = await db.any(text, params);
		const duration = Date.now() - start;
		console.log('executed query', { text, duration, rows: res.rowCount });
		return res;
	},
}