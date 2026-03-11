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
function inject(test) {
    test.age += 1
    return test
}
const frea = inject(namedida)   /* передача ссылки объекта другой переменной */
console.log(frea)

function gorod(frea) {
    frea.age += 1;
    return frea
}
console.log(frea.age)
console.log(namedida.age)
// ==========================================

const opel = {
    while: 23,
    color: 'red'
}

function car(mark) {   /*  <<<------- внутрь функции попало только значение While и мы мутируем его данные внутри функции,*/
    mark.while += 1                       /*  и вызывает уже в консоль объект по его имени, но значение уже в нем поменялось. */
    return mark
}
car(opel)
console.log(opel.while)

// ===================================

const myHome = {
    table: 'yes', /* Объявил консту, дал ей имя и в объекте всем свойствам дал значения*/
    window: 4,
    light: true
}

function devices(test) {
    test.table = 'no'       /* объявил функцию и дал ей имя devices с параметрами test, внутри ее создал задачу на выполнение с именами */
    test.window += 4        /* свойств которые есть в объекте, что бы при вызове функции я использовал имя объекта и соответственно все свойства уже были задействованы */
    test.light = false
    return test
}
devices(myHome)
console.log(myHome.light, myHome.table, myHome.window)
// ---------------------------------------

// =================================1 пример===================================

const passat = {
    name: 'volkswagen',
    while: 4,
    color: 'red',
    live: false
}
function myCar(parametr) {
    const updateCar = Object.assign({}, parametr) /* создаем переменную = создаем новый объект с параметрами функции которые будут взяты при ее вызове */
    updateCar.name = 'Mercedes-Benz' /* в новом объекте можно менять значения свойства */
    updateCar.while = 4
    updateCar.color = 'white'
    updateCar.live = true
    return updateCar /* возвращаем переменную и завершаем выполнение функции */
}
const mercedesBenz = myCar(passat)
console.log(passat) /*{name: 'volkswagen', while: 4, color: 'red', live: false} */
console.log(mercedesBenz) /*{name: 'Mercedes-Benz', while: 4, color: 'white', live: true} */

// =============================2 пример============================================
const myPerson = {
    age: 32,
    name: 'Roman',
    male: true
}

function changeHuman(testing) {
    const changeProcess = Object.assign({}, testing)
    changeProcess.age = 31
    changeProcess.name = 'Alina'
    changeProcess.male = false
    return changeProcess
}
const herPerson = changeHuman(myPerson)
console.log(myPerson)  /*{age: 32, name: 'Roman', male: true} */
console.log(herPerson) /*{age: 31, name: 'Alina', male: false} */
// --------------------------------------------------------------------

const samokat = {
    name: 'samokat',
    rule: 1,
    while: 2,
    canDrive: true
}

function perexod(zavod) {
    const updateUp = Object.assign({}, zavod)
    updateUp.name = 'Velosiped'
    updateUp.rule = 1
    updateUp.while = 3
    updateUp.canDrive = true
    updateUp.sidenie = true  /* тут мы добавили еще свойство */
    return updateUp /* возвращаем результат работы функции */
}
const velosiped = perexod(samokat)
console.log(samokat) /* в этом объекте осталось все как было */
console.log(velosiped) /* в этом добавили еще свойство в виде сидения */

// =====CallBack функции ========
function printMyName() {
    console.log('Start')
}
setTimeout(printMyName, 3000)

