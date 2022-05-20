const express = require("express");
const cors = require("cors");
require("dotenv").config();
const conn = require("./database/db.config");
const { defaultRoute, userRoute } = require("./routes/route");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use(defaultRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	conn();
	console.log(`app running on port ${PORT}...`);
});
