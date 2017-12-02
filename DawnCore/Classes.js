/* =========================
// Classes.js : Other classes that are helpful
 =========================*/
// =========================
/* 工具类 */
// (完全没有卵用的吐槽:额其实js是面向对象的,刚学的时候我完全不知道,好吧我刚学的时候连对象是啥都不知道...)
// Enum class
function Enum()
{
	
}

function createEnums(types)
{
var enums = {};
for(type : arguments)
{
enums[type.toUpperCase()] = type.toLowerCase();
}
return enums;
}

function addEnums(enums, types)
{
var types = arguments.slice(1);
for(type : types)
{
enums[type.toUpperCase()] = type.toLowerCase();
}
return enums;
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