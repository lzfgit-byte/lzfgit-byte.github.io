// "chrome_url_overrides": {
//   "newtab": "index.html"
// },
let form = layui.form;

let popup = {
    init: function () {
        //保存当前页面的数据
        this.bind();
        this.initWebDomain();
    },
    constValue: {},
    bind:function () {
        $('#setThisWeb').click(function () {
            getActiveTable(function () {
                localStorage.setItem("text","456456")
            })
        })
        $('#saveThisWeb').click(function () {
            debugger
            getActiveTable(function () {
                localStorage.getItem("text");
            })
        })
    },
    initWebDomain:async function () {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        $("#domain").val(new URL(tab.url).host);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: function () {
                chrome.storage.sync.get("colorMy", ({ colorMy }) => {
                    localStorage.setItem("text",colorMy);
                });
            },
        });


    }
};


popup.init();



async function getActiveTable(func) {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    popup.constValue.tabinfo = tab;
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: func,
    });
}
