const router = require("express").Router;
const controller = require("./urls.controller");

router.route("/")
.post(controller.create);

module.exports = router;