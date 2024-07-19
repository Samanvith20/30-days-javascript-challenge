const book={
    title:"Good things take time",
    author:"Samanvith",
    year:2024,
    info:function(){
        return `${this.title} by ${this.author}`;
    }
   
     
}
console.log(book.info())