const router = require("express").Router();
const Task = require('../../models/Task');

router.post('/', async (req, res) => {
    const newTask = Task.create({
        name: 'Get oilchange',
        description: 'replace reactor',
        status: 'todo'
    })
    res.json(newTask);
});

module.exports = router;