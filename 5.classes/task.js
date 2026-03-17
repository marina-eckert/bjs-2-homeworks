class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;

    this.type = null;
    this.state = 100;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (!(book.state > 30)) return false;

    this.books[this.books.length] = book;
    return true;
  }

  findBookBy(prop, value) {
    let result = null;

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][prop] === value) {
        result = this.books[i];
        break;
      }
    }

    return result;
  }

  giveBookByName(bookName) {
    let foundIndex = -1;

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1) return null;

    return this.books.splice(foundIndex, 1)[0];
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook("Артур Конан Дойл", "Шерлок Холмс", 2019, 1008),
);

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168,
  ),
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

console.log("До:", library.books.length);
const book = library.giveBookByName("Машина времени");
console.log("После:", library.books.length);

if (book) {
  book.state = 10;
  book.fix();

  const returned = library.addBook(book);
  console.log("Вернули:", returned);
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) return;

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject][this.marks[subject].length] = mark;
  }

  getAverageBySubject(subject) {
    const arr = this.marks[subject];

    if (!arr || arr.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) return 0;

    let total = 0;

    for (let i = 0; i < subjects.length; i++) {
      total += this.getAverageBySubject(subjects[i]);
    }

    return total / subjects.length;
  }
}

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");

console.log(student.getAverageBySubject("физика")); // 4.5
console.log(student.getAverageBySubject("биология")); // 0
console.log(student.getAverage()); // 4.75
