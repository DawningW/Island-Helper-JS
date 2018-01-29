/* =========================
// import.js : Import other js
 =========================*/

function Import(path)
{
try
{
var content;
// 获取输入流
if (path.slice(0, 8) == "libraries")
{
// 从资源包读库文件
path = path.replace(".", "/") + ".js";
content = java.lang.String(ModPE.getBytesFromTexturePack(path));
}
else if (path.slice(0, 0) == "/")
{
// 从存储读外部文件
if(java.io.File(path).exists())
{
var file = new java.io.File(path),
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
}
else if (path.slice(0, 3) == "http")
{
// 从网络读外部文件
throw "尚未制作";
}
else
{
// 路径有误
throw "导入格式有误";
}
// 执行导入的脚本
eval(content);
return true;
}
catch(e)
{
return false;
}
}
