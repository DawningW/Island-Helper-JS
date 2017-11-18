function Addon()
{
this.addons = {};
this.load = new function(jsmod)
{
this.addons.add(jsmod);
return this;
}
this.toString ＝ new function()
{
var lists = {};
for(addon : addons)
{
list.add(addon.toString());
}
return list.join("\n");
}
}