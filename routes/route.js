const express = require('express');
const app = express();
const router = express.Router();
const Candidate = require('../models/contact');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const methodOverride = require('method-override');
const config = require('config');
const mongoURI = config.get('mongoURI');
const bodyparser = require('body-parser');
var sample = require('../index');

// middleware
app.use(bodyparser.json());

// to get the contact
router.get('/candidates',(req,res,next)=>{
    Candidate.find((err, candidate)=>{
        res.json(candidate);
    })
});

// to get the specific contact
router.get('/candidates/:name',(req,res,next)=>{
    Candidate.find({name: req.params.name},(err, result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});
let email;
// to add a contact.
router.post('/candidate',(req,res,next)=>{
    email = req.body.email
    let newCandidate = new Candidate({
        name : req.body.name,
        title: req.body.title,
        email: req.body.email,
        semail: req.body.semail,
        mobile: req.body.mobile,
        website: req.body.website,
        street: req.body.street,
        city: req.body.city,
        stateProvince: req.body.stateProvince,
        zipCode: req.body.zipCode,
        country: req.body.country,
        exp: req.body.exp,
        qualification: req.body.qualification,
        currentJob: req.body.currentJob,
        currentEmployer: req.body.currentEmployer,
        expectedSalary: req.body.expectedSalary,
        currentSalary: req.body.currentSalary,
        additionalInfo: req.body.additionalInfo,
        skill: req.body.skill,
        skype: req.body.skype,
        twitter: req.body.twitter,
        candidateStatus: req.body.candidateStatus,
        source: req.body.source,
        candidateOwner: req.body.candidateOwner,
        emailOption: req.body.emailOption,
        // 1st edu.
        school_1: req.body.school_1,
        major_1: req.body.major_1,
        degree_1: req.body.degree_1,
        monthFrom_11: req.body.fromMonth_1,
        yearFrom_11: req.body.fromYear_1,
        monthTo_11: req.body.toMonth_1,
        yearTo_11: req.body.toYear_1,
        pursuing_1: req.body.pursuing_1,
        // 2nd edu.
        school_2: req.body.school_2,
        major_2: req.body.major_2,
        degree_2: req.body.degree_2,
        fromMonth_2: req.body.fromMonth_2,
        fromYear_2: req.body.fromYear_2,
        toMonth_2: req.body.toMonth_2,
        toYear_2: req.body.toYear_2,
        pursuing_2: req.body.pursuing_2,
        // 3rd edu.
        school_3: req.body.school_3,
        major_3: req.body.major_3,
        degree_3: req.body.degree_3,
        fromMonth_3: req.body.fromMonth_3,
        fromYear_3: req.body.fromYear_3,
        toMonth_3: req.body.toMonth_3,
        toYear_3: req.body.toYear_3,
        pursuing_3: req.body.pursuing_3,
        // 4th edu.
        school_4: req.body.school_4,
        major_4: req.body.major_4,
        degree_4: req.body.degree_4,
        fromMonth_4: req.body.fromMonth_4,
        fromYear_4: req.body.fromYear_4,
        toMonth_4: req.body.toMonth_4,
        toYear_4: req.body.toYear_4,
        pursuing_4: req.body.pursuing_4,
        // occupation
        occupation1: req.body.occupation1,
        company1: req.body.company1,
        summary1: req.body.summary1,
        fromMonth1: req.body.fromMonth1,
        fromYear1: req.body.fromYear1,
        toMonth1: req.body.toMonth1,
        toYear1: req.body.toYear1,
        currentlyWorking1: req.body.currentlyWorking1,

        occupation2: req.body.occupation2,
        company2: req.body.company2,
        summary2: req.body.summary2,
        fromMonth2: req.body.fromMonth2,
        fromYear2: req.body.fromYear2,
        toMonth2: req.body.toMonth2,
        toYear2: req.body.toYear2,
        currentlyWorking2: req.body.currentlyWorking2,

        occupation3: req.body.occupation3,
        company3: req.body.company3,
        summary3: req.body.summary3,
        fromMonth3: req.body.fromMonth3,
        fromYear3: req.body.fromYear3,
        toMonth3: req.body.toMonth3,
        toYear3: req.body.toYear3,
        currentlyWorking3: req.body.currentlyWorking3
    });

    newCandidate.save((err)=>{
        if(err){
            res.json({msg: "Failed to add contact."})
        }
        else{
            res.json({msg: "Contact added successfully."})
        }
    })
})

// to delete a contact.
router.delete('/candidates/:name',(req,res,next)=>{
    Candidate.findOneAndRemove({name: req.params.name},(err, result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})

module.exports = email;
module.exports = router;