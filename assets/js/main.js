let colors =['red','blueviolet','blue','orange','teal'];
for(let i = 0 ; i<colors.length;i++){
    $(".color-obtions li").eq(i).css("backgroundColor",colors[i])
}


$(".color-obtions li").click(function(){
    let colorBg = $(this).css("backgroundColor");
    $(".newCalar").css("color",colorBg);
})

$(".color-box i").click(function(){
    let obtionsWidth =$(".color-obtions").outerWidth()
    if($(".color-box").css("left")=="0px"){
        $(".color-box").animate({"left":-obtionsWidth},2000)
    }else{
        $(".color-box").animate({"left":0},2000)
    }
})




