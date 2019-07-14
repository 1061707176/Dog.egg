$(()=>{
    let id=parseInt(location.search.substring(4))
    id=parseInt(id)
    let obj=phoneData.find((e,i)=>{
        console.log(e.pID)
        return e.pID===id                                                                                                                                                               
    })
    $('.sku-name').text(obj.name)
        $('.dd>em').text('¥'+obj.price)
        $('.preview-img img').attr('src',obj.imgSrc)
        console.log(obj)

        let abc
        $('.add').on('click',function(){
             abc=$(this).siblings('input').val()
            abc++
            $(this).siblings('input').val(abc)
            if(abc>1){
                $(this).siblings('.reduce').removeClass('disabled')

            }
           
            
                
            
        })

        
        $('.reduce').on('click',function(){ 0.

            let abc=$(this).siblings('input').val()
            
            if(abc>1){
                abc--
            $(this).siblings('input').val(abc)
                
            }
            else{
                $(this).addClass('disabled')
            }
            if(abc<1){
                $(this).addClass('disabled')
            }
        })
        $('.addshopcar').on('click',function(){
            let nb=parseInt($('.choose-number').val())
            console.log(nb)
            
           let js= localStorage.getItem('md')
            let arr
        if(js==null){
            arr=[]
        }
        else{
            arr=JSON.parse(js)
        }
        let pdfg=arr.find(e=>{
            console.log(e)
            return e.id==id
        })
        if(pdfg!=undefined){
            pdfg.nb+=nb
        }
        else{
            let gj={
                id:obj.pID,
                name:obj.name,
                img:obj.imgSrc,
                my:obj.price,
                nb:nb
            }
            
               arr.push(gj)
        }
        console.log(arr)
        arr=JSON.stringify(arr)
        localStorage.setItem('md',arr)

        location.href='cart.html'
       
})


        })  
        
      