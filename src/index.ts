class Student {
  fullName: string;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}

let user = new Student("Jane", "M.", "User");
console.log(user);