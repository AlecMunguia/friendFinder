// load friends data
const friendData = require('../data/friends');

// routing
module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });
    
// friendliness machine
    app.post("/api/friends", function (req, res) {
        let user = req.body;
        let totalDifference = 50;
        let best = 0;
        for (let i = 0; i < friendData.length; i++) {
            let total = 0;
            let score = 0;
            for (let j = 0; j < user.scores.length; j++) {
                score = Math.abs(friendData[i].scores[j] - user.scores[j]);
                if (score > 0) total += score;
            }
            if (total < totalDifference) {
                totalDifference = total;
                best = i;
            }
        }
        friendData.push(user);
        res.json(friendData[best]);
    });
};