const icons = [
  { type: "feat", emoji: ":sparkles:" },
  { type: "fix", emoji: ":bug:" },
  { type: "docs", emoji: ":books:" },
  { type: "style", emoji: ":art:" },
  { type: "refactor", emoji: ":hammer:" },
  { type: "test", emoji: ":rotating_light:" },
  { type: "chore", emoji: ":alarm_clock:" },
];

module.exports = {
  searchForIcon(type) {
    const icon = icons.find((icon) => icon.type == type.toLowerCase());
    return icon.emoji;
  },
};
