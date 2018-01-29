/* =========================
// Log.js : A class can print some log
 =========================*/

// Import
const LOG_LOADED = true; // 标记Log.js已加载的宏
// Log Levels
const LOG_LEVELS = {debug: "debug", nul: "null", info: "info", warn: "warn", error: "error"};
const LOG_SHOW_LEVELS = {debug: 0, nul: 1, info: 2, warn: 3, error: 4};
// Log Class
function Log()
{
// Fields
this.showLevel = LOG_LEVELS.info; // 输出等级
this.logFile = null; // 日志文件
this.logCache = new Array(); // 日志缓存
this.canWrite = false; // 是否可写入
// Log
this.log = new function(level, content)
{
if(level == LOG_LEVELS[level] && LOG_SHOW_LEVELS[level] >= LOG_SHOW_LEVELS[this.showLevel])
{
content = "[" + format(new Date(), "hh:mm:ss") + "]" + "[" + level + "]" + content;
System.out.println(content);
this.logCache.push(content);
this.save();
}
}
// Save
this.save = new function()
{
if(this.canWrite)
{
while(this.logCache.length > 0)
{
save(this.logPath, this.logName, true, this.logCache.shift());
}
}
}
// SetShowLevel
this.setShowLevel = new function(level)
{
if(level == LOG_LEVELS[level])
this.showLevel = level;
}
// Init
this.init = new function()
{
var path = getInfo().dataPath + "/logs";
var name = getInfo().get(INFO_TYPES.name) + format(new Date(), "_yyyy-MM-dd") + ".log";
this.logFile = new java.io.File(path, name);
this.canWrite = true;
}
// ToString
this.toString = new function()
{
return loadFile(this.logFile);
}
}
