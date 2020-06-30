const inquirer = require("inquirer");

module.exports = {
  askCommitInfo: () => {
    const questions = [
      {
        name: "filesToAdd",
        type: "input",
        message: "Which files you want to add?",
        default: "all",
      },
      {
        name: "type",
        type: "list",
        choices: [
          {
            name:
              "feat (new feature for the user, not a new feature for build script)",
            value: "Feat",
          },
          {
            name: "fix (bug fix for the user, not a fix to a build script)",
            value: "Fix",
          },
          {
            name: "docs (changes to the documentation)",
            value: "Docs",
          },
          {
            name:
              "style (formatting, missing semi colons, etc; no production code change)",
            value: "Style",
          },
          {
            name:
              "refactor (refactoring production code, eg. renaming a variable)",
            value: "Refactor",
          },
          {
            name:
              "test (adding missing tests, refactoring tests; no production code change)",
            value: "Test",
          },
          {
            name: "chore (updating grunt tasks etc; no production code change)",
            value: "Chore",
          },
        ],
        message: "Which a commit type:",
      },
      {
        name: "message",
        type: "input",
        message: "What do you have done?",
      },
    ];
    return inquirer.prompt(questions);
  },
};
