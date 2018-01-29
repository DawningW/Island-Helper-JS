/* =========================
// Config.js : A class can save configs
 =========================*/

// Import
const CONFIG_LOADED = true; // 标记Config.js已加载的宏
// Const
const TAG_REGEXP = new RegExp("^\[\w+\]$"); // ini标签的正则表达式
// Config Types
const CONFIG_TYPES = {basic: "basic", property: "property", json: "json"};
// Config Class
function Config()
{
// Fields
this.confType = CONFIG_TYPES.basic; // 配置种类
this.configuration = new Array(); // 配置的默认值
this.comments = new Array(); // 配置的注释
this.confFile = null; // 配置文件
this.confCache = new Array(); // 配置缓存
// Add
this.add = function(key, value, comment)
{
var keys = key.split(".");
if(this.confType == CONFIG_TYPES.basic)
{
this.configuration[keys[0]] = value;
this.comments[keys[0]] = comment;
}
else if(this.type == CONFIG_TYPES.property)
{
var section = getValue(keys[0], "Default");
if(this.configuration[section] == undefined) this.configuration[section] = {};
this.configuration[section][keys[1]] = value;
if(this.comments[section] == undefined) this.comments[section] = {};
this.comments[section][keys[1]] = comment;
}
else if(this.type == CONFIG_TYPES.json)
{
throw "您无法为json类型的配置文件设置默认值,请手动处理";
}
}
// Set
this.set = function(key, value)
{
var keys = key.split(".");
if(this.type == CONFIG_TYPES.basic)
{
this.confCache[keys[0]] = value;
}
else if(this.type == CONFIG_TYPES.property)
{
var section = getValue(keys[0], "Default");
if(this.confCache[section] == undefined) this.confCache[section] = {};
this.confCache[section][keys[1]] = value;
}
else if(this.type == CONFIG_TYPES.json)
{
this.confCache = value;
}
this.save();
}
// Get
this.get = function(key)
{
var keys = key.split(".");
if(this.type == CONFIG_TYPES.basic)
{
return this.confCache[keys[0]];
}
else if(this.type == CONFIG_TYPES.property)
{
return this.confCache[keys[0]][keys[1]];
}
else if(this.type == CONFIG_TYPES.json)
{
return this.confCache;
}
}
// Load
this.load = function()
{
if(this.type == CONFIG_TYPES.basic)
{
var temp = {};
for(var entry in loadFile(this.confFile).split("\n"))
{
if(entry.substring(0, 2) != "//")
{
entry = entry.split(":");
temp[entry[0]] = entry[1];
}
}
for(var i in this.configuration)
{
this.confCache[i] = getValue(temp[i], this.configuration[i]);
}
}
else if(this.type == CONFIG_TYPES.property)
{
var section = "Default", temp = {};
for(var entry in loadFile(this.confFile).split("\n"))
{
if(entry.substring(0, 1) != "#")
{
if(section_REGEXP.test(entry))
{
section = entry.slice(1, -1);
if(temp[section] == undefined) temp[section] = {};
}
else 
{
entry = entry.split("=");
temp[section][entry[0]] = entry[1];
}
}
}
for(var j in this.configuration)
{
for(var k in this.configuration[j])
{
if(this.confCache[j] == undefined) this.confCache[j] = {};
this.confCache[j][k] = getValue(temp[j][k], this.configuration[j][k]);
}
}
}
else if(this.type == CONFIG_TYPES.json)
{
this.confCache = JSON.parse(loadFile(this.confFile));
}
}
// Save
this.save = function()
{
if(this.type == CONFIG_TYPES.basic)
{
var temp = [];
temp.push("// " + getInfo().get(INFO_TYPES.name) + " configuration");
temp.push("// " + format(new Date(), "yyyy-MM-dd hh:mm:ss"));
for(var i in this.configuration)
{
temp.push("// " + this.comments[i]);
temp.push(i + ":" + setValue(this.confCache[i], this.configuration[i]));
}
saveFile(this.confFile, false, temp.join("\n"));
}
else if(this.type == CONFIG_TYPES.property)
{
var temp = [];
temp.push("# " + getInfo().get(INFO_TYPES.name) + " configuration");
temp.push("# " + format(new Date(), "yyyy-MM-dd hh:mm:ss"));
for(var j in this.configuration)
{
temp.push("[" + j + "]");
for(var k in this.configuration[j])
{
temp.push("# " + this.comments[j][k]);
temp.push(k + "=" + setValue(this.confCache[j][k], this.configuration[j][k]));
}
}
saveFile(this.confFile, false, temp.join("\n"));
}
else if(this.type == CONFIG_TYPES.json)
{
var temp = JSON.stringify(this.confCache, null, 4);
saveFile(this.confFile, false, temp.join("\n"));
}
}
// Init
this.init = new function()
{
var path = getInfo().dataPath + "/configs";
var name = getInfo().get(INFO_TYPES.name);
switch(this.confType)
{
default:
case CONFIG_TYPES.basic: name += ".cfg"; break;
case CONFIG_TYPES.property: name += ".ini"; break;
case CONFIG_TYPES.json: name += ".json"; break;
}
this.confFile = new java.io.File(path, name);
}
// ToString
this.toString = new function()
{
return this.confCache.join;
}
}
