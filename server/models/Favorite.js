const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        // ObjectId 하나만으로 User의 모든 정보를 가져올 수 있도록 함
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, { timestamps: true })

const Favorite = mongoose.model('Favorite', favoriteSchema);

// 다른곳에서도 사용할 수 있도록 .exports
module.exports = { Favorite }