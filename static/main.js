
$(function() {
    //首页动画
    $('.indexPingluns').cycle({
        fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
        timeout: 10000,
        pager: '.indexPinglunPages'
    });

    $(".animateBody").hover(
        function() {
            $(this).cycle('pause');
        },
        function() {
            $(this).cycle('resume');
        }
    );




    /*****高亮显示隐藏*****/
       $(".hidebtn").click(function(){
           if($(this).hasClass('showbtnbg')){
               $(".hidebtn").removeClass("showbtnbg");
           }else{
               $(".hidebtn").addClass("showbtnbg");
           }

           $('.hiddenGN').toggle();
       });

       $(".showbtn").click(function(){
           if($(this).hasClass('showbtnbg')){
               $(".showbtn").removeClass("showbtnbg");
               $(".versionlist li").not('.hiddenGN').find('img').attr('src', 'uploads/images/xmind8/f1.png');
           }else{
               $(".showbtn").addClass("showbtnbg");
               $(".versionlist li").not('.hiddenGN').find('img').attr('src', 'uploads/images/xmind8/f2.png');
           }
       });

       /*****产品导航******/
           $(".xmenuline .xmenu").not(".redline").hover(function(){
               $(this).addClass("cfc381d redline");
               $(this).find("img").eq(0).removeClass("vh");

               var id = $(this).find("p img").attr("id");
               var src = "uploads/images/xmind8/";
               $("#"+id).attr("src",src + id + "h.png");

           },function(){
               $(this).removeClass("cfc381d redline");
               $(this).find("img").eq(0).addClass("vh");

               var id = $(this).find("p img").attr("id");
               var src = "uploads/images/xmind8/";
               $("#"+id).attr("src",src + id + ".png");

           });


           /****产品特性轮播****/
           $(".mubanZhanshis .lunnav").click(function(){
               var id = $(this).attr("id");
               $(this).parents().find("."+id).removeClass("dn").siblings().addClass("dn");
           });


    /***********侧边栏优化改版0511 start******************************/
    /*在线联系动画初始化*/
    _rotate_start("msg");

    //当点击跳转链接后，回到页面顶部位置
    $(".Rtop").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    var scrollHeight = $(window).scrollTop()
    if (scrollHeight > 100) {
        $('.Rtop').removeClass('dn');
        $('.tool-line:last').removeClass('dn');
    }
    $(window).scroll(function() {
        scrollHeight = $(this).scrollTop();
        if (scrollHeight > 100) {
            $('.Rtop').removeClass('dn');
            $('.tool-line:last').removeClass('dn');
        } else {
            $('.Rtop').addClass('dn');
            $('.tool-line:last').addClass('dn');
        }
    });

    $('.mobel, .Rtop').hover(function() {
        $(this).find('.imghover').attr('src', 'static/' + $(this).attr('imgname') + '_h.png');
        $(this).find('.hidemobelBox').css("display", "block");
    }, function() {
        $(this).find('.imghover').attr('src', 'static/' + $(this).attr('imgname') + '.png');
        $(this).find('.hidemobelBox').css("display", "none");
    });
    /***********侧边栏优化改版0511 end******************************/

});

/**产品侧边栏 客服动效 start**/
var _rotate_deg = 0;//回正 回到0度
var _rotate_angle = 30;//旋转度数 30度
var _rotate_deg_step = 5; //每次旋转角度，能够被_angle整除
var _rotate_duration = 1;//每次旋转时间
var _rotate_count = 0; //初始旋转次数
var _rotate_count_max = 6;//最大旋转次数
var _rotate_timer = null;
var _rotate_stop_time = 0;
var _rotate_stop_max_time = 500; //停止时间3秒

function _rotate_rotate(item) {
    if (_rotate_count == _rotate_count_max) {
        if (_rotate_deg == 0) {
            _rotate_stop_time = _rotate_stop_time + _rotate_duration;
            if (_rotate_stop_time == _rotate_stop_max_time) {
                _rotate_stop_time = 0;
                _rotate_count = 0;
            }
            return;
        }
        _rotate_deg = _rotate_deg + _rotate_deg_step;
        $("#" + item).css("transform", "rotate(" + _rotate_deg + "deg)");
        return;
    }

    _rotate_deg = _rotate_deg + _rotate_deg_step;
    if (_rotate_deg == _rotate_angle || _rotate_deg == -_rotate_angle) {
        _rotate_count = _rotate_count + 1;
        _rotate_deg_step = -_rotate_deg_step;
    }
    $("#" + item).css("transform", "rotate(" + _rotate_deg + "deg)");
}

function _rotate_start(item) {
    _rotate_timer = setInterval("_rotate_rotate('" + item + "')", _rotate_duration);
}

function _rotate_stop() {
    clearInterval(_rotate_timer);
}
/**产品侧边栏客服动效 end****/






function jiangshiInfo(){
     $('body').append('<div class="xiazaiInfoBG"></div>');
     $('body').append('<div class="xiazaiInfo2"><div class="xiazaiInfoContent"><img onclick="closeXiazaiInfo();" class="close" src="uploads/images/xmind/close.png" /><div class="xiazaiInfoContentForm"><h3 class="fs16">报名成为我们的讲师</h3><table class="shenqingXiazai width100 fs13"><tbody><tr><td colspan="4" class="fs14 lh30">无论是资深思维导图爱好者，还是专业的思维导图讲师，我们期待您的加入！</td></tr><tr><td>姓名<span class="red">*</span>：</td><td><input type="text" id="userName"></td><td>联系电话<span class="red">*</span>：</td><td><input type="text" id="userTel"></td></tr><tr><td>Email<span class="red">*</span>：</td><td><input type="text" id="email"></td><td>单位名称<span class="red">*</span>：</td><td><input type="text" id="company"></td></tr><tr><td>岗位<span class="red">*</span>：</td><td><input type="text" id="jobs"></td><td>空闲时间<span class="red">*</span>：</td><td><input type="text" id="freetime"></td></tr><tr><td>联系地址<span class="red">*</span>：</td><td colspan="3"><input type="text" id="userAddress"></td></tr><tr><td>使用思维导图年限<span class="red">*</span>：</td><td><input type="text" id="years"></td><td>擅长导图软件：</td><td><input type="text" id="softname"></td></tr><tr><td>相关经验：</td><td colspan="3"><textarea id="jianyan"></textarea></td></tr><tr><td>验证码：</td><td><input type="text" id="yzm"><img class="yzm ml10" src="yzm.php" alt="Mindmanager申请试用验证码"></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td><img src="uploads/images/xmind/shenqingXiazai.jpg" onclick="jiangshi_ck()" id="shenqingXiazaiTj" class="hand" alt="Mindmanager下载"></td></tr></tbody></table></div></div></div>');
}



/*公共js代码 begin*/

function addCookie(objName, objValue, objHours) {      //添加cookie
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {                               //为时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}

function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName)
            return unescape(temp[1]);
    }
}

function CheckData(strTitle, strInput, strType, blNeed)    //js正则判断
{
    switch (strType)
    {
        case "pname":
            var pattern = /^.{2,200}$/;
            var msg = "\n\n格式要求: 2-200个字符    ";
            break;
        case "email":
            var pattern = /^[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,5}$/;
            var msg = "";
            if (strInput != "")
            {
                var msg = "\n\n- 您填写的电子邮箱是 " + strInput;
                msg += "   \n\n- 请仔细核对拼写是否正确。  ";
            }
            else
            {
                var msg = "\n\n- 电子邮箱不能为空！";
            }
            break;
        case "telnum":
            var pattern = /^1[0-9]{10}$|^106[0-9]{9,12}$/;
            var msg = "";
            break;
        case "postcode":
            var pattern = /^[0-9]{6}$/;
            var msg = "\n\n格式要求: 6位数字    ";
            break;
        case "number":
            var pattern = /^[1-9]{1}[0-9]{0,4}$/;
            var msg = "\n\n格式要求: 数字    ";
            break;
        case "tax_account":
            var pattern = /^[\w]{10,20}$/;
            var msg = "\n\n格式要求: 20位以内字母数字    ";
        break;
    }

    strInput = strInput.replace(/(^\s*)|(\s*$)/g, "");
    if ((strInput == "") && blNeed)
    {
        alert("请您填写" + strTitle + "。  " + msg);
        return false;
    }

    if (strInput != "")
    {
        var result = strInput.match(pattern);
        if (result == null)
        {
            alert("请您填写有效的" + strTitle + "。  " + msg);
            return false;
        }
    }
    return true;
}



function CheckData2(strTitle, strInput, strType, blNeed)    //js正则判断
{
    switch (strType)
    {
        case "pname":
            var pattern = /^.{2,200}$/;
            var msg = "\n\n格式要求: 2-200个字符    ";
            break;
        case "email":
            var pattern = /^[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,5}$/;
            var msg = "";
            if (strInput != "")
            {
                var msg = "\n\n- 您填写的电子邮箱是 " + strInput;
                msg += "   \n\n- 请仔细核对拼写是否正确。  ";
            }
            else
            {
                var msg = "\n\n- 电子邮箱不能为空！";
            }
            break;
        case "msn":
            var pattern = /^[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,5}$/;
            var msg = "";
            if (strInput != "")
            {
                var msg = "\n\n- 您填写的MSN是 " + strInput;
                msg += "   \n\n- 请仔细核对拼写是否正确。  ";
            }
            break;
        case "phone":
            var pattern = /^1[0-9]{10}$|^106[0-9]{9,12}$/;
            var msg = "\n\n格式如下：138********";
            break;
        case "tel":
            var pattern = /^[0-9]{3,4}-[0-9]{7,8}$/;
            var msg = "\n\n格式如下：000-0000000/0000-00000000";
            break;
        case "postcode":
            var pattern = /^[0-9]{6}$/;
            var msg = "\n\n格式要求: 6位数字    ";
            break;
        case "qq":
            var pattern = /^[1-9][0-9]{4,11}$/;
            var msg = "\n\n格式要求：5位或12位数字";
            break;
    }

    strInput = strInput.replace(/(^\s*)|(\s*$)/g, "");
    if ((strInput == "") && blNeed)
    {
        alert("请您填写" + strTitle + "。  " + msg);
        return false;
    }

    if (strInput != "")
    {
        var result = strInput.match(pattern);
        if (result == null)
        {
            alert("请您填写有效的" + strTitle + "。  " + msg);
            return false;
        }
    }
    return true;
}



function  getFocus(thisId)  //得到焦点
{
    document.getElementById(thisId).focus();
}



/*公共js代码 end*/



