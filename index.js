const chalk = require("chalk");
const figlet = require("figlet");
const minimist = require("minimist");

const { askCommitInfo } = require("./lib/inquirer");
const { directoryExists } = require("./lib/files");

const icons = [
  { type: "feat", emoji: ":sparkles:" },
  { type: "fix", emoji: ":bug:" },
  { type: "docs", emoji: ":books:" },
  { type: "style", emoji: ":art:" },
  { type: "refactor", emoji: ":hammer:" },
  { type: "test", emoji: ":rotating_light:" },
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

const args = minimist(process.argv.slice(2));

switch (args._[0]) {
  case "init":
    askCommitInfo().then((commitInfo) => {
      console.log(commitInfo);
    });
}

// program.command("")
