function createcounter(){
    let count=0
    return{
    increment:function(){
        count=count+1;
        
    },
    getcount:function(){
        return count;
    }

}
}
let counter=createcounter();
counter.increment()
console.log(counter.getcount());
