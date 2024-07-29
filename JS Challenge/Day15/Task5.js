function generatearrays(){
      let functions=[]
    for(let i=0;i<=5;i++){
       functions.push(function(){
           console.log(i)
       })
    }
    return functions
}

let firstfunction1=generatearrays()
firstfunction1[0]()
firstfunction1[1]()
firstfunction1[2]()