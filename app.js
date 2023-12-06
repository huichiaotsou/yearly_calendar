const e = require("express");
const router = require("./server/route/main_router");
const config = require("./server/config.json");

const app = e();
app.listen(config.port.prod, () => {
  console.log("Server running on port:", config.port.prod);
});

// TODO: to check if this is neccessary?
app.use(e.json());

app.use("/api", router);
