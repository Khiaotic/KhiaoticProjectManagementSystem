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
  addDepartment: [
    {
      type: "input",
      name: "name",
      message: "What will be the new department title?",
    },
  ],
  //   addEmployee: function (roleOptions, managerOptions) {
  //     return `[
  //     {
  //       type: "input",
  //       name: "title",
  //       message: "What will be the new job title?",
  //     },
  //     {
  //         type: "input",
  //         name: "salary",
  //         message: "What will be the new job salary?",
  //       },
  //       {
  //         type: "list",
  //         name: "department",
  //         message: "What will be the department_id?",
  //         choices: ${optionsArr}
  //       },
  //   ],
  // `;
};
module.exports = questions;
