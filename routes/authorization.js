const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/authorization(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'authorization.html'))
})

module.exports = router