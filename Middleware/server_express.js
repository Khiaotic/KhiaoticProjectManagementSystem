// const express = require('express');
const inquirer = require("inquirer");
const mysql = require("mysql2");
const questions = require("./questions");
require("dotenv").config();

// const PORT = process.env.PORT || 8080;
// const app = express();

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    //mysql username
    user: "root",
    //mysql password
    password: process.env.DB_PASSWORD,
    database: "animationpipeline_db",
  },
  //once its connected do this
  console.log("Connected to the pipeline_db khi!")
);

///////////////////init///////////////////////
function controller() {
  return inquirer.prompt([
    {
      name: "init",
      message: "How would you like to start?",
      type: "list",
      choices: ["addEmployee", "addRole", "addDepartment"],
    },

  ])
.then (({init})=>
{
    switch(init){
        case "addEmployee":
            return addEmployee()
        case "addRole":
            return addRole()
        case "addDepartment":
            return addDepartment()
    }
})
}

/////////////////////////////////////BREAK///////////////////////////////////////////////////

async function addDepartment() {
  var availableDepartments = await db
    .promise()
    .query(`SELECT id AS value, name AS name FROM departments`);
  availableDepartments = availableDepartments[0];
  console.log(availableDepartments);
  var data = await inquirer.prompt(
    questions.addDepartment(availableDepartments)
  );
  console.log(data);
}

// addDepartment();

/////////////////////////////////////BREAK///////////////////////////////////////////////////

async function addRole() {
  var availableDepartments = await db
    .promise()
    .query(`SELECT id AS value, name AS name FROM departments`);
  availableDepartments = availableDepartments[0];
  console.log(availableDepartments);
  var data = await inquirer.prompt(questions.addRole(availableDepartments));
  console.log(data);
}

// addRole();

/////////////////////////////////////BREAK///////////////////////////////////////////////////

async function addEmployee() {
  var availableRoles = await db
    .promise()
    .query(
      `SELECT id AS value, name AS title, role_salary AS value FROM roles`
    );
  availableRoles = availableRoles[0];
  console.log(availableRoles);
  var data = query(
    `SELECT id AS value, name AS title, role_salary AS value FROM roles`
  ).prompt(questions.addEmployee(availableRoles));
  console.log(data);
}

// addEmployee();


controller();