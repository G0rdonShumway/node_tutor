const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/go-to-mobile(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'go-to-mobile.html'))
})

module.exports = router