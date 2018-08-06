var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the running total when numbers are clicked', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('25')
  })

  it('can add 2 numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  })

  it('can subtract 2 numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('can divide 2 numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
  })

  it('can handle 0 division', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Math ERROR');
  })

  it('reverts to 0 total after error', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('can multiply 2 numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('72');
  })

  it('can chain operations', function(){
    running_total = element(by.css('#running_total'));
    //addition
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');

    //subtraction
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');

    //division
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.5');

    //multiplication
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  })

  it('can handle large numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    for(i = 0; i < 20; i++){
      element(by.css('#number0')).click();
    }
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    for(i = 0; i < 20; i++){
      element(by.css('#number0')).click();
    }
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1e+40');
  })

  it('can handle negative numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-8');
  })

  it('can handle decimal numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.001');
  })



});
