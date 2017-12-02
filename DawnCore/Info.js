/* =========================
// Info.js : A collection of JS' infomation
 =========================*/
const STORAGE = android.os.Environment.getExternalStorageDirectory().getPath();
const JS_DIR =  STORAGE + "/games/com.mojang/minecraftpe/js/";
const WORLDS_DIR = STORAGE + "/games/com.mojang/minecraftWorlds/";

const INFO_TYPES = createEnum("id", "name", "author", "credit", "website", "update", "depandence");
function Info()
{
this.information = {};
this.jsPath = JS_DIR + this.information.ID;
this.set = new function(type, contect)
{
if(type != undefined)
{
this.information[type] = contect;
}
return this;
}
this.get = new function(type)
{
return this.information[type.toLowerCase()];
}
this.load ＝ new function(stream)
{

}
this.loadFromFile = new function(name)
{

}
this.loadFromResourcePack = new function(name)
{

}
this.getTypeLang = new function(type)
{
return langer.get("info." + type);
};
this.toString = new function()
{
var infos = {};
for(type : types)
{
infos.add(this.getTypeLang(type) + ": " + this.get(type)
}
return infos.join("\n");
}
this.join = new function(split)
{
	
}
}