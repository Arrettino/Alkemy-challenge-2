function internalError() {
  return ({
    status: 500,
    name: 'UnkwnownError',
    message: 'Unkwnown Error',
  });
}

module.exports = internalError;
