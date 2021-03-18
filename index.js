// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // adds inquirer package to askk questions
const fs = require("fs"); //adds filesystem package to make new file ie readme
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "Title",
    message: "What is the title for your project?",
    type: "input",
  },
  {
    name: "Description",
    message: "what is the desciption for your project?",
    type: "input",
  },
  {
    name: "Installation",
    message: "What are the install instructions?",
    type: "input",
  },
  {
    name: "Usage",
    message: "What is the usage information?",
    type: "input",
  },
  {
    name: "Contributing",
    message: "What are the guidlines to contributing?",
    type: "input",
  },
  {
    name: "Tests",
    message: "What are the testing instructions?",
    type: "input",
  },
  {
    name: "Licenses",
    message: "What license would you like to add?",
    type: "list",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    name: "Github",
    message: "What is your Github username?",
    type: "input",
  },
  {
    name: "Email",
    message: "What is your email address?",
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // fs.writeFile("GREADME.md", data,(err)=> {
  //     console.log("Created GREADME.md")
  //     if  (err) console.log(err);
  // })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    //let stringifiedData= JSON.stringify(data, null, 2)
    ///.console.log(stringifiedData)
    fs.writeFile("GREADME.md", generateMarkdown(data), (err) => {
      console.log("Created GREADME.md");
      if (err) console.log(err);
    });
    // writeToFile("README.md", generatMarkedown(data))
    // console.log("Creating README....");
    // writeToFile("README.md", generateMarkDown(data))
  });

  // then call the writeToFile
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
