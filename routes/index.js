const api = require('./workout');
const home = require('./home');
const router = require('express').Router();

router.use(api);
router.use(home);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;