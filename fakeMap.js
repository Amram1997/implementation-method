// implementation array map method

function fakeMap(array,func){

    let newArray = [];
      for(let i = 0; i < array.length; i++){
       
         newArray.push(func(array[i],i,array)) 
           
          } 
          return newArray
           
      }
  let nwarr = fakeMap([1,2,3,4],function(item,index,arr){
    
      return item
  })
  console.log(nwarr)