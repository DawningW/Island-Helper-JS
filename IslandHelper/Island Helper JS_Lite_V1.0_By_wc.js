//空岛小帮手精简版Js 版本V1.0
//本Js由Wdawning工作室QingChenW制作
//Copyright© 2016 Wdawning.All Rights Reserved.
//禁止修改本js.不过你可以参考少量算法.
//QingChenW简称wc
//欢迎大家加入讨论群进行讨论,群号:287307326
//最后修改时间 2016年9月15日 12:37
//本插件为精简版,仅包含挖石机,砍树和黑曜石变岩浆
//挖石机ID为255

Block.defineBlock(255,"挖石机",[["redstone_block",0],["stonecutter",2],["stonecutter",0],["stonecutter",0],["stonecutter",0],["stonecutter",0]],1,false,0);
Block.setDestroyTime(255,3);
Player.addItemCreativeInv(255,1,0);
Item.addShapedRecipe(255,1,0,["aba","b b","aba"],["a",4,0,"b",331,0]);
Item.setCategory(255,ItemCategory.DECORATION);

const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//挖石机
var place,dX,dY,dZ,wait,cut = false;

place = false;
wait = 0;

function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)
{
//挖石机
if(Level.getTile(x,y,z) == 255 && !((itemId == 54 || itemId == 146) && side == 1))
{
if(place == false)
{
place = true;
dX = x;
dY = y;
dZ = z;
preventDefault();
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"挖石机已启动！再点击一次关闭！每次重新加载存档时都需要点击以启动！");
//clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"测试功能 开启状态:"+place+" X:"+dX+" Y:"+dY+" Z:"+dZ);
}
else if(place == true && x == dX && y == dY && z == dZ)
{
place = false;
preventDefault();
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"挖石机已关闭！");
}
else
{
preventDefault();
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"每个存档内只能启动一个挖石机，这不是Bug！");
}
}
//砍树
if(cut == true)
{
if(itemId == 271 || itemId == 275 || itemId == 279 || itemId == 286 || itemId == 258)
{
if(blockId == 17 || blockId == 162)
{
var bll=Level.getData(x,y,z);
if(bll>=4&&bll<8){bll-=4}
else if(bll>=8){bll-=8}

Level.destroyBlock(x, y, z, false);
Level.dropItem(x,y,z,0,blockId,1,bll);
for(var i = 1; i <= 128; i++)
{
if(getTile(x,y+i,z) == 17 || getTile(x,y+i,z) == 162)
{
Level.destroyBlock(x, y+i, z, false);
Level.dropItem(x,y+i,z,0,blockId,1,bll);
}
else{break;}
}
preventDefault();
}
}
}
//黑曜石变岩浆
if(itemId == 325 && itemDamage == 0 && blockId == 49)
{
if(Player.getCarriedItemCount() > 1)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),325,Player.getCarriedItemCount()-1,0);
Player.addItemInventory(325,1,10);
Level.setTile(x,y,z,0,0);
}
else
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),325,1,10);
Level.setTile(x,y,z,0,0);
}
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"黑曜石已经变成岩浆，请小心！");
}
}

function modTick()
{
if(wait == 10)
{
wait = 0;
if(place == true)
{
if(getTile(dX,dY-1,dZ) == 4)
{
if((getTile(dX,dY+1,dZ) == 54 || getTile(dX,dY+1,dZ) == 146) && (Level.getChestSlot(dX,dY+1,dZ,0) == 270 || Level.getChestSlot(dX,dY+1,dZ,0) == 274 || Level.getChestSlot(dX,dY+1,dZ,0) == 257 || Level.getChestSlot(dX,dY+1,dZ,0) == 285 || Level.getChestSlot(dX,dY+1,dZ,0) == 278))
{
//clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"测试功能:当前镐附加值为"+Level.getChestSlotData(dX,dY+1,dZ,0));
//判断格数
for(var dslot = 1;((Level.getChestSlot(dX,dY+1,dZ,dslot) !== 4 && Level.getChestSlot(dX,dY+1,dZ,dslot) !== 0) || (Level.getChestSlot(dX,dY+1,dZ,dslot) == 4 && Level.getChestSlotCount(dX,dY+1,dZ,dslot) == 64)) && dslot < 26;dslot++);
//clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"测试功能:当前挖石格数为"+dslot);
//挖石并放在箱子里
if(dslot < 27)
{
if(!((Level.getChestSlot(dX,dY+1,dZ,26) !== 4 && Level.getChestSlot(dX,dY+1,dZ,26) !== 0) || (Level.getChestSlot(dX,dY+1,dZ,26) == 4 && Level.getChestSlotCount(dX,dY+1,dZ,26) == 64)))
{
if(Level.getChestSlot(dX,dY+1,dZ,0) == 270 && Level.getChestSlotData(dX,dY+1,dZ,0) < 60 || Level.getChestSlot(dX,dY+1,dZ,0) == 274 && Level.getChestSlotData(dX,dY+1,dZ,0) < 132 || Level.getChestSlot(dX,dY+1,dZ,0) == 257 && Level.getChestSlotData(dX,dY+1,dZ,0) < 251 || Level.getChestSlot(dX,dY+1,dZ,0) == 285 && Level.getChestSlotData(dX,dY+1,dZ,0) < 33 || Level.getChestSlot(dX,dY+1,dZ,0) == 278 && Level.getChestSlotData(dX,dY+1,dZ,0) < 1562)
{
Level.destroyBlock(dX,dY-1,dZ,false);
Level.setChestSlot(dX,dY+1,dZ,dslot,4,0,Level.getChestSlotCount(dX,dY+1,dZ,dslot)+1);
//设置镐的耐久
Level.setChestSlot(dX,dY+1,dZ,0,Level.getChestSlot(dX,dY+1,dZ,0),Level.getChestSlotData(dX,dY+1,dZ,0)+1,1);
}
else
{
place = false;
Level.setChestSlot(dX,dY+1,dZ,0,0,0);
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"镐已损坏，挖石机已停止！");
}
}
else
{
place = false;
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"箱子已满，挖石机已停止！");
}
}
//结束
}
else
{
place = false;
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"请在挖石机上方放置箱子并且在第一格内放置一个任意种类的稿。");
}
}
else if(!(getTile(dX,dY-1,dZ) == 0 || getTile(dX,dY-1,dZ) == 4))
{
place = false;
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"挖石机只能用来挖原石！");
}
}
}
else
{
wait++;
}
}

function destroyBlock(x,y,z)
{
if(getTile(x,y,z) == 255 && place == true && x == X && y == Y && z == Z && !(Level.getGameMode() == 1 && (Player.getCarriedItem() == 268 || Player.getCarriedItem() == 272 || Player.getCarriedItem() == 267 || Player.getCarriedItem() == 283 || Player.getCarriedItem() == 276 )))
{
place = false;
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"挖石机已破坏！");
}
}

function leaveGame()
{
cut = false;
place = false;
wait = 0;
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
if(gui!=null){gui.dismiss();}
}}));
}

function newLevel()
{
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"欢迎使用由QingChenW制作的空岛小帮手精简版。");
ctx.runOnUiThread(new java.lang.Runnable({run:function()
{
try{
gui=new android.widget.PopupWindow();
var layout=new android.widget.RelativeLayout(ctx);
var button=new android.widget.ToggleButton(ctx);
button.setTextOn("砍树开");
button.setTextOff("砍树关");
button.setTextSize(18);
button.setChecked(cut);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(cut){cut = false}
else
{cut = true;
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"快速砍树已开启。");
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"本插件为精简版,仅包含挖石机,砍树和黑曜石变岩浆。");
}
}}));
layout.addView(button);
gui.setContentView(layout);
gui.setWidth(128);
gui.setHeight(128);
gui.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,256);
}
catch(err){print("Error:"+err);}
}}));
}