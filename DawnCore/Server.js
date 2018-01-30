/* =========================
// Server.js : A class handle commands
 =========================*/

// Import
const SERVER_LOADED = true; // 标记Server.js已加载的宏
// Const

// Server Class
function Server()
{
// Fields
this.handlers = {};
// Execute
this.execute = new function(cmd)
{
var args = cmd.split(" ");
var handler = this.handlers[args[0]];
if(handler != undefined)
{
args.shift();
handler.execute(args);
}
}
// Register
this.register = new function(handler)
{
if(handler instanceof CommandHandler)
{
this.handlers[handler.name] = handler;
}
}
}

function CommandHandler(name)
{
this.name = name;
this.execute = new function(args){};
}

function chatHook(str)
{
if(str.slice(0, 1) == "/")
{
getServer().execute(str.slice(1));
}
}
function procCmd(cmd)
{

}
function serverMessageReceiveHook(str)
{

}