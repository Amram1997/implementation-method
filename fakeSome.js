//implementation array some method
function fakeSome(array,func){
    let bool = true;
  
    if(typeof func !== "function"){
      return false
    }
    for(let i = 0; i < array.length; i++){
      let result = func(array[i],i,array);
      if(result){
        bool = true
      }else{
        bool = false
        continue
      }
      
    }
    return bool
    
  }
  console.log(fakeSome([1,1,11],function(elm){
    return elm > 10
  }))