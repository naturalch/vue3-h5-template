export default {
  ignores: [commit => commit.includes("init") || commit.includes("(skip cl)")],
  extends: ["@commitlint/config-conventional"],
  // 0 关闭 ｜ 1 警告 ｜ 2 错误
  // always 必须要满足某条件 ｜ never 禁止满足某条件 ｜ as-needed 仅要求必须满足某条件
  rules: {
    "body-leading-blank": [2, "always"], // body部分以空行开头-错误-必须
    "footer-leading-blank": [1, "always"], // footer部分以空行开头-警告-必须
    "header-max-length": [2, "always", 108], // header最大长度-错误-必须
    "subject-empty": [2, "never"], // 空标题-错误-禁止
    "type-empty": [2, "never"], // 空type-错误-禁止
    // type是以下之一-错误-必须
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  }
};
