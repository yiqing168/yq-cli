#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const create = require("../src/create");

console.log(chalk.green("欢迎使用 yq-cli"));
let commandMap = {
  // 创建项目
  create: {
    usages: ["yq-cli create ProjectName"],
    alias: "c", // 命令简称
  },
};
// 命令
Object.keys(commandMap).forEach(command => {
  let commandObj = commandMap[command];
  program
    .command(`${command} <projectName>`)
    .alias(commandObj.alias)
    .action(projectName => {
      switch (command) {
        case "create":
          create(projectName, program);
          break;
        default:
          break;
      }
    });
});
program.version(require("../package.json").version, "-v, --version");
program.parse(process.argv);
