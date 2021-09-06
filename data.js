import {imgData} from './imgData.js'
let data = {
    defaultImg:`${imgData.default}`,
    webs:[
        {href:"https://www.163.com/",src:`${imgData['hx']}`,name:"网易",show:false},
        {href:"https://v2hx.github.io/",src:`${imgData['hx']}`,name:"红杏"}
        ,{href:"https://tool.chinaz.com/tools/imgtobase",src:`${imgData['ZZGJ']}`,name:"站长工具"}
        ,{href:"https://v4speed.com/#/login",name:"v4speed"}
        ,{href:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",src:`${imgData['gmail']}`,name:"Gmail"}


    ],
    websH:[
        {href:"https://thehentaiworld.com/",name:"hword"},
        {href:"https://rule34video.com/",name:"rule34"}
        ,{href:"https://18comic.vip/",name:"禁漫天堂"}
        ,{href:"https://pornhub.com/",name:"pornhub"}
        ,{href:"https://www.xvideos.com/",name:"xvideos"}
    ]
    ,searchUrl:"https://www.google.com/search?q="
}


export {data};