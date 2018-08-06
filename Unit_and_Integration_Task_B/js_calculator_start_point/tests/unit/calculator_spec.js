var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add a number to the total', function(){
    calculator.previousTotal = 3
    calculator.add('2.5');
    assert.equal(calculator.runningTotal, 5.5);
  })

  it('it can deduct a number from the total', function(){
    calculator.previousTotal = 3;
    calculator.subtract('2.5');
    assert.equal(calculator.runningTotal, 0.5);
  })

  it('it can multiply the total', function(){
    calculator.previousTotal = 3;
    calculator.multiply('2.5');
    assert.equal(calculator.runningTotal, 7.5);
  })

  it('it can divide the total', function(){
    calculator.previousTotal = 3;
    calculator.divide('2');
    assert.equal(calculator.runningTotal, 1.5);
  })

  it('it can handle division by 0', function(){
    calculator.previousTotal = 3;
    calculator.divide('0');
    assert.equal(calculator.runningTotal, 'Math ERROR');
  })

  it('it reverts total to 0 after error', function(){
    calculator.previousTotal = 3;
    calculator.divide('0');
    calculator.operatorClick('+');
    calculator.numberClick('1');
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, '1');
  })

  it('it can handle number clicks', function(){
    //test newTotal is true with existing running total
    calculator.runningTotal = 5;
    calculator.newTotal = true;
    calculator.numberClick('2');
    assert.equal(calculator.runningTotal, 2);
    assert.equal(calculator.newTotal, false);

    //test newTotal is false with 0 runningTotal set to false
    calculator.runningTotal = 0;
    calculator.newTotal = true;
    calculator.numberClick('2');
    assert.equal(calculator.runningTotal, 2);
    assert.equal(calculator.newTotal, false);

    //test cumlative runnin runningTotal
    calculator.numberClick('5');
    assert.equal(calculator.runningTotal, 25);
  })

  it('it can handle operator clicks', function(){
    // not previousTotal && runningTotal
    calculator.add('10')
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
    assert.equal(calculator.previousTotal, 10);
    assert.equal(calculator.newTotal, true);

    // if previousTotal && Running total
    calculator.operatorClick('*');
    assert.equal(calculator.runningTotal, 20);
    assert.equal(calculator.previousOperator, '*');
    assert.equal(calculator.previousTotal, 20);
    assert.equal(calculator.newTotal, true);

    // check equals click behaviour
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 400);
    assert.equal(calculator.previousTotal, 400);
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.newTotal, true);
  })

  it('it can clear on click', function(){
    // Blank clear
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.runningTotal, 0);

    // test with previous operator and previous total with 0 running total
    calculator.previousOperator = '+';
    calculator.previousTotal = 24;
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.runningTotal, 0);

    // Test with running total
    calculator.add('10');
    calculator.clearClick();
    assert.equal(calculator.runningTotal, '');
  })
});
