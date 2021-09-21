let layer = layui.layer;
let $ = layui.jquery;
window.Utils = {};

window.Utils.layuiOk = function (msg,successCallback) {
    layer.msg(msg, {
        icon: 1,
        time: 1000
    }, function(){
        successCallback && successCallback();
    });
}
window.Utils.layuiError = function (msg,successCallback) {
    layer.msg(msg, {
        icon: 2,
        time: 1000
    }, function(){
        successCallback && successCallback();
    });
}

