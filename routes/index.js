const router = require('express').Router();
const api = require('./workout');
const home = require('./home');

router.use(api);
router.use(home);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;