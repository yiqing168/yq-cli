const symbol = require("log-symbols");
const inquirer = require("inquirer");
const home = require("user-home");
const util = require("../lib/util");

const promptList = [
  {
    type: "list",
    message: "请选择项目类型:",
    name: "type",
    choices: ["管理后台"],
  },
  {
    type: "confirm",
    message: "是否需要自动创建gitlab仓库,并提交模板",
    name: "isAutoSubmit",
    prefix: "前缀",
  },
];
module.exports = async function create(projectName, program) {
  console.log(__dirname, "=============", home);
  console.log(symbol.info, `开始配置项目${projectName}`);
  let answers = await inquirer.prompt(promptList);
  console.log(answers); // 返回的结果
  let gitAddress = util.gitAddressFn(answers.type);
  let template = await util.downloadTemplate(gitAddress, projectName);
  if (template && answers.isAutoSubmit) {
    let gitLab = util.initGitLab(projectName);
  }
};
