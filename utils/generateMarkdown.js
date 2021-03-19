// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {//pulls license choice
  if(license == "APACHE 2.0")// if apache 2.0 return imag tag
  return `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></img>`
  if(license == "MIT")
  return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`
  if(license == "GPL 3.0")
  return `<img src="https://img.shields.io/badge/License-GPLv3-blue.svg"></img>`
  if(license == "BSD 3")
  return `<img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"></img>`
  else{
    return "";
  }
  // if the user selected a license that is not None
    // return the link of the badge
  // otherwise just return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None")
  return `* [License](#License)`//link in table of contents in generatMarkdown
  else{
    return "";
  }
  // check if the user selected anything besides None
    // if so, render [Lincense](#License)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {//if a license was chosen, return a license section for md
    return `## License
    
    ${license}
    `
  } else {
    return "";//otherwise retur emtpy string
  }
  // check user's choices
    // render section
    // or just return " "
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {//returns a md with temp lits and format
  // const objData= JSON.parse(data)
  return `# ${data.Title}
  ${renderLicenseBadge(data.Licenses)} 


## Description 
${data.Description}

## Table of Contents
* [Installation](#Installation)
* [Tests](#Tests)
* [Contributing](#Contributing)
* [Usage](#Usage)
${renderLicenseLink(data.Licenses)}
* [Get in Touch](#Get-in-Touch)


## Installation
${data.Installation}

## Tests
${data.Tests}

## Contributing
${data.Contributing}

## Usage
${data.Usage}
  
${renderLicenseSection(data.Licenses)}


## Get In Touch
Email me at: ${data.Email}
Check out my Github: https://github.com/${data.Github}

`;
}

module.exports = generateMarkdown;// sets genMarkdown funct to be exported

