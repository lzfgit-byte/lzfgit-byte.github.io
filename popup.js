// "chrome_url_overrides": {
//   "newtab": "index.html"
// },
let form = layui.form;

let popup = {
    init: function () {
        //保存当前页面的数据
        this.bind();
        this.initValues();
    },
    constValue: {},
    bind:function () {
        $('#setThisWeb').click(async function () {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            let webkey = new URL(tab.url).host.replaceAll(".","");
            $("#domain").val(webkey);
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: function () {
                    let urll = new URL(window.location.href);
                    let webKey  = urll.host;
                    webKey = webKey.replaceAll(".","");
                    let webkey2 = webKey+"_"
                    chrome.storage.sync.get(webkey2, (val) => {
                       if(val[webkey2]){
                           chrome.storage.sync.get(val[webkey2],(va2)=>{
                              let item = va2[val[webkey2]];
                               localStorage.setItem(val[webkey2],item);
                               window.location.href = window.location.href;
                               return
                           })
                           return
                       }
                       //默认值得情况下 ，没有设置自己的key
                        chrome.storage.sync.get(webKey,(va2)=>{
                            let item = va2[webKey];
                            localStorage.setItem(webKey,item);
                            return
                        })

                    });
                },
            });


        })
        $('#saveThisWeb').click(async function () {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            let webkey = new URL(tab.url).host.replaceAll(".","");
            webkey += "_"
            $("#domain").val(webkey);
            let asyncKey = $('#asyncKey').val();
            if(asyncKey){
                //如果设置了asyncKey
                let saveKey = {};
                saveKey[webkey] = asyncKey;
                chrome.storage.sync.set(saveKey);
            }
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: function () {
                    let urll = new URL(window.location.href);
                    let webKey  = urll.host;
                    webKey = webKey.replaceAll(".","");
                    let webKey2 = webKey + "_";
                    chrome.storage.sync.get(webKey2,(val)=>{
                        if(val[webKey2]){//设置了这个网站的key
                            let item = localStorage.getItem(val[webKey2]);
                            let saveItem = {};
                            saveItem[val[webKey2]] = item;
                            chrome.storage.sync.set(saveItem);
                            alert("保存成功")
                            return;
                        }
                        let item = localStorage.getItem(webKey);
                        let saveItem = {};
                        saveItem[webKey] = item;
                        alert("保存成功")
                        chrome.storage.sync.set(saveItem);
                    })
                },
            })
        })
    },
    initValues:async function () {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        let webkey = new URL(tab.url).host.replaceAll(".","");
        let webKey2 = webkey+"_"
        $("#domain").val(webkey);

        chrome.storage.sync.get(webKey2,(val)=>{
            if(val[webKey2]){//设置了这个网站的key
               $('#domiankey').val(val[webKey2])
                let dataJey = val[webKey2];
                chrome.storage.sync.getBytesInUse(dataJey,(data)=>{
                    $("#sizeSync").val(data + "/" + chrome.storage.sync.QUOTA_BYTES_PER_ITEM)
                })
                return
            }
            chrome.storage.sync.getBytesInUse(webkey,(data)=>{
                $("#sizeSync").val(data + "/" + chrome.storage.sync.QUOTA_BYTES_PER_ITEM + "")
            })

        })



    }
};


popup.init();


