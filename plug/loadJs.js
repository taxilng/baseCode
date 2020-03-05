/**
 * Created by wisdom on 2017/5/5.
 */
var baseConfig = {
    paths:'',
    prefix:'',
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

        if (url.indexOf(".js") > -1){
            if (url.indexOf("http:") > -1){
                loadFile(url, file.type);
            }else{
                loadFile(prefix + url, file.type);
            }
        }
    }
    temp = html.getAttribute("page-js");

    if (temp !== undefined && temp !== null){
        temp = temp || getPageDefault("js");
        loadFile(temp, "js");
    }

})(baseConfig);