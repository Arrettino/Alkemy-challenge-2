const debug = require('debug')('reset:database');
const resetDatabase = require('../database/resetDatabase');

async function resetDatabaseScript() {
  try {
    await resetDatabase();
  } catch (err) {
    debug(err);
  }
}
resetDatabaseScript();
