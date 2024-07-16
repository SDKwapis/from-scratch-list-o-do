const router = require('express').Router();
const api = require('./api');
const Task = require('../models/Task');

router.use("/api", api);

router.get("/", async (req, res) => {
    const allTasks = await Task.findAll();
    const sanitizedData = allTasks.map((task) => {
        return task.get({ plain: true });
    })
    console.log(allTasks);
    console.log('=========================');
    console.log(sanitizedData);
    res.render('todo', { sanitizedData });
})

router.get("/listodo", (req, res) => {
    res.json('its your list-o-do!');
});

module.exports = router;