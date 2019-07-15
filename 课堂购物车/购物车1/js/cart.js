$(()=>{
    let jsonStr=localStorage.getItem('md');
    let arr;
    if(jsonStr !==null){
        arr=JSON.parse(jsonStr);
        let html=''
        arr.forEach(e => {
            html+=`<div class="item" data-id="${e.id}">
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
                <em class="computed">${e.my* e.nb}</em>
              </div>
              <div class="cell col-1">
                <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
              </div>
            </div>
          </div>`
        });
        $('.item-list').html(html)
        $('.empty-tip').hide();
        $('.cart-header').removeClass('hidden');
        $('.total-of').removeClass('hidden')
    }
    function ccam(){
        let totalCount=0
        let totalMoney=0
        $('.item-list input[type=checkbox]:checked').each((i,e)=>{
            let id=parseInt($(e).parents('.item').attr('data-id'))
            arr.forEach(e=>{
                if(id===e.id){
                    totalCount+=e.nb;
                    totalMoney+=e.nb
                }

            })
        })
        $('.selected').text(totalCount);
        $('.total-money').text(totalMoney);
    }
    ccam();
    $('.pick-all').on('click',function(){
        let status=$(this).prop('checked');
        $('.item-ck').prop('checked',status) 
        $('.item-all').prop('checked',status);
        ccam()
    })
  $('.item-ck').on('click',function(){
      let isall=$('.item-ck').length===$('.item-ck:checked').length;
      $('.pick-all').prop('checked',isall);
      ccam()
  })
  $('.item-list').on('click','.add',function(){
    let oldval=parseInt($(this).siblings('input').val());
    oldval++
    if(oldval>1){
      $(this).siblings('reduce').removeClass('disabled');
    }
    $(this).siblings('input').val(oldval);
    let id=parseInt($(this).parents('.item').attr('data-id'));
    console.log(oldval)
    let obj=arr.find(e=>{
      return e.id===id
    });console.log(obj)
    
    obj.nb=oldval
    let jsonStr=JSON.stringify(arr);
    localStorage.setItem('md',jsonStr)
    ccam()
    $(this).parents('.item').find('.computed').text(obj.my*obj.nb)
  })
   
})