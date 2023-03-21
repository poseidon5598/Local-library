function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let sum=0;
  const filtered=books.filter(book=>{
   if(book.borrows[0].returned == false){
    sum+=1
   }
})
return sum;
}

function getMostCommonGenres(books) {
  let genres={};
  let arrayToReturn=[];
  books.forEach(book=>{
    if(!Object.keys(genres).includes(book.genre)){
      genres[book.genre] = 1;
    }else{
      genres[book.genre]+=1;
    }
  });
  const orderedGenres = Object.keys(genres).sort((a,b)=>{
    if(genres[a]>genres[b]){
      return -1;
    }else{
      return 1;
    };
  })
  console.log(orderedGenres);
  console.log(genres);
 const orderedKeys= orderedGenres.slice(0,5);
  orderedKeys.map(key=>{
    arrayToReturn.push({name:key,count:genres[key]});
  })
  return arrayToReturn;
}

function getMostPopularBooks(books) {
  let finalArray=[];
  function compare(x,y){
    if(x<y)
      return 1;
    else
      return -1;
   }
  const booksOrdered=books.sort((a,b)=>{
    return compare(a.borrows.length,b.borrows.length);
  });
  console.log(booksOrdered)
  const booksName=booksOrdered.forEach(book=>{
    let finalObject={};
    finalObject.name=book.title;
    finalObject.count=book.borrows.length;
    finalArray.push(finalObject);
    });
  console.log(finalArray)
  return finalArray.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  console.log(books);
  const result=books.reduce((total,book)=>{
      const author=authors.find(author=>author.id==book.authorId);
     const name=author.name.first + " " + author.name.last;
      const element=total.find(element=>element.name==name);
    console.log(element);
    if(element!==undefined)
      element.count+=book.borrows.length;
    else
      total.push({name:name , count:book.borrows.length});
 
   return total;
  },[]);
 console.log(result);
   return result.sort((a,b)=>{
    if(a.count<b.count){
        return 1;
    }else{
      return -1;
    }
  }).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
