import {data} from '../data.js'

let indexObj = {
    bind:function () {
        $("#q-btn").on("mouseover",function () {
            $("#search-form").attr("action","//www.google.com/search")
            $("#q-word").attr("name","q")
        })
        $("#b-btn").on("mouseover",function () {
            $("#search-form").attr("action","//www.baidu.com/s")
            $("#q-word").attr("name","wd")
        })
        $("#b-word").on("change",function () {
            $("#q-word").val($(this).val())
        })
    }
    ,initData:function () {
        let webs = data.webs;
        let html = "";
        data.webs.forEach((value,index)=>{
            let temp = `<li data_old="1" class="sigleRecommond"> <span old_del="${(index+1)}" class="del-flag glyphicon glyphicon-remove"></span> 
                 <a class="singleLink" href="${value.href}" title="" target="_blank"> <img class="img-links2" src="${value.src}" 
            style="box-shadow: 0 10px 10px -6px rgba(225, 0, 0, 0.75);"> <span class="text-links">${value.name}</span> </a> </li>`;

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
