const express = require("express"),
    router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {title: 'willpower', css: '/stylesheet/index.css'})
})

module.exports = router