/* =============================
 * 曙光集合Js 版本V1.0
 * 这是一个为我的世界携带版js开发的实用工具集合，包括了一些实用函数
 * 最后修改时间 4月22日17:47
 * 本Js由曙光工艺(Dawncraft)工作室QingChenW制作
 * Copyright(c) 2016-2017 Dawncraft.All Rights Reserved.
 * 您可以在您的作品中随意使用本工具集合甚至是修改,但必须注明作者,如有原作者也必须注明.
 * 欢迎大家加入QQ工作室讨论群进行讨论
 * QQ讨论群群号:287307326
 * =============================
 * 如何使用本集合
 *
 *
 * =============================
 */

/* 各种常量 */
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const STORAGE = android.os.Environment.getExternalStorageDirectory().getPath();
const JS_DIR =  STORAGE + "/games/com.mojang/minecraftpe/js/";
const WORLDS_DIR = STORAGE + "/games/com.mojang/minecraftWorlds/";
/* 检查更新 */


/* 游戏工具函数 */
/** registerItem 用于注册一个物品
 * 参数: int(请见ITEM_TYPE) type 物品种类
 *       int id 物品的序号ID
 *       int data 物品的最大数据值(损害值)
 *       int count 物品的最大堆叠
 *       string name 物品名称
 *       string texture 物品纹理名称
 *       array recipe 物品合成配方(设置为null为没有配方，格式为[数量, par4Scriptable, par5Scriptable]
 *       int category 物品栏类别(设置为null为不添加到创造物品栏中)，请参考启动器函数表
 *       未知 other 其他数据
 * 作者: QingChenW, 使用时请注明作者
 * 另请参考: ITEM_TYPE
 */
function registerItem(type, id, data, count, name, texture, recipe, category, other)
{
switch(type)
{
// 注册普通物品
case ITEM_TYPE.item:
ModPE.setItem(id, texture, 0, name, count);
Item.setMaxDamage(id, data);
break;
// 注册食物
case ITEM_TYPE.food:
ModPE.setFoodItem(id, texture, 0, add, name, other);
break;
// 注册工具
case ITEM_TYPE.tool:
ModPE.setItem(id, texture, 0, name, count);
Item.setMaxDamage(id, data);
Item.setHandEquipped(id, true);
break;
// 注册盔甲
case ITEM_TYPE.armor:
//Item.defineArmor(par1int, par2String, par3int, par4String, par5String, par6int, par7int, par8int);
// 注册投掷物
case ITEM_TYPE.throwable:
//Item.defineThrowable(par1int, par2String, par3int, par4String, par5int);
throw "未制作，敬请期待";
// 未知类型
default:
throw "unknownItemType:未知的物品种类，无法注册物品";
return;
}
// 注册合成表
if(recipe != null)
{
Item.addShapedRecipe(id, recipe[0], data, recipe[1], recipe[2]);
}
// 注册物品栏
if(category != null)
{
Player.addItemCreativeInv(id, 1, 0);
Item.setCategory(id, category);
}
}

/** registerBlock 用于注册一个方块
 * 参数: int(请见BLOCK_TYPE) type 方块种类
 *       int id 方块的序号ID
 *       string name 方块名称
 *       array textures 方块纹理，请参考启动器函数表
 *       renderType renderType 方块渲染种类，请参考启动器函数表
 *       int destroy 方块破坏时间
 *       int expRes 方块爆炸抗性
 *       int light 方块光照
 *       array shape 方块形状，请参考启动器函数表
 *       array recipe 方块合成配方(设置为null为没有配方，格式为[数量, par4Scriptable, par5Scriptable]
 *       int category 物品栏类别(设置为null为不添加到创造物品栏中)，请参考启动器函数表
 * 作者: QingChenW, 使用时请注明作者
 * 另请参考: BLOCK_TYPE
 */
function registerBlock(type, id, name, textures, renderType, destroy, expRes, light, shape, recipe, category)
{
switch(type)
{
case BLOCK_TYPE.normal:
Block.defineBlock(id, name, textures, 1, false, renderType);
break;
case BLOCK_TYPE.glass:
Block.defineBlock(id, name, textures, 0, true, renderType);
break;
case BLOCK_TYPE.water:
//Block.defineLiquidBlock(id, name, par3Object, par4Object);
return;
break;
}
Block.setRenderLayer(id, type);
Block.setDestroyTime(id, destroy);
Block.setExplosionResistance(id, expRes);
Block.setLightLevel(id, light);
if(shape != null)
{
Block.setShape(id, shape[0], shape[1], shape[2], shape[3], shape[4], shape[5], shape[6]);
}
// 注册合成表
if(recipe != null)
{
Item.addShapedRecipe(id, recipe[0], 0, recipe[1], recipe[2]);
}
// 注册物品栏
if(category != null)
{
Player.addItemCreativeInv(id, 1, 0);
Item.setCategory(id, category);
}
}

function fastDestroyBlocks(x, y, z, id)
{
if(Level.getTile(x , y, z) == id) Level.destroyBlock(x, y, z, true);
if(Level.getTile(x + 1, y, z) == id) fastDestroyBlocks(x + 1, y, z, id);
if(Level.getTile(x + 1, y, z + 1) == id) fastDestroyBlocks(x + 1, y, z + 1, id);
if(Level.getTile(x - 1, y, z) == id) fastDestroyBlocks(x - 1, y, z, id);
if(Level.getTile(x - 1, y, z - 1) == id) fastDestroyBlocks(x - 1, y, z - 1, id);
}

/** getValue 反序列化一个值，并且如果该值不存在则返回默认值
 * 参数: 任意类型 variable 变量
 *      任意类型 defaultValue 默认值
 * 作者: QingChenW
 */
function getValue(variable, defaultValue)
{
var value = variable != undefined ? variable : defaultValue;
switch(typeof defaultValue)
{
case "string": return String(value); break;
case "number": return Number(value); break;
case "boolean": return Boolean(Number(value)); break;
case "array": return value.split("; "); break;
}
return value;
}

/** setValue 序列化一个值，并且如果该值不存在则序列化默认值
 * 参数: 任意类型 variable 变量
 *      任意类型 defaultValue 默认值
 * 作者: QingChenW
 */
function setValue(variable, defaultValue)
{
var value = variable != undefined ? variable : defaultValue;
switch(typeof defaultValue)
{
case "string": return String(value); break;
case "number": return Number(value); break;
case "boolean": return Number(value); break;
case "array": return value.join("; "); break;
}
return value;
}

// 小工具函数
/** killDuoWan 如果非方块启动器则退出
 * 作者: QingChenW
 * 备注: 无聊之作，所以并没有使用
 */
function killDuoWan()
{
const $ = ctx.getPackageName();
if($ != "net.zhuoweizhang.mcpelauncher" && $ != "net.zhuoweizhang.mcpelauncher.pro")
{
toast("本js只能使用方块启动器加载！\n即将退出游戏！");
new java.lang.Thread(ctx).sleep(5000);
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
ctx.finish();
}}));
}
}

/** toast 无前缀的print
 * 参数: string content 内容
 * 作者: 来自互联网，作者忘了。。。
 */
function toast(content)
{ 
ctx.runOnUiThread(new java.lang.Runnable({run: function(){ 
android.widget.Toast.makeText(ctx, content, 0).show();
}}));
}

/** getClipBoard 获取剪贴板
 * 返回值: 未知 content 剪贴板内容
 * 作者: 来自JSIDE，作者忘了。。。
 */
function getClipBoard()
{
var context;
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
cm = ctx.getSystemService(ctx.CLIPBOARD_SERVICE).getText();
}}));
return content;
}

/** openUrl 打开网址
 * 参数: string url 网址
 * 作者: 来自互联网，作者忘了。。。
 */
function openUrl(url)
{
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url)));
}

/** notify 向通知栏中发送通知
 * 参数: string main 主题
 *       string title 标题
 *       string content 内容
 *       string url 打开的网址
 * 作者: 来自互联网，作者忘了。。。
 */
function notify(main, title, content, url)
{
var intent=new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url));
var pi=android.app.PendingIntent.getActivity(ctx,0,intent,0);
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
var nm=ctx.getSystemService(ctx.NOTIFICATION_SERVICE);
var notify=new android.app.Notification(android.R.drawable.btn_dialog,main,0);
notify.defaults=android.app.Notification.DEFAULT_SOUND;
notify.setLatestEventInfo(ctx,title,content,pi);
nm.notify(0,notify);
}});
}

/** decodePicture 用于将base64解码
 * 参数: string base64 一个base字符串
 * 返回值: Bitmap 解码后的位图
 * 作者: QingChenW
 */
function decodePicture(base64)
{
var byte = android.util.Base64.decode(base64,0);
var image = android.graphics.BitmapFactory.decodeByteArray(byte, 0, byte.length);
return image;
}

/** httpGet 用于从网站读取字符串
 * 参数: string url 一个网址
 * 返回值: string 读取后的字符串，如果失败则返回空串
 * 作者: 来自MxGoldo的minimap-mcpe
 */
function httpGet(url)
{
try
{
var content = new java.io.ByteArrayOutputStream();
android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(content);
content.close();
return String(content.toString());
}
catch(error)
{
return "";
}
}

/** httpPost 用于向网站发送数据
 * 参数: string url 一个网址
 * 返回值: string 读取后的字符串，如果失败则返回空串
 * 作者: SER初心
 * 备注: 等待重写
 */
function httpPost(uriAPI, padata)
{
var httpRequest = new org.apache.http.client.methods.HttpPost(uriAPI);
var params = [];
for(var i in padata)params.push(new org.apache.http.message.BasicNameValuePair(i, padata[i]));
try {
	httpRequest.setEntity(new org.apache.http.client.entity.UrlEncodedFormEntity(params, org.apache.http.protocol.HTTP.UTF_8));
	var httpResponse = new org.apache.http.impl.client.DefaultHttpClient().execute(httpRequest);
	if (httpResponse.getStatusLine().getStatusCode() == 200) {
		var strResult = org.apache.http.util.EntityUtils.toString(httpResponse.getEntity());
		return strResult;
	} else {
		return "Error Response" + httpResponse.getStatusLine().toString();
	}
} catch (e) {
	return "Error " + e;
}
}

/** save 保存文件
 * 参数: string path 文件路径
 *       string filename 文件名称
 *       boolean write 是否写入文件
 *       string content 文件内容
 * 作者: 来自MxGoldo的minimap-mcpe,QingChenW修改
 */
function save(path, filename, write, content)
{
try
{
java.io.File(path).mkdirs();
var newFile = new java.io.File(path, filename);
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile, write));
outWrite.append(content);
outWrite.close();
return true;
}
catch(error)
{
print("save, " + error + " (" + error.fileName + " #" + error.lineNumber + ")");
return false;
}
}

/** load 读取文件
 * 参数: string path 文件路径
 *       string filename 文件名称
 * 返回值: string 文件内容
 * 作者: 来自MxGoldo的minimap-mcpe
 * 备注: 我将最后的返回值强制转换成了string
 */
function load(path, filename)
{
var content = "";
if(java.io.File(path + filename).exists())
{
var file = new java.io.File(path + filename),
fos = new java.io.FileInputStream(file),
str = new java.lang.StringBuilder(),
ch;
while((ch = fos.read()) != -1)
{
str.append(java.lang.Character(ch));
}
content = String(str.toString());
fos.close();
}
return content;
}

// 各种类
// (完全没有卵用的吐槽:额其实js是面向对象的,刚学的时候我完全不知道,好吧我刚学的时候连对象是啥都不知道...)
/** Version 一个类，记录版本信息
 * 参数: string content 版本号字符串
 * 方法: toString 返回版本号字符串
 * 作者: QingChenW
 * 备注: 支持更复杂的带后缀的版本号(目前仅支持alpha,beta,rc)
 *       还有就是版本号建议根据语义化版本2.0.0制定
 * 例子: 1.0.0-rc 1
 *       2.0-beta 2
 */
function Version(content)
{
this.isVaild = false;
this.version = {};
if(content != undefined)
{
this.isVaild = true;
var parts = content.split("-");
this.version.number = parts[0].split(".");
this.version.suffix = parts[1].split(" ");
switch(this.version.suffix[0])
{
//case default: this.version.suffixNum = 0;break;
case "alpha": this.version.suffixNum = 1;break;
case "beta": this.version.suffixNum = 2;break;
case "rc": this.version.suffixNum = 3;break;
}
}
this.toString = function(){
return new Array(this.version.number.join("."), this.version.suffix.join(" ")).join("-");
};
}

/** Version.prototype.compare 比较版本
 * 参数: Version newVersion 新版本
 * 返回值: boolean true 有新版本
 *         boolean false 无新版本
 *         null 错误
 * 作者: QingChenW
 */
Version.prototype.compare = function(newVersion)
{
if(newVersion.isVaild)
{
if(this.version.number.length == newVersion.version.number.length)
{
for(var i = 0; i < this.version.number.length; i++)
{
if(newVersion.version.number[i] > this.version.number[i]) return true;
else if(newVersion.version.number[i] < this.version.number[i]) return false;
}
if(newVersion.version.suffixNum > this.version.suffixNum)
{
return true;
}
else if(newVersion.version.suffixNum == this.version.suffixNum)
{
if(newVersion.version.suffix[1] > this.version.suffix[1]) return true;
}
return false;
}
throw "版本号位数不同,无法比较";
}
return null;
};

/** Version.prototype.analyse 解析一个版本json并比较
 * 参数: json/string json 新版本(如果传入的是字符串会尝试转为json,失败则返回null)
 * 返回值: boolean true 有新版本
 *         boolean false 无新版本
 *         null 错误
 * 作者: QingChenW
 * 备注: 尚未完成
 */
Version.prototype.analyse = function(json)
{
    
}

const LOG_LEVEL = {
info: 0,
warn: 1,
error: 2
}

/** Logger 一个类，用于输出日志
 * 参数: string logFilePath 日志路径
 *       string logFileName 日志文件名称(不带后缀)
 * 作者: QingChenW
 * 备注: 日志会存储在目录下创建的logs文件夹中
 */
function Logger(logFilePath, logFileName)
{
this.path = logFilePath + "logs/";
this.name = logFileName + format(new Date(), "_yyyy-MM-dd") + ".log";
save(this.path, this.name, true, "+-+-===日志初始化===-+-+\n");
}

/** Logger.prototype.log 向日志中输出文字
 * 参数: int level 等级(详见LOG_LEVEL)
 *       string content 内容
 * 作者: QingChenW
 */
Logger.prototype.log = function(level, content)
{
var logMessage = "[" + format(new Date(), "hh:mm:ss") + "]";
switch(level)
{
default:
case LOG_LEVEL.info: logMessage += "[信息]"; break;
case LOG_LEVEL.warn: logMessage += "[警告]"; break;
case LOG_LEVEL.error: logMessage += "[错误]"; break;
}
logMessage += content;
return save(this.path, this.name, true, logMessage + "\n");
}

const CONFIG_LEVEL = {
basic: 0,
property: 1,
json: 2
}

/** Configer 一个类，用于生成配置文件
 * 参数: string configPath 配置文件路径
 *       string configName 配置文件文件名称(不带前后缀)
 * 作者: QingChenW
 * 备注: 配置文件会存储在默认目录中(格式是cfg/ini/json)
 Object.toJSONString(), String.parseJSON()
 */
function Configer(configPath, configName, configType)
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

// TODO:有时间写个迭代器
/** Array.prototype.contains 检查数组中是否包含指定元素
 * 参数: object element 指定元素
 * 返回值: boolean true 包含
 *         boolean false 不包含
 * 备注: 其实有array.indexOf(element)这种方法的,不过我没用...
 */
Array.prototype.contains = function(element)
{
for(var i = 0; i < this.length; i++)
{
if(this[i] === element) return true;
}
return false;
}

/** Date.prototype.format 将 Date 转化为指定格式的String
 * 参数: string fmt 格式字符串(月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字))
 * 返回值: string 日期字符串
 * 作者: meizz
 * 例子：
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
 * (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 * 备注: 本来想用prototype来着,可一到游戏中测试就出错,发现Date变成了Object...只好改成普通函数QAQ
 */
function format(date, fmt)
{
var o = {
"M+": date.getMonth() + 1, //月份 
"d+": date.getDate(), //日 
"h+": date.getHours(), //小时 
"m+": date.getMinutes(), //分 
"s+": date.getSeconds(), //秒 
"q+": Math.floor((date.getMonth() + 3) / 3), //季度 
"S": date.getMilliseconds() //毫秒 
};
if(/(y+)/.test(fmt))fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
for(var k in o)
if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
return fmt;
}

// GUI工具函数
/* 备注: 其实这些都是曙光API未完成的东东啦
3	AutoCompleteTextView
AutoCompleteTextView是一个视图，它类似于EditText，不同之处是在用户键入时，它会显示自动完成建议的列表。
10	ProgressBar
进度条视图（ProgressBar）提供一些日常任务，当在后台执行任务时，给出视觉反馈。

Color.BLACK           黑色
Color.BLUE            蓝色
Color.CYAN            青绿色
Color.DKGRAY          灰黑色
Color.GRAY            灰色
Color.GREEN           绿色
Color.LTGRAY          浅灰色
Color.MAGENTA         红紫色
Color.RED             红色
Color.TRANSPARENT     透明
Color.WHITE           白色
Color.YELLOW          黄色
 */
 
/** dip2px 将设备独立像素转换为像素
 * 参数: ctx 就是ctx
 *       dips 设备独立像素
 * 返回值: dp 像素
 */
function dip2px(ctx, dips)
{
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}

/** createScrollMenu 生成一个带滚动条的菜单布局
 * 参数: layout 布局
 * 返回值: scrollView 带滚动条的视图
 */
function createScrollView(layout)
{
var mlayout = new android.widget.RelativeLayout(ctx);
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var scrollView = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx, 2);
scrollView.setPadding(pad, pad, pad, pad);
scrollView.setLayoutParams(svParams);
scrollView.addView(layout);
mlayout.addView(scrollView);
return mlayout;
}

/** createPopupWindow 生成一个窗口
 * 参数: layout 布局
 *       width 窗口宽度
 *       height 窗口高度
 *       color 背景颜色
 *       focusable 触摸其他地方是否会关闭窗口
 *       touchable 是否可以触摸
 * 返回值: PopupWindow 生成的窗口
 * 作者: QingChenW
 */
function createPopupWindow(layout, property, listener)
{
var window = new android.widget.PopupWindow(layout, property.width, property.height);
if(property.background != undefined) window.setBackgroundDrawable(property.background);
if(property.focusable != undefined) window.setFocusable(property.focusable);
if(property.touchable != undefined) window.setTouchable(property.touchable);
window.showAtLocation(ctx.getWindow().getDecorView(), property.gravity, property.x, property.y);
return window;
}

/** createDialog 生成一个对话框
 * 参数: layout 布局
 *       title 对话框标题
 *       cancelable 触摸其他地方以及返回键是否会关闭对话框
 * 返回值: Dialog 生成的对话框
 * 作者: QingChenW
 */
function createDialog(layout, property)
{
var dialog = new android.app.Dialog(ctx);
dialog.setContentView(layout);
dialog.setTitle(property.title);
if(property.cancelable != undefined) dialog.setCancelable(property.cancelable);
if(property.touchCancelable != undefined) dialog.setCanceledOnTouchOutside(property.touchCancelable);
return dialog;
}

/** createAlertDialog 生成一个警告对话框
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: Dialog 生成的对话框
 * 作者: QingChenW
 */
function createAlertDialog(layout, property, listener)
{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(property.title);
dialog.setMessage(property.message);
if(property.cancelable != undefined) dialog.setCancelable(property.cancelable);
if(property.touchCancelable != undefined) dialog.setCanceledOnTouchOutside(property.touchCancelable);
if(property.positive != undefined) dialog.setPositiveButton(property.positive, listener.positive);
if(property.natural != undefined) dialog.setNaturalButton(property.natural, listener.natural);
if(property.negative != undefined) dialog.setNegativeButton(property.negative, listener.negative);
return dialog;
}

/** createProgressDialog 生成一个进度对话框
 *       property 属性  {

                        
                        }
 * 返回值: Dialog 生成的对话框
 * 作者: QingChenW
 */
function createProgressDialog(layout, property)
{
var dialog = new android.app.ProgressDialog(ctx);
dialog.setTitle(property.title);
dialog.setMessage(property.message);
dialog.setMax(property.max);
if(property.style == undefined) property.style = android.app.ProgressDialog.STYLE_HORIZONTAL;
dialog.setProgressStyle(property.style);
if(property.cancelable != undefined) dialog.setCancelable(property.cancelable);
if(property.touchCancelable != undefined) dialog.setCanceledOnTouchOutside(property.touchCancelable);
return dialog;
}

/** createText 生成文字视图
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 * 返回值: TextView 文字视图
 * 作者: QingChenW
 */
function createText(layout, property)
{
var textView = new android.widget.TextView(ctx);
textView.setText(property.text);
if(property.size != undefined) textView.setTextSize(property.size);
if(property.gravity != undefined) textView.setGravity(property.gravity);
if(property.color != undefined) textView.setTextColor(property.color);
layout.addView(textView);
return textView;
}

/** createImage 生成图片视图
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 * 返回值: ImageView 生成的图片布局
 * 作者: QingChenW
 */
function createImage(layout, property)
{
var imageView = new android.widget.ImageView(ctx);
imageView.setImageBitmap(property.image);
if(property.scaleType == undefined) property.scaleType = android.widget.ImageView.ScaleType.CENTER_CROP;
imageView.setScaleType(property.scaleType);
layout.addView(imageView);
return imageView;
}

/** createEditText 生成文本编辑框
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: TextView 文字视图
 * 作者: QingChenW
 */
function createEditText(layout, property)
{
var editText = new android.widget.EditText(ctx);
editText.setText(text);
if(property.hint != undefined) editText.setHint(hint);
if(property.inputType != undefined) editText.setInputType(inputType);
if(property.size != undefined) editText.setTextSize(size);
if(property.color != undefined) editText.setTextColor(color);
layout.addView(editText);
return editText;
}

/** createButton 生成一个按钮
 * 参数: layout 布局
 *       property 属性  {
                        text: 按钮文本(必须)
                        size: 按钮文本尺寸(可选)
                        color: 按钮文本颜色(可选)
                        background: 按钮背景(可选)
                        
                        }
 *       listener 事件监听器{
                        click: 点击事件监听器
                        }
 * 返回值: Button 生成的按钮
 * 作者: QingChenW
 */
function createButton(layout, property, listener)
{
var button = new android.widget.Button(ctx);
button.setText(property.text);
if(property.size != undefined) button.setTextSize(property.size);
if(property.color != undefined) button.setTextColor(property.color);
if(property.background != undefined) setBackground(property.background);
if(listener.click != undefined) button.setOnClickListener(listener.click);
layout.addView(button);
return button;
}

/** createToggleButton 生成开关按钮
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: ToggleButton 生成的开关按钮
 * 作者: QingChenW
 */
function createToggleButton(layout, property, listener)
{
var button = new android.widget.ToggleButton(ctx);
button.setTextOn(property.textOn);
button.setTextOff(property.textOff);
button.setChecked(property.isChecked);
if(property.size != undefined) button.setTextSize(property.size);
if(property.color != undefined) button.setTextColor(property.color);
if(property.background != undefined) setBackground(property.background);
if(listener.click != undefined) button.setOnClickListener(listener.click);
layout.addView(button);
return button;
}

/** createImageButton 生成一个图片按钮
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: ImageButton 生成的图片按钮
 * 作者: QingChenW
 */
function createImageButton(layout, property, listener)
{
var button = new android.widget.ImageButton(ctx);
button.setImageBitmap(property.image);
if(property.scaleType == undefined) property.scaleType = android.widget.ImageView.ScaleType.CENTER_CROP;
button.setScaleType(property.scaleType);
if(property.background != undefined) button.setBackgroundDrawable(property.background);
if(listener.click != undefined) button.setOnClickListener(listener.click);
layout.addView(button);
return button;
}

/** createRadioButton 生成单选按钮
 * 参数: layout 布局
 *       property 属性
 * 返回值: RadioButton 生成的单选按钮
 * 作者: QingChenW
 */
function createRadioButton(layout, property)
{
var button = new android.widget.CheckBox(ctx);
button.setText(property.text);
button.setChecked(property.isChecked);
if(property.size != undefined) button.setTextSize(property.size);
if(property.color != undefined) button.setTextColor(property.color);
layout.addView(button);
return button;
}

/** createRadioGroup 生成单选按钮组
 * 参数: property 属性
 *       listener 事件监听器
 * 返回值: RadioGroup 生成的单选按钮组
 * 作者: QingChenW
 * 备注: 从API里我查到其实radiogroup继承了LinearLayout,所以可以使用setOrientation();
 *       如果有必要的话还可以给radiobutton加params,不过要记住是RadioGroup.LayoutParams
 *       listener是new OnCheckedChangeListener(){function: onCheckedChanged(group, checkedId){}}
 */
function createRadioGroup(property, listener)
{
var group = new android.widget.CheckBox(ctx);
if(property.orientation != undefined) group.setOrientation(property.orientation);
if(listener.change) group.setOnCheckedChangeListener(listener.change);
return group;
}

 /** createCheckBox 生成单选框
 * 参数: layout 布局
 *       property 属性
 *       listener 事件监听器
 * 返回值: CheckBox 生成的单选框
 * 作者: QingChenW
 */
function createCheckBox(layout, property, listener)
{
var check = new android.widget.CheckBox(ctx);
check.setText(property.text);
check.setChecked(property.isChecked);
if(property.size != undefined) check.setTextSize(property.size);
if(property.color != undefined) check.setTextColor(property.color);
if(listener.change != undefined) check.setOnCheckedChangeListener(listener.change);
layout.addView(check);
return check;
}

 /** createSeekBar 生成滑动条
 * 参数: layout 布局
 *       property 属性
 *       listener 事件监听器
 * 返回值: SeekBar 生成的滑动条
 * 作者: QingChenW
 */
function createSeekBar(layout, property, listener)
{
var seekBar = new android.widget.SeekBar(ctx);
seekBar.setMax(property.max);
if(property.progress != undefined) seekBar.setProgress(property.progress);
if(listener.change != undefined) seekBar.setOnSeekBarChangeListener(listener.change);
layout.addView(seekBar);
return seekBar;
}

/** createSpinner 生成下拉菜单
 * 参数: layout 布局
 *       property 属性
 *       listener 事件监听器
 * 返回值: Spinner 生成的下拉菜单
 * 作者: QingChenW
 * 备注: listener是这个select: new android.widget.AdapterView.OnItemSelectedListener(){onItemSelected: function(view){//...}}
 */
function createSpinner(layout, property, listener)
{
var spinner = new android.widget.Spinner(ctx);
if(property.style == undefined) property.style = android.R.layout.select_dialog_multichoice;
var adapter = new android.widget.ArrayAdapter(ctx, property.style, property.adapterArray);
spinner.setAdapter(adapter);
if(listener.select != undefined) spinner.setOnItemSelectedListener(listener.select);
layout.addView(spinner);
return spinner;
}

 /** createLayoutParam 根据布局生成一个param
 * 参数: layout 布局
 *       left 左间距
 *       top 上间距
 *       right 右间距
 *       bottom 下间距
 * 返回值: LayoutParams 生成的param
 * 作者: QingChenW
 */
function createLayoutParam(layout, left, top, right, bottom)
{
if(layout instanceof android.widget.LinearLayout)
{
var param = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
param.setMargins(left, top, right, bottom);
return param;
}
return null;
}

/** getWidth 获取屏幕宽度
 * 返回值: 屏幕宽度
 * 作者: QingChenW
 */
function getWidth()
{
return ctx.getWindowManager().getDefaultDisplay().getWidth();
}

/** getHeight 获取屏幕高度
 * 返回值: 屏幕高度
 * 作者: QingChenW
 */
function getHeight()
{
return ctx.getWindowManager().getDefaultDisplay().getHeight();
}