const express = require('express');
const router = express.Router();

router.get('/requests', (req, res) => {
    res.send('All requests');
});

module.exports = router;