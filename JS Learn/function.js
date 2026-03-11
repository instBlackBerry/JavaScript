let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
}
sum(a, b)
a = 8
b = 12
sum(a, b)

//смотрим структуру функции как объекта
function myFn /*имя*/(a, b)/*параметры функции*/ {
    let c
    a = a + 1
    c = a + b                   //тело функции
    return c
}
let rew = myFn(10, 3)
console.log(rew)



const namedida = {
    age: 30,
    rost: 144
}
function inject(namedida) {
    namedida.age += 1;
    return namedida
}
const free = namedida
free.age = 34
function gorod(free) {
    free.age += 1;
    return free
}
console.log(free.age)
console.log(namedida.age)

const opel = {
    while: 23,
    color: 'red'
}
function car(mark) {   /*  <<<------- внутрь функции попало только значение While и мы мутируем его данные внутри функции,*/
    mark.while += 1                       /*  и вызывает уже в консоль объект по его имени, но значение уже в нем поменялось. */
    return mark
}
console.log(car(opel))
console.log(opel.while)

// ---------------------------------------
const library = {
    bookRed: 33,
    bookBlack: 'none',
    bookBlue: false
}
function home(knowledge) {
    const homeLibrary = Object.assign({}, knowledge)
    homeLibrary.bookRed += 3
    return homeLibrary
}
const updateHomeLibrary = home(library)
console.log(library.bookRed);
console.log(updateHomeLibrary.bookRed)