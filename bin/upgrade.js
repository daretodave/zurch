const path = require('path');

const semver = require('semver');
const inquirer = require('inquirer');
const Git = require("nodegit");

const package = require("../package");

const version = package.version;
const release = {
    major: semver.inc(version, "major"),
    minor: semver.inc(version, "minor"),
    patch: semver.inc(version, "patch")
};
inquirer.prompt([
    {
        type: 'list',
        name: 'channel',
        message: [package.name+"@"+version + " | release type: "],
        filter: function(val) {
            return val.toLowerCase();
        },
        choices: [
            'patch',
            'minor',
            'major'
        ]
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});

const pending = semver.inc(version, "major");

console.log(pending);

Git.Repository
    .open(path.join(__dirname, '..'))
// Open the master branch.
    .then(function(repo) {
        return repo.getTagByName("1.0.10");
    })
    // Display information about commits on master.
    .then(function(firstCommitOnMaster) {
        // Create a new history event emitter.
        var history = firstCommitOnMaster.history();

        // Create a counter to only show up to 9 entries.
        var count = 0;

        // Listen for commit events from the history.
        history.on("commit", function(commit) {
            // Disregard commits past 9.
            if (++count >= 9) {
                return;
            }

            // Show the commit sha.
            console.log("commit " + commit.sha());

            // Store the author object.
            var author = commit.author();

            // Display author information.
            console.log("Author:\t" + author.name() + " <" + author.email() + ">");

            // Show the commit date.
            console.log("Date:\t" + commit.date());

            // Give some space and show the message.
            console.log("\n    " + commit.message());
        });

        // Start emitting events.
        history.start();
    }).catch(e => {
        console.error(e)
})