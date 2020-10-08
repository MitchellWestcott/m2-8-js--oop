// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
    }
};

let book1 = new Book(
    "Who Has Time?",
    "Drama",
    "Decode Student",
    true
);

let book2 = new Book(
    "Gender Trouble",
    "Queer Theory",
    "Judith Butler",
    true
);

let book3 = new Book(
    "Stone Butch Blues",
    "Trans fiction",
    "Leslie Feinberg",
    true
);

let book4 = new Book(
    "Rememberance of Things Past",
    "Modernist",
    "Marcel Proust"
);

let book5 = new Book(
    "The Sailor Who Fell from Grace",
    "Fiction",
    "Yukio Mishima",
    true
);



console.log(book1, book2, book3, book4, book5);
