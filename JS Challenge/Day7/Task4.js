const book={
    title:"Good things take time",
    author:"Samanvith",
    year:2024,
    Updateyear:function(newYear){
        this.year=newYear;
    },
    
    }
    book.Updateyear(2025);
    console.log(book.year);
