const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index", { layout: "base" });
});

router.get("/picaje-bordado", function(req, res) {
    res.render("picaje-bordado", { layout: "base" });
});

module.exports = router;
