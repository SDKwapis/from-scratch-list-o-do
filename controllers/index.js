const router = router('express').Router();
const api = require('./api');

router.use("/api", api);

router.get("/wingzero", (req, res) => {
    res.json('Begin operation meteor');
});

module.exports = router;