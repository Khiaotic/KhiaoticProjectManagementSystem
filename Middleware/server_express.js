
// const express = require('express');
const inquirer = require('inquirer');
const mysql= require('mysql2');
const questions = require('./questions')

// const PORT = process.env.PORT || 8080;
// const app = express();



// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

//connect to database
const db = mysql.createConnection (
    {
        host: 'localhost',
        //mysql username
        user: 'root',
        //mysql password
        password: 'v3r1F1cat10n.',
        database: 'animationpipeline_db',

    },
    //once its connected do this
    console.log ('Connected to the pipeline_db khi!')
);

//query database
// db.query('SELECT * FROM departments', function (err, results)
// {console.log(results);
// if(err) console.log(err)}
// );

async function addRole(){
    var availableDepartments = await db.promise().query(`SELECT id AS value, name AS name FROM departments`)
    availableDepartments = availableDepartments[0]
    console.log(availableDepartments)
    var data = await inquirer.prompt(questions.addRole(availableDepartments))
    console.log(data)
}


addRole()
//default response for ANY OTHER request
// app.use((req,res)=> {res.status(404).end();});

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

