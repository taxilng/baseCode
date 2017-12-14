/**
 * Created by wisdom on 2017/4/19.
 */
// var serverUrl="http://10.10.198.40:9080/hrMobile/rest/";
//  var serverUrl="http://192.168.40.19:8081/hr-mobile-server/rest/";
 //var serverUrl="http://192.168.253.15:8081/hr-mobile-server/rest/";
 // var serverUrl="http://192.168.40.96:8090/hrmobile/rest/";
 // var serverUrl="http://192.168.40.70:8080/hrmobile/rest/";//朱凯
 // var serverUrl="http://localhost:8084/hrmobile/rest/";
 // var serverUrl="http://192.168.40.67:8084/hrmobile/rest/"; //本地
  var serverUrl="http://10.10.198.40:9080/hrMobile/rest/"; //测试
  //var serverUrl="http://192.168.40.27:8080/hr-mobile-server/rest/"; //尚磊
  //var serverUrl="http://10.40.7.127:9080/hrmobile/rest/"; //现场测试

var wsd = {
    dataHtml: function (dom,datas) {
        dom = $(dom);
        var renderer = etpl.compile( dom.html() );
        var result =  renderer( datas );
        result =  result.replace(/mysrc/gi, "src");
        dom.html(result);
    },
    appendHtml: function (dom,datas) {
        dom = $(dom);
        var renderer = etpl.compile( dom.html() );
        var result =  renderer( datas ); // Hello ETPL!
        result =  result.replace(/mysrc/gi, "src");
        dom.append(result);
    },
    tept:  function (dom,datas) {
        dom = $(dom);
        var renderer = etpl.compile( dom.html() );
        var result =  renderer( datas );
        result =  result.replace(/mysrc/gi, "src");
        return result;
    },
    ajax: function (config) {
        var func = config.success;
        var error = config.error;
            if (!config) {
                return;
            }
             if (config.mask) {
                     layer.load(2);
              }
            config.type = config.type || "post";
            config.timeout  = config.timeout  || 5000;
            config.cache = config.cache || false;
            config.url = serverUrl + config.url;
            config.data =(config.type.toUpperCase() == 'GET')?config.data: JSON.stringify(config.data) || "";
            config.dataType = config.dataType || "json";
            config.contentType = config.contentType || 'application/json; charset=utf-8;';
            config.success = function (res) {
                if (config.mask) {
                    layer.closeAll('loading');
                }
                if (typeof func == "function") {
                     func(res);
                }
            };
            config.error = function (res) {
                if (config.mask) {
                    layer.closeAll('loading');
                }
                if (typeof error == "function") {
                    error(res);
                }
            };
        appcan.ajax(config);
    },
    getQuery:function GetQueryString(name,func) {
        uexWindow.getUrlQuery();

        // if(!uexWindow.cbGetUrlQuery){
        //     var r = window.location.search.substr(1);
        //     if(typeof name == 'string') {
        //         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        //         var res = r.match(reg);
        //         if (res != null)return func(unescape(res[2]));
        //         return func("");
        //     } else if(typeof name == 'object'){
        //         var arr = {};
        //         for (var i = 0; i < name.length; i++) {
        //             var reg = new RegExp("(^|&)" + name[i] + "=([^&]*)(&|$)");
        //             var res = r.match(reg);
        //             if (res != null){
        //                 arr[name[i]]= unescape(res[2]);
        //             }
        //         }
        //         func(arr);
        //     }
        // }

        if(typeof name == 'string'){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            uexWindow.cbGetUrlQuery=function(opId,dataType,data){
                var UrlQuery = '';
                if(data!=null && data !=undefined && data.trim()!=""){
                    var r = data.match(reg);
                    if (r != null) {
                        UrlQuery = decodeURI(r[2]);
                    }
                }
                func(UrlQuery);
            }
        }
        else if(typeof name == 'object'){
            uexWindow.cbGetUrlQuery=function(opId,dataType,data){
                var arr = {};
                for (var i = 0; i < name.length; i++) {
                    var reg = new RegExp("(^|&)" + name[i] + "=([^&]*)(&|$)");
                    var UrlQuery = '';
                    if (data != null && data != undefined && data.trim() != "") {
                        var r = data.match(reg);
                        if (r != null) {
                            UrlQuery = decodeURI(r[2]);
                            arr[name[i]]= UrlQuery;
                        }
                    }
                }
                uexLog.sendLog("arrde val ");
                uexLog.sendLog( arr);
                func(arr);
            }

        }

    return '';
    },
    isMobile : function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
            if (window.location.href.indexOf("?mobile") < 0) {
                try {
                    if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                        return 0;
                    } else {
                        return 1;
                    }
                } catch(e) {
                }
            }
        } else if (u.indexOf('iPad') > -1) {
            return 0;
        } else {
            return 1;
        }

    }

}
/***
 @name:触屏事件
 @param {string} element dom元素
 {function} fn 事件触发函数
 ***/

var touchEvent={

    /*单次触摸事件*/
    tap:function(element,fn){
        var startTx, startTy;
        element.addEventListener('touchstart',function(e){
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
        }, false );

        element.addEventListener('touchend',function(e){
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY;
            // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
            if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ){
                fn();
            }
        }, false );
    },

    /*两次触摸事件*/
    doubleTap:function(element,fn){
        var isTouchEnd = false,
            lastTime = 0,
            lastTx = null,
            lastTy = null,
            firstTouchEnd = true,
            body = document.body,
            dTapTimer, startTx, startTy, startTime;
        element.addEventListener( 'touchstart', function(e){
            if( dTapTimer ){
                clearTimeout( dTapTimer );
                dTapTimer = null;
            }
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
        }, false );
        element.addEventListener( 'touchend',function(e){
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY,
                now = Date.now(),
                duration = now - lastTime;
            // 首先要确保能触发单次的 tap 事件
            if( Math.abs(startTx - endTx) < 6 && Math.abs(startTx - endTx) < 6 ){
                // 两次 tap 的间隔确保在 500 毫秒以内
                if(duration < 301 ){
                    // 本次的 tap 位置和上一次的 tap 的位置允许一定范围内的误差
                    if( lastTx !== null &&
                        Math.abs(lastTx - endTx) < 45 &&
                        Math.abs(lastTy - endTy) < 45 ){
                        firstTouchEnd = true;
                        lastTx = lastTy = null;
                        fn();
                    }
                }
                else{
                    lastTx = endTx;
                    lastTy = endTy;
                }
            }
            else{
                firstTouchEnd = true;
                lastTx = lastTy = null;
            }
            lastTime = now;
        }, false );
        // 在 iOS 的 safari 上手指敲击屏幕的速度过快，
        // 有一定的几率会导致第二次不会响应 touchstart 和 touchend 事件
        // 同时手指长时间的touch不会触发click
        if(~navigator.userAgent.toLowerCase().indexOf('iphone os')){
            body.addEventListener( 'touchstart', function(e){
                startTime = Date.now();
            }, true );
            body.addEventListener( 'touchend', function(e){
                var noLongTap = Date.now() - startTime < 501;
                if(firstTouchEnd ){
                    firstTouchEnd = false;
                    if( noLongTap && e.target === element ){
                        dTapTimer = setTimeout(function(){
                            firstTouchEnd = true;
                            lastTx = lastTy = null;
                            fn();
                        },400);
                    }
                }
                else{
                    firstTouchEnd = true;
                }
            }, true );
            // iOS 上手指多次敲击屏幕时的速度过快不会触发 click 事件
            element.addEventListener( 'click', function( e ){
                if(dTapTimer ){
                    clearTimeout( dTapTimer );
                    dTapTimer = null;
                    firstTouchEnd = true;
                }
            }, false );
        }
    },

    /*长按事件*/
    longTap:function(element,fn){
        var startTx, startTy, lTapTimer;
        element.addEventListener( 'touchstart', function( e ){
            if( lTapTimer ){
                clearTimeout( lTapTimer );
                lTapTimer = null;
            }
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            lTapTimer = setTimeout(function(){
                fn();
            }, 1000 );
            e.preventDefault();
        }, false );
        element.addEventListener( 'touchmove', function( e ){
            var touches = e.touches[0],
                endTx = touches.clientX,
                endTy = touches.clientY;
            if( lTapTimer && (Math.abs(endTx - startTx) > 5 || Math.abs(endTy - startTy) > 5) ){
                clearTimeout( lTapTimer );
                lTapTimer = null;
            }
        }, false );
        element.addEventListener( 'touchend', function( e ){
            if( lTapTimer ){
                clearTimeout( lTapTimer );
                lTapTimer = null;
            }
        }, false );
    },

    /*滑屏事件*/
    swipe:function(element,fn){
        var isTouchMove, startTx, startTy;
        element.addEventListener( 'touchstart', function( e ){
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
        }, false );
        element.addEventListener( 'touchmove', function( e ){
            isTouchMove = true;
            e.preventDefault();
        }, false );
        element.addEventListener( 'touchend', function( e ){
            if( !isTouchMove ){
                return;
            }
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY,
                distanceX = startTx - endTx
            distanceY = startTy - endTy,
                isSwipe = false;
            if( Math.abs(distanceX)>20||Math.abs(distanceY)>20 ){
                fn();
            }
        }, false );
    },

    /*向上滑动事件*/
    swipeUp:function(element,fn){
        var isTouchMove, startTx, startTy;
        element.addEventListener( 'touchstart', function( e ){
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
        }, false );
        element.addEventListener( 'touchmove', function( e ){
            isTouchMove = true;
            e.preventDefault();
        }, false );
        element.addEventListener( 'touchend', function( e ){
            if( !isTouchMove ){
                return;
            }
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY,
                distanceX = startTx - endTx
            distanceY = startTy - endTy,
                isSwipe = false;
            if( Math.abs(distanceX) < Math.abs(distanceY) ){
                if( distanceY > 20 ){
                    fn();
                    isSwipe = true;
                }
            }
        }, false );
    },

    /*向下滑动事件*/
    swipeDown:function(element,fn){
        var isTouchMove, startTx, startTy;
        element.addEventListener( 'touchstart', function( e ){
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
        }, false );
        element.addEventListener( 'touchmove', function( e ){
            isTouchMove = true;
            e.preventDefault();
        }, false );
        element.addEventListener( 'touchend', function( e ){
            if( !isTouchMove ){
                return;
            }
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY,
                distanceX = startTx - endTx
            distanceY = startTy - endTy,
                isSwipe = false;
            if( Math.abs(distanceX) < Math.abs(distanceY) ){
                if( distanceY < -20  ){
                    fn();
                    isSwipe = true;
                }
            }
        }, false );
    },

    /*向左滑动事件*/
    swipeLeft:function(element,fn){
        var isTouchMove, startTx, startTy;
        element.addEventListener( 'touchstart', function( e ){
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
        }, false );
        element.addEventListener( 'touchmove', function( e ){
            isTouchMove = true;
            var touches = e.changedTouches[0],
                moveTx = touches.clientX,
                moveTy = touches.clientY;
            if(Math.abs(startTx - moveTx) >= Math.abs(startTy - moveTy)){
                e.preventDefault();
            }
        }, false );
        element.addEventListener( 'touchend', function( e ){
            if( !isTouchMove ){
                return;
            }
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY,
                distanceX = startTx - endTx
            distanceY = startTy - endTy,
                isSwipe = false;
            if( Math.abs(distanceX) >= Math.abs(distanceY) ){
                if( distanceX > 20  ){
                    fn();
                    isSwipe = true;
                }
            }
        }, false );
    },

    /*向右滑动事件*/
    swipeRight:function(element,fn){
        var isTouchMove, startTx, startTy;
        element.addEventListener( 'touchstart', function( e ){
            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
        }, false );
        element.addEventListener( 'touchmove', function( e ){
            isTouchMove = true;
            var touches = e.changedTouches[0],
                moveTx = touches.clientX,
                moveTy = touches.clientY;
            if(Math.abs(startTx - moveTx) >= Math.abs(startTy - moveTy)){
                e.preventDefault();
            }
        }, false );
        element.addEventListener( 'touchend', function( e ){
            if( !isTouchMove ){
                return;
            }
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                endTy = touches.clientY,
                distanceX = startTx - endTx
            distanceY = startTy - endTy,
                isSwipe = false;
            if( Math.abs(distanceX) >= Math.abs(distanceY) ){
                if( distanceX < -20  ){
                    fn();
                    isSwipe = true;
                }
            }
        }, false );
    }

}
$.fn.longPress = function(fn) {
    var timeout = undefined;
    var $this = this;
    for(var i = 0;i<$this.length;i++){
        $this[i].addEventListener('touchstart', function(event) {
            timeout = setTimeout(fn, 500);  //长按时间超过800ms，则执行传入的方法
        }, false);
        $this[i].addEventListener('touchend', function(event) {
            clearTimeout(timeout);  //长按时间少于800ms，不会执行传入的方法
        }, false);
    }
}

appcan.ready(function() {
    //FastClick.attach(document.body);
    // $(".detailContent").css("paddingTop","4em");
    (function () {
        var phone = wsd.isMobile();
        if(!phone){
            $(".detailContent").css("paddingTop","4em");
        }
    })()

})

