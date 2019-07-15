/**目的
 *  仿造JQ,封装一个js文件
 *  分析该js文件具备的功能
 *  1.获取元素
 *  2.css方法
 *  3操作类名例如:addClass/toggleClass
 *  4...想起来再补充
 *  JQ中获取元素
 *  $(css选择器)字符串类型
 * 
 *  */
('.box')
;(function(){//自调用函数的目的是;形成一个局部作用域,把我们自己的代码保护起来,不会被别人的代码影响
    function JQ(sousuo){
        return new Init(sousuo)//不用每次调用都new.......
    }
    function Init(sousuo){
        let node=document.querySelectorAll(sousuo);
      
       for(let i=0;i<node.length;i++){//把获取到的的伪数组遍历
        this[i]=node[i]
       }
       this.length=node.length//再给伪数组加一个长度属性
    }

    Init.prototype.each=function(ck){//给构造函数Init的原型加一个each方法
        for(let i=0;i<this.length;i++){
            ck(i,this[i]);
        }
    }

    Init.prototype.css=function(py,val){//为我的JQ添加css方法
        if(val==undefined){//这是判断如果只传了一个参数的情况
            return window.getComputedStyle(this[0])[py];//如果只传了一个参数便把该CSS属性返回
        }
        else{
            let pxarr=['width','height','top','left'];
            this.each(function(i,e){
                if(pxarr.indexOf(py)!==-1){
                    if(val.toString().indexOf('px')===-1){
                        e.style[py]=val+'px'
                    }
                    else{
                        e.style[py]=val
                    }
                }
                else{
                    e.style[py]=val
                }

            })
            return this//最后返回this,用于链式编程
        }

    }
    //实现addClass功能
    Init.prototype.addClass=function(className){
        this.each(function(i,e){
            e.classList.add(className);
        })
        return this
    }


Init.prototype.removeClass=function(className){
    this.each(function(i,e){
        e.classList.remove(className);
    })
    return this
}
//切换类名
Init.prototype.toggleClass=function(className){
    this.each(function(i,e){
        e.classList.toggle(className)                                                  
    })
}
//实现更改属性
Init.prototype.attr=function(src){
    this.each(function(i,e){
        e.document.querySelector()
    })
}
window.$=window.JQ=JQ
})()
console.log($('.box').addClass('abc'))
let box=$('.box')
