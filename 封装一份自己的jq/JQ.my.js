;(function(){
// 实现简单的jq可能不太全面,会有不少考虑不周全的情况,如果想改周全可以自己研究
// 实现基本的选择器功能
function JQ(sousuo){
    return new Init(sousuo)
}
function Init(sousuo){
    let dom=document.querySelectorAll(sousuo)//接收实参用的形参
    for(let i=0;i<dom.length;i++){
        this[i]=dom[i]
        // console.log(this)
    }
    this.length=dom.length
}
Init.prototype.css=function(property,value){
    for(let i=0;i<this.length;i++){
        this[i].style[property]=value+'px'
    }
}
window.$=window.JQ=JQ
})()
console.log($('.box'))