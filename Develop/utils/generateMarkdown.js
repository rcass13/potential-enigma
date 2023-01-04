// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    if (license !== "None") {
      return `- [License](#license)`
    }
    return ``;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application uses the ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}
${data.fullName}
${renderLicenseSection(data.license)}

## Description 
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## Tests 
${data.tests}

## Demo
${data.demoURL}

## Credits
${data.credits}

## Find me on GitHub at: [${data.github}](https://www.github.com/${data.github})

## Deployed Application 
This application was deployed at [${data.deploy}](${data.deploy})
`;
}

module.exports = generateMarkdown;