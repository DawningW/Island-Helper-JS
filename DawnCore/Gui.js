/* =========================
// Gui.js : A class manage Android Activities
 =========================*/

// Import
const GUI_LOADED = true; // 标记Gui.js已加载的宏
// Const

// Gui Class
function Gui()
{
// Fields
this.activity = getMainActivity();

}






/* GUI函数 */
/* 备注: 其实这些都是曙光API未完成的东东啦
3	AutoCompleteTextView
AutoCompleteTextView是一个视图，它类似于EditText，不同之处是在用户键入时，它会显示自动完成建议的列表。
10	ProgressBar
进度条视图（ProgressBar）提供一些日常任务，当在后台执行任务时，给出视觉反馈。

Color.BLACK           黑色
Color.BLUE            蓝色
Color.CYAN            青绿色
Color.DKGRAY          灰黑色
Color.GRAY            灰色
Color.GREEN           绿色
Color.LTGRAY          浅灰色
Color.MAGENTA         红紫色
Color.RED             红色
Color.TRANSPARENT     透明
Color.WHITE           白色
Color.YELLOW          黄色
 */
 
/** dip2px 将设备独立像素转换为像素
 * 参数: ctx 就是ctx
 *       dips 设备独立像素
 * 返回值: dp 像素
 */
function dip2px(ctx, dips)
{
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}

/** createScrollMenu 生成一个带滚动条的菜单布局
 * 参数: layout 布局
 * 返回值: scrollView 带滚动条的视图
 */
function createScrollView(layout)
{
var mlayout = new android.widget.RelativeLayout(ctx);
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var scrollView = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx, 2);
scrollView.setPadding(pad, pad, pad, pad);
scrollView.setLayoutParams(svParams);
scrollView.addView(layout);
mlayout.addView(scrollView);
return mlayout;
}

/** toast 生成浮动文本框
 * 参数: string content 内容
 * 作者: 来自互联网，作者忘了。。。
 */
function createToast(content)
{ 
ctx.runOnUiThread(new java.lang.Runnable({run: function(){ 
android.widget.Toast.makeText(ctx, content, 0).show();
}}));
}

/** createPopupWindow 生成一个窗口
 * 参数: layout 布局
 *       width 窗口宽度
 *       height 窗口高度
 *       color 背景颜色
 *       focusable 触摸其他地方是否会关闭窗口
 *       touchable 是否可以触摸
 * 返回值: PopupWindow 生成的窗口
 * 作者: QingChenW
 */
function createPopupWindow(layout, property, listener)
{
var window = new android.widget.PopupWindow(layout, property.width, property.height);
if(property.background != undefined) window.setBackgroundDrawable(property.background);
if(property.focusable != undefined) window.setFocusable(property.focusable);
if(property.touchable != undefined) window.setTouchable(property.touchable);
window.showAtLocation(ctx.getWindow().getDecorView(), property.gravity, property.x, property.y);
return window;
}

/** createDialog 生成一个对话框
 * 参数: layout 布局
 *       title 对话框标题
 *       cancelable 触摸其他地方以及返回键是否会关闭对话框
 * 返回值: Dialog 生成的对话框
 * 作者: QingChenW
 */
function createDialog(layout, property)
{
var dialog = new android.app.Dialog(ctx);
dialog.setContentView(layout);
dialog.setTitle(property.title);
if(property.cancelable != undefined) dialog.setCancelable(property.cancelable);
if(property.touchCancelable != undefined) dialog.setCanceledOnTouchOutside(property.touchCancelable);
return dialog;
}

/** createAlertDialog 生成一个警告对话框
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: Dialog 生成的对话框
 * 作者: QingChenW
 */
function createAlertDialog(layout, property, listener)
{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(property.title);
dialog.setMessage(property.message);
if(property.cancelable != undefined) dialog.setCancelable(property.cancelable);
if(property.touchCancelable != undefined) dialog.setCanceledOnTouchOutside(property.touchCancelable);
if(property.positive != undefined) dialog.setPositiveButton(property.positive, listener.positive);
if(property.natural != undefined) dialog.setNaturalButton(property.natural, listener.natural);
if(property.negative != undefined) dialog.setNegativeButton(property.negative, listener.negative);
return dialog;
}

/** createProgressDialog 生成一个进度对话框
 *       property 属性  {

                        
                        }
 * 返回值: Dialog 生成的对话框
 * 作者: QingChenW
 */
function createProgressDialog(layout, property)
{
var dialog = new android.app.ProgressDialog(ctx);
dialog.setTitle(property.title);
dialog.setMessage(property.message);
dialog.setMax(property.max);
if(property.style == undefined) property.style = android.app.ProgressDialog.STYLE_HORIZONTAL;
dialog.setProgressStyle(property.style);
if(property.cancelable != undefined) dialog.setCancelable(property.cancelable);
if(property.touchCancelable != undefined) dialog.setCanceledOnTouchOutside(property.touchCancelable);
return dialog;
}

/** createText 生成文字视图
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 * 返回值: TextView 文字视图
 * 作者: QingChenW
 */
function createText(layout, property)
{
var textView = new android.widget.TextView(ctx);
textView.setText(property.text);
if(property.size != undefined) textView.setTextSize(property.size);
if(property.gravity != undefined) textView.setGravity(property.gravity);
if(property.color != undefined) textView.setTextColor(property.color);
layout.addView(textView);
return textView;
}

/** createImage 生成图片视图
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 * 返回值: ImageView 生成的图片布局
 * 作者: QingChenW
 */
function createImage(layout, property)
{
var imageView = new android.widget.ImageView(ctx);
imageView.setImageBitmap(property.image);
if(property.scaleType == undefined) property.scaleType = android.widget.ImageView.ScaleType.CENTER_CROP;
imageView.setScaleType(property.scaleType);
layout.addView(imageView);
return imageView;
}

/** createEditText 生成文本编辑框
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: TextView 文字视图
 * 作者: QingChenW
 */
function createEditText(layout, property)
{
var editText = new android.widget.EditText(ctx);
editText.setText(text);
if(property.hint != undefined) editText.setHint(hint);
if(property.inputType != undefined) editText.setInputType(inputType);
if(property.size != undefined) editText.setTextSize(size);
if(property.color != undefined) editText.setTextColor(color);
layout.addView(editText);
return editText;
}

/** createButton 生成一个按钮
 * 参数: layout 布局
 *       property 属性  {
                        text: 按钮文本(必须)
                        size: 按钮文本尺寸(可选)
                        color: 按钮文本颜色(可选)
                        background: 按钮背景(可选)
                        
                        }
 *       listener 事件监听器{
                        click: 点击事件监听器
                        }
 * 返回值: Button 生成的按钮
 * 作者: QingChenW
 */
function createButton(layout, property, listener)
{
var button = new android.widget.Button(ctx);
button.setText(property.text);
if(property.size != undefined) button.setTextSize(property.size);
if(property.color != undefined) button.setTextColor(property.color);
if(property.background != undefined) setBackground(property.background);
if(listener.click != undefined) button.setOnClickListener(listener.click);
layout.addView(button);
return button;
}

/** createToggleButton 生成开关按钮
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: ToggleButton 生成的开关按钮
 * 作者: QingChenW
 */
function createToggleButton(layout, property, listener)
{
var button = new android.widget.ToggleButton(ctx);
button.setTextOn(property.textOn);
button.setTextOff(property.textOff);
button.setChecked(property.isChecked);
if(property.size != undefined) button.setTextSize(property.size);
if(property.color != undefined) button.setTextColor(property.color);
if(property.background != undefined) setBackground(property.background);
if(listener.click != undefined) button.setOnClickListener(listener.click);
layout.addView(button);
return button;
}

/** createImageButton 生成一个图片按钮
 * 参数: layout 布局
 *       property 属性  {

                        
                        }
 *       listener 事件监听器{

                        }
 * 返回值: ImageButton 生成的图片按钮
 * 作者: QingChenW
 */
function createImageButton(layout, property, listener)
{
var button = new android.widget.ImageButton(ctx);
button.setImageBitmap(property.image);
if(property.scaleType == undefined) property.scaleType = android.widget.ImageView.ScaleType.CENTER_CROP;
button.setScaleType(property.scaleType);
if(property.background != undefined) button.setBackgroundDrawable(property.background);
if(listener.click != undefined) button.setOnClickListener(listener.click);
layout.addView(button);
return button;
}

/** createRadioButton 生成单选按钮
 * 参数: layout 布局
 *       property 属性
 * 返回值: RadioButton 生成的单选按钮
 * 作者: QingChenW
 */
function createRadioButton(layout, property)
{
var button = new android.widget.CheckBox(ctx);
button.setText(property.text);
button.setChecked(property.isChecked);
if(property.size != undefined) button.setTextSize(property.size);
if(property.color != undefined) button.setTextColor(property.color);
layout.addView(button);
return button;
}

/** createRadioGroup 生成单选按钮组
 * 参数: property 属性
 *       listener 事件监听器
 * 返回值: RadioGroup 生成的单选按钮组
 * 作者: QingChenW
 * 备注: 从API里我查到其实radiogroup继承了LinearLayout,所以可以使用setOrientation();
 *       如果有必要的话还可以给radiobutton加params,不过要记住是RadioGroup.LayoutParams
 *       listener是new OnCheckedChangeListener(){function: onCheckedChanged(group, checkedId){}}
 */
function createRadioGroup(property, listener)
{
var group = new android.widget.CheckBox(ctx);
if(property.orientation != undefined) group.setOrientation(property.orientation);
if(listener.change) group.setOnCheckedChangeListener(listener.change);
return group;
}

 /** createCheckBox 生成单选框
 * 参数: layout 布局
 *       property 属性
 *       listener 事件监听器
 * 返回值: CheckBox 生成的单选框
 * 作者: QingChenW
 */
function createCheckBox(layout, property, listener)
{
var check = new android.widget.CheckBox(ctx);
check.setText(property.text);
check.setChecked(property.isChecked);
if(property.size != undefined) check.setTextSize(property.size);
if(property.color != undefined) check.setTextColor(property.color);
if(listener.change != undefined) check.setOnCheckedChangeListener(listener.change);
layout.addView(check);
return check;
}

 /** createSeekBar 生成滑动条
 * 参数: layout 布局
 *       property 属性
 *       listener 事件监听器
 * 返回值: SeekBar 生成的滑动条
 * 作者: QingChenW
 */
function createSeekBar(layout, property, listener)
{
var seekBar = new android.widget.SeekBar(ctx);
seekBar.setMax(property.max);
if(property.progress != undefined) seekBar.setProgress(property.progress);
if(listener.change != undefined) seekBar.setOnSeekBarChangeListener(listener.change);
layout.addView(seekBar);
return seekBar;
}

/** createSpinner 生成下拉菜单
 * 参数: layout 布局
 *       property 属性
 *       listener 事件监听器
 * 返回值: Spinner 生成的下拉菜单
 * 作者: QingChenW
 * 备注: listener是这个select: new android.widget.AdapterView.OnItemSelectedListener(){onItemSelected: function(view){//...}}
 */
function createSpinner(layout, property, listener)
{
var spinner = new android.widget.Spinner(ctx);
if(property.style == undefined) property.style = android.R.layout.select_dialog_multichoice;
var adapter = new android.widget.ArrayAdapter(ctx, property.style, property.adapterArray);
spinner.setAdapter(adapter);
if(listener.select != undefined) spinner.setOnItemSelectedListener(listener.select);
layout.addView(spinner);
return spinner;
}

 /** createLayoutParam 根据布局生成一个param
 * 参数: layout 布局
 *       left 左间距
 *       top 上间距
 *       right 右间距
 *       bottom 下间距
 * 返回值: LayoutParams 生成的param
 * 作者: QingChenW
 */
function createLayoutParam(layout, left, top, right, bottom)
{
if(layout instanceof android.widget.LinearLayout)
{
var param = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
param.setMargins(left, top, right, bottom);
return param;
}
return null;
}

/** getWidth 获取屏幕宽度
 * 返回值: 屏幕宽度
 * 作者: QingChenW
 */
function getWidth()
{
return ctx.getWindowManager().getDefaultDisplay().getWidth();
}

/** getHeight 获取屏幕高度
 * 返回值: 屏幕高度
 * 作者: QingChenW
 */
function getHeight()
{
return ctx.getWindowManager().getDefaultDisplay().getHeight();
}
function getMainActivity()
{
return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
}