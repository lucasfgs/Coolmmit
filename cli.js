#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const program = require("commander");

const { askCommitInfo } = require("./lib/inquirer");
const { directoryExists } = require("./lib/files");
const { execGit } = require("./lib/shell");
const { searchForIcon } = require("./utils/icons");

program
  .option("-a, --add <file>", 'Same as "Git add ?"')
  .option("-t, --type <type>", "Which your commit type")
  .option("-m, --message <msg>", "Put your commit message");

program.parse(process.argv);

console.log(
  chalk.blueBright(
    figlet.textSync("Coolmmit", {
      horizontalLayout: "default",
    })
  )
);

if (!directoryExists(".git")) {
  console.log(chalk.red("You didn't initialized your git repository yet"));
}

if (program.type && program.message) {
  let filesToAdd;
  program.add ? (filesToAdd = program.add) : (filesToAdd = ".");

  execGit(
    filesToAdd,
    program.type,
    program.message,
    searchForIcon(program.type)
  );
} else {
  askCommitInfo().then((commitInfo) => {
    const { filesToAdd, type, message } = commitInfo;

    execGit(filesToAdd, type, message, searchForIcon(type));
  });
}
