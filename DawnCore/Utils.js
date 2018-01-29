/* =========================
// Utils.js : A lot of functions that are useful
 =========================*/

// 常量
const UTILS_LOADED = true; // 标记Utils.js已加载的宏


/* 工具函数 */

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
function save(path, name, write, content)
{
try
{
java.io.File(path).mkdirs();
var file = new java.io.File(path, name);
file.createNewFile();
return saveFile(file, write, content);
}
catch(error)
{
print("save, " + error + " (" + error.fileName + " #" + error.lineNumber + ")");
return false;
}
}

function saveFile(file, write, content)
{
try
{
var writer = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file, write));
writer.append(content);
writer.close();
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
function load(path, name)
{
if(java.io.File(path, name).exists())
{
var file = new java.io.File(path, name);
return loadFile(file);
}
return "";
}

function loadFile(file)
{
var content = "",
fos = new java.io.FileInputStream(file),
str = new java.lang.StringBuilder(),
ch;
while((ch = fos.read()) != -1)
{
str.append(java.lang.Character(ch));
}
fos.close();
content = String(str.toString());
return content;
}
