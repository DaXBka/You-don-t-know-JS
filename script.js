const books = document.querySelectorAll('.book');

// 1
books[0].before(books[1]); // 1 <- 2
books[0].after(books[4]); // 2 -> 3
books[4].after(books[3]); // 3 -> 4
books[3].after(books[5]); // 4 -> 5

// 2
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

// 3
const book3Title = books[4].querySelector('h2 a');
book3Title.textContent = 'Книга 3. this и Прототипы Объектов';

// 4
const adv = document.querySelector('.adv');
adv.remove();

// 5.1

// Book #2
book2 = books[0];
// 2. ---
// 3. 1
// 4. 4
// 5. 5
// 6. 2
// 7. ---
// 8. 3
const ul2 = book2.querySelector('ul');
const li2 = book2.querySelectorAll('ul li');
ul2.prepend(li2[0], li2[1], li2[3], li2[6], li2[8], li2[4], li2[5]);

// 5.2

// Book #5
book5 = books[5];
// 2. 4
// 3. 2
// 4. 3
// 5. ---
// 6. 5
// 7. 6
// 8. ---
// 9. 1
const ul5 = book5.querySelector('ul');
const li5 = book5.querySelectorAll('ul li');
ul5.prepend(li5[0], li5[1], li5[9], li5[3], li5[4], li5[2], li5[6], li5[7])

// 6
const book6 = books[2];
const li6 = book6.querySelectorAll('ul li')
const newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
li6[li6.length - 1].before(newLi);