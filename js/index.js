import {data} from '../data.js'

let indexObj = {
    bind:function () {

        $('#search2').on("keydown",function () {
            let $this = $(this);
            if (event.code == "Enter") {
                let url = $this.val();
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
        data.webs.forEach((value,index)=>{
            if(value.show !== false){
                let temp = `<li data_old="1" class="sigleRecommond"> <span old_del="${(index+1)}" class="del-flag glyphicon glyphicon-remove"></span> 
                 <a class="singleLink" href="${value.href}" title="" target="_blank"> <img class="img-links2" src="${value.src}" 
                style="box-shadow: 0 10px 10px -6px rgba(225, 0, 0, 0.75);"> <span class="text-links">${value.name}</span> </a> </li>`;
            }
            html += temp
        })
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
