$(()=>{
    let js=localStorage.getItem('md')
    console.log(js)
    let arr=JSON.parse(js)
    let html=''
    console.log(arr)
  

    arr.forEach(e => {
        
        html+=`    <div class="item" data-id="${e.id}">
        <div class="row">
          <div class="cell col-1 row">
            <div class="cell col-1">
              <input type="checkbox" class="item-ck" checked="">
            </div>
            <div class="cell col-4">
              <img src="${e.img}" alt="">
            </div>
          </div>
          <div class="cell col-4 row">
            <div class="item-name">${e.name}</div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="price">${e.my}</em>
          </div>
          <div class="cell col-1 tc lh70">
            <div class="item-count">
              <a href="javascript:void(0);" class="reduce fl">-</a>
              <input autocomplete="off" type="text" class="number fl" value="${e.nb}">
              <a href="javascript:void(0);" class="add fl">+</a>
            </div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="computed">${e.my*e.nb}</em>
          </div>
          <div class="cell col-1">
            <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
          </div>
        </div>
      </div>`
    });
    $('.cart-header').removeClass('hidden');
    $('.total-of').removeClass('hidden');
    $('.item-list').html(html)
    $(".empty-tip").hide();
    $('.item-count .add').on('click',function(){
        let id=$(this).parents('.item').attr('data-id')
    
         emm=arr.find(e=>{
            // console.log(e)
         
            return e.id==id
            
        })
        emm.nb++
        $('.item-count input').val(emm.nb)
         emm.nb=$('.item-count input').val()

        let pg=arr.find(e=>{
            // console.log(id)
            // console.log(e.id==id)
            return e.id==id
        })
        console.log(pg)
        // console.log(emm)

        arr.push(emm)
        js=JSON.stringify(arr)
        // localStorage.setItem('md',js)
    })
    
})    