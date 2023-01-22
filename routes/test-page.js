const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/test-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'test-page.html'))
})

module.exports = router