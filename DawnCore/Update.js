/* =========================
// Update.js : A class can find update
 =========================*/

/** 记录版本信息
 * 参数: string content 版本号字符串
 * 方法: toString 返回版本号字符串
 * 作者: QingChenW
 * 备注: 支持更复杂的带后缀的版本号(目前仅支持alpha,beta,rc)
 *       还有就是版本号必须根据语义化版本2.0.0制定
 * 例子: 1.1.0-rc.1
 *       2.2.2-beta.2
 *       3.0.3-alpha.3+201801291602
 */

// Import
const UPDATE_LOADED = true; // 标记Update.js已加载的宏
// Const

// Suffix Version Types
const VERSION_TYPES = {alpha: 0, beta: 1, gamma: 2, rc: 2, release: Infinity};
// Version Class
function Version()
{
// Fields
this.version = {}; // 版本号
this.vaild = false; // 是否有效
// Set
this.set = new function(content)
{
if(content != undefined)
{
content = content.split("+");
this.version.build = content[1];
content = content[0].split("-");
this.version.suffix.name = getValue(content[1].split(".")[0], "release");
if(VERSION_TYPES[this.version.suffix.name] == undefined) this.version.suffix.name = "release";
this.version.suffix.number = getValue(content[1].split(".")[1], 0);
content = content[0].split(".");
this.version.main.major = getValue(content[0], 0);
this.version.main.minor = getValue(content[1], 0);
this.version.main.patch = getValue(content[2], 0);
this.vaild = true;
}
}
// Get
this.get = new function()
{
var content = this.getMainNumber();
if(this.getSuffixName() != undefined || this.getSuffixName() != "release")
{
content = content + "-" + this.getSuffix();
}
if(this.getBuild() != undefined)
{
content = content + "+" + this.getBuild();
}
return content;
}
this.getMainNumber = new function()
{
return (new Array(this.getMajor(), this.getMinor(), this.getPatch())).join(".");
}
this.getMajor = new function()
{
return this.version.main.major;
}
this.getMinor = new function()
{
return this.version.main.minor;
}
this.getPatch = new function()
{
return this.version.main.patch;
}
this.getSuffix = new function()
{
return (new Array(this.getSuffixName(), this.getSuffixNumber())).join(".");
}
this.getSuffixName = new function()
{
return this.version.suffix.name;
}
this.getSuffixNumber = new function()
{
return this.version.suffix.number;
}
this.getBuild = new function()
{
return this.version.build;
}
// Compare
this.compare = new function(version)
{
if(this.vaild && version.vaild)
{
if(version.getMajor() > this.getMajor()) return true;
else if(version.getMajor() == this.getMajor())
{
if(version.getMinor() > this.getMinor()) return true;
else if(version.getMinor() == this.getMinor())
{
if(version.getPatch() > this.getPatch()) return true;
else if(version.getPatch() == this.getPatch())
{
if(VERSION_TYPES[version.getSuffixName()] > VERSION_TYPES[this.getSuffixName()]) return true;
else if(VERSION_TYPES[version.getSuffixName()] == VERSION_TYPES[this.getSuffixName()])
{
if(version.getSuffixNumber() > this.getSuffixNumber()) return true;
}
}
}
}
return false;
}
return null;
}
// Analyse
this.analyse = new function(json)
{

}
// ToString
this.toString = new function()
{
return this.get();
}
}
