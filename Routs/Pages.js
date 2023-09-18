const express = require('express');
const router = express.Router();
module.exports = router;
//------------------------------------------------
router.get("/", (req, res) => {
    res.render("ClockToWork", {pageTitle: "ClockToWork"});
});
//------------------------------------------------
router.get("/Employees", (req, res) => {
    res.render("Employees", {pageTitle: "Employees"});
});
//------------------------------------------------
router.get("/WorkingHours", (req, res) => {
    res.render("WorkingHours", {pageTitle: "WorkingHours"});
});
//------------------------------------------------
