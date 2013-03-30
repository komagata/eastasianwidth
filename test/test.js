var assert = require('assert'),
    stringwidth = require('../eastasianwidth');

describe('eastAsianWidth', function() {
  it('Fullwidth', function(){
    assert.equal('F', stringwidth.eastAsianWidth('￠'));
    assert.equal('F', stringwidth.eastAsianWidth('￦'));
  });

  it('Halfwidth', function(){
    assert.equal('H', stringwidth.eastAsianWidth('｡'));
    assert.equal('H', stringwidth.eastAsianWidth('ￜ'));
  });

  it('Wide', function(){
    assert.equal('W', stringwidth.eastAsianWidth('ㄅ'));
    assert.equal('W', stringwidth.eastAsianWidth('뀀'));
  });

  it('Narrow', function(){
    assert.equal('Na', stringwidth.eastAsianWidth('¢'));
    assert.equal('Na', stringwidth.eastAsianWidth('⟭'));
    assert.equal('Na', stringwidth.eastAsianWidth('a'));
  });

  it('Ambiguous', function(){
    assert.equal('A', stringwidth.eastAsianWidth('⊙'));
    assert.equal('A', stringwidth.eastAsianWidth('①'));
  });

  it('Natural', function(){
    assert.equal('N', stringwidth.eastAsianWidth('ب'));
    assert.equal('N', stringwidth.eastAsianWidth('ف'));
  });
})
