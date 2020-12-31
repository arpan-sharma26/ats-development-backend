const mongoose = require('mongoose');
const jobsSchema = mongoose.Schema({
	PostingTitle: { type: String },
	Title: { type: String },
	Recruiter: { type: String },
	TargetDate: { type: String },
	JobStatus: { type: String },
	Salary: { type: String },
	Department: { type: String },
	HiringManager: { type: String },
	NUmberOfPositions: { type: Number },
	DateOpened: { type: String },
	JobType: { type: String },
	WorkExperience: { type: String },
	City: { type: String },
	Country: { type: String },
	State: { type: String },
	PostalCode: { type: Number },
});

const Jobs = (module.exports = mongoose.model('Jobs', jobsSchema));

// publish: {
// 		type: String,
// 	},
// 	title: {
// 		type: String,
// 	},
// 	targetDate: {
// 		type: String,
// 	},
// 	city: {
// 		type: String,
// 	},
// 	assignedRecruiter: {
// 		type: String,
// 	},
// 	postingTitle: {
// 		type: String,
// 	},
// 	jobID: {
// 		type: String,
// 	},
// 	deptName: {
// 		type: String,
// 	},
// 	hiringManager: {
// 		type: String,
// 	},
// 	numberOfPositions: {
// 		type: Number,
// 	},
// 	jobOpeningStatus: {
// 		type: String,
// 	},
// 	dateOpened: {
// 		type: String,
// 	},
