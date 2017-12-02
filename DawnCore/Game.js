/* =========================
// Game.js : A class manage Minecraft logics
 =========================*/
/* 游戏工具函数 */
/** registerItem 用于注册一个物品
 * 参数: int(请见ITEM_TYPE) type 物品种类
 *       int id 物品的序号ID
 *       int data 物品的最大数据值(损害值)
 *       int count 物品的最大堆叠
 *       string name 物品名称
 *       string texture 物品纹理名称
 *       array recipe 物品合成配方(设置为null为没有配方，格式为[数量, par4Scriptable, par5Scriptable]
 *       int category 物品栏类别(设置为null为不添加到创造物品栏中)，请参考启动器函数表
 *       未知 other 其他数据
 * 作者: QingChenW, 使用时请注明作者
 * 另请参考: ITEM_TYPE
 */
function registerItem(type, id, data, count, name, texture, recipe, category, other)
{
switch(type)
{
// 注册普通物品
case ITEM_TYPE.item:
ModPE.setItem(id, texture, 0, name, count);
Item.setMaxDamage(id, data);
break;
// 注册食物
case ITEM_TYPE.food:
ModPE.setFoodItem(id, texture, 0, add, name, other);
break;
// 注册工具
case ITEM_TYPE.tool:
ModPE.setItem(id, texture, 0, name, count);
Item.setMaxDamage(id, data);
Item.setHandEquipped(id, true);
break;
// 注册盔甲
case ITEM_TYPE.armor:
//Item.defineArmor(par1int, par2String, par3int, par4String, par5String, par6int, par7int, par8int);
// 注册投掷物
case ITEM_TYPE.throwable:
//Item.defineThrowable(par1int, par2String, par3int, par4String, par5int);
throw "未制作，敬请期待";
// 未知类型
default:
throw "unknownItemType:未知的物品种类，无法注册物品";
return;
}
// 注册合成表
if(recipe != null)
{
Item.addShapedRecipe(id, recipe[0], data, recipe[1], recipe[2]);
}
// 注册物品栏
if(category != null)
{
Player.addItemCreativeInv(id, 1, 0);
Item.setCategory(id, category);
}
}

/** registerBlock 用于注册一个方块
 * 参数: int(请见BLOCK_TYPE) type 方块种类
 *       int id 方块的序号ID
 *       string name 方块名称
 *       array textures 方块纹理，请参考启动器函数表
 *       renderType renderType 方块渲染种类，请参考启动器函数表
 *       int destroy 方块破坏时间
 *       int expRes 方块爆炸抗性
 *       int light 方块光照
 *       array shape 方块形状，请参考启动器函数表
 *       array recipe 方块合成配方(设置为null为没有配方，格式为[数量, par4Scriptable, par5Scriptable]
 *       int category 物品栏类别(设置为null为不添加到创造物品栏中)，请参考启动器函数表
 * 作者: QingChenW, 使用时请注明作者
 * 另请参考: BLOCK_TYPE
 */
function registerBlock(type, id, name, textures, renderType, destroy, expRes, light, shape, recipe, category)
{
switch(type)
{
case BLOCK_TYPE.normal:
Block.defineBlock(id, name, textures, 1, false, renderType);
break;
case BLOCK_TYPE.glass:
Block.defineBlock(id, name, textures, 0, true, renderType);
break;
case BLOCK_TYPE.water:
//Block.defineLiquidBlock(id, name, par3Object, par4Object);
return;
break;
}
Block.setRenderLayer(id, type);
Block.setDestroyTime(id, destroy);
Block.setExplosionResistance(id, expRes);
Block.setLightLevel(id, light);
if(shape != null)
{
Block.setShape(id, shape[0], shape[1], shape[2], shape[3], shape[4], shape[5], shape[6]);
}
// 注册合成表
if(recipe != null)
{
Item.addShapedRecipe(id, recipe[0], 0, recipe[1], recipe[2]);
}
// 注册物品栏
if(category != null)
{
Player.addItemCreativeInv(id, 1, 0);
Item.setCategory(id, category);
}
}

function fastDestroyBlocks(x, y, z, id)
{
if(Level.getTile(x , y, z) == id) Level.destroyBlock(x, y, z, true);
if(Level.getTile(x + 1, y, z) == id) fastDestroyBlocks(x + 1, y, z, id);
if(Level.getTile(x + 1, y, z + 1) == id) fastDestroyBlocks(x + 1, y, z + 1, id);
if(Level.getTile(x - 1, y, z) == id) fastDestroyBlocks(x - 1, y, z, id);
if(Level.getTile(x - 1, y, z - 1) == id) fastDestroyBlocks(x - 1, y, z - 1, id);
}