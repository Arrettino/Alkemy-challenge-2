const debug = require('debug')('reset:database');
const resetCategoriesDatabase = require('../database/resetCategoriesDatabase');

async function resetCategoriesDatabaseScript() {
  try {
    await resetCategoriesDatabase();
  } catch (err) {
    debug(err);
  }
}
resetCategoriesDatabaseScript();
