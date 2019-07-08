function tap(et,call,span,offset){
    span=span||200//让形参span有一个默认值
    offset=offset||50//让形参offset有一个默认值
    let startTime =0//定义变量,用来记录开始时间
    let startX=0;//定义变量,记录开始的位置
    let startY=0;//定义变量.记录开始的位置
    et.addEventListener('touchstart',function(e){//对传进来的实参进行注册触摸事件
        if(e.touches.length !==1){
            console.log('不是单指操作');
            return
        }
        startTime=Date.now();//记录开始时间
        startX=e.touches[0].pageX;//记录开始位置
        startY=e.touches[0].pageY;//记录开始位置

    })
//注册结束时间
et.addEventListener('touchend',function(e){
    if(e.changedTouches.length !==1){
        console.log('不是单指操作')
        return
    }
    let endTime=Date.now();
    if(endTime-startTime>span){
        console.log('按得时间太长了')
        return
    }
    let endX=e.changedTouches[0].pageX;
    let endY=e.changedTouches[0].pageY
    // if()
})
    
}