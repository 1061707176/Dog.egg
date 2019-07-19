class tab{
    constructor(options){
        options=options||{}
        this.daohang=options.daohang||'.nav>li'
        this.hezi=options.hezi||'.content'
        this.shijian=options.shijian||'mouseover';
        this.navClass=options.navClass||'active';
        this.neirongclass=options.neirongclass||'show'
    }//创建一个Class
    // tab栏有哪些方法
    addevent(){
        let _this=this;
        let lis=document.querySelectorAll(this.daohang)
        let neirong=document.querySelectorAll(this.hezi)
        lis.forEach((e,i)=>{
        e.addEventListener(this.shijian,function(){
            _this.cNavstyle(lis,this);
        _this.changCtstyle(neirong,neirong[i])
        })
        })
    }
cNavstyle(lis,currentLi){
    lis.forEach(e=>{
        e.classList.remove(this.navClass);
    })
     currentLi.classList.add(this.navClass);

}
changCtstyle(neirong,currentContent){
    neirong.forEach((e)=>{
         e.classList.remove(this.neirongclass);
    })
    currentContent.classList.add(this.neirongclass)
}
}
