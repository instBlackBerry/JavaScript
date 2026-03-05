function myFunction() {
    onclick = document.getElementById('red').innerHTML = "ты чОрт";
    onclick = document.getElementById('blue').innerHTML = " У тебя все хорошо?"
}
const fell = 'мда'
// Объекты - точечная запись
const fly = {
    im: 453,
    best: true,
    rest: 'привет ',
    fast: null,
    test: undefined
}
const mach = fly
console.log(mach)
console.log(mach.best)
mach.best = false
console.log(fly.best)
mach.frost = 345
console.log(fly.rest)

// Функция

function hey() {
    console.log('приветствую')
}
hey()
const west = () => {
    console.log('дважды')
}
west()
// удаление свойства объекта
delete mach.rest
console.log(fly)

const pain = {
    a: 'больно'
}
pain.b = 'no pain, no live'
console.log(pain.b)
pain['c'] = 'боли нет'
console.log(pain.c)
// присвоение значения переменной в свойства через скобочную запись//
const propertyName = 'country'
pain[propertyName] = 'USA'
console.log(pain.country)
delete pain[propertyName]
console.log(pain)
pain[propertyName] = 'belarus'
console.log(pain)

const street = {
    home: 34,
    nubmer: {
        one: 'один',
        two: 'dva',
        tree: 'tri'
    }
}
console.log(street)
console.log(street.nubmer.two)
delete street.nubmer.two
delete street.nubmer['two']
console.log(street)

// запись переменной в свойства объекта
const naeme = 'bogdan'
const postsQty = 23

const userProfile = {
    naeme,
    postsQty,
    hasSing: false
}
console.log(userProfile)

const friend = {
    fre: 1,
    desds: 'fele'
}
console.log(friend)
console.log(window.innerWidth)
console.log(globalThis.innerHeight)

// Метод ( функция в качестве свойства объекта)
const myCity = {
    street: 'broodway',
    home: function () {
        console.log('да это мой дом') //  <------  //
    }
}
myCity.home()

const myHome = {
    street: 'Broodway',
    home() {
        console.log('да этой мой дом')
    }
}
console.log(myHome.street)
myHome.home()

//JSON - stringify и parce

const post = {
    title: 'my Post ',
    likes: 5
}
let t = JSON.stringify(post)
console.log(t)
let a = JSON.parse(t)
console.log(a)