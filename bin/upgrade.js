const path = require('path');
const fs = require('fs');

const semver = require('semver');
const inquirer = require('inquirer');
const Git = require("nodegit");

const package = require("../package");
const version = package.version;

inquirer.prompt([
    {
        type: 'list',
        name: 'channel',
        message: [package.name + "@" + version + " | release type: "],
        filter: function (val) {
            return val.toLowerCase();
        },
        choices: [
            'patch',
            'minor',
            'major',
            'none'
        ]
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Ready to go?',
        default: true
    },
]).then(answers => {
    const {channel, confirm} = answers;
    if (!confirm) {
        return;
    }
    if (channel === "none") {
        console.log("publish | done, version already in manifest");
        return;
    }

    const pending = semver.inc(version, channel);
    const app = Object.assign({}, package, {
        version: pending
    });
    const json = JSON.stringify(app, null, 2);
    const file = path.join(__dirname, '..', 'package.json');

    console.log("publish | setting version to " + pending);
    console.log("publish | package.json = " + json);
    console.log("publish | path = " + file);

    fs.writeFileSync(file, json, "utf8");

    console.log("publish | done")
});

async function notes() {
    const repo = await Git.Repository.open(path.join(__dirname, '..'));
    const tags = await Git.Tag.list(repo);
    const noteList = await Promise.all(tags.map(o => repo.getReference(`refs/tags/${o}`)));
    const targets = await Promise.all(noteList.map(o => repo.getTag(o.target())));
    return targets.map(o => o.message());
}