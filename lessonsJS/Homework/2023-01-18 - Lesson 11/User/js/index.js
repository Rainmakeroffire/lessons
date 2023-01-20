/* index.js */

// ### task. **Реализовать методы экземпляра**

// Реализуйте следующие методы экземпляра для класса `User`:

// - `getFullName` возвращает имя и фамилию пользователя, разделенные пробелом
// - `getInitials` возвращает первый символ имени, сразу за которым следует первый символ фамилии
// - `canVote` возвращает `true`, когда пользователю исполнилось 18 лет или больше, и `false` в противном случае

import User from "./user.js";

// class usage
const sam = new User("Sam", "Blue", 49);
console.log(sam);
console.log(sam.getFullName());
console.log(sam.getInitials());
console.log(sam.canVote());

console.log("---");

const charlie = new User("Charlie", "Doe", 13);
console.log(charlie);
console.log(charlie.getFullName());
console.log(charlie.getInitials());
console.log(charlie.canVote());