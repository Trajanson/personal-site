
const componentGenerator = require('./component/index.js');

module.exports = function (plop) {

  plop.setGenerator('component', componentGenerator);
  //
  // plop.setGenerator('controller', {
  //   description: 'application controller logic',
  //   prompts: [{
  //     message: 'controller name please',
  //     name: 'name',
  //     type: 'input',
  //   }], // array of inquirer prompts
  //   actions: [{
  //     path: 'src/{{name}}.js',
  //     templateFile: 'plop-templates/controller.hbs',
  //     type: 'add',
  //   }], // array of actions
  // })
}
