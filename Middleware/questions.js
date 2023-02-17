const questions = {
  addRole: function () {
    return [
      {
        type: "input",
        name: "title",
        message: "What will be the employee role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What will be the employee salary?",
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
  
  addDepartment: function () { 
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
          name: "role_id",
          message: "What is the employee's job title",
          choices: [
            'Coordinator',
            'Pre-Producer',
            'Productionist',
            'Post-Producer',
            'Distrbutor'

          ],
        },
        {
          type: "list",
          name: "manager_id",
          message: "What is the employee's manager ID",
          choices: [
            1,
            2,
            3
          ],
        }
    ];
}
}
module.exports = questions;
