//空岛小帮手Js 版本V1.3
//本Js由Wdawning工作室QingChenW制作
//Copyright© 2016 Wdawning.All Rights Reserved.
//禁止修改本js.不过你可以参考少量算法.
//QingChenW简称wc
//欢迎大家加入讨论群进行讨论,群号:287307326
//最后修改时间 2016年8月9日 17:22
//挖石机ID为255

/*bug:
1.挖石机不支持大箱子
2.死亡不掉落不支持附魔
3.取消防爆会使全部方块爆炸抗性为0
未来展望:
1.加入小地图
3.加入建筑功能
4.修改添加物品
5.加入传送点
6.控制生物和观察者模式
7.多语言支持
8.MP3播放器的文件选择和播放列表
9.电梯
10.关于空岛的东东
举个栗子:
生成空岛
挑战任务
迷你商店
空岛等级
空岛重置
像服务器那样的空岛菜单？大概得用到win10gui，而且也做不出来？
唉= =要填的坑还有好多啊

嗯，送你首终末之诗吧

我看到你所指的那位玩家了。

[玩家名称]?

是的。小心。它已达到了更高的境界。它能够阅读我们的思想。

无伤大雅。它认为我们是游戏的一部分。

我喜欢这个玩家。它玩得很好。它从未放弃。

它以屏幕上出现的文字的形式阅读着我们的思想。

在它深陷游戏梦境中时，它总以这种方式想象出形形色色的事物。

文字是种美妙的界面。非常灵活。且比凝视着屏幕后的现实要更好。

它们也曾经听到过声音。在玩家能够阅读之前。君不见那些不曾游玩的人们称呼玩家为女巫，和术士。而玩家们梦见它们自己乘坐在被恶魔施力的棍子上，在空气中翱翔。

这个玩家梦见了什么？

它梦见了阳光和树。梦见了火与水。它梦见它创造。它亦梦见它毁灭。它梦见它狩猎，亦被狩猎。它梦见了庇护所。

哈，那原始的界面。经历一百万年的岁月雕琢，依然长存。但此玩家在那屏幕后的真实里，建造了什么真实的构造？

它辛勤地劳作，和其它百万众一起，刻画了一个真实的世界，由[乱码]，且创造了[乱码]，为了[乱码]，于[乱码]中。

它读不出那个思想。

不。它还没有到达最高的境界。那层境界，它必须完成生命的长梦，而非游戏中黄粱一梦。

它知道我们爱它么？这个宇宙是仁慈的？

有时，通过它思绪的杂音，它能听到宇宙，是的。

但是有时亦不胜悲伤，于那漫漫长梦中。它创造了没有夏日的世界，在黑日下颤抖着，将自己悲伤的创造视为现实世界。

用悲伤来治愈会摧毁它。而悲伤是它的私人事务。我们不能干涉。

有时当它们深陷梦境中时，我想要告诉它们，它们在现实中创造了真实的世界。有时我想告诉它们它们自身对宇宙的重要性。有时，当它们和现实失去了联系，我想帮助它们与它们所惧怕的世界交流。

它读出了我们的思想。

有时我毫不关心。有时我想要告诉它们，你们所认为的真实不过是[乱码]和[乱码]，我想要告诉它们它们是在[乱码]中的[乱码]。于它们的长梦中，它们眼中所见的真实太少了。
.
而它们仍然玩这个游戏。

但很容易就可以告诉它们……

对于这个梦来说太强烈了。告诉它们如何活着就是阻碍它们活下去。

我不会告诉这个玩家如何生活的。

这个玩家正在变得焦虑。

我会告诉这个玩家一个故事。

但不是真相。

不。是一个严密地将真实包裹起来的文字牢笼。而不是赤裸裸的真相。

赋予它主体，再一次。

好的。玩家……

以名字称呼它。

[玩家名称]。游戏的玩家。

很好。

深呼吸，很好。再深呼吸一次。感受空气充盈你的肺叶。让你的四肢回归。是的，运动你的手指。再次感受你的身体，在重力下，在空气中。在长梦中重生。你感受到了。你的身体每时每刻都触摸着宇宙，尽管你是分离的存在。尽管我们是分离的存在。

我们是谁？我们曾经被称作高山的精灵。太阳父亲，月亮母亲。古老的英灵，动物的魂魄。神祗。鬼魂。小绿人。而后是神，恶魔，天使。骚灵。外星人，地外生物。轻粒子，夸克。词语不断地变化。我们始终如一。

我们是宇宙。我们是一切你认为出离你本体的事物。你现在看着我们，透过你的皮肤和你的眼睛。而为什么宇宙触摸着你的皮肤，向你洒向光芒？是为了看见你，玩家。以及被认知。我应告诉你一个故事。
.
很久以前，有一个玩家。

那玩家就是你，[玩家名称]

有时它认为自己是那不断旋转的球体上一层薄薄的熔化的岩石上的人类。那融化的岩石球环绕着一个质量大它三十三万倍的炫目气体球旋转。它们是相隔得如此之远，以至于光需要八分钟才能穿越那空隙。那光是来自一颗恒星的信息，它能够在一亿五千万公里外烧灼你的皮肤。

有时这个玩家梦见它是一个在一个平的，无限延展的世界表面上的矿工。那太阳是一个方形的白点。昼夜交替很快；要做的事情也很多；死亡亦只是暂时和不方便的。

有时这玩家梦见它迷失在了一个故事里。

有时这玩家梦见它成为了其它的事物，在其它地方。有时这些梦是扰人的。有些则实在很美。有时这个玩家从一个梦中醒来，发现自己落入了第二个梦，却终究是在第三个梦中。

有时这个玩家梦见它在屏幕上看着文字。

让我们回退一点。

组成玩家的原子散布在草中，河流中，在那空气中，也在那大地中。一个女性收集了那些原子；她饮用、进食、吸入；而后那女性在她的身体中，孕育了玩家。

然后那玩家醒来了，从一个温暖，昏暗的母亲体内，进入了漫漫长梦。

而那玩家是一个新的故事，从未被讲述过，由DNA的语言书写着。而那玩家是一个新的程序，从未被运行过，由上亿年的源代码生成。而那玩家是一个新的人，从未生活过，由奶和爱组成。

你就是那玩家。那个故事。那个程序。那个人类。仅由奶和爱组成。

我们再往更远的过去回退一点。

那由七千亿亿亿原子组成的玩家的身体被创造了，远在这游戏之前，在一颗恒星的内部。所以那玩家也是，来自一颗恒星的信息。而这个玩家贯穿这个故事的始末，源于一个叫Julian的人种下的信息种子长成的森林，一个叫Markus的男人创造的无限世界，存在于一个由玩家创造的小的，私人世界里，而那又继承了宇宙创造的……

嘘。有时这个玩家创造的小天地是柔软，温暖和简单的。有时是坚硬，冰冷和复杂的。有时它在脑中建造出宇宙的模型；斑斑点点的能量穿越广阔空旷的空间。有时它称呼这些斑点为“电子”和“质子”。

有时它称呼它们为“行星”和“恒星”。

有时它确信它存在于一个由“开”和“关”；“0”和“1”；一行行的命令组成的宇宙。有时它确信它是在玩一个游戏。有时它确信它是在读着屏幕上的文字。

你就是那玩家，阅读着文字……

嘘……有时这玩家读屏幕上的命令行。将它们解码成为文字；将文字解码为意义；将意义解码为感情，情绪，理论，想法，而玩家的呼吸开始急促并意识到了它是活着的，它是活生生的，那上千次的死亡不是真的，玩家是活着的。

你。你。你是活着的。

而有时这玩家相信宇宙通过穿越夏日树叶的那斑斓的阳光对它说话。

有时这玩家相信宇宙透过晴朗的冬日夜空中，存在于它眼中一隅的星点星光，可能比太阳大上上百万倍的恒星沸腾着的电浆那一瞬间发出来的光对它说话，在宇宙的远侧行走回家的路上，突然闻到了食物，在那熟悉的门前，它又准备好再一次投入梦境

而有时玩家相信宇宙透过零和一，透过世界的电力，透过屏幕上滚动的文字和梦的终结对它说话

宇宙说我爱你

宇宙说你很好地玩了这游戏

宇宙说一切你所需的你都具有

宇宙说你比你所知的要强大

宇宙说你就是日光

宇宙说你就是黑夜

宇宙说你所斗争的黑暗就在你心中

宇宙说你所寻找的光明就在你心中

宇宙说你不是孤独的

宇宙说你不是和所有的事物所隔绝的

宇宙说你就是宇宙品尝着自己，对自己说话，阅读着它自己的代码。

宇宙说我爱你因为你就是爱。

曲终人散，黄粱一梦。玩家开始了新的梦境。玩家再次做起了梦，更好的梦。玩家就是宇宙。玩家就是爱。

你就是那个玩家。

该醒了。*/

/*正式开始

ChatColor
WHITE
BLACK
YELLOW
BLUE
GREEN

clientMessage(lang[0]+"xxx");

Block.defineBlock(id,"name",[["bottom texture",type],["top texture",type],["south texture",type],["north texture",type],["west texture",type],["east texture",type]],源id,false,渲染类型);

ModPE.overrideTexture("images/1.png", "website");

ModPE.langEdit(par1String, par2String);
*/

//物品
ModPE.setItem(500,"bow_standby",0,"黄金钻石杖",1);
Item.setMaxDamage(500,798);
Item.setHandEquipped(500,true);
//方块
Block.defineBlock(255,"挖石机",[["redstone_block",0],["stonecutter",2],["stonecutter",0],["stonecutter",0],["stonecutter",0],["stonecutter",0]],61,false,0);
Block.setDestroyTime(255,3);
Block.setExplosionResistance(255,5);
Block.setLightLevel(255,1);
//合成配方
Player.addItemCreativeInv(500,1,0);
Item.addShapedRecipe(500,1,0,["a","b","c"],["a",266,0,"b",264,0,"c",280,0]);
Player.addItemCreativeInv(255,1,0);
Item.addShapedRecipe(255,1,0,["aba","b b","aba"],["a",4,0,"b",331,0]);
Item.setCategory(255,ItemCategory.DECORATION);

//声明变量
//图片
var base64="iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAIAAAD4YuoOAAAAA3NCSVQICAjb4U/gAAAD/ElEQVQ4\njWVTu45cVRCs7tPnMXPnsYtZ1o9dkImckCAsW4JvIOe7+AZyROyEFISjlZHAgY0fa3m9szueO3Pv\neTbB2AlU0q1Ouqq6i37+6cfVanUpK2NMq6eqWsgRkfAOwPPxW2vtu/cza+03J79st9uY7znnrsIt\nAAt3I4TAuPDeZ46qusDAzBjX1tqe7242G7m+vh6GgZdsjJl1i/Pz8z728/m8YDTG9H0fQnDuEwDr\n9doYE2O01jKz994ZJyIntz8nIjcXIjrgKCITSiLy/Grx9OlTOevvL5fLzezae//32bGIfP/gLRH9\n/uzW27dvZX5wvd0uJz0zv9QfHDt7o8/M7CkSHdLz5XR5/3jGzCUWANy4jrVRNMZY7CzeSClltVpd\nDe9yzl33Zc758ePHAN7pQ2bebrchhFqT916ZAbTWmNk5Z6112nvvW2s5Z8u2lKJViYiIcs4AvPcS\nwtj3vedD2xqxErhMbi0Wi8/G15eXlwfzh7VW0ACAplRUb46XnXRt877rusn0amaGiV/UWrVNY9wN\nOTjnFsYXLVZJS5bT01PvfY/pxcXF6/O85zidTqu209PTv15suq4TsQBSSsvl8ovjWUrJd5NxHGOM\nV1dXjx79FmPsN7pYLA4+vXt0dBQOD0Rk6qchBHm1+vPk5MTz7PSOHB3xkydPznHv+bN0m+cxxuBa\nSZvWSaYyK1WG8Y/tS2tt+mdzeHh4cHhnPp1/99WDYRjG3fvZbIZ5V0pppe5KGYgHYhmG4ezsDNSp\natWb1lpVFZE0JiLaWxxrttaKkVprmATn3PHsIIRgpOwdn0wmE2+YeVtKSikQExGAUopc69dw2EOa\nJGDKKwDr6QzAQd4ycygsUKvZEhIJk6hSKc2Jb5lNQynVak9EziI4dqMy85KbTzvZr/o/9vM9wX3Z\nz1VVVZu2nHNiDSG01rz3Vr2q9nUspVBGa209rIlIjHkPwLYMgHUKwO8sAAlrAM00MM+LMWqKLcQ1\nDLBF1Sbj3CAYa/z1xaucs0F2zuVmAPhRW2u7xqUuhJkBkBKAfc9M/1XwEaoK+tCklNJQvfcxRuec\nEFR1nxJV3X8dAOlaAkDKAMhsARRRADeyUdXr+ZqYtUwaszI1atoGbVYpg0iyM5SGuGvee8O1VoKD\nMUPtjTHMsZTy4Qb7tUysqsyk+iGQzEwf0VRV1RjTWiulMLMRYmZWBlBrba0ZRq01xkhEVbWUIkvz\nRlV3wgAqA4CtFoD6QVWPxyUR0uSCiLpSjZpo2BjT2QbApEiZjE2i1nItpUA9AJECQFS0jiIiAKyw\nqhJDVQ0MAMOiqqYaZq7GEJEhMPM+KLVWIrLMRLTXlEoSEYKptarqOI6WAxH9C9AsVXhenOWmAAAA\nAElFTkSuQmCC\n";
var byte=android.util.Base64.decode(base64,0);
var image=android.graphics.BitmapFactory.decodeByteArray(byte,0,byte.length);
//常量
const JsVersion = "1.3",GameVersion = ModPE.getMinecraftVersion();
const newVersion = loadTxtFromUrl("https://raw.githubusercontent.com/DawningW/Island-Helper-JS/master/version");
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const $ = ctx.getPackageName();
const optiondir = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/"
const worldsdir = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/"
//GUI
var gui,MP3,mp3seek,mp3button,islanddialog,mapop,logo,logoimg,logotext,alpha,zoop,shoot,pos;
//各种变量
var island,isX,isY,isZ,islevel,isresettime,isresetcd,isHomeX,isHomeY,isHomeZ;
var tpcd,homeX,homeY,homeZ,warpname = [],warpX = [],warpY = [],warpZ = [];
var place,dX,dY,dZ,wait;
var lang = [],mp3,music = null,replay = false;
var language,kittools,map,hp,cut,bll,bukkit,keepinv,bombpre,ender,particle,shooting;
var dead = false,slevel,sxp,sid = new Array(),sdata = new Array(),scount = new Array();
var select,blockid,blockdata,X = [],Y = [],Z = [];
var pid,psize,pspeed,pangle;
place = false;
wait = 0;
select = 0;
particle = false;
pangle = 0;
//首次加载配置文件
loadoptions();

//帮助
function procCmd(procmd)
{
var cmd=procmd.split(" ");
if(cmd[0]=="is"||cmd[0]=="island")
{
if(procmd=="is"||procmd=="island")
{
clientMessage(lang[0]+lang[4]);
clientMessage(lang[0]+"查看空岛帮助: /is help");
clientMessage(lang[0]+"请打开空岛菜单寻求更多帮助");
}
else if(cmd[1]=="help")
{
clientMessage(lang[0]+lang[4]);
clientMessage(lang[0]+lang[5]);
}
else if(cmd[1]=="confirm")
{
}
else
{
clientMessage(lang[0]+"未知命令，请输入/is help查看空岛指令列表");
}
}
}

//启动
function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)
{
if(select == 0)
{
//挖石机
if(getTile(x,y,z) == 255 && !((itemId == 54 || itemId == 146) && side == 1))
{
if(place == false)
{
place = true;
dX = x;
dY = y;
dZ = z;
preventDefault();
clientMessage(lang[0]+lang[6]);
//clientMessage(lang[0]+"测试功能 开启状态:"+place+" X:"+dX+" Y:"+dY+" Z:"+dZ);
}
else if(place == true && x == dX && y == dY && z == dZ)
{
place = false;
preventDefault();
clientMessage(lang[0]+lang[7]);
}
else
{
preventDefault();
clientMessage(lang[0]+lang[8]);
}
}
//砍树
if(cut == true)
{
if(itemId == 271 || itemId == 275 || itemId == 279 || itemId == 286 || itemId == 258)
{
if(blockId == 17 || blockId == 162)
{
bll=Level.getData(x,y,z);
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
if(bukkit == true && itemId == 325 && itemDamage == 0 && blockId == 49)
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
clientMessage(lang[0]+lang[14]);
}
}
else if(select == 1 && itemId == 290)
{
preventDefault();
X[1] = x;
Y[1] = y;
Z[1] = z;
print("已选择点一");
select = 2
}
else if(select == 2 && itemId == 290)
{
preventDefault();
X[2] = x;
Y[2] = y;
Z[2] = z;
print("已选择点二");
select = 0;
square(X[1],Y[1],Z[1],X[2],Y[2],Z[2],blockid,blockdata);
}
}

//每刻执行
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
//clientMessage(lang[0]+"测试功能:当前镐附加值为"+Level.getChestSlotData(dX,dY+1,dZ,0));
//判断格数
for(var dslot = 1;((Level.getChestSlot(dX,dY+1,dZ,dslot) !== 4 && Level.getChestSlot(dX,dY+1,dZ,dslot) !== 0) || (Level.getChestSlot(dX,dY+1,dZ,dslot) == 4 && Level.getChestSlotCount(dX,dY+1,dZ,dslot) == 64)) && dslot < 26;dslot++);
//clientMessage(lang[0]+"测试功能:当前挖石格数为"+dslot);
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
clientMessage(lang[0]+lang[9]);
}
}
else
{
place = false;
clientMessage(lang[0]+lang[10]);
}
}
//结束
}
else
{
place = false;
clientMessage(lang[0]+lang[11]);
}
}
else if(!(getTile(dX,dY-1,dZ) == 0 || getTile(dX,dY-1,dZ) == 4))
{
place = false;
clientMessage(lang[0]+lang[12]);
}
}
}
else
{
wait++;
}
//显血
if(hp == true)
{
var id = Entity.getEntityTypeId(Player.getPointedEntity());
var health = Entity.getHealth(Player.getPointedEntity());
if(health < 0){health = 0;}
if(Player.getPointedEntity() != -1 && id < 64)
{
switch(id)
{
case 10:var name="§2鸡 ";break;
case 11:var name="§2牛 ";break;
case 12:var name="§2猪 ";break;
case 13:var name="§2羊 ";break;
case 14:var name="§3狼 ";break;
case 15:var name="§2村民 ";break;
case 16:var name="§2哞菇 ";break;
case 17:var name="§2墨鱼 ";break;
case 18:var name="§2兔子 ";break;
case 19:var name="§2蝙蝠 ";break;
case 22:var name="§3豹猫";break;
case 23:var name="§3马";break;
case 24:var name="§3驴";break;
case 25:var name="§3骡子";break;
case 26:var name="§2骷髅马";break;
case 27:var name="§2僵尸马";break;
case 32:var name="§4僵尸 ";break;
case 33:var name="§4爬行者 ";break;
case 34:var name="§4骷髅 ";break;
case 35:var name="§4蜘蛛 ";break;
case 36:var name="§3僵尸猪人 ";break;
case 37:var name="§4史莱姆 ";break;
case 38:var name="§3末影人 ";break;
case 39:var name="§4蠹虫 ";break;
case 40:var name="§4洞穴蜘蛛 ";break;
case 41:var name="§4恶魂 ";break;
case 42:var name="§4岩浆怪 ";break;
case 43:var name="§4烈焰人 ";break;
case 44:var name="§4僵尸村民 ";break;
case 45:var name="§4女巫 ";break;
case 46:var name="§4流浪者";break;
case 47:var name="§4尸壳";break;
case 48:var name="§4凋零骷髅";break;
case 63:var name="§f玩家";break;
default:var name="§f未知生物 ID: "+id;break;
}

ModPE.showTipMessage
("                      " + name + ChatColor.RED + "血量: " + ChatColor.GREEN + health);
}
}
//死亡不掉落
if(keepinv == true)
{
if(dead == true && Entity.getHealth(Player.getEntity()) > 0)
{
dead = false;
for(ii=0;ii<36;ii++)
{
Player.addItemInventory(sid[ii],scount[ii],sdata[ii]);
}
Player.setLevel(slevel);
Player.setExp(sxp);
//clientMessage(lang[0]+"测试功能: 物品和等级已恢复！");
}
}
//粒子特效
if(particle == true)
{
//玩家位置
var x=Player.getX();
var y=Player.getY()-1.2;
var z=Player.getZ();
//粒子效果
var px = 0.5 * Math.cos(pangle);
var pz = 0.5 * Math.sin(pangle);
if(x > 0 && z > 0)
{
px = x + px;
pz = z + pz;
}
else if(x < 0 && z  > 0)
{
px = x - px;
pz = z + pz;
}
else if(x < 0 && z < 0)
{
px = x - px;
pz = z - pz;
}
else if(x > 0 && z < 0)
{
px = x + px;
pz = z - pz;
}
Level.addParticle(pid,px,y,pz,pspeed,pspeed,pspeed,psize);
if(pangle < 360)
{
pangle++;
}
else
{
pangle = 0;
}
/*旧粒子效果
Level.addParticle(pid,x+0.4,y,z+0.4,pspeed,pspeed,pspeed,psize);
Level.addParticle(pid,x+0.4,y,z-0.4,pspeed,pspeed,pspeed,psize);
Level.addParticle(pid,x-0.4,y,z-0.4,pspeed,pspeed,pspeed,psize);
Level.addParticle(pid,x-0.4,y,z+0.4,pspeed,pspeed,pspeed,psize);*/
}
//空岛重置计时
if(isresetcd > 0){isresetcd--}
//枪械
if(shooting==1){rpg()}
//mp3
if(mp3 != null){mp3seek.setProgress(mp3.getCurrentPosition());}
//修一下创造虚空不死的bug
//PS:我大mojang居然连这么明显的bug都不修，居然这么懒？真是醉了233
if(Player.getY() < -32){Player.setHealth(0);}
}

//破坏方块
function destroyBlock(x,y,z)
{
if(getTile(x,y,z) == 255 && x == X && y == Y && z == Z && place == true && !(Level.getGameMode() == 1 && (Player.getCarriedItem() == 268 || Player.getCarriedItem() == 272 || Player.getCarriedItem() == 267 || Player.getCarriedItem() == 283 || Player.getCarriedItem() == 276 )))
{
place = false;
clientMessage(lang[0]+lang[13]);
}
}

//阻止动作
/*function levelEventHook(entity,eventType,x,y,z,data)
{
clientMessage(lang[0]+"测试功能: 事件钩子，种类: "+eventType+"数据值: "+data);
}
*/

//实体生成
function entityAddedHook(entity)
{
var id = Entity.getEntityTypeId(entity);
if(ender == true && id == 38)
{
Entity.remove(entity);
}
}

//被攻击
function attackHook(attacker,victim)
{
if(Player.getCarriedItem() == 500)
{
Entity.setHealth(victim, Entity.getHealth(victim) - 6);
Level.addParticle(23, Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 4, 4, 4, 9);
}
}

//死亡
function deathHook(attacker,entity)
{
if(keepinv == true)
{
if(entity == Player.getEntity())
{
sid = [];sdata = [];scount = [];dead = true;

for(i=0;i<36;i++)
{
sid.push(Player.getInventorySlot(i));
sdata.push(Player.getInventorySlotData(i));
scount.push(Player.getInventorySlotCount(i));
Player.clearInventorySlot(i);
}

slevel = Player.getLevel();
sxp = Player.getExp();
Player.setLevel(0);
Player.setExp(0);

//clientMessage(lang[0]+"测试功能: 物品和等级已记录！");
}
}
}

//退出
function leaveGame()
{
place = false;
wait = 0;
//保存配置文件
saveoptions();
saveworldoptions();
//删除按钮
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
//执行
if(gui!=null){gui.dismiss();}
if(MP3!=null){MP3.dismiss();}
if(mapop!=null){mapop.dismiss();}
if(zoop!=null){zoop.dismiss();}
if(shoot!=null){shoot.dismiss();}
if(logo!=null){logo.dismiss();}
if(mp3 != null && mp3.isPlaying())
{
mp3.stop();
mp3.release();
mp3=null;
}
//结束
}}));
}

//选择存档
function selectLevelHook()
{
/*if($!="net.zhuoweizhang.mcpelauncher" && $!="net.zhuoweizhang.mcpelauncher.pro")
{
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
toast("本js只能使用方块启动器加载！\n即将退出游戏！");
new java.lang.Thread(ctx).sleep(3000);
ctx.finish();
}}));
}*/
//加载配置
loadoptions();
loadworldoptions();
//加载语言
loadlanguage();
}

//加载存档
function newLevel()
{
clientMessage(lang[0]+lang[1]);
clientMessage(lang[0]+lang[2]);
checkupdate();
clientMessage(lang[0]+lang[3]);
if(bombpre == true)
{
for(var $i =0 ;$i <= 255 ;$i ++)
{
Block.setExplosionResistance($i, 10000);
}
}
if(keepinv == true)
{
clientMessage(lang[0]+ChatColor.RED+"警告: "+ChatColor.WHITE+"死亡不掉落不支持附魔工具。\n并且请勿在打开死亡不掉落时死亡后回到主菜单并退出，否则将丢失全部物品!");
}
//clientMessage(lang[0]+ChatColor.RED+"注意: "+ChatColor.WHITE+"生成空岛前请将能见度调到最高!");
clientMessage(lang[0]+ChatColor.RED+"注意: "+ChatColor.WHITE+"由于清空257X128X257这么大范围的方块的计算量有些大(8454272个方块)，所以清空空岛周围方块已被停用，建议在超平坦世界生成空岛!");
ctx.runOnUiThread(new java.lang.Runnable({run:function()
{
try{
//菜单按钮
gui=new android.widget.PopupWindow();
var layout=new android.widget.RelativeLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("空岛菜单");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
//打开菜单
openMenu();
//结束菜单
}}));
layout.addView(button);
gui.setContentView(layout);
gui.setWidth(192);
gui.setHeight(96);
gui.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
//MP3按钮
MP3=new android.widget.PopupWindow();
var mp3lay=new android.widget.LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("🎵");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
//打开菜单
openMP3();
//结束菜单
}}));
mp3lay.addView(button);
MP3.setContentView(mp3lay);
MP3.setWidth(96);
MP3.setHeight(96);
MP3.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.BOTTOM,0,480);
//logo
var logolay = new android.widget.LinearLayout(ctx);
var Params = new android.widget.LinearLayout.LayoutParams(-1,-1,1);
logo = new android.widget.PopupWindow(logolay,dip2px(ctx,96),dip2px(ctx,64));
logoimg = new android.widget.ImageView(ctx);
logotext = new android.widget.TextView(ctx);
logolay.setOrientation(1);
logoimg.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
logoimg.setLayoutParams(Params);
logoimg.setImageBitmap(image);
logotext.setText("Wdawning");
logotext.setTextSize(18);
logotext.setGravity(17);
logotext.setTextColor(android.graphics.Color.BLACK);
logolay.addView(logoimg);
logolay.addView(logotext);
logo.setTouchable(false);
logo.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 5, 5);
alpha = 1;
logostart();
if(map == true){openmap();}
if(language == "auto"){chlanguage();}
}
catch(err){print("Error:"+err);
}}}))
}

//计算
function dip2px(ctx,dips)
{
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}

function makeMenu(ctx,layout)
{ 
var mlayout=new android.widget.RelativeLayout(ctx)
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}

//配置文件
function save(path, filename, content)
{
try{
java.io.File(path).mkdirs();
var newFile = new java.io.File(path, filename);
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(content);
outWrite.close();
}catch(e){
print("save, " + e + " (" + e.fileName + " #" + e.lineNumber + ")");
}
}

function load(path, filename)
{
var content = "";
if(java.io.File(path + filename).exists())
{
var file = new java.io.File(path + filename),
fos = new java.io.FileInputStream(file),
str = new java.lang.StringBuilder(),
ch;
while((ch = fos.read()) != -1)
{
str.append(java.lang.Character(ch)); }
content = String(str.toString());
fos.close();
}
return content;
}

function loadTxtFromUrl(url)
{
try{
var content = new java.io.ByteArrayOutputStream();
android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(content);
content.close();
return String(content.toString());
}catch(e)
{
return "";
}
}

function openUrl(url)
{
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url)));
}

function notify(main,title,content,http)
{
var intent=new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(http))
var pi=android.app.PendingIntent.getActivity(ctx,0,intent,0)
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
var nm=ctx.getSystemService(ctx.NOTIFICATION_SERVICE)
var notify=new android.app.Notification(android.R.drawable.btn_dialog,main,0);
notify.defaults=android.app.Notification.DEFAULT_SOUND
notify.setLatestEventInfo(ctx,title,content,pi);
nm.notify(0,notify);
}})
}

function toast(str)
{ 
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){ 
android.widget.Toast.makeText(ctx,str,0).show();
}}));
}

function checkupdate()
{
if(newVersion != "" && newVersion != null)
{
var newVersionList=newVersion.split(".");
var jsVersionList=JsVersion.split(".");
if(newVersionList[0] > jsVersionList[0])
{
clientMessage(lang[0]+"发现新版本，请打开任务栏查看更新，最新版本为"+newVersion);
notify("我的世界","空岛小帮手js发现了新版本","快快点击我下载吧！","http://www.mcbbs.net/thread-583823-1-1.html");
}
else if(newVersionList[0] = jsVersionList[0] && newVersionList[1] > jsVersionList[1])
{
clientMessage(lang[0]+"发现新版本，请打开任务栏查看更新，最新版本为"+newVersion);
notify("我的世界","空岛小帮手js发现了新版本","快快点击我下载吧！","http://www.mcbbs.net/thread-583823-1-1.html");
}
else
{
clientMessage(lang[0]+"当前为最新版本，无需更新");
}
}
else
{
clientMessage(lang[0]+"无法获取更新，请检查网络连接");
}
}

function loadoptions()
{
if(java.io.File(optiondir+"isoption.txt").exists())
{
var settings = load(optiondir,"isoption.txt").split("\n");
if(settings[2].split(":")[1] == JsVersion)
{
language = settings[3].split(":")[1];
map = (settings[4].split(":")[1] == "true") ? true : false;
hp = (settings[5].split(":")[1] == "true") ? true : false;
cut = (settings[6].split(":")[1] == "true") ? true : false;
bukkit = (settings[7].split(":")[1] == "true") ? true : false;
keepinv = (settings[8].split(":")[1] == "true") ? true : false;
bombpre = (settings[9].split(":")[1] == "true") ? true : false;
ender = (settings[10].split(":")[1] == "true") ? true : false;
//clientMessage(lang[0]+GameVersion+JsVersion+language+map+hp+cut+bukkit+keepinv+bombpre+ender);
//clientMessage(lang[0]+"测试功能: 全局配置文件已读取！ " + settings);
}
else
{
language = "auto";
map = true;
hp = true;
cut = false;
bukkit = false;
keepinv = true;
bombpre = true;
ender = true;
saveoptions();
//clientMessage(lang[0]+"测试功能: 配置文件过期！重新生成");
}
}
else
{
language = "auto";
map = true;
hp = true;
cut = false;
bukkit = false;
keepinv = true;
bombpre = true;
ender = true;
saveoptions();
//clientMessage(lang[0]+"测试功能: 未检测到配置文件，生成配置文件！");
}
}

function saveoptions()
{
save(optiondir, "isoption.txt", "//The option of WC's island helper."+"\nGameVersion:"+GameVersion+"\nJsVersion:"+JsVersion+"\nlanguage:"+language+"\nsmallmap:"+map+"\nhealth:"+hp+"\ncutwoods:"+cut+"\nbukkit:"+bukkit+"\nkeepInventory:"+keepinv+"\nbombprevent:"+bombpre+"\nstopenderman:"+ender);
}

function loadworldoptions()
{
if(java.io.File(worldsdir+Level.getWorldDir()+"/issettings.txt").exists())
{
var settings = load(worldsdir+Level.getWorldDir()+"/", "issettings.txt").split("\n\n");
if(settings[1].split(":")[1] == JsVersion)
{
var settings2 = settings[2].split("\n");
island = (settings2[0].split(":")[1] == "true") ? true : false;
isX = parseInt(settings2[1].split(":")[1]);
isY = parseInt(settings2[2].split(":")[1]);
isZ = parseInt(settings2[3].split(":")[1]);
islevel = settings2[4].split(":")[1];
isresettime = settings2[5].split(":")[1];
isHomeX = settings2[6].split(":")[1];
isHomeY = settings2[7].split(":")[1];
isHomeZ = settings2[8].split(":")[1];
homeX = settings2[9].split(":")[1];
homeY = settings2[10].split(":")[1];
homeZ = settings2[11].split(":")[1];
var settings3 = settings[3].split("\n");
if(settings3[1] != "")
{
var warppos = [];
for(var i = 0;i + 1 < settings3.length;i++)
{
warpname[i] = settings3[i+1].split(":")[0];
warpX[i] = settings3[i+1].split(":")[1].split(",")[0];
warpY[i] = settings3[i+1].split(":")[1].split(",")[1];
warpZ[i] = settings3[i+1].split(":")[1].split(",")[2];
}
}
//clientMessage(lang[0]+JsVersion);
//clientMessage(lang[0]+"测试功能: 世界配置文件已读取！ " + settings);
}
else
{
kittools = false;
island = false;
isX = 0;
isY = 0;
isZ = 0;
islevel = 0;
isresettime = 0;
isHomeX = 0;
isHomeY = 0;
isHomeZ = 0;
saveworldoptions();
//clientMessage(lang[0]+"测试功能: 世界配置文件过期！重新生成");
}
}
else
{
kittools = false;
island = false;
isX = 0;
isY = 0;
isZ = 0;
islevel = 0;
isresettime = 0;
isHomeX = 0;
isHomeY = 0;
isHomeZ = 0;
saveworldoptions();
//clientMessage(lang[0]+"测试功能: 未检测到世界配置文件，生成配置文件！");
}
}

function saveworldoptions()
{
var settings = "//The world settings of WC's island helper."+"\n\nJsVersion:"+JsVersion+"\n\niswcisland:"+island+"\nislandX:"+isX+"\nislandY:"+isY+"\nislandZ:"+isZ+"\nislandlevel:"+islevel+"\nislandresettimes:"+isresettime+"\nislandhomeX:"+isHomeX+"\nislandhomeY:"+isHomeY+"\nislandhomeZ:"+isHomeZ+"\nhomeX:"+homeX+"\nhomeY:"+homeY+"\nhomeZ:"+homeZ+"\n\nwarps:\n";
for(var i = 0;i < warpname.length;i++)
{
settings = settings+warpname[i]+":"+warpX[i]+","+warpY[i]+","+warpZ[i]+"\n";
}

save(worldsdir+Level.getWorldDir(), "issettings.txt", settings);
}

function loadlanguage()
{
switch(language)
{
case "auto":
//中文
case "zh_CN":
lang[0]=ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE;
lang[1]="\u6b22\u8fce\u4f7f\u7528\u7531\u0057\u0064\u0061\u0077\u006e\u0069\u006e\u0067\u5de5\u4f5c\u5ba4\u0051\u0069\u006e\u0067\u0043\u0068\u0065\u006e\u0057\u5236\u4f5c\u7684\u7a7a\u5c9b\u5c0f\u5e2e\u624b\u006a\u0073";
lang[2]="当前插件版本为 "+JsVersion+"，游戏版本为 "+GameVersion;
lang[3]="输入/is help查看帮助";
lang[4]="\u7a7a\u5c9b\u5c0f\u5e2e\u624b\u006a\u0073\u5e2e\u52a9\u83dc\u5355\u002c\u4f5c\u8005\u003a\u0051\u0069\u006e\u0067\u0043\u0068\u0065\u006e\u0057";
lang[5]="空岛游玩简介：\n好吧，我懒得写了，自己搜空岛玩法吧，然后在空岛菜单里可以找到一切啦，要想开始岛屿生涯，请先选好一块风水宝地，然后点击空岛菜单中的开始岛屿生涯，等待一会就可以开始了。\n挖石机使用介绍：\n将挖石机放在原石的上方，再在挖石机上方放上箱子，箱子第一格放个稿，再点击一次挖石机，即可自动挖下方的原石，每挖一次镐的耐久减一，配合刷石机使用效果更好哦，每个存档内只能启动一个挖石机，这不是Bug！";
lang[6]="挖石机已启动！再点击一次关闭！每次重新加载存档时都需要点击以启动！";
lang[7]="挖石机已关闭！";
lang[8]="每个存档内只能启动一个挖石机，这不是Bug！";
lang[9]="镐已损坏，挖石机已停止！";
lang[10]="箱子已满，挖石机已停止！";
lang[11]="请在挖石机上方放置箱子并且在第一格内放置一个任意种类的稿。";
lang[12]="挖石机只能用来挖原石！";
lang[13]="挖石机已破坏！";
lang[14]="黑曜石已经变成岩浆，请小心！";
lang[17]=ChatColor.GREEN+"[空岛生存]";
lang[18]=ChatColor.RED+"千万不要掉下去哦~";
lang[19]="By 清晨w";
break;
//英文
case "en_US":
lang[0]=ChatColor.YELLOW+"[Island Helper] "+ChatColor.WHITE;
lang[1]="Welcome to use Island Helper.Made by QingChenW.";
lang[2]="Js version is "+JsVersion+",Game version is "+GameVersion;
lang[3]="Type '/ishelp' to see help";
lang[4]="Island Helper JS.Made by QingChenW.";
lang[5]="Stone digger help:\nPlacing a stone digger on a cobblestone,then place a chest on the stone digger,put a pickaxe on the first slot of the chest,finally click the stone digger,it digs the cobblestone under it automatically,and damage of the pickaxe subtracts one,every save can only open a stone digger,this isn't a bug!";
lang[6]="Stone digger was open!Click it to stop!";
lang[7]="Stone digger was closed!";
lang[8]="Every save can only open a digger.This isn't a Bug!";
lang[9]="The pickaxe was bad.Stone digger was closed!";
lang[10]="The chest is filled.Stone digger was closed!";
lang[11]="Please placing a chest on the digger and put a pickaxe on the first slot of the chest.";
lang[12]="Stone digger can only dig cobblestone!";
lang[13]="Stone digger was destroyed!";
lang[14]="Obsidian has already turned into lava,please be careful!";
lang[17]=ChatColor.GREEN+"[Island]";
lang[18]=ChatColor.RED+"Be careful!";
lang[19]="By QingChenW";
break;

default:print("错误,无法加载语言");break;
}
}

//logo
function logostart()
{
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
if(alpha >= 0)
{
logoimg.setAlpha(alpha);
logotext.setAlpha(alpha);
alpha = alpha - 0.01;
logostart();
}
else
{
if(logo != null)
{
logo.dismiss();
}
}
}
}),50);
}

//MP3
function openMP3()
{
var layout=new android.widget.LinearLayout(ctx);
var blayout=new android.widget.LinearLayout(ctx);
try{
layout.setOrientation(android.widget.LinearLayout.VERTICAL);

var text = new android.widget.TextView(ctx);
mp3seek = new android.widget.SeekBar(ctx);

if(mp3 != null){
text.setText("正在播放的音乐:\n"+music);
mp3seek.setMax(mp3.getDuration());
}
else{text.setText("未播放音乐");}
text.setTextSize(14);
text.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(text);
layout.addView(mp3seek);

mp3seek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onStopTrackingTouch:function(v){
if(mp3!=null)
{
mp3.seekTo(mp3seek.getProgress());
}
}}));

var button=new android.widget.ImageButton(ctx);
button.setBackgroundDrawable(null);
button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_previous));
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
//playmusic();
}}))
blayout.addView(button);
mp3button=new android.widget.ImageButton(ctx);
mp3button.setBackgroundDrawable(null);
if(mp3 != null && mp3.isPlaying())
{
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_pause));
}
else
{
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_play));
}
mp3button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
try{
if(mp3 != null)
{
text.setText("正在播放的音乐:\n"+music);
if(mp3.isPlaying())
{
mp3.pause();
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_play));
}
else
{
mp3.start();
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_pause));
}
}
if(mp3 == null)
{
if(music == null){print("未选择音乐");}
else{
playmusic();
text.setText("正在播放的音乐:\n"+music);
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_pause));
}
}
}catch(err){print("错误:"+err+"可能该音乐文件已删除")}
}}))
blayout.addView(mp3button);
var button=new android.widget.Button(ctx);
button.setText("▇▇");
//button.setTextSize(13);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)));
button.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(mp3 != null && mp3.isPlaying())
{
mp3.stop();
mp3.release();
mp3=null;
text.setText("未播放音乐");
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_play));
}
else
{
print("未播放音乐");
}
}});
blayout.addView(button);
var button=new android.widget.ImageButton(ctx);
button.setBackgroundDrawable(null);
button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_next));
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
//playmusic();
}}))
blayout.addView(button);
layout.addView(blayout);
var rbutton=new android.widget.Button(ctx);
if(replay == true)
{
rbutton.setText("循环播放");
}
else
{
rbutton.setText("单曲播放");
}
rbutton.setTextSize(11);
rbutton.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)));
rbutton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(replay == true)
{
rbutton.setText("单曲播放");
replay = false;
}
else
{
rbutton.setText("循环播放");
replay = true;
}
}});
blayout.addView(rbutton);

var button = new android.widget.Button(ctx);
button.setText("选择音乐");
button.setOnClickListener(new android.view.View.OnClickListener(){onClick: function(p){
selectmusic();
Dialog.dismiss();
}});
layout.addView(button);

//Dialog
var Dialog = new android.app.Dialog(ctx);
Dialog.setContentView(layout);
Dialog.setTitle("超级简单的MP3播放器");

Dialog.show();
}catch(err){print("错误: "+err+".");
}}

function selectmusic()
{
var layout=new android.widget.LinearLayout(ctx);
try{
layout.setOrientation(android.widget.LinearLayout.VERTICAL);

var dialog=new android.app.Dialog(ctx);
dialog.setTitle("选择音乐");
dialog.setContentView(layout);

var files=new java.io.File(android.os.Environment.getExternalStorageDirectory(),"/").listFiles();

//直接输入地址(关于文件浏览器，我是真懵逼了。。。)
var text=new android.widget.EditText(ctx);
text.setHint("请在此输入歌曲路径\n例如:/sdcard/xxxx.mp3");
layout.addView(text);

var button=new android.widget.Button(ctx);
button.setText("确定");
button.setOnClickListener(new android.view.View.OnClickListener({onClick: function(v)
{
if(text.getText() != "" && java.io.File(text.getText()).exists() && java.io.File(text.getText()).isFile())
{
try{
music = text.getText();
playmusic();
openMP3();
dialog.dismiss();
}
catch(err){print("错误:"+err+"不是音乐文件")}
}
else
{
print("错误:文件路径无效");
}
}}));
layout.addView(button);
dialog.show();
}catch(err){print(err);}
}

function playmusic()
{
if(mp3 != null && mp3.isPlaying())
{
mp3.stop();
mp3.release();
mp3=null;
}
mp3=new android.media.MediaPlayer();
mp3.setDataSource(music);
mp3.prepare();
mp3.start();
mp3seek.setMax(mp3.getDuration());
mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_pause));
mp3.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({
onCompletion:function(v){
try{
if(replay == true){mp3.start();}
else{mp3button.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_media_play));}
}
catch(err){print("错误"+err+"可能该音乐文件已删除")}
}}));
}

//各种菜单
function openMenu()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var menu=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
menu.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(24);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("空岛帮手菜单");
title.setLayoutParams(textParams);
layout.addView(title);
var stitle=new android.widget.TextView(ctx);
stitle.setTextSize(17);
stitle.setTextColor(android.graphics.Color.rgb(255,255,255));
stitle.setText("作者 QingChenW");
stitle.setLayoutParams(textParams);
layout.addView(stitle);
//空岛菜单
var button=new android.widget.Button(ctx);
button.setText("空岛菜单");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
openISMenu();
}}));
layout.addView(button);
//任务
var button=new android.widget.Button(ctx);
button.setText("挑战任务");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
quest();
}}));
layout.addView(button);
//商店
var button=new android.widget.Button(ctx);
button.setText("迷你商店");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
trade();
}}));
layout.addView(button);
//传送
var button=new android.widget.Button(ctx);
button.setText("传送点");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
openTPMenu();
}}));
layout.addView(button);
//小地图
var button=new android.widget.ToggleButton(ctx);
button.setTextOn("小地图开");
button.setTextOff("小地图关");
button.setChecked(map);
button.setTextSize(18);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(map){map = false;
mapop.dismiss();
clientMessage(lang[0]+"小地图已关闭。");}
else{map = true;
openmap();
clientMessage(lang[0]+"小地图已开启。");}
}}));
layout.addView(button);
//显血
var button=new android.widget.ToggleButton(ctx);
button.setTextOn("显血开");
button.setTextOff("显血关");
button.setChecked(hp);
button.setTextSize(18);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(hp){hp = false;
clientMessage(lang[0]+"血量显示已关闭。");}
else{hp = true;
clientMessage(lang[0]+"血量显示已开启。");}
}}));
layout.addView(button);
//砍树
var button=new android.widget.ToggleButton(ctx);
button.setTextOn("快速砍树开");
button.setTextOff("快速砍树关");
button.setTextSize(18);
button.setChecked(cut);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(cut){cut = false}
else
{cut = true;
clientMessage(lang[0]+"快速砍树已开启。");}
}}));
layout.addView(button);
//黑曜石变岩浆
var button=new android.widget.ToggleButton(ctx);
button.setTextOn("黑曜石变岩浆开");
button.setTextOff("黑曜石变岩浆关");
button.setTextSize(16);
button.setChecked(bukkit);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(bukkit){bukkit = false}
else
{bukkit = true;
clientMessage(lang[0]+"用空桶单击黑曜石即可将黑曜石变为岩浆。");}
}}));
layout.addView(button);
//死亡不掉落
var tick=new android.widget.CheckBox(ctx);
tick.setTextColor(android.graphics.Color.WHITE);
tick.setText("死亡不掉落");
tick.setChecked(keepinv);
tick.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v, isChecked){
if(isChecked){keepinv = isChecked;
clientMessage(lang[0]+"死亡不掉落已开启。");
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.RED+"警告:"+ChatColor.WHITE+"死亡不掉落不支持附魔工具。\n并且请勿在打开死亡不掉落时死亡后回到主菜单并退出，否则将丢失全部物品!");}
else{keepinv = isChecked;
clientMessage(lang[0]+"死亡不掉落已关闭。");}
}});
layout.addView(tick);
//防爆
var tick=new android.widget.CheckBox(ctx);
tick.setTextColor(android.graphics.Color.WHITE);
tick.setText("防爆");
tick.setChecked(bombpre);
tick.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v, isChecked){
if(isChecked){bombpre = isChecked;
for(var $i =0 ;$i <= 255 ;$i ++)
{
Block.setExplosionResistance($i, 10000);
}
clientMessage(lang[0]+"防爆已开启！可以在菜单中关闭！");}
else{bombpre = isChecked;
for(var $i =0 ;$i <= 255 ;$i ++)
{
Block.setExplosionResistance($i, 3);
}
clientMessage(lang[0]+"防爆已关闭！");}
}});
layout.addView(tick);
//禁止刷小黑
var tick=new android.widget.CheckBox(ctx);
tick.setTextColor(android.graphics.Color.WHITE);
tick.setText("禁止刷小黑");
tick.setChecked(ender);
tick.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v, isChecked){
if(isChecked){ender = isChecked;
clientMessage(lang[0]+"禁止刷小黑已开启。");}
else{ender = isChecked;
clientMessage(lang[0]+"禁止刷小黑已关闭。");}
}});
layout.addView(tick);
//打开作弊菜单
var button=new android.widget.Button(ctx);
button.setText("作弊菜单");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
openZbMenu();
}}));
layout.addView(button);
//打开建筑菜单
var button=new android.widget.Button(ctx);
button.setText("建筑菜单");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
openBlMenu();
}}));
layout.addView(button);
//更改语言
var button=new android.widget.Button(ctx);
button.setText("更改语言");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
chlanguage();
}}));
layout.addView(button);
//彩蛋
var button=new android.widget.Button(ctx);
button.setText("彩蛋");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
coloreggs();
}}));
layout.addView(button);
//打开关于
var button=new android.widget.Button(ctx);
button.setText("关于");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
about();
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
menu.setContentView(mlayout);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(63,0,0,0)));
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
}
catch(err){print("Error:"+err);
}}

//空岛菜单
function openISMenu()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var ismenu=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
ismenu.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("空岛菜单");
title.setLayoutParams(textParams);
layout.addView(title);
//开始空岛
var button=new android.widget.Button(ctx);
button.setText("开始空岛生存");
button.setTextSize(15);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
startisland();
}}));
layout.addView(button);
//空岛等级
var button=new android.widget.Button(ctx);
button.setText("空岛等级");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
islandlevel();
}}));
layout.addView(button);
//重置空岛
var button=new android.widget.Button(ctx);
button.setText("重置空岛");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
resetisland();
}}));
layout.addView(button);
//成员管理
var button=new android.widget.Button(ctx);
button.setText("空岛成员");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
islandmember();
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
ismenu.setContentView(mlayout);
ismenu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
ismenu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
ismenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
ismenu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err); 
}}

function startisland()
{
if(island == false)
{
isX = parseInt(Player.getX());
isY = 65;
isZ = parseInt(Player.getZ());
isHomeX = isX;
isHomeY = isY+7;
isHomeZ = isZ-1;
islandlife();
isresettime = 3;
saveworldoptions();
clientMessage(lang[0]+"岛屿创建成功，尽情游玩吧。");
}
else
{
clientMessage(lang[0]+"你已经拥有了一个岛屿，请通过传送点回到空岛或是通过下面的按钮重置空岛。");
}
}

function islandlife()
{
clientMessage(lang[0]+"正在当前世界生成普通空岛，范围为201X201，卡顿为正常现象，请稍等。");
//spawnvoid(isX+128,0,isZ+128,isX-128,128,isZ-128);
spawnisland(isX, isY, isZ);
Level.setSpawn(isX,isY+5,isZ);
Entity.setPosition(Player.getEntity(), isHomeX, isHomeY, isHomeZ);
for(var islot = 9;islot <= 44;islot++){Player.clearInventorySlot(islot);}
Level.setGameMode(0);
island = true;
}

function spawnvoid(x1, y1, z1, x2, y2, z2, id, data)
{
ctx.runOnUiThread(new java.lang.Runnable({run:function()
{
//进度显示
var allblock = 8454272;
try{
islanddialog = new android.app.ProgressDialog(ctx);
islanddialog.setProgressStyle(android.app.ProgressDialog.STYLE_HORIZONTAL);
islanddialog.setCancelable(false);
islanddialog.setCanceledOnTouchOutside(false);
islanddialog.setTitle("空岛生成中...");
islanddialog.setMax(allblock);
islanddialog.setMessage("正在清空地形，卡顿为正常现象，请勿退出并且请保持屏幕开启，否则有可能造成存档损坏，稍等片刻，喝个茶吃顿饭啥的再来吧:-)");
islanddialog.show();
}
catch(err){print("Error:"+err); }
//清空地形并生成空岛
select = 0;
X[1] = Math.min(x1,x2);
Y[1] = Math.min(y1,y2);
Z[1] = Math.min(z1,z2);
X[2] = Math.max(x1,x2);
Y[2] = Math.max(y1,y2);
Z[2] = Math.max(z1,z2);
for(var xi = 0;X[1] + xi <= X[2];xi++)
{
for(var yi = 0;Y[1] + yi <= Y[2];yi++)
{
for(var zi = 0;Z[1] + zi <= Z[2];zi++)
{
if(Level.getTile(X[1]+xi,Y[1]+yi,Z[1]+zi) != 0)
{
Level.setTile(X[1]+xi,Y[1]+yi,Z[1]+zi,0,0);
}
islanddialog.incrementProgressBy(1);
}
}
}
islanddialog.dismiss();
islanddialog = null;
}
}));
}

function islandlevel()
{
if(island == true)
{
new java.lang.Runnable({run:function()
{
var x1 = isX - 200;
var y1 = 0;
var z1 = isz - 200;
var x2 = isX + 200;
var y2 = 128;
var z2 = isz + 200;
clientMessage(lang[0]+"正在计算岛屿等级，卡顿属于正常现象，请勿担心。");
islevel = 0;
for(var xi = 0;x1 + xi <= x2;xi++)
{
for(var yi = 0;y1 + yi <= y2;yi++)
{
for(var zi = 0;z1 + zi <= z2;zi++)
{
if(Level.getTile(x1+xi,y1+yi,z1+zi))
{
islevel++;
}
}
}
}
saveworldoptions();
clientMessage(lang[0]+"您的岛屿等级为 "+islevel+" 级。");
}
});
}
else
{
clientMessage(lang[0]+"您还没有开始岛屿生涯哦。");
}
}

function resetisland()
{
if(island == true)
{
if(isresettime > 0)
{
if(isresetcd > 0)
{
clientMessage(lang[0]+"开始重置岛屿。");
isHomeX = isX;
isHomeY = isY+7;
isHomeZ = isZ-1;
islandlife();
isresettime--;
saveworldoptions();
clientMessage(lang[0]+"岛屿已重置，您还剩下"+isresettime+"次重置机会。");
}
else
{
isresetcd = 200;
clientMessage(lang[0]+"您真的要重置岛屿吗？在10秒钟内再点击一次按钮确认。");
}
}
else
{
clientMessage(lang[0]+"您的机会已用光，不能再重置岛屿了。");
}
}
else
{
clientMessage(lang[0]+"您还没有开始岛屿生涯哦。");
}
}

function islandmember()
{
if(island == true)
{
clientMessage(lang[0]+"您的岛屿成员有"+Player.getName(Player.getEntity()));
clientMessage(lang[0]+"成员管理功能尚未开放");
}
else
{
clientMessage(lang[0]+"您还没有开始岛屿生涯哦。");
}
}

function quest()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var quest=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
quest.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("挑战任务");
title.setLayoutParams(textParams);
layout.addView(title);
//任务:圆石收集者
var button=new android.widget.Button(ctx);
button.setText("圆石收集者");
button.setTextSize(15);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
if(Level.getGameMode() == 0)
{
for(var islot = 9;islot <= 44;islot++)
{
if(Player.getInventorySlot(islot) == 4 && Player.getInventorySlotCount(islot) == 64)
{
Player.clearInventorySlot(islot);
Player.addItemInventory(388,1,0);
clientMessage(lang[0]+"恭喜玩家"+Player.getName(Player.getEntity())+"完成任务:圆石收集者！获得1个绿宝石！");
break;
}
}
if(islot > 35)
{
clientMessage(lang[0]+"这个任务需要64个圆石来完成哦！");
}
}
else
{
clientMessage(lang[0]+"生存才能做任务哦！");
}
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
quest.setContentView(mlayout);
quest.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
quest.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
quest.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
quest.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err);
}}

function trade()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var trade=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
trade.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("商店菜单");
title.setLayoutParams(textParams);
layout.addView(title);
//结束
var mlayout=makeMenu(ctx,layout);
trade.setContentView(mlayout);
trade.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
trade.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
trade.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
trade.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err);
}}

//传送点
function openTPMenu()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var tp=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
tp.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("传送点");
title.setLayoutParams(textParams);
layout.addView(title);
//回到空岛
var button=new android.widget.Button(ctx);
button.setText("回到空岛");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
backisland();
}}));
layout.addView(button);
//设置空岛传送点
var button=new android.widget.Button(ctx);
button.setText("设置空岛传送点");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
setislandhome();
}}));
layout.addView(button);
//回家
var button=new android.widget.Button(ctx);
button.setText("回家");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
backhome();
}}));
layout.addView(button);
//设置家
var button=new android.widget.Button(ctx);
button.setText("设置家");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
sethome();
}}));
layout.addView(button);
//地标
for(var i = 0;i < warpname.length;i++)
{
var button=new android.widget.Button(ctx);
button.setText(warpname[i]);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Entity.setPosition(Player.getEntity(), warpX[i], warpY[i], warpZ[i]);
clientMessage(lang[0]+"传送到地标："+warpname[i]);
}}));
layout.addView(button);
}
//结束
var mlayout=makeMenu(ctx,layout);
tp.setContentView(mlayout);
tp.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
tp.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
tp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
tp.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err);
}}

function backisland()
{
if(island == true)
{
Entity.setPosition(Player.getEntity(), isHomeX, isHomeY, isHomeZ);
clientMessage(lang[0]+"回到你的岛屿。");
}
else
{
clientMessage(lang[0]+"您还没有开始岛屿生涯，将为您创建岛屿。");
spawnisland();
}
}

function setislandhome()
{
if(island == true)
{
isHomeX = parseInt(Player.getX());
isHomeY = parseInt(Player.getY());
isHomeZ = parseInt(Player.getZ());
saveworldoptions();
clientMessage(lang[0]+"设置岛屿的家在您脚下。");
}
else
{
clientMessage(lang[0]+"您还没有开始岛屿生涯。");
}
}

function backhome()
{
if(homeX != undefined && homeY != undefined && homeZ != undefined)
{
Entity.setPosition(Player.getEntity(), homeX, homeY, homeZ);
clientMessage(lang[0]+"传送到你的家。");
}
else
{
clientMessage(lang[0]+"你还没有设置家。");
}
}

function sethome()
{
homeX = parseInt(Player.getX());
homeY = parseInt(Player.getY());
homeZ = parseInt(Player.getZ());
saveworldoptions();
clientMessage(lang[0]+"设置岛屿的家在您脚下。");
}

//小地图
function openmap()
{
var layout=new android.widget.LinearLayout(ctx);
try{
mapop = new android.widget.PopupWindow(layout,dip2px(ctx,128),dip2px(ctx,144));
layout.setOrientation(1);
var mapopx = 56;
var mapopy = 48;
var mX,mY;
//地图
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var text=new android.widget.TextView(ctx);
text.setTextSize(13);
text.setGravity(17);
text.setTextColor(android.graphics.Color.rgb(255,255,255));
text.setText("其实我不会做小地图\n看我不顺眼\n可以在菜单中关闭\n其实按住我可以拖动\nQAQ");
text.setLayoutParams(textParams);
text.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX = e.getX();
mY = e.getY();
break;
case 2:
var delX=parseInt(e.getX() - mX);
var delY=parseInt(e.getY() - mY);
mapopx = mapopx + delX;
mapopy = mapopy + delY;
mapop.update(parseFloat(mapopx), parseFloat(mapopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(text);

pos=new android.widget.TextView(ctx);
pos.setTextSize(14);
pos.setGravity(17);
pos.setTextColor(android.graphics.Color.rgb(255,255,255));
pos.setText("X:"+parseInt(Player.getX())+" Y:"+parseInt(Player.getY()-1)+" Z:"+parseInt(Player.getZ()));
pos.setLayoutParams(textParams);
layout.addView(pos);
//结束
mapop.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
mapop.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, mapopx, mapopy);
mapupdate();
}
catch(err){print("Error:"+err);
}}

function mapupdate()
{
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
if(map == true)
{
pos.setText("X:"+parseInt(Player.getX())+" Y:"+parseInt(Player.getY()-1)+" Z:"+parseInt(Player.getZ()));
mapupdate();
}
}
}),400);
}

//作弊菜单
function openZbMenu()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var zbmenu=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
zbmenu.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("作弊菜单");
title.setLayoutParams(textParams);
layout.addView(title);
//给予物品
var button=new android.widget.Button(ctx);
button.setText("获得物品");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
give();
}}));
layout.addView(button);
//改游戏模式
var button=new android.widget.Button(ctx)
button.setText("游戏模式")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
gamemode();
}}));
layout.addView(button);
//改游戏时间
var button=new android.widget.Button(ctx)
button.setText("游戏时间")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
gametime();
}}));
layout.addView(button);
//改游戏天气
var button=new android.widget.Button(ctx)
button.setText("游戏天气")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
gameweather();
}}));
layout.addView(button);
//传送
var button=new android.widget.Button(ctx)
button.setText("玩家位置")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
tppos();
}}));
layout.addView(button);
//变速
var button=new android.widget.Button(ctx)
button.setText("变速")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
changespeed();
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
zbmenu.setContentView(mlayout);
zbmenu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
zbmenu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
zbmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
zbmenu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err); 
}}

function give()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var give=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
give.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("物品菜单");
title.setLayoutParams(textParams);
layout.addView(title);
//给予挖石机
var button=new android.widget.Button(ctx);
button.setText("获得挖石机");
button.setTextSize(13);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
if(Level.getGameMode() == 0){
Player.addItemInventory(255,1,0);
}
if(Level.getGameMode() == 1){
Entity.setCarriedItem(Player.getEntity(),255,1,0);
}
clientMessage(lang[0]+"给予玩家 挖石机 X1！");
}}));
layout.addView(button);
//用ID获得
var button=new android.widget.Button(ctx);
button.setText("添加物品");
button.setTextSize(15);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
TooManyItems();
}}));
layout.addView(button);
//背包
var button=new android.widget.Button(ctx);
button.setText("清空背包");
button.setTextSize(15);
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
for(var islot = 9;islot <= 44;islot++)
{
Player.clearInventorySlot(islot);
//Player.addItemInventory(4,64,0);
}
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
give.setContentView(mlayout);
give.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.15);
give.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(15,0,0,0)));
give.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.45,0);
}
catch(err){print("Error:"+err);
}}

function TooManyItems()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var tmiLayout = new android.widget.LinearLayout(ctx);
try{
//TooManyItems
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("添加物品")
id.setHint("物品序号（ID）");
amount.setHint("数量");
data.setHint("特殊数据值");
id.setInputType(number);
amount.setInputType(number);
data.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(amount);
tmiLayout.addView(data);
tmiLayout.addView(add);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加物品");

add.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(){

var itemId = id.getText();
var iAmount = amount.getText();
var iData = data.getText();

if(itemId == null){itemId = 0;}
if(iAmount<=0){iAmount = 1;}
if(idata == null){idata = 0;}

if(Level.getGameMode() == 0){
Player.addItemInventory(itemId,iAmount,iData);
}
if(Level.getGameMode() == 1){
Entity.setCarriedItem(Player.getEntity(),itemId,iAmount,iData);
}
clientMessage(lang[0]+"给予玩家 "+itemId+":"+iData+" X"+iAmount+"！");

tmiDialog.dismiss();
}});
tmiDialog.show();
}catch(err){
print("错误: "+err+".");
}}

function gamemode()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var gamemode=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
gamemode.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(18);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("游戏模式");
title.setLayoutParams(textParams);
layout.addView(title);
//生存
var button=new android.widget.Button(ctx);
button.setText("生存");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setGameMode(0);
clientMessage(lang[0]+"您的游戏模式已更新为生存！");
}}));
layout.addView(button);
//创造
var button=new android.widget.Button(ctx);
button.setText("创造");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setGameMode(1);
clientMessage(lang[0]+"您的游戏模式已更新为创造！");
}}));
layout.addView(button);
//飞行
var tick=new android.widget.CheckBox(ctx);
tick.setTextColor(android.graphics.Color.WHITE);
tick.setText("飞行");
tick.setChecked(Player.canFly());
tick.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v, isChecked){
if(isChecked){Player.setCanFly(true);
clientMessage(lang[0]+"飞行已开启。");}
else{Player.setCanFly(false);
clientMessage(lang[0]+"飞行已关闭。");}
}});
layout.addView(tick);
//结束
var mlayout=makeMenu(ctx,layout);
gamemode.setContentView(mlayout);
gamemode.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.15);
gamemode.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
gamemode.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(15,0,0,0)));
gamemode.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.45,0);
}
catch(err){print("Error:"+err);
}}

function gametime()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var gametime=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
gametime.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(18);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("游戏时间");
title.setLayoutParams(textParams);
layout.addView(title);
//清晨
var button=new android.widget.Button(ctx);
button.setText("清晨");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setTime(0);
clientMessage(lang[0]+"您的游戏时间已设置为清晨！");
}}));
layout.addView(button);
//正午
var button=new android.widget.Button(ctx);
button.setText("正午");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setTime(6000);
clientMessage(lang[0]+"您的游戏时间已设置为正午！");
}}));
layout.addView(button);
//傍晚
var button=new android.widget.Button(ctx);
button.setText("傍晚");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setTime(12000);
clientMessage(lang[0]+"您的游戏时间已设置为傍晚！");
}}));
layout.addView(button);
//午夜
var button=new android.widget.Button(ctx);
button.setText("午夜");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setTime(18000);
clientMessage(lang[0]+"您的游戏时间已设置为午夜！");
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
gametime.setContentView(mlayout);
gametime.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.15);
gametime.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
gametime.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(15,0,0,0)));
gametime.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.45,0);
}
catch(err){print("Error:"+err);
}}

function gameweather()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var gameweather=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
gameweather.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(18);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("游戏天气");
title.setLayoutParams(textParams);
layout.addView(title);

//无
var button=new android.widget.Button(ctx);
button.setText("晴天");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setLightningLevel(0);
Level.setRainLevel(0);
clientMessage(lang[0]+"天气已设置为晴朗！");
}}));
layout.addView(button);

//下雨
var button=new android.widget.Button(ctx);
button.setText("雨/雪");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setRainLevel(10);
Level.setLightningLevel(10);
clientMessage(lang[0]+"天气已设置为雨/雪！");
}}));
layout.addView(button);

//雷阵雨
var button=new android.widget.Button(ctx);
button.setText("雷阵雨");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
Level.setLightningLevel(10);
Level.setRainLevel(10);
clientMessage(lang[0]+"天气已设置为雷阵雨！");
}}));
layout.addView(button);

var mlayout=makeMenu(ctx,layout);
gameweather.setContentView(mlayout);
gameweather.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.15);
gameweather.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
gameweather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(15,0,0,0)));
gameweather.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.45,0);
}
catch(err){print("Error:"+err);
}}

function tppos()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout = new android.widget.LinearLayout(ctx);
var xlayout = new android.widget.LinearLayout(ctx);
var ylayout = new android.widget.LinearLayout(ctx);
var zlayout = new android.widget.LinearLayout(ctx);
try{
var s=new android.widget.TextView(ctx)
s.setTextSize(18);
s.setText("  X:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
xlayout.addView(s);

var x=new android.widget.EditText(ctx);
x.setText(String(Player.getX()));
xlayout.addView(x);

var s=new android.widget.TextView(ctx)
s.setTextSize(18);
s.setText("  Y:  ");
s.setTextColor(android.graphics.Color.rgb(255,255,255));
ylayout.addView(s);

var y=new android.widget.EditText(ctx);
y.setText(String(Player.getY()));
ylayout.addView(y);

var s=new android.widget.TextView(ctx)
s.setTextSize(18);
s.setText("  Z:  ");
s.setTextColor(android.graphics.Color.rgb(255,255,255));
zlayout.addView(s);

var z=new android.widget.EditText(ctx);
z.setText(String(Player.getZ()));
zlayout.addView(z);

var add = new android.widget.Button(ctx);
add.setText("传送");

layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(xlayout);
layout.addView(ylayout);
layout.addView(zlayout);
layout.addView(add);

//Dialogs
var Dialog = new android.app.Dialog(ctx);
Dialog.setContentView(layout);
Dialog.setTitle("移动到坐标");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p){
Entity.setPosition(Player.getEntity(),x.getText(),y.getText(),z.getText());
Dialog.dismiss();
}});

Dialog.show();
}catch(err){
print("错误: "+err+".");
}}

function changespeed()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx);
try{
var tps = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var seekbar = new android.widget.SeekBar(ctx);

add.setText("确认")
tps.setHint("默认速度为20");
tps.setText(String(20));
tps.setInputType(number);
seekbar.setMax(100);
seekbar.setProgress(parseInt(tps.getText()));

layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(seekbar);
layout.addView(tps);
layout.addView(add);

//Dialog
var Dialog = new android.app.Dialog(ctx);
Dialog.setContentView(layout);
Dialog.setTitle("改变游戏速度");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p){
if(parseInt(tps.getText()) > 0)
{
ModPE.setGameSpeed(parseInt(tps.getText()));
clientMessage(lang[0]+"游戏速度切换为普通速度的"+parseInt(tps.getText())/20+"倍");
}
else
{
ModPE.setGameSpeed(20);
clientMessage(lang[0]+"无效数字,切换为普通速度");
}
Dialog.dismiss();
}});
seekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onStopTrackingTouch:function(v){
tps.setText(String(seekbar.getProgress()));
}}));
Dialog.show();
}catch(err){print("错误: "+err+".");
}}

//建筑菜单
function openBlMenu()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var blmenu=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
blmenu.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("建筑菜单");
title.setLayoutParams(textParams);
layout.addView(title);
//几何体
var button=new android.widget.Button(ctx);
button.setText("几何体");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
building();
}}));
layout.addView(button);
//改重生点
var button=new android.widget.Button(ctx);
button.setText("设置重生点");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
setspawn();
}}));
layout.addView(button);
//脚下生方块
var button=new android.widget.Button(ctx);
button.setText("脚下生基岩");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
settile();
}}));
layout.addView(button);
//空岛生成器
var button=new android.widget.Button(ctx);
button.setText("生成空岛");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
var x=parseInt(Player.getX());
var y=parseInt(Player.getY()+1);
var z=parseInt(Player.getZ());
spawnisland(x, y, z);
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
blmenu.setContentView(mlayout);
blmenu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
blmenu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
blmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
blmenu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err); 
}}

function building()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var build=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
build.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("几何体");
title.setLayoutParams(textParams);
layout.addView(title);
//两点填充
var button=new android.widget.Button(ctx);
button.setText("两点填充");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
selectpoint();
}}));
layout.addView(button);
//圆柱

//圆锥

//结束
var mlayout=makeMenu(ctx,layout);
build.setContentView(mlayout);
build.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.15);
build.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
build.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(15,0,0,0)));
build.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.45,0);
}
catch(err){print("Error:"+err);
}}

function selectpoint()
{
if(select == 0)
{
if(Player.getCarriedItem() <= 255)
{
select = 1;
blockid = Player.getCarriedItem();
blockdata = Player.getCarriedItemData();
print("用木锄选择两点");
}
else
{
print("请将要填充的方块拿在手中")
}
}
else
{
select = 0;
print("取消");
}
}

function square(x1, y1, z1, x2, y2, z2, id, data)
{
X[1] = Math.min(x1,x2);
Y[1] = Math.min(y1,y2);
Z[1] = Math.min(z1,z2);
X[2] = Math.max(x1,x2);
Y[2] = Math.max(y1,y2);
Z[2] = Math.max(z1,z2);
for(var xi = 0;X[1] + xi <= X[2];xi++)
{
for(var yi = 0;Y[1] + yi <= Y[2];yi++)
{
for(var zi = 0;Z[1] + zi <= Z[2];zi++)
{
Level.setTile(X[1]+xi,Y[1]+yi,Z[1]+zi,blockid,blockdata);
}
}
}
}

function setspawn()
{
Level.setSpawn(Player.getX(),Player.getY(),Player.getZ());
clientMessage(lang[0]+"已设置玩家位置为重生点");
}

function settile()
{
var x=parseInt(Player.getX());
var y=parseInt(Player.getY()-2);
var z=parseInt(Player.getZ());
Level.setTile(x,y,z,7);
clientMessage(lang[0]+"在 x:"+x+",y:"+y+",z:"+z+" 处生成基岩");
}

function spawnisland(jx,jy,jz)
{
var code,a=0;
try{
code=[-3,3,0,3,0,-3,4,-1,2,0,-3,4,0,2,0,-3,4,1,2,0,-2,2,0,3,0,-2,3,-1,3,0,-2,3,0,3,0,-2,3,1,3,0,-2,4,-2,2,0,-2,4,-1,2,0,-2,4,0,2,0,-2,4,1,2,0,-2,4,2,2,0,-2,8,-1,18,12,-2,8,0,18,8,-2,8,1,18,12,-2,9,0,18,8,-1,1,0,3,0,-1,2,-1,3,0,-1,2,0,3,0,-1,2,1,3,0,-1,3,-2,3,0,-1,3,-1,3,0,-1,3,0,3,0,-1,3,1,3,0,-1,3,2,3,0,-1,4,-3,2,0,-1,4,-2,2,0,-1,4,-1,2,0,-1,4,0,2,0,-1,4,1,2,0,-1,4,2,2,0,-1,4,3,2,0,-1,8,-2,18,12,-1,8,-1,18,12,-1,8,0,18,12,-1,8,1,18,12,-1,8,2,18,12,-1,9,-1,18,12,-1,9,0,18,8,-1,9,1,18,12,-1,10,0,18,8,0,0,0,7,0,0,1,-1,3,0,0,1,1,3,0,0,2,-2,3,0,0,2,-1,3,0,0,2,1,3,0,0,2,2,3,0,0,3,-3,3,0,0,3,-2,3,0,0,3,-1,3,0,0,3,1,3,0,0,3,2,3,0,0,3,3,3,0,0,4,-3,2,0,0,4,-2,2,0,0,4,-1,2,0,0,4,0,3,0,0,4,1,3,0,0,4,2,2,0,0,4,3,2,0,0,5,-1,54,[2,79,0,2,325,10,1,13,0,1,50,0,1,360,0,1,361,0,1,458,0,1,338,0,1,81,0,1,39,0,1,40,0,1,352,0,1,298,0,1,299,0,1,300,0,1,301,0,1,347,0,[1,"要有耐心"],345,0,[1,"不要迷失"]],0,5,0,17,0,0,5,1,91,0,0,6,0,17,0,0,7,0,17,0,0,8,-2,18,8,0,8,-1,18,8,0,8,0,17,0,0,8,1,18,12,0,8,2,18,12,0,9,-2,18,8,0,9,-1,18,8,0,9,0,17,0,0,9,1,18,12,0,9,2,18,8,0,10,-1,18,8,0,10,0,18,8,0,10,1,18,8,1,1,0,3,0,1,2,-1,3,0,1,2,0,3,0,1,2,1,3,0,1,3,-2,3,0,1,3,-1,3,0,1,3,0,3,0,1,3,1,3,0,1,3,2,3,0,1,4,-3,2,0,1,4,-2,2,0,1,4,-1,2,0,1,4,0,2,0,1,4,1,2,0,1,4,2,2,0,1,4,3,2,0,1,8,-2,18,12,1,8,-1,18,12,1,8,0,18,12,1,8,1,18,12,1,8,2,18,12,1,9,-1,18,8,1,9,0,18,8,1,9,1,18,12,1,10,0,18,8,2,2,0,3,0,2,3,-1,3,0,2,3,0,3,0,2,3,1,3,0,2,4,-2,2,0,2,4,-1,2,0,2,4,0,2,0,2,4,1,2,0,2,4,2,2,0,2,8,-1,18,12,2,8,0,18,8,2,8,1,18,12,2,9,0,18,8,3,3,0,3,0,3,4,-1,2,0,3,4,0,2,0,3,4,1,2,0,-3,5,-1,31,1,-3,5,1,31,2,-2,5,-2,31,1,-2,5,-1,31,2,-2,5,0,31,1,-2,5,1,37,0,-2,5,2,31,2,-1,5,-2,31,1,-1,5,-1,31,1,-1,5,1,31,1,-1,5,2,31,1,-1,5,3,31,1,0,1,0,12,0,0,2,0,12,0,0,3,0,12,0,0,5,-3,63,[0,lang[17],Player.getName(Player.getEntity()),lang[18],lang[19]],0,5,-2,31,2,0,5,2,31,1,0,5,3,31,1,1,5,-2,38,0,1,5,-1,31,1,1,5,0,31,2,1,5,1,31,1,1,5,2,31,1,1,5,3,31,1,2,5,-1,31,1,2,5,0,31,2,2,5,1,31,1,3,5,0,31,1];}
catch(err){print("不是标准的建筑代码！");return -1;}
for(i=0;i<code.length;i=i+5)
{
if(code[i+3]==63 || code[i+3]==68)
{
Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4][0]);
for(ii=1;ii<code[i+4].length;ii++)
{
Level.setSignText(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,ii-1,code[i+4][ii]);
}
}
else if(code[i+3]==54)
{
Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4][0]);
var arr=code[i+4];
//arr.shift();
var islot = 0;
for(ii=1;ii<arr.length;ii=ii+3)
{
if(arr[ii]==347 || arr[ii]==345)
{
Level.setChestSlot(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,islot,arr[ii],arr[ii+1],arr[ii+2][0]);
var arr2=arr[ii+2];
Level.setChestSlotCustomName(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,islot,arr2[1]);
islot++;
}
else
{
Level.setChestSlot(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,islot,arr[ii],arr[ii+1],arr[ii+2]);
islot++;
}
}
}
else
{
Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4]);
}
a++;
}
return a;
}

//改变语言
function chlanguage()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var dialog=new android.app.Dialog(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
dialog.setTitle("修改语言");
//自动
var button=new android.widget.Button(ctx);
button.setText("Auto(自动)");
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(){
language = ModPE.getLanguage();
saveoptions();
dialog.dismiss();
}});
layout.addView(button);
//中文
var button=new android.widget.Button(ctx);
button.setText("中文(中国)");
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(){
language = "zh_CN";
saveoptions();
clientMessage(ChatColor.YELLOW+"[空岛帮手] "+ChatColor.WHITE+"已设置语言为中文(中国)，重新进入存档生效。");
dialog.dismiss();
}});
layout.addView(button);
//英语
var button=new android.widget.Button(ctx);
button.setText("English(US)");
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(){
language = "en_US";
saveoptions();
clientMessage(ChatColor.YELLOW+"[Island Helper] "+ChatColor.WHITE+"Set language(English(US)) successfully.Please quit and enter the save.");
dialog.dismiss();
}});
layout.addView(button);

dialog.setContentView(layout);
dialog.show();
}catch(err){print(err)}
}

//更多有趣功能
function coloreggs()
{
var layout=new android.widget.LinearLayout(ctx);
try{
var more=new android.widget.PopupWindow(layout,dip2px(ctx,70), dip2px(ctx,30)); 
more.setFocusable(true);
layout.setOrientation(1);
//菜单
//标题
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
var title=new android.widget.TextView(ctx);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.rgb(255,255,255));
title.setText("彩蛋");
title.setLayoutParams(textParams);
layout.addView(title);
//控制生物
var button=new android.widget.Button(ctx)
button.setText("控制生物")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){

}}));
layout.addView(button);
//炫酷粒子
var button=new android.widget.Button(ctx)
button.setText("炫酷粒子")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
if(particle){clientMessage(lang[0]+"粒子效果已清除");
particle = false;}
else{setparticle();}
}}));
layout.addView(button);
//核弹
var button=new android.widget.Button(ctx)
button.setText("核弹")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
superTNT();
}}));
layout.addView(button);
//望远镜
var button=new android.widget.Button(ctx)
button.setText("望远镜")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
if(zoop!=null){zoop.dismiss();
zoop=null;}
else{fovzoop();}
}}));
layout.addView(button);
//枪械
var button=new android.widget.Button(ctx)
button.setText("射击模式")
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
if(shoot!=null){shoot.dismiss();
shoot=null;}
else{openflan();}
}}));
layout.addView(button);
//结束
var mlayout=makeMenu(ctx,layout);
more.setContentView(mlayout);
more.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.20);
more.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
more.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(31,0,0,0)));
more.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0);
}
catch(err){print("Error:"+err);
}}

function setparticle()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx);
try{
var dialog=new android.app.Dialog(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
dialog.setTitle("选择炫酷粒子");

var stitle=new android.widget.TextView(ctx);
stitle.setText("粒子类型: ");
layout.addView(stitle);

var spinner=new android.widget.Spinner(ctx);
var adapter=new android.widget.ArrayAdapter(ctx,android.R.layout.select_dialog_multichoice,new java.lang.String("未选择,村民生气,泡泡粒子,云烟粒子,暴击粒子,滴落岩浆,滴落水滴,附魔文字,掉落沙,火焰粒子,村民开心,爱心粒子,巨大爆炸,巨大爆炸种子？,墨水粒子,物品损坏,大型爆炸,岩浆粒子,怪物燃烧,音符粒子,传送门粒子,跳动雨滴,红石粒子,史莱姆粒子,烟雾粒子,烟雾粒子2,雪球粒子,药水粒子,药水粒子2,药水粒子3,喷溅粒子,悬浮沙粒子,地形粒子,海浪粒子").split(","))
spinner.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener(){
onItemSelected:function(w){
switch(spinner.getSelectedItemId())
{
case 1:pid=ParticleType.angryVillager;break;
case 2:pid=ParticleType.bubble;break;
case 3:pid=ParticleType.cloud;break;
case 4:pid=ParticleType.crit;break;
case 5:pid=ParticleType.dripLava;break;
case 6:pid=ParticleType.dripWater;break;
case 7:pid=ParticleType.enchantmenttable;break;
case 8:pid=ParticleType.fallingDust;break;
case 9:pid=ParticleType.flame;break;
case 10:pid=ParticleType.happyVillager;break;
case 11:pid=ParticleType.heart;break;
case 12:pid=ParticleType.hugeexplosion;break;
case 13:pid=ParticleType.hugeexplosionSeed;break;
case 14:pid=ParticleType.ink;break;
case 15:pid=ParticleType.itemBreak;break;
case 16:pid=ParticleType.largeexplode;break;
case 17:pid=ParticleType.lava;break;
case 18:pid=ParticleType.mobFlame;break;
case 19:pid=ParticleType.note;break;
case 20:pid=ParticleType.portal;break;
case 21:pid=ParticleType.rainSplash;break;
case 22:pid=ParticleType.redstone;break;
case 23:pid=ParticleType.slime;break;
case 24:pid=ParticleType.smoke;break;
case 25:pid=ParticleType.smoke2;break;
case 26:pid=ParticleType.snowballpoof;break;
case 27:pid=ParticleType.spell;break;
case 28:pid=ParticleType.spell2;break;
case 29:pid=ParticleType.spell3;break;
case 30:pid=ParticleType.splash;break;
case 31:pid=ParticleType.suspendedTown;break;
case 32:pid=ParticleType.terrain;break;
case 33:pid=ParticleType.waterWake;break;
}
}});
spinner.setAdapter(adapter);
layout.addView(spinner);

var text=new android.widget.TextView(ctx);
text.setText("大小设置: ");
layout.addView(text);
var size=new android.widget.EditText(ctx);
size.setText(String(2));
size.setHint("尺寸");
size.setInputType(number);
layout.addView(size);

var text=new android.widget.TextView(ctx);
text.setText("速度设置: ");
layout.addView(text);
var speed=new android.widget.EditText(ctx);
speed.setText(String(0));
speed.setHint("速度");
speed.setInputType(number);
layout.addView(speed);
var text=new android.widget.TextView(ctx);
text.setText("调完速度后果自负→_→");
layout.addView(text);

var start=new android.widget.Button(ctx);
start.setText("开启五毛钱特效之旅");
start.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(){
if(spinner.getSelectedItemId() != 0)
{
psize = size.getText();
pspeed = speed.getText();
particle = true;
clientMessage(lang[0]+"粒子效果已变更");
}
else
{
particle = false;
clientMessage(lang[0]+"未选择粒子效果，粒子效果已清除");
}
dialog.dismiss();
}});
layout.addView(start);

dialog.setContentView(layout);
dialog.show();
}catch(err){print(err)}
}

function superTNT()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx);
try{
var dialog=new android.app.Dialog(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
dialog.setTitle("核弹~啦啦啦");
var word=new android.widget.TextView(ctx);
word.setTextSize(18);
word.setText("威力:");
word.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(word);
var power=new android.widget.EditText(ctx);
power.setText(String(6));
power.setHint("威力");
power.setInputType(number);
layout.addView(power);
var tip=new android.widget.TextView(ctx);
tip.setTextSize(22);
tip.setText("威力建议在18以内，小心卡死");
tip.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(tip);
var bomb=new android.widget.Button(ctx);
bomb.setText("Bomb!");
bomb.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(){
Level.spawnMob(Player.getX(),Player.getY()+3,Player.getZ(),65);
for(var i = 2;i <= power.getText();i = i + 3)
{
Level.spawnMob(Player.getX(),Player.getY()+3,Player.getZ()+i,65);
Level.spawnMob(Player.getX()+i,Player.getY()+3,Player.getZ()+2*i,65);
Level.spawnMob(Player.getX()+i,Player.getY()+3,Player.getZ()+i,65);
Level.spawnMob(Player.getX()+i,Player.getY()+3,Player.getZ(),65);
Level.spawnMob(Player.getX()+2*i,Player.getY()+3,Player.getZ()+i,65);

Level.spawnMob(Player.getX(),Player.getY()+3,Player.getZ()-i,65);
Level.spawnMob(Player.getX()+i,Player.getY()+3,Player.getZ()-2*i,65);
Level.spawnMob(Player.getX()+i,Player.getY()+3,Player.getZ()-i,65);
Level.spawnMob(Player.getX()+i,Player.getY()+3,Player.getZ(),65);
Level.spawnMob(Player.getX()+2*i,Player.getY()+3,Player.getZ()-i,65);

Level.spawnMob(Player.getX(),Player.getY()+3,Player.getZ()-i,65);
Level.spawnMob(Player.getX()-i,Player.getY()+3,Player.getZ()-2*i,65);
Level.spawnMob(Player.getX()-i,Player.getY()+3,Player.getZ()-i,65);
Level.spawnMob(Player.getX()-i,Player.getY()+3,Player.getZ(),65);
Level.spawnMob(Player.getX()-2*i,Player.getY()+3,Player.getZ()-i,65);

Level.spawnMob(Player.getX(),Player.getY()+3,Player.getZ()+i,65);
Level.spawnMob(Player.getX()-i,Player.getY()+3,Player.getZ()+2*i,65);
Level.spawnMob(Player.getX()-i,Player.getY()+3,Player.getZ()+i,65);
Level.spawnMob(Player.getX()-i,Player.getY()+3,Player.getZ(),65);
Level.spawnMob(Player.getX()-2*i,Player.getY()+3,Player.getZ()+i,65);
}
dialog.dismiss();
}});
layout.addView(bomb);
dialog.setContentView(layout);
dialog.show();
}catch(err){print(err)}
}

function fovzoop()
{
var layout=new android.widget.RelativeLayout(ctx);
try{
var fov = false;
zoop=new android.widget.PopupWindow();
var button=new android.widget.Button(ctx);
button.setText("+");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
if(fov == false){fov = true;
ModPE.setFov(24);}
else{fov = false;
ModPE.resetFov();}
}}));
layout.addView(button);
zoop.setContentView(layout);
zoop.setWidth(96);
zoop.setHeight(96);
zoop.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 384);
}
catch(err){print("Error:"+err);
}}

function openflan()
{
var layout=new android.widget.RelativeLayout(ctx);
try{
shoot=new android.widget.PopupWindow();
var button=new android.widget.Button(ctx);
button.setText("⊙");
button.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
shooting=1
break;
case 1:
shooting=0
break;
}
return true;
}
}));
layout.addView(button);
shoot.setContentView(layout);
shoot.setWidth(96);
shoot.setHeight(96);
shoot.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 288);
}
catch(err){print("Error:"+err);
}}

function rpg()
{
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
var sn=Level.spawnMob(getPlayerX()+xv*2.1,getPlayerY()+yv*2.1,getPlayerZ()+zv*2.1,81)
setVelX(sn,xv*3)
setVelY(sn,yv*3)
setVelZ(sn,zv*3)
}

//关于
function about()
{
try{
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("关于");
dialog.setMessage("空岛小帮手  正式版V"+JsVersion+"\n作者:QingChenW\n作者QQ:201436728\n更新网址:http://www.mcbbs.net/thread-583823-1-1.html\n讨论群:287307326\n欢迎提交bug和建议\n感谢您的使用");

dialog.setPositiveButton("返回",new android.content.DialogInterface.OnClickListener(){onClick: function(dialog,w){
dialog.dismiss();
}})
dialog.show();
}catch(err){print(err)}
}

//其实我本来想加密来着,但是还是算了QAQ... By QingChenW
//(我会告诉你其实是加密不了吗)