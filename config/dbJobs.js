const mongoose = require('mongoose'); //importing mongoose
const config = require('config'); //importing config

// Creating connectDB function to check if the connection is made or not.
const connectDBjobs = async () => {
	try {
		await mongoose.connect(db, {
			// trying to connect with the (db) as it is mentioned above.
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB Connected for jobs'); // console log after when the mongo connection is established.
	} catch (err) {
		console.log(err.message); // If not connected then throwing console error.
		// Exiting process with failure
		process.exit(1);
	}
};

module.exports = connectDBjobs; // exporting the functions so that it can be imported and run on another modules/ files.
