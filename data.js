import {imgData} from './imgData.js'
let data = {
    defaultImg:`${imgData.default}`,
    webs:[
        {href:"https://www.163.com/",src:`${imgData['hx']}`,name:"网易",show:false},
        {href:"https://v2hx.github.io/",src:`${imgData['hx']}`,name:"红杏"}
        ,{href:"https://tool.chinaz.com/tools/imgtobase",name:"站长工具"}
        ,{href:"https://v4speed.com/#/login",name:"v4speed"}
        ,{href:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",src:`${imgData['gmail']}`,name:"Gmail"}

    ],
    searchUrl:"https://www.google.com/search?q="
}


export {data};