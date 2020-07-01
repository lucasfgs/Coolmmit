#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const { askCommitInfo } = require("./lib/inquirer");
const { directoryExists } = require("./lib/files");

const icons = [
  { type: "feat", emoji: ":sparkles:" },
  { type: "fix", emoji: ":bug:" },
  { type: "docs", emoji: ":books:" },
  { type: "style", emoji: ":art:" },
  { type: "refactor", emoji: ":hammer:" },
  { type: "test", emoji: ":rotating_light:" },
  { type: "chore", emoji: ":alarm_clock:" },
];

console.log(
  chalk.blueBright(
    figlet.textSync("Coolmmit", {
      horizontalLayout: "default",
    })
  )
);

if (!directoryExists(".git")) {
  console.log(chalk.red("You didn't initialized your git repository yet!"));
}

askCommitInfo().then((commitInfo) => {
  console.log(commitInfo);
  let { filesToAdd, type, message } = commitInfo;
  const icon = icons.find((icon) => icon.type == type.toLowerCase());
  if (filesToAdd == "all") filesToAdd = ".";

  shell.exec(`git add ${filesToAdd}`);
  shell.exec(`git commit -m "${type}: ${message} ${icon.emoji}`);
});
