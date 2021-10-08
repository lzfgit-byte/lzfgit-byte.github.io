import {data} from '../data.js'

let indexObj = {
    bind:function () {

        $('#search2').off().on("keydown",function () {
            let $this = $(this);
            if (event.code == "Enter") {
                let url = $this.val();
                if(url == "1807"){
                    data.webs = data.websH;
                    indexObj.initData()
                    return
                }
                let reg = new RegExp("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]");
                let searchUrl = data.searchUrl['google'];
                if (reg.test(url)){
                    window.open(url, "_blank")
                }else {
                    if(url.startsWith("$baidu")){
                        searchUrl = data.searchUrl['baidu'];
                        url = url.substring(7)
                        window.open(searchUrl + url, "_blank")
                        $this.val("");
                        return;
                    }
                    if(url.startsWith("$duck")){
                        searchUrl = data.searchUrl['duck'];
                        url = url.substring(6)
                        window.open(searchUrl + url, "_blank")
                        $this.val("");
                        return;
                    }
                    window.open(searchUrl + url, "_blank")
                }
                $this.val("");
            }

        }).on("dblclick",function () {
            let $this = $(this);
            $this.val("$baidu ");
        }).on("contextmenu",function () {
            event.preventDefault();
            event.stopPropagation();
            let $this = $(this);
            $this.val("$duck ");
        })

        $("#header-box").on("mouseover" ,() => {
            $(".calendar").hide()
        }).on("click",()=>{
            $(".calendar").show();
        })

    }
    ,initData:function () {
        let $this = $("#dataContains");
        $this.hide();
        let webs = data.webs;
        let html = "";
        let count = 0;
        data.webs.forEach((value,index)=>{
            if(value.show !== false){
                if(value.src == undefined){
                    value.src = data.defaultImg;
                }
                if(value.domain){
                    value.src = data.defaulticon2 + 'www.' + value.domain + '.png';
                }
                let temp = `<li data_old="1" class="sigleRecommond"> <span old_del="${++count}" class="del-flag glyphicon glyphicon-remove"></span> 
                 <a class="singleLink animate__animated animate__backInRight" href="${value.href}" title="" target="_blank"> <img class="img-links2" src="${value.src}" 
                style="box-shadow: 0 10px 10px -6px #3c3737bf;border-radius: 50%;padding: 10% 10% 10% 10%"> <span class="text-links">${value.name}</span> </a> </li>`;
                html += temp
            }
        })
        for(let i = count;i<50;i++){
            let temp = `<li data_old="1" class="sigleRecommond"> <span old_del="${i}" class="del-flag glyphicon glyphicon-remove"></span> 
                 <a class="singleLink animate__animated animate__backInRight" href="#" title="" target="_blank"> <img class="img-links2"  
                style="box-shadow: 0 10px 10px -6px #3c3737bf;border-radius: 50%;padding: 10% 10% 10% 10%"> <span class="text-links">待定</span> </a> </li>`;
            html += temp
        }
        $this.html(html);
        $this.show();
    }
    ,init:function () {
        this.bind()
        this.initData()
    }

};




$(function () {
    indexObj.init();
})
