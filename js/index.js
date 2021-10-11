import {data} from '../data.js'

let indexObj = {
    $:layui.jquery,
    bind:function () {
        let $ = layui.jquery;
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
    }
    ,initData:function () {
        let $ = layui.jquery;
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
    },
    setFc:function () {
        let multiple = 1.7;
        let index = layui.layer.open({
            type: 1,
            offset: 'auto',
            area: ['880px', '900px'],
            content: $('#emulator'),
            maxmin: true,
            end:function () {
                nes.stop()
                layui.layer.closeAll();
                $('#emulator').hide();
                $('#roms').hide();
            },
            resizing: function(layero){
                let width = layero[0].clientWidth;
                let height = layero[0].clientHeight;

                let multiple1 = width / 512;
                let multiple2 = height / 480;

                let trueMult = Math.min(multiple1,multiple2)-0.1;

                nes.ui.screen.animate({
                    width: `${512*trueMult}px`,
                    height: `${480*trueMult}px`
                },0);
            },
            success:function () {
                nes.ui.screen.animate({
                    width: `${512*multiple}px`,
                    height: `${480*multiple}px`
                });
                let status = $('.layui-layer-title');
                if(status.length > 0){
                    let text = nes.ui.status.text();
                    nes.ui.status.remove();
                    nes.ui.status = $('.layui-layer-title');
                    nes.ui.status.text(text);
                }


                layui.layer.open({
                    type: 1,
                    offset: 'rt',
                    area: ['300px', '600px'],
                    content: $('#roms'),
                    shade: 0,
                    success:function () {
                        let romDom = $('.nes-roms select');

                        $('#romsOption').html(romDom.html())


                        layui.form.render()
                        layui.form.on('select(romsOption)', function(data){
                            console.log(data.elem); //得到select原始DOM对象
                            console.log(data.value); //得到被选中的值
                            console.log(data.othis); //得到美化后的DOM对象
                            nes.ui.loadROM(data.value)
                        });
                    }
                })
            }
        });

        // layer.full(index);
    }
    ,initContentMenu:function () {
        var inst = layui.dropdown.render({
            elem: document //也可绑定到 document，从而重置整个右键
            ,trigger: 'contextmenu' //contextmenu
            ,isAllowSpread: false //禁止菜单组展开收缩
            ,style: 'width: 200px' //定义宽度，默认自适应
            ,id: 'test777' //定义唯一索引
            ,data: [{title: '日历',id: 'calendar'},{title:"FC",id:"nesFc"},{title:"设置按键",id:"setKeyBoard"}]
            ,click: function(obj, othis){
                if(obj.id === 'calendar'){
                    indexObj.openCalender()
                } else if(obj.id === 'nesFc'){
                    indexObj.setFc();
                }else if(obj.id === 'setKeyBoard'){

                }
            }
            ,ready: function(elemPanel, elem){
                let top = parseInt(elemPanel[0].style.top);
                elemPanel[0].style.top = `${top-120}px`
            }

        });
    },openCalender:function () {
        layer.open({
            type: 2,
            title: '日历',
            shadeClose: true,
            shade: 0.8,
            area: ['400px', '730px'],
            content: 'https://www.bmcx.com/apiiframe/?api_from=bmcx&api_url=https://wannianrili.bmcx.com/&api_width=98%&api_backgroundcolor=FFFFFF' //iframe的url
        });
    }
    ,init:function () {
        this.bind();
        this.initData();
        this.initContentMenu();
    }

};




$(function () {
    indexObj.init();
})
