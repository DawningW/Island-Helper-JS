/* =========================
// Lang.js : A class manage I18n
 =========================*/

// Import
const LANG_LOADED = true; // 标记Lang.js已加载的宏
// Const

// Lang Class
function Lang()
{
// Fields
this.list = new Array();
this.language = {};
// Translate
this.translate = new function(key, value)
{
var s = this.language[key];
if (s == undefined) return key;
return String.format(s, value);
}
// Can Translate
this.canTranslate = new function(key)
{
return this.language[key] != undefined;
}
// Load
this.load = new function(content)
{

}
this.loadFromStream = new function(stream)
{

}
this.loadFromFile = new function(name)
{

}
this.loadFromResourcePack = new function(name)
{

}
}
