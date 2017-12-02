/* =========================
// Update.js : A class can find update
 =========================*/
/* 检查更新 */
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