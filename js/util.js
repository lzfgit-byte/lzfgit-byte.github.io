let layer = layui.layer;
// let $ = layui.jquery;
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

window.Utils.setItemSync = function (key,value,success) {
    let item = {};
    item[key] = value;
    chrome.storage.sync.set(item, ()=>{
        success && success();
    });
}

window.Utils.getItemSync = function (key,success) {
    Utils.GetItemSyncValue = "";
    chrome.storage.sync.get(key, (data)=>{
        success && success(data[key]);
        console.log(data);
    });
}