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
    ,init:function () {
        this.bind()
    }

};




$(function () {
    indexObj.init();
})
