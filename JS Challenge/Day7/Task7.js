let book={
    title:"Good things take time",
    author:"Samanvith",
    year:2024,

}
book.getTitleAndYear = function() {
    return `${this.title} ${this.year}`;
};

console.log(book.getTitleAndYear());
