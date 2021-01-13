const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  server: {
    nodeEnv: process.env.NODE_ENV,
  },
};
