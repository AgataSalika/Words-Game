// localStorage.setItem('name', 'John')
localStorage.setItem('age', 17)
localStorage.setItem('isAdmin', true)
console.log(localStorage.getItem('name'));
console.log(typeof localStorage.getItem('isAdmin'));
console.log(localStorage.getItem('age') + 5);

const user = {
    name: 'Jane',
    age: 17
}


localStorage.setItem('info', JSON.stringify(user)) //JSON.stringify объект преобразуем в строку чтобы не потерялись данные

const result = JSON.parse((localStorage.getItem('info'))) // JSON.parse строку кот по синтаксису похожа на объект, распаковывает обратно в объект
console.log(result);

const numbers = [5,6,9,4]
localStorage.setItem('rating', JSON.stringify(numbers))
const result2 = JSON.parse(localStorage.getItem('rating'))
console.log(result2);

