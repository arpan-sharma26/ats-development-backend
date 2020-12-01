// building schema

const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    title:{
        type: String
    },
    email:{
        type: String
    },
    semail:{
        type: String
    },
    mobile:{
        type: String
    },
    website:{
        type: String
    },
    street:{
        type: String
    },
    city:{
        type: String
    },
    stateProvince:{
        type: String
    },
    zipCode:{
        type: String
    },
    country:{
        type: String
    },
    exp:{
        type: String
    },
    qualification:{
        type: String
    },
    currentJob:{
        type: String
    },
    currentEmployer:{
        type: String
    },
    expectedSalary:{
        type: String
    },
    currentSalary:{
        type: String
    },
    additionalInfo:{
        type: String
    },
    skill:{
        type: String
    },
    skype:{
        type: String
    },
    twitter:{
        type: String
    },
    candidateStatus:{
        type: String
    },
    source:{
        type: String
    },
    candidateOwner:{
        type: String
    },
    emailOption:{
        type: Boolean
    },
    school_1:{
        type: String
    },
    major_1:{
        type: String
    },
    degree_1:{
        type: String
    },
    monthFrom_11:{
        type: String
    },
    yearFrom_11:{
        type: String
    },
    monthTo_11:{
        type: String
    },
    yearTo_11:{
        type: String
    },
    pursuing_1:{
        type: Boolean
    },
    school_2:{
        type: String
    },
    major_2:{
        type: String
    },
    degree_2:{
        type: String
    },
    fromMonth_2:{
        type: String
    },
    fromYear_2:{
        type: String
    },
    toMonth_2:{
        type: String
    },
    toYear_2:{
        type: String
    },
    pursuing_2:{
        type: Boolean
    },
    school_3:{
        type: String
    },
    major_3:{
        type: String
    },
    degree_3:{
        type: String
    },
    fromMonth_3:{
        type: String
    },
    fromYear_3:{
        type: String
    },
    toMonth_3:{
        type: String
    },
    toYear_3:{
        type: String
    },
    pursuing_3:{
        type: Boolean
    },
    school_4:{
        type: String
    },
    major_4:{
        type: String
    },
    degree_4:{
        type: String
    },
    fromMonth_4:{
        type: String
    },
    fromYear_4:{
        type: String
    },
    toMonth_4:{
        type: String
    },
    toYear_4:{
        type: String
    },
    pursuing_4:{
        type: Boolean
    },
    occupation1:{
        type: String
    },
    company1:{
        type: String
    },
    summary1:{
        type: String
    },
    fromMonth1:{
        type: String
    },
    fromYear1:{
        type: String
    },
    toMonth1:{
        type: String
    },
    toYear1:{
        type: String
    },
    currentlyWorking1:{
        type: Boolean
    },
    occupation2:{
        type: String
    },
    company2:{
        type: String
    },
    summary2:{
        type: String
    },
    fromMonth2:{
        type: String
    },
    fromYear2:{
        type: String
    },
    toMonth2:{
        type: String
    },
    toYear2:{
        type: String
    },
    currentlyWorking:{
        type: Boolean
    },
    occupation3:{
        type: String
    },
    company3:{
        type: String
    },
    summary3:{
        type: String
    },
    fromMonth3:{
        type: String
    },
    fromYear3:{
        type: String
    },
    toMonth3:{
        type: String
    },
    toYear3:{
        type: String
    },
    currentlyWorking3:{
        type: Boolean
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);