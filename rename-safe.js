const fs = require("fs");
const path = require("path");

// 指定目录
const folder = "./";

// 获取所有 html 文件
const files = fs.readdirSync(folder).filter(f => f.endsWith(".html"));

const renameMap = {};

files.forEach((file) => {
    const newName = file
        .replace(/。/g, "_")
        .replace(/ /g, "_")
        .replace(/（/g, "_")
        .replace(/）/g, "_")
        .replace(/-/g, "_");

    fs.renameSync(file, newName);
    renameMap[file] = newName;
});

// 输出映射关系
fs.writeFileSync("rename-map.json", JSON.stringify(renameMap, null, 2));

console.log("✨ 全部完成！");
console.log("📄 rename-map.json 已生成（可查看旧文件名 → 新文件名对应关系）");
console.log("⚠️ 请在左侧 Source Control 提交一次 commit 保存修改！");
