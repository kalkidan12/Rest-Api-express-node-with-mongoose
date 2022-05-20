const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
	mongoose.connect(
		"mongodb+srv://kalkidan:<kalkidan>@internship.9s8dq.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(err) => {
			if (err) {
				console.log("error connecting to db" + err);
			} else {
				console.log("connect to db");
			}
		},
	);
};
