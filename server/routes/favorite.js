const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post('/favoriteNumber', (req, res) => {

    // index.js bodyparser를 이용해서 req 받기
    //mongoDB에서 favorite 숫자를 가져오기 
    Favorite.find({ "movieId": req.body.movieId })
        .exec((err, info) => {
            // 에러가 있을 경우
            if (err) return res.status(400).send(err)
            // 그다음에 프론트에 다시 숫자 정보를 보내주기
            // 200번은 성공했다는 뜻
            res.status(200).json({ success: true, favoriteNumber: info.length })
        })

})

module.exports = router;
