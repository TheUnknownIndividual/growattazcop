// js document
$.extend({
    dialogAlert: function (msg,options) {
        var defaults = {
            title : '',
            closeOnClickOutside:false,
            callback: function(val){
                swal.close();
            }
        }
        var _options = $.extend(defaults,options)
        var _func = _options.callback;
        delete _options.callback;
        swal(msg,_options).then((value)=>{
            _func(value)
        })
    },

    dialogMsg: function(msg,options){
        var defaults = {
            button : false,
            timer: 3000,
            closeOnClickOutside:true
        }
        var _options = $.extend(defaults,options)
        swal(msg,_options)
    },
    dialogSuccess: function (msg,options) {
        var defaults = {
            title:'',
            icon : 'success',
            closeOnClickOutside:false
        }
        var _options = $.extend(defaults,options)
        swal(msg,_options)
    },
    dialogError: function (msg,options) {
        var defaults = {
            title:'',
            icon : 'error',
            button:{
                text: "OK"
            },
            closeOnClickOutside:false
        }
        var _options = $.extend(defaults,options)
        swal(msg,_options)
    },
    //type 3-显示文字，2-显示图片 todo 1-不显示
    dialogLoading: function (type,msg) {
        type = (type == void 0) ? 3 : type; //兼容以前代码
        if(type === 3){
            msg = msg||'Sending';
        }else if(type === 1){
            msg = '';
        }
        var loading = document.createElement("div");
        loading.className='loading-gif';
        var html = "<img style='display:inline-block;width:60px;' src='/asset/images/loading.gif' />";
        if(msg){
            html += "<div class='loading-msg' style='font-size:16px;margin-top:12px;'>"+msg+"</div>"
        }
        loading.innerHTML = html;
        swal({
            title: '',
            content: loading,
            button:false,
            closeOnClickOutside:false
        })
    },
    dialogClose: function () {
        swal.close();
    },
    dialogOpen: function (options) {
        swal(options);
    }
})

/**
 * 判断是否是空
 * @param arg 需要判断的对象
 * @return Boolean 真或者假
 */
function isEmpty (arg) {
    var type = Object.prototype.toString.call(arg)
    if (type == '[object String]') {
        return (typeof arg == 'undefined' || arg == null || /^\s*$/.test(arg))
    } else if (type == '[object Array]') {
        return !arg.length
    } else if (type == '[object Object]') {
        return $.isEmptyObject(arg);
    }
    return !arg
}

function isIos(){
    var ua = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/i.test(ua);
}


function isWx(){
    let ua = navigator.userAgent.toLowerCase();
    return /MicroMessenger/i.test(ua);
}


function isAndroid(){
    var ua = navigator.userAgent;
    return ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
}

function isMobile()
{
    if(!navigator.userAgent.match(/mobile/i)){
        return false;
    }
    return true;
}
function trim(text)
{
    return text == null ? "" : ( text + "" ).replace( /^\s+|\s+$/g,'');
}
// 从url中获取参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
var _clipboard = null;
//点击按钮复制其他元素上的内容
function copyToClipboard2(selector,textObj)
{
    //先清空上次绑定的复制
    if(_clipboard){
        _clipboard.destroy();
        _clipboard = null;
    }
    _clipboard = new ClipboardJS(selector, {
        text: function(trigger) {
            var obj = document.querySelector(textObj);
            if(obj.tagName.toLowerCase()=='input' || obj.tagName.toLowerCase() == 'textarea'){
                var _value = $.trim(obj.value);
            }else{
                var _value = $.trim(obj.innerHTML);
            }
            return _value
        }
    }).on('success', function(e) {
        $.dialogMsg('Copy success');
        return false;
    }).on('error', function(e) {
        $.dialogMsg("Copy error");
        return false;
    })
}