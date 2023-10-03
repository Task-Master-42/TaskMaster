const { Pool } = require('pg');
const PG_URI = 'postgres://fmtxvwnz:wQt20fe4V2j9Cqre9xftihNMq8EjkgUa@peanut.db.elephantsql.com/fmtxvwnz';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text: String, params?: Object, callback?: Function) => {
    return pool.query(text, params, callback);
  },
  end: () => pool.end(),
};