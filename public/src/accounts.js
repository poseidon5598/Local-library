function findAccountById(accounts, id) {
  const findAccount=accounts.find((account)=>account.id==id)
  return findAccount
}

function sortAccountsByLastName(accounts) {
  const sorted=accounts.sort((a,b)=>{
    if(a.name.last>b.name.last){
      return 1;
    }else{
      return -1;
    }
  })
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
/*let sum=0;
 for(let i=0;i<books.length;i++){
  for(let j=0;j<books[i].borrows.length;j++){
    if(books[i].borrows[j].id==account.id){
      sum+=1
    }
  }
 }
 return sum;*/
 return books.reduce((borrowedInBooks,book)=>{
  return borrowedInBooks+= book.borrows.reduce((numberOfBorrows,borrow)=>{
    if(borrow.id==account.id){
      numberOfBorrows+=1;
    }
    return numberOfBorrows;
  },0);
 },0);
 
}

function getBooksPossessedByAccount(account, books, authors) {
  
  /*let result2Array=[];
  for(let i=0 ; i < books.length; i++ ){
    let result1Object={};
    for(let j=0; j < books[i].borrows.length; j++){
      if(books[i].borrows[j].id == account.id && Object.keys(result1Object).length==0 && books[i].borrows[j].returned == false ){
        result1Object.title = books[i].title;
        const author = authors.find(element=> element.id == books[i].authorId);
        result1Object.author = author;
        result2Array.push(result1Object);
        
      }
    }
    
  }
  console.log(result2Array);
  return(result2Array); 
*/
 const returnedBooks=books.reduce((booksPosessed,book)=>{
  console.log(book.title);
    const resultObject=book.borrows.reduce((borrowsInBook,borrow)=>{
      if(borrow.id==account.id && Object.keys(borrowsInBook).length == 0 && borrow.returned==false ){
        borrowsInBook.title=book.title;
        borrowsInBook.author = authors.find(element=> element.id == book.authorId);
        booksPosessed.push(borrowsInBook);
        
      }
      console.log(borrowsInBook);
    return borrowsInBook;
    },{})
  return booksPosessed;
 },[])
 console.log(returnedBooks);
return returnedBooks;
 }



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
