
console.clear()

function c(msg) 
{
   console.log(msg)
}

function Garage(address) {
  // this = {} -- because new was used
  
  this.address = address
  
  //this.fixCar = function (car) {
  //    car.working = true
  //  }
  this.fixCar = function (car) {
    this.working = true
  }
  
  // return this
}
function Car(name, working) {
  this.name = name
  this.working = working
}
var toy1 = new Car('Toyota', true)
var toy2 = new Car('Toyota', false)
var samiGarage = new Garage('Hertzel 5 Raanana')

c(toy2)
samiGarage.fixCar.call(toy2)
// toy2.fixCar = samiGarage.fixCar // copying functions in js is common
// toy2.fixCar(toy2)
c(toy2)

z1 = 1
c(z1)

var x = 1
f1()

function foo() {
	var x = 2  
  c(`${x} inside foo`)
  var f = function() {
    var x = 10
    x = 12
  }
}
x = 3

foo()
c(`${x} outside foo`)

for (var x = 1; x< 10; x++) {
}

if (true){
  var x = 4
}

var z1 = 2

// Hoisting
function f2() {
  f1()
}
// 1 not so good...
//var f1 = function() {
//  c('hello')
//}
// 2 better!
function f1() {
  c('hello')
  if (false) {
  	f2()
  }
} 

//var arr = [1,2,3] // til 100,000
function calc_array() {
	var arr = [1,2,3] // til 100,000  
  // .... oprtation
}

//calc_array()

// IIFE
(function () {
	var arr = [1,2,3] // til 100,000  
  // .... oprtation
})();

// closure
function Person(name, age) {
  this.name = name
  //this.age = age
  var _age = age
  this.getAge = function() {
    return _age
  }
  this.setAge = function(newage) {
    if (newage >= 0)
      _age = newage
  }  
}

var p1 = new Person('danny', 18)
var p2 = new Person('sunny', 22)
p1.age = -1





