// WRITE YOUR CODE IN HERE:

const li = document.querySelectorAll('ul li')
console.log(li);

for (let i = 0; i < li.length; i++) {


    if (li[i].classList.contains('highlight')) {
        li[i].classList.toggle('highlight')
    } else {
        li[i].classList.add('highlight')
    }
}
