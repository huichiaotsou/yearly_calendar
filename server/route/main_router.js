const e = require("express");
const router = e.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("Hello, this is the root endpoint!");
});

router.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

router.post("/echo", (req, res) => {
  const { message } = req.body;
  res.json({ echo: message });
});

module.exports = router;
