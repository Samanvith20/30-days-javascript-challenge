let library={
    name:"Central Library",
    books:[
        {
        title:"To Kill a Mockingbird",
        author: "Harper Lee",
            year: 1960
    },
    {
        title:"Zimbabo",
        author:"edward",
        year:1949
    }
]
}
console.log(library.name);
library.books.forEach((book)=>{
    console.log(book.title);
})