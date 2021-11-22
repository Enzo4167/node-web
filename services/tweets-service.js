let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    const postNewTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "Elon Musk",
            "verified": false,
            "handle": "@elonmusk",
            "time": "2h",
            "avatar-image":"https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg",
            "logo_image": "data:image/png;base64,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",
            "link_image": "",
            "link_title": "",
            "link_summary": "",
            "liked": false,
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.get('/api/tweets', findAllTweets);
    app.post('/api/tweets', postNewTweet);
};
