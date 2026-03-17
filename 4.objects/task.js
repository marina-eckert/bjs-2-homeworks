function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (!("marks" in this)) {
    console.log("Студент отчислен, добавление оценок невозможно");
    return;
  }

  for (let i = 0; i < marks.length; i++) {
    this.marks[this.marks.length] = marks[i];
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) return 0;

  let total = 0;
  let i = 0;

  while (i < this.marks.length) {
    total += this.marks[i];
    i++;
  }

  return total / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;

  if ("marks" in this) delete this.marks;
  if ("subject" in this) delete this.subject;
};
