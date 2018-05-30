const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send([{
      text: Math.random() * 100
    }]);
  });

module.exports = router;