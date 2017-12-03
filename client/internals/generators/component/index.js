
const componentExists = require('../utils/componentExists');


module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantLoadable',
    default: false,
    message: 'Do you want to load the component asynchronously?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function':
      default:
        componentTemplate = './component/stateless.js.hbs';
    }

    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.tsx',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/tests/index.spec.tsx',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/story.tsx',
      templateFile: './component/story.js.hbs',
      abortOnFail: true,
    }];

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/Loadable.tsx',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
