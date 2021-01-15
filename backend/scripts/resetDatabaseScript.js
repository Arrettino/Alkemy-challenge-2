const resetDatabase = require('../database/resetDatabase');

async function resetDatabaseScript() {
  try {
    await resetDatabase();
    console.log('Finish Reset');
  } catch (err) {
    console.log(err);
  }
}
resetDatabaseScript();
