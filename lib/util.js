const symbol = require("log-symbols");
const ora = require("ora");
const download = require("download-git-repo");
const path = require("path");
const fs = require("fs");
const exists = require("fs").existsSync;
const shell = require("shelljs");

// 更新json配置文件
const updateJsonFile = (fileName, obj) => {
  return new Promise(resolve => {
    if (exists(fileName)) {
      const data = fs.readFileSync(fileName).toString();
      let json = JSON.parse(data);
      Object.keys(obj).forEach(key => {
        json[key] = obj[key];
      });
      fs.writeFileSync(fileName, JSON.stringify(json, null, "\t"), "utf-8");
      resolve();
    } else {
      resolve();
    }
  });
};
exports.gitAddressFn = function (type) {
  switch (type) {
    case "管理后台":
      return "yiqing168/react-template#master";
    default:
      return "";
  }
};
// 下载模板
exports.downloadTemplate = function (address, projectName) {
  return new Promise((resolve, reject) => {
    let loading = ora();
    loading.start("开始下载项目模板...");
    const projectPath = path.join(__dirname, projectName);
    if (!exists(projectPath)) {
      download(address, projectPath, { clone: true }, function (err) {
        if (err) {
          console.log(symbol.error, err);
          process.exit(1);
        }
        loading.stop();
        console.log(symbol.success, `项目模板下载成功`);
        let packageJson = path.join(__dirname, `${projectName}/package.json`);
        updateJsonFile(packageJson, { name: projectName }).then(result => {
          resolve(true);
        });
      });
    } else {
      loading.stop();
      console.log(symbol.error, "项目已存在");
      resolve(false);
    }
  });
};
// 初始化git仓库
exports.initGitLab = function (projectName) {
  return new Promise((resolve, reject) => {
    try {
      console.log(symbol.info, `开始初始化${projectName}仓库`);
      const projectPath = path.join(__dirname, projectName);
      shell.cd(projectPath);
      shell.exec("git init");
      shell.exec("git add .");
      shell.exec("git commit -m '创建项目'");
      shell.exec(
        `curl -u "yiqing_168@163.com:d4b82ace479b6e547c025fe234bfbab4d1c5c516" https://api.github.com/user/repos -d '{"name":"'${projectName}'"}'`
      );
      shell.exec(
        `git remote add origin https://github.com/yiqing168/${projectName}.git`
      );
      shell.exec("git push origin master");
      console.log(symbol.success, `${projectName}仓库创建成功`);
      resolve();
    } catch (error) {
      console.log(symbol.error, error);
      process.exit(1);
    }
  });
};
