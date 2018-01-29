/* =========================
// Info.js : A collection of infomation
 =========================*/

// Import
const INFO_LOADED = true; // 标记Info.js已加载的宏
// Const
const STORAGE = android.os.Environment.getExternalStorageDirectory().getPath();
const SCRIPTS_DIR = STORAGE + "/games/com.mojang/minecraftpe/scripts/";
const WORLDS_DIR = STORAGE + "/games/com.mojang/minecraftWorlds/";
// Info Types
const INFO_TYPES = {id: "id", name: "name", author: "author", credit: "credit", website: "website", update: "update", depandence: "depandence"};
// Info Class
function Info()
{
// Fields
this.information = new Array(); // 插件信息
this.dataPath = null; // 插件目录
// Setter
this.set = new function(type, contect)
{
if(type == INFO_TYPES[type])
this.information[type] = contect;
return this;
}
// Getter
this.get = new function(type)
{
if(type == INFO_TYPES[type])
return this.information[type];
}
// Load
this.load ＝ new function(stream)
{

}
this.loadFromFile = new function(name)
{

}
this.loadFromResourcePack = new function(name)
{

}
// Init
this.init = new function()
{
this.dataPath = SCRIPTS_DIR + this.get(INFO_TYPES.id);
}
// ToString
this.toString = new function()
{
var info = new Array();
for(var type in INFO_TYPES)
{
info.add(INFO_TYPES + ": " + this.get(type);
}
return info.join("\n");
}
}
