
function countoccurences(str){
    countoccurences=[]
    for(let char of str){
        if(countoccurences[char]){
            countoccurences[char]++
        }else{
            countoccurences[char]=1
        }
    }
       return countoccurences;
}
console.log(countoccurences("hello")) 