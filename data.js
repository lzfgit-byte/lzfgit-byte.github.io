import {imgData} from './imgData.js'
let data = {
    defaultImg:`${imgData.default}`,
    defaulticon:`https://www.google.com/s2/favicons?domain=`,
    webs:[
        {href:"https://www.163.com/",src:`${imgData['hx']}`,name:"网易",show:false,domain:"163.com"},
        {href:"https://v2hx.github.io/",src:`${imgData['hx']}`,name:"红杏"}
        ,{href:"https://tool.chinaz.com/tools/imgtobase",src:`${imgData['ZZGJ']}`,name:"站长工具"}
        ,{href:"https://v4speed.com/#/login",name:"v4speed"}
        ,{href:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",src:`${imgData['gmail']}`,name:"Gmail"}
        ,{href:"https://outlook.live.com/mail/0/inbox",src:`${imgData['outlook']}`,name:"Outlook"}
        ,{href:"https://mega.nz/folder/6wxFGQ6B#KkTVZbNNJDLyDesnBtE4Bw",src:`${imgData['dulelink']}`,name:"dulelink"}
        ,{href:"https://www.yikm.net/",src:`${imgData['fc']}`,name:"fc"}
        ,{href:"https://www.manhuacat.com/",src:`${imgData['mhm']}`,name:"漫画猫"}
        ,{href:"https://switchtools.sshnuke.net/",src:`${imgData['dbt']}`,name:"toolsForSw"}
        ,{href:"https://darthsternie.net/switch-firmwares/",src:`${imgData['swf']}`,name:"swFirm"}
        ,{href:"http://gbtgame.ys168.com/",src:`${imgData['gbt']}`,name:"GBT"}
        ,{href:"https://www.google.com/sky/",src:`${imgData['goosky']}`,name:"GoogleSky"}
        ,{href:"https://www.dandanzan.cc/",src:`${imgData['ddz']}`,name:"蛋蛋赞"}
        ,{href:"http://www.8hyyw.com/",src:`${imgData['8h']}`,name:"8号影院"}
        ,{href:"https://www.o8tv.com/",src:`${imgData['555']}`,name:"555影院"}


    ],
    websH:[
        {href:"https://thehentaiworld.com/",name:"hword",domain:"thehentaiworld.com"},
        {href:"https://rule34video.com/",name:"rule34",domain:"rule34video.com"}
        ,{href:"https://18comic.vip/",name:"禁漫天堂",domain:"18comic.vip"}
        ,{href:"https://pornhub.com/",name:"pornhub",domain: "pornhub.com"}
        ,{href:"https://www.xvideos.com/",name:"xvideos",domain: "xvideos.com"}
        ,{href:"https://www.whichav.video/",name:"导航",domain: "whichav.video"}
    ]
    ,searchUrl:{'google':"https://www.google.com/search?q=","baidu":"https://www.baidu.com/s?wd=","duck":"https://duckduckgo.com/?q="}
}


export {data};