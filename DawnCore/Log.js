/* =========================
// Log.js : A class can print some log
 =========================*/
// =========================
const LOG_LEVELS = createEnum("debug", "null", "info", "warn", "error");
/** Logger 一个类，用于输出日志
 * 参数: 
 * 作者: QingChenW
 * 备注: 日志会存储在目录下创建的logs文件夹中
 */
function Log()
{
this.date = new Date();
this.path = infoer.jsPath + "logs/";
this.name = infoer.get(INFO_TYPES.NAME) + format(, "_yyyy-MM-dd") + ".log";
this.showLevel = LOG_LEVELS.INFO;
save(this.path, this.name, true, "+-+-===日志初始化完成===-+-+\n");
}

/** Logger.prototype.log 向日志中输出文字
 * 参数: enum level 等级(详见LOG_LEVELS)
 *       string content 内容
 * 作者: QingChenW
 */
Logger.prototype =
{
setShowLevel: new function(type)
{
this.showLevel = type;
},
log: function(level, content)
{
return save(this.path, this.name, true,
"[" + format(new Date(), "hh:mm:ss") + "]"
+ "[" + languager.get("log." + type) + "]"
+ content + "\n");
}
}