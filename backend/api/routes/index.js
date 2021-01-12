const express = require('express');

const router = express.Router();

router.use('/posts', (req, res) => {
  res.status(200).end();
});

module.exports = router;
