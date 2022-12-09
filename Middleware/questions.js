const questions = {
  addRole: function (optionsArr) {
    return [
      {
        type: "input",
        name: "title",
        message: "What will be the new job title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What will be the new job salary?",
      },
      {
        type: "list",
        name: "department",
        message: "What will be the department_id?",
        choices: optionsArr,
      },
    ];
  },
  /////////////////////////////////////////////////////////
  
  addDepartment: function (res) { 
    return [
    {
      type: "input",
      name: "name",
      message: "What will be the new department name?",
    },
  ];
},
    addEmployee: function (roleOptions, managerOptions) {
      return [
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?",
        },
        {
          type: "list",
          name: "department",
          message: "What is the employee's job title",
          choices: optionsArr,
        }
    ];
}
}
module.exports = questions;
