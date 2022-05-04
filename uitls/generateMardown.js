

function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `[Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
}

function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License

        This project is licensed uder the ${license} license`;
    }
    return '';
}

function generateMarkdown(data) {
    return `
    #${data.title}

    ${renderLicenseBadge(data.license)}

    ##Descripton

    ${data.description}

    ## Table of Contents
    ${data.install}

    [useage](#usage)
    ${renderLicenseLink(data.license)}

     ##Title
    ${data.title}

    ##Installation
    ${data.install}

    ##Usage
    ${data.usage}

    ##Link to video
    ${data.link}

    ##Githut Username
    ${data.github}

    ##Email Address
    ${data.email}
    `
}

module.exports = generateMarkdown;