let myProfile = require('https://node-enzo.herokuapp.com/api/profile');

module.exports = (app) => {
    const getInfo = (req, res) => {
        res.json(myProfile);
    }

    const updateInfo = (req, res) => {
        myProfile = {...myProfile, ...req.body};
        res.json(myProfile);
    }

    app.get('/api/profile', getInfo);
    app.put('/api/profile', updateInfo);
}