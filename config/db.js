const mongoose = require('mongoose'); //importing mongoose
const config = require('config'); //importing config
const db = config.get('mongoURI'); // importing mongoURI
const dbJobs = 'mongodb+srv://admin:12345@cluster0.hqhtc.mongodb.net/employees';

// Creating connectDB function to check if the connection is made or not.
const connectDB = async () => {
	try {
		mongoose.connect(db);
		mongoose.createConnection(
			'mongodb+srv://arpan:arpan123@candidates.xhujd.mongodb.net/candidates?retryWrites=true&w=majority[:5000][,mongodb+srv://admin:12345@cluster0.hqhtc.mongodb.net/employees[:6000]]'
		);
		// mongoose.connect(dbJobs);
		// mongoose.createConnection(dbJobs);
		console.log('MongoDB Connected'); // console log after when the mongo connection is established.
	} catch (err) {
		console.log(err.message); // If not connected then throwing console error.
		// Exiting process with failure
		process.exit(1);
	}
};

module.exports = connectDB; // exporting the functions so that it can be imported and run on another modules/ files.
