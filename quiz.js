




var inquirer = require('inquirer');


var questions =

[
  {
        type: 'input',
        name: 'first_name',
        message: 'What is your name?',

    },

{
        type: 'list',
        name: 'capital',
        message: 'What\'s the capital of Texas?',
        choices: [

              'Houston', 'Dallas', 'Austin']
    },
    {
        type: 'input',
        name: 'year',
        message: 'What year was Willy Nelson born?'

    },
    {
        type: 'list',
        name: 'theme',
        message: 'How many bats reside under Congress street bridge?',
        choices: [
            '100,000',
            '450',
            '250,000'
        ]
    },


{
    type: "checkbox",
    message: 'What is Austin famous for?',
    name: "theme",
    choices: [
      {
        name: "Water Springs",

      },
      {
        name: "Live Music"
      },
      {
        name: "Mexican Tacos"
      },
      {
      name: "All the above"
    }
    ]
  },

    {
        type: 'input',
        name: 'comments',
        message: 'Any comments on your Austin experience?',
        default: 'Just enjoying the ride!'
      },


]


//prompt is the function that takes an array of questions and shows them ti the user
//and askes them to get something => data

inquirer.prompt(questions).then(function(answers) {

    console.log(answers.first_name)
    console.log(answers.capital)
    console.log(answers.year)
    console.log(answers.theme)

});
