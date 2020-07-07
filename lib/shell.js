const shell = require("shelljs");

module.exports = {
  execGit(filesToAdd, type, message, emoji) {
    if (filesToAdd == "press enter if u want all") filesToAdd = ".";

    shell.exec(`git add ${filesToAdd}`);
    shell.exec(`git commit -m "${type}: ${message} ${emoji}`);
  },
};
