import {data} from '../data.js'

let indexObj = {
    bind:function () {

        $('#search2').on("keydown",function () {
            let $this = $(this);
            if (event.code == "Enter") {
                let url = $this.val();
                if(url == "phpla"){
                    data.webs = data.websH;
                    indexObj.initData()
                    return
                }
                let reg = new RegExp("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]");
                if (reg.test(url)){
                    window.open(url, "_blank")
                }else {
                    window.open(data.searchUrl + url, "_blank")
                }
                $this.val("");
            }

        })
    }
    ,initData:function () {
        let webs = data.webs;
        let html = "";
        let count = 0;
        data.webs.forEach((value,index)=>{
            if(value.show !== false){
                if(value.src == undefined){
                    value.src = data.defaultImg;
                }

                let temp = `<li data_old="1" class="sigleRecommond"> <span old_del="${++count}" class="del-flag glyphicon glyphicon-remove"></span> 
                 <a class="singleLink" href="${value.href}" title="" target="_blank"> <img class="img-links2" src="${value.src}" 
                style="box-shadow: 0 10px 10px -6px #3c3737bf;border-radius: 50%;padding: 10% 10% 10% 10%"> <span class="text-links">${value.name}</span> </a> </li>`;
                html += temp
            }
        })
        for(let i = count;i<50;i++){
            let temp = `<li data_old="1" class="sigleRecommond"> <span old_del="${i}" class="del-flag glyphicon glyphicon-remove"></span> 
                 <a class="singleLink" href="#" title="" target="_blank"> <img class="img-links2"  
                style="box-shadow: 0 10px 10px -6px #3c3737bf;border-radius: 50%;padding: 10% 10% 10% 10%"> <span class="text-links">待定</span> </a> </li>`;
            html += temp
        }
        $("#dataContains").html(html);
    }
    ,init:function () {
        this.bind()
        this.initData()
    }

};




$(function () {
    indexObj.init();
})
