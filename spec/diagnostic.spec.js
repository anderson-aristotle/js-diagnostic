'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const Assertion = chai.Assertion

const diagnostic = require('../lib/diagnostic')

describe('Question One', function () {
  it('returns primitives', function () {
    const primitives = [
      diagnostic.primitiveOne.toLowerCase(),
      diagnostic.primitiveTwo.toLowerCase(),
      diagnostic.primitiveThree.toLowerCase(),
      diagnostic.primitiveFour.toLowerCase(),
      diagnostic.primitiveFive.toLowerCase()
    ]
    const q1 = new Assertion(primitives)
    q1.assert(q1._obj.includes('string'), 'expected all primitives')
    q1.assert(q1._obj.includes('number'), 'expected all primitives')
    q1.assert(q1._obj.includes('boolean'), 'expected all primitives')
    q1.assert(q1._obj.includes('null'), 'expected all primitives')
    q1.assert(q1._obj.includes('undefined'), 'expected all primitives')
  })
})

describe('Question Two: Operators', function () {
  it('returns names of operators', function () {
    const operators = {
      first: diagnostic.firstOperator.toLowerCase(),
      second: diagnostic.secondOperator.toLowerCase()
    }
    const q2 = new Assertion(operators)

    q2.assert(q2._obj.first === 'assignment', 'expected first operator')
    q2.assert(q2._obj.second === 'addition', 'expected second operator')
  })
})

describe('Question Two: Value of C', function () {
  it('returns final value of c', function () {
    const q2 = new Assertion(diagnostic.valueOfC)
    q2.assert(q2._obj === 7, 'expected final value of c')
  })
})

describe('Question Three', function () {
  it('returns values of x and y variables', function () {
    const q3 = new Assertion(diagnostic)
    q3.assert(q3._obj.firstValOfX === 4, 'expected first value of x')
    q3.assert(q3._obj.firstValOfY === 3, 'expected first value of y')
    q3.assert(q3._obj.secondValOfX === 3, 'expected second value of x')
    q3.assert(q3._obj.secondValOfY === 3, 'expected second value of y')
    q3.assert(q3._obj.finalValOfX === 3, 'expected final value of x')
    q3.assert(q3._obj.finalValOfY === 10, 'expected final value of y')
  })
})

describe('Question Four', function () {
  it('returns weather variable values', function () {
    const q4 = new Assertion(diagnostic)
    q4.assert(q4._obj.initWeather === undefined, 'expected initial value of weather')
    q4.assert(q4._obj.cloudyWeather === 'cloudy', 'expected second value of weather')
    q4.assert(q4._obj.sunnyWeather === 'sunny', 'expected third value of weather')
    q4.assert(q4._obj.weatherLog === true, 'expected console.log output')
  })
})
