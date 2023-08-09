const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: false,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks(id) {
  return data.find((d) => d.id === id);
}

getBooks(2);

// destructuring

// const book = getBooks(2)

// // const title = book.title
// // const author = book.author
// const {title , author , pages  , publicationDate ,  genres , hasMovieAdaptation} = book
// author
// title
// genres
// publicationDate
// pages
// hasMovieAdaptation

// // const primaryGenres = genres[0]
// // primaryGenres

// const [primaryGenre , secondaryGenre] =  genres
// primaryGenre
// secondaryGenre

// const {reviews:{goodreads:{reviewsCount}}} = book
// reviewsCount
// book
// console.log({title , reviewsCount})

// rest and spread operators

// const book = getBooks(2);

// const {genres , reviews} = book

// const [primaryGenre , secondaryGenre , ...otherGenre ] = genres // rest operator

// primaryGenre
// secondaryGenre
// otherGenre

// reviews

// const newReview = {...reviews , new:"himanshu"}

// newReview

// const newGenres = [...genres , "himanshu singh"]
// newGenres

// template literals

// const book =  getBooks(1);

// const {title,pages,author,publicationDate } = book

// const summary = `${title} is a book and it has ${pages} pages and written buy ${author} and published in ${publicationDate.split('-')[0]}`
// summary

// ternary operator

// const book = getBooks(1);
// const {pages } = book

// pages
// const range = pages > 1000 ? 'over a thousand' : 'less than a thousand'
// range

// arrow function

// const book = getBooks(1);
// const { publicationDate } = book;

// typeof publicationDate;

// const getPublicationYear = (date) => date.split("-")[0];

// console.log(getPublicationYear(publicationDate));

// sort circuiting and logical operator && , || , ??

// const { hasMovieAdaptation } = book;

// console.log(true && "hello world");

// console.log(false && "some string");
// console.log(hasMovieAdaptation && "this book has movie");
// // false - 0 , null ,  '' , undefined
// console.log("hello" && "this book has");
// console.log(0 && "this");

// console.log(true || "this book has");
// console.log(false || "this book has");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "Not Available";
// spanishTranslation;
// const countWrong = book.reviews.librarything.reviewsCount || "No data";
// console.log(countWrong)
// const cd = null
// const count = cd ?? "No data";
// count

// optional channing

// function getTotalReviewCount(book) {
//   const goodreads = book?.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;

//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

// Array map method


// const book = getBooks(3);
// const { publicationDate } = book;
// publicationDate

const authorList = data.map(item => item.author)

authorList

const c = [1,2,3,4,5].map(item => item*5)
c
const titleList = data.map(book => (
  {
    title:book.title ,
    author:book.author
  })
)
titleList

// array filter method

const longBooks = data.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation).filter(book => book.genres.length >= 4)

longBooks


const filterBooks = data.filter(book =>  book.translations.polish !== undefined && book.pages >= 500)

filterBooks

const adventure = data.filter(book => book.genres.includes('adventure')).map(book => book.title)

adventure

//  array reduce method


const totalPagesOfAllBooks = Math.floor(data.reduce((sumofPages , book) => sumofPages + book.pages , 0))

totalPagesOfAllBooks
console.log({totalPagesOfAllBooks})

// array sort
const sortedByPage = data.sort((a,b) => a.pages - b.pages )
sortedByPage


let arr = [10,10,2,5,6,7,9,89];
arr.sort((a,b) => a-b)
// js sort algo 
// for(let i = 0 ; i < arr.length ; i++){
//   for(let j = i+1;j < arr.length;j++){
//     if(arr[i] - arr[j]){
//       arr[i] = arr[i] ^ arr[j];
//       arr[j] = arr[i] ^ arr[j];
//       arr[i] = arr[i] ^ arr[j];
//       break;
//     }
//   }
// } // n2 
arr

// immutable array
// add , delete , update

const books = data.slice();

const newBook = {
  id:6,
  title:'Harry potter and the chanmer',
  author:'jk rowling'
}

const booksAfterAdding = [...books, newBook]

booksAfterAdding

// delete
// const booksAfterDeleting = booksAfterAdding.splice(1 , 1)
const booksAfterDeleting = booksAfterAdding.filter(book => book.id !== 6)
booksAfterDeleting

// update 

// const booksAfterUpdate = [...booksAfterAdding , booksAfterAdding[5].author = "himanshu singh"]
const booksAfterUpdate = booksAfterAdding.map(book => book.id === 6 ? {...book,author:"tamil nadu" } : book)

booksAfterUpdate

// async js promise

// fetch('https://jsonplaceholder.typicode.com/todos').then(
//   res => res.json()
// ).then(data => console.log(data))


// async and await 
async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json();
  console.log(data)

  return data
}

const todos = await getTodos()
todos