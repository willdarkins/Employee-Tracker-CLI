const express = require('express');
const router = express.Router();

router.use(require('./addRoutes'));
router.use(require('./deleteRoutes'));
router.use(require('./updateRoutes'));
router.use(require('./viewRoutes'));

module.exports = router;