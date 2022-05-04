const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./uitls/generateMardown');
const path = require('path');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Title?',
    },
    {
      type: 'input',
      message: 'Description About Your Project?',
      name: 'Description',
     
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation requirements?',
        default: 'npm i'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you run this project?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What licenses are used for this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute and make this app better?', 
      },
      {
        type: 'input',
        name: 'link',
        message: 'Link to your project demo video?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ]

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }


  function init() {
    inquirer.prompt(questions).then(responses => {
        writeToFile('README.md', generateMarkdown({...responses}));
    })
  }

  init()