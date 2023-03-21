function findAuthorById(authors, id) {
const findAuthor=authors.find((author)=>author.id==id)
return findAuthor
}

function findBookById(books, id) {
  const findBook=books.find((book)=>book.id==id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks=[];
  let borrowedBooksAndReturned=[];
  for(let i=0;i<books.length;i++){
    if(books[i].borrows[0].returned==false){
      borrowedBooks.push(books[i])
    }else{
      borrowedBooksAndReturned.push(books[i])
    }
  }
  const bothBorrowed=[borrowedBooks,borrowedBooksAndReturned]
  return bothBorrowed
}

function getBorrowersForBook(book, accounts) {
  let result2=[];
  
  for(let i=0;i<book.borrows.length;i++){
    for(let j=0;j<accounts.length;j++){
      if(book.borrows[i].id==accounts[j].id){
        let result1={};
        result1.name=accounts[j].name;
        result1.email=accounts[j].email;
        result1.returned=book.borrows[i].returned
        result2.push(result1);
      }
    }
  }
  console.log(result2)
  return result2.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
