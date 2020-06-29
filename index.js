var inquirer = require('inquirer');
var fs = require('fs');

var fileString ="";

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What's the title of this project?",
        default: function() {
          return 'Title';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What's the description of this project?",
        default: function() {
          return 'Description';
        }
    },
    {
        type: 'input',
        name: 'toc',
        message: "Please enter the table of contents",
        default: function() {
          return 'table-of-contents';
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter the installation instructions",
        default: function() {
          return 'intstallation';
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter the usage instructions",
        default: function() {
          return 'usage';
        }
    },    
    {
      type: 'list',
      name: 'license',
      message: 'What type of license?',
      choices: [
        'Apache 2.0',
        'MIT License',
        'GNU License'
      ]
    },
        {
        type: 'input',
        name: 'contributing',
        message: "Please enter the contribution instructions",
        default: function() {
          return 'contributing';
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please enter the test instructions",
        default: function() {
          return 'tests';
        }
    },    
  ])
  .then(answers => {
    fileString += '# Title\n';
    fileString += answers.title + "\n\n";

    fileString += '# Description\n';
    fileString += answers.description + "\n\n";

    fileString += '# Table of Contents\n';
    fileString += answers.toc + "\n\n";

    fileString += '# Installation\n';
    fileString += answers.installation + "\n\n";

    fileString += '# Usage\n';
    fileString += answers.usage + "\n\n";    

    fileString += '# License\n';   
    fileString += "This project uses the license " + answers.license; 
    if (answers.license === 'Apache 2.0') {
        fileString += "The GNU General Public License is a free, copyleft license for software and other kinds of works";
    }
    if (answers.license === 'MIT License') {
        fileString += "The MIT license is for Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,";
    }
    if (answers.license === 'GNU License') {
        fileString += "shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document https://opensource.org/licenses/Apache-2.0";
    }

    fileString += '\n# Contributing\n';
    fileString += answers.contributing + "\n\n";

    fileString += '# Tests\n';
    fileString += answers.tests + "\n\n";

    createReadMe();
  });




function createReadMe() {
  fs.writeFile('Readme.md', fileString, function (err) {
  if (err) throw err;
  console.log('ReadMe created');
});
}

