const express = require('express');
const router = express.Router();

const shorturl = require
('../controllers/shorturl.controller');
const geturl = require
('../controllers/geturl.controller');
const urlValidator = require('../middlewares/urlValidator.middleware')
const isUrlReal = require
('../middlewares/urlReal.middleware');

router.post('/shorturl', [isUrlReal, urlValidator], shorturl)
router.get('/shorturl/:num', geturl)

module.exports = router