// function bianli(arr){
//     var arr=[];
//     var sun=0;
//     var res=arr.forEach(function(e){
//         sun+=e;
//         return sun
//     })
// }
function bianli(arr) {
        
    var sun = '0';
    arr.forEach(function (e) {
        sun += e;
    })
    return sun
}