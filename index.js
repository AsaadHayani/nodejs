const express = require("express");
const connectDB = require("./db");
const app = express();
const path = require("path");
const livereload = require("livereload");
const methodOverride = require("method-override");
require("dotenv").config();
// const seedUsers = require("./Faker");
// seedUsers().then(() => console.log("Fake data inserted!"));
const router = require("./routes/view");

app.use(methodOverride("_method"));

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
const User = require("./models/User");
const routerApi = require("./routes/api");
// const routerApi = require("./routes/api");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(router);

app.use(express.json());
app.use("/api", routerApi);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));
