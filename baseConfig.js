/**
 * Created by wisdom on 2017/5/4.
 */
var baseConfig = {
    prefix: "../../../../", //资源目录
    paths: {
        fontAwesome: {
            url: "css/fonts/font-awesome.min.css"
        },
        ui_box: {
            url: "css/ui-box.css"
        },
        ui_base: {
            url: "css/ui-base.css"
        },
        ui_color: {
            url: "css/ui-color.css"
        },
        appcan_icon: {
            url: "css/appcan.icon.css"
        },
        appcan_control_css: {
            url: "css/appcan.control.css"
        },
        base: {
            url: "base/css/base.css"
        },
        appcan: {
            url: "js/appcan.js"
        },
        appcan_control_js: {
            url: "js/appcan.control.js"
        },
        appcan_tab_js: {
            url: "js/appcan.tab.js"
        },
        jquery: {
            url: "base/third/jquery-3.2.1.min.js"
        },
        /*fastclick: {
            url: "base/third/fastclick.js"
        },*/
        layer: {
            url: "base/third/layer/layer.js"
        },
        eptl: {
            url: "base/third/etpl.source.js"
        },
        wsd: {
            url: "base/js/wsd.js"
        },


    }

};
function loadFile(path, type, sync) {
    type = type || (path.indexOf(".css") > -1 ? "css" : "js");
    if (sync){
        var head = document.getElementsByTagName('head')[0];
        var node;

        if (type == "css"){
            node = document.createElement('link');
            node.href = path;
            node.rel = 'stylesheet';
            node.type = 'text/css';
        }else{
            node = document.createElement('script');
            node.src = path;
            node.type = 'text/javascript';
        }
        head.appendChild(node);
    }else{
        var str;
        if (type == "css"){
            str = '<link type="text/css" rel="stylesheet" href="' + path + '" />';
        }else{
            str = '<script type="text/javascript" src="' + path + '" ></script>';
        }
        document.write(str);
    }
}

function getPageDefault(type) {
    var pagePath = location.pathname, pageName;

    var last = pagePath.lastIndexOf(".");
    if (last == -1){
        last = pagePath.length;
    }

    var start = pagePath.lastIndexOf("/");
    if (start == -1 && pagePath.indexOf(".") == -1){
        pageName = "index";
    }else{
        pageName = pagePath.substring(start + 1, last);
    }

    if (type == "js"){
        return "js/" + pageName + ".js";
    }else{
        return "css/" + pageName + ".css";
    }
}


(function (config) {
    var html = document.documentElement,
        paths = config.paths,
        prefix = config.prefix,
        file,
        temp,
        url;

    for (var key in paths){
        file = paths[key];
        url = file.url;

        if (url.indexOf(".css") > -1){
            if (url.indexOf("http:") > -1){
                loadFile(url, file.type);
            }else{
                loadFile(prefix + url, file.type);
            }
        }
    }
    //是否需要css
    temp = html.getAttribute("page-css");

    if (temp !== undefined && temp !== null){
        temp = temp || getPageDefault("css");     
    }
     loadFile(temp, "css");
})(baseConfig);