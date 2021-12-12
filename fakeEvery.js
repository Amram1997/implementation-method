//implementation array every method

function fakeEvery(array,func){
    let bool = true
      for(let i = 0; i < array.length; i++){
        if(func(array[i]) < 1){
          bool = false
        }else{
          bool = true
        }
      }
      return bool
  }
  console.log(fakeEvery([1,2,3],function(elm){
      return elm > 10
  }))