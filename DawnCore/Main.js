/* =========================
// main.js : Main function and global variables
 =========================*/

// Const
const infoer = INFO_LOADED ? new Info() : null;
const logger = LOG_LOADED ? new Log() : null;
const configer = CONFIG_LOADED ? new Config() : null;
const addoner = ADDON_LOADED ? new Addon() : null;
const updater = UPDATE_LOADED ? new Update() : null;
const langer = LANG_LOADED ? new Lang() : null;
const gamer = GAME_LOADED ? new Game() : null;
const cmder = SERVER_LOADED ? new Server() : null;
const guier = GUI_LOADED ? new Gui() : null;

function init()
{
// Init Infoer
getInfo().dataPath = SCRIPTS_DIR + this.get(INFO_TYPES.id);
getInfo().version = new Version(getInfo().get(INFO_TYPES.version));
var path = getInfo().dataPath;
var name = getInfo().get(INFO_TYPES.name), name2;
name2 = name + format(new Date(), "_yyyy-MM-dd") + ".log");
// Init logger
getLog().setFile(new java.io.File(path + "/logs", name2);
getLog().canWrite = true;
// Init configer
name2 = name;
switch(getConfig().confType)
{
default:
case CONFIG_TYPES.basic: name2 += ".cfg"; break;
case CONFIG_TYPES.property: name2 += ".ini"; break;
case CONFIG_TYPES.json: name2 += ".json"; break;
}
getConfig().setFile(new java.io.File(path, name2));
// Init addoner
getAddon().loadFromList(null);
// Init updater
var updateJSON = httpGet(getInfo().get(INFO_TYPES.update));
getInfo().version.analyse(updateJSON);
// Init langer
// Init gamer
// Init cmder
// Init guier
}

// Getter
function getInfo()
{
    return infoer;
}

function getLog()
{
    return logger;
}

function getConfig()
{
    return configer;
}

function getAddon()
{
    return addoner;
}

function getUpdate()
{
    return updater;
}

function getLang()
{
    return langer;
}

function getGame()
{
    return gamer;
}

function getServer()
{
    return cmder;
}

function getGui()
{
    return guier;
}

// ================================
// 恭喜你,终于耐着性子看完了哦,累不累~
// 后话:
// 其实在第一版中我想加密来着,不过失败了
// 不过我也不想加密了,另外我还加了些注释
// 也是方便新手能从中学到一些东西
// 另外虽然插件比起第一版来说有些进步
// 不过由于我也是新手,难免有糟糕之处
// 还望大神指教
// By QingChenW