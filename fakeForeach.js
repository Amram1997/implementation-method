// implemetation array method foreach

function fakeForech(array,func){
    for(let i = 0; i < array.length; i++){
      func(array[i],i)
    }
    
}

fakeForech([1,2,3],function(val,h){
   console.log(val)
})