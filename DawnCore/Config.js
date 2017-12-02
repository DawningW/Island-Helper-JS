/* =========================
// Config.js : A class can save configs
 =========================*/
const CONFIG_LEVEL = {
basic: 0,
property: 1,
json: 2
}

/** Config 一个类，用于生成配置文件
 * 参数: string configPath 配置文件路径
 *       string configName 配置文件文件名称(不带前后缀)
 * 作者: QingChenW
 * 备注: 配置文件会存储在默认目录中(格式是cfg/ini/json)
 Object.toJSONString(), String.parseJSON()
 */
function Config(configPath, configName, configType)
{
this.path = configPath;
this.name = configName;
this.type = configType;
switch(this.type)
{
default:
case CONFIG_LEVEL.basic: this.name += ".cfg"; break;
case CONFIG_LEVEL.property: this.name += ".ini"; break;
case CONFIG_LEVEL.json: this.name += ".json"; break;
}
this.defaultConfigs = {};
this.comments = {};
this.configs = {};
}

/** Configer.prototype.add 向配置文件中加入默认选项
 * 参数: string key 索引字符串(当然序号也可以)
 *      anyone value 键值
 * 作者: QingChenW
 */
Configer.prototype.add = function(tag, key, value, comment)
{
if(this.type == CONFIG_LEVEL.basic)
{
this.defaultConfigs[key] = value;
this.comments[key] = comment;
}
else if(this.type == CONFIG_LEVEL.property)
{
var tag2 = getValue(tag, "Default");
if(this.defaultConfigs[tag2] == undefined)this.defaultConfigs[tag2] = {};
this.defaultConfigs[tag2][key] = value;
if(this.comments[tag2] == undefined)this.comments[tag2] = {};
this.comments[tag2][key] = comment;
}
else if(this.type == CONFIG_LEVEL.json)
{
throw "您无法为json类型的配置文件设置默认值,请手动处理";
}
}

Configer.prototype.get = function(key)
{
var keys = key.split(".");
if(this.type == CONFIG_LEVEL.basic)
{
return this.configs[keys[0]];
}
else if(this.type == CONFIG_LEVEL.property)
{
return this.configs[keys[0]][keys[1]];
}
else if(this.type == CONFIG_LEVEL.json)
{
return this.configs;
}
}

Configer.prototype.set = function(key, value)
{
var keys = key.split(".");
if(this.type == CONFIG_LEVEL.basic)
{
this.configs[keys[0]] = value;
}
else if(this.type == CONFIG_LEVEL.property)
{
if(this.configs[keys[0]] == undefined)this.configs[keys[0]] = {};
this.configs[keys[0]][keys[1]] = value;
}
else if(this.type == CONFIG_LEVEL.json)
{
this.configs = value;
}
this.save();
}

/** Configer.prototype.load 读取配置文件
 * 作者: QingChenW
 */
Configer.prototype.load = function()
{
if(this.type == CONFIG_LEVEL.basic)
{
var tempConfig = {};
var configFile = load(this.path + this.name).split("\n");
for(var i = 0; i < configFile.length; i++)
{
if(configFile[i].substring(0, 1) != "//")
{
tempConfig[configFile[i].split(":")[0]] = configFile[i].split(":")[1];
}
}
for(var k in this.defaultConfigs)
{
this.configs[k] = getValue(tempConfig[k], this.defaultConfigs[k]);
}
}
else if(this.type == CONFIG_LEVEL.property)
{
var regExp = new RegExp("^\[\w+\]$");// 原来的正则表达式是^\[\w+\]$
var tempTag = "Default", tempConfig = {};
var configFile = load(this.path + this.name).split("\n");
for(var i = 0; i < configFile.length; i++)
{
if(configFile[i].substring(0, 1) != "//")
{
if(regExp.test(configFile[i]))
{
tempTag = tagString.split("[")[1].split("]")[0];
if(tempConfig[tempTag] == undefined)tempConfig[tempTag] = {};
}
else
tempConfig[tempTag][configFile[i].split("=")[0]] = configFile[i].split("=")[1];
}
}
for(var t in this.defaultConfigs)
{
for(var k in this.defaultConfigs[t])
{
if(this.configs[t] == undefined)this.configs[t] = {};
this.configs[t][k] = getValue(tempConfig[t][k], this.defaultConfigs[t][k]);
}
}
}
else if(this.type == CONFIG_LEVEL.json)
{
this.configs = JSON.parse(load(this.path + this.name));
}
}

/** Configer.prototype.save 保存配置文件
 * 作者: QingChenW
 */
Configer.prototype.save = function()
{
if(this.type == CONFIG_LEVEL.basic)
{
var configFile = [];
for(var k in this.defaultConfigs)
{
configFile.push("// " + this.comments[k]);
configFile.push(k + ":" + setValue(this.configs[k], this.defaultConfigs[k]));
}
save(this.path, this.name, false, configFile.join("\n"));
}
else if(this.type == CONFIG_LEVEL.property)
{
var configFile = [];
for(var t in this.defaultConfigs)
{
configFile.push("[" + t + "]");
for(var k in this.defaultConfigs[t])
{
configFile.push("// " + this.comments[t][k]);
configFile.push(k + "=" + setValue(this.configs[t][k], this.defaultConfigs[t][k]));
}
}
save(this.path, this.name, false, configFile.join("\n"));
}
else if(this.type == CONFIG_LEVEL.json)
{
var configFile = JSON.stringify(this.configs, null, 4);
save(this.path, this.name, false, configFile);
}
}