//巨ger之力Js 版本V1.0
//本Js由Wdawning工作室QingChenW制作
//Copyright© 2016 Wdawning.All Rights Reserved.
//授权给一一九中学八年一班李耀崇
//QingChenW就是wc啦
//欢迎加入讨论群进行讨论,群号:287307326

//开始
//变量
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
//gui
var gui;

//加载存档
function newLevel()
{
clientMessage(ChatColor.RED+"[巨Ger之力] "+ChatColor.WHITE+"欢迎使用本js, 作者QingChenW");
clientMessage(ChatColor.RED+"[巨Ger之力] "+ChatColor.WHITE+"授权给一一九中学八年一班李耀崇");
clientMessage(ChatColor.RED+"[巨Ger之力] "+ChatColor.WHITE+"本js拥有主动技能ger力无限和被动技能巨ger之力");
//按钮
gui=new android.widget.PopupWindow();
var layout=new android.widget.RelativeLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText("Ger力无限!");
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){
//开始

//结束
}}));
layout.addView(button);
gui.setContentView(layout);
gui.setWidth(256);
gui.setHeight(96);
}

//退出
function leaveGame()
{
//删除按钮
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
//执行
if(gui!=null){gui.dismiss();}
//结束
}}));
}

//每刻执行
function modTick()
{
//ger力无限的gui
if(Player.getPointedEntity() != -1 && Entity.getEntityTypeId(Player.getPointedEntity()) < 64)
{
if(gui.isShowing() == false)
{
gui.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.BOTTOM,512,48);
}
}
else if(gui.isShowing() == true)
{
gui.dismiss();
}
}

//被攻击
function attackHook(attacker,victim)
{
if(attacker == Player.getEntity() && Entity.getEntityTypeId(victim) < 64 && Player.getCarriedItem() == 0)
{
Entity.addEffect(victim, MobEffect.weakness, 80, 1, false, true);
Entity.addEffect(victim, MobEffect.movementSlowdown, 60, 1, false, true);
Entity.addEffect(victim, MobEffect.poison, 100, 1, false, true);
Entity.addEffect(attacker, MobEffect.regeneration, 20, 1, false, true);
Level.addParticle(ParticleType.flame, Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 1, 1, 3);
}
}
