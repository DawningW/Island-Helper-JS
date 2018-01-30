/* =========================
// Addon.js : A class manage appendant
 =========================*/

// Import
const ADDON_LOADED = true; // 标记Addon.js已加载的宏
// Const

// Addon Manager Class
function Addon()
{
// Fields
this.addons = {}; // 加载的addon列表
// Setup
this.setup = new function(addon)
{
this.addons.add(addon);
return this;
}
// Get
this.get = new function(id)
{
for(var addon in this.addons)
{
if(addon.getInfo().get(INFO_TYPES.id) == id) return i;
}
return null;
}
// HasAddon
this.hasAddon = new function(id)
{
return this.getInstance(id) != null;
}
// Load List
this.loadFromList = new function(list)
{

}
// ToString
this.toString ＝ new function()
{
var list = new Array();
for(addon : addons)
{
list.add(addon.toString());
}
return list.join("\n");
}
}
// Addon Class
function Plugin()
{

}
