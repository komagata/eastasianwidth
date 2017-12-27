var assert = require('assert'),
    eaw = require('../eastasianwidth');

describe('eastAsianWidth', function() {
  it('Fullwidth', function() {
    assert.equal('F', eaw.eastAsianWidth('￠'));
    assert.equal('F', eaw.eastAsianWidth('￦'));
  });

  it('Halfwidth', function() {
    assert.equal('H', eaw.eastAsianWidth('｡'));
    assert.equal('H', eaw.eastAsianWidth('ￜ'));
  });

  it('Wide', function() {
    assert.equal('W', eaw.eastAsianWidth('ㄅ'));
    assert.equal('W', eaw.eastAsianWidth('뀀'));
  });

  it('Narrow', function() {
    assert.equal('Na', eaw.eastAsianWidth('¢'));
    assert.equal('Na', eaw.eastAsianWidth('⟭'));
    assert.equal('Na', eaw.eastAsianWidth('a'));
  });

  it('Ambiguous', function() {
    assert.equal('A', eaw.eastAsianWidth('⊙'));
    assert.equal('A', eaw.eastAsianWidth('①'));
  });

  it('Natural', function() {
    assert.equal('N', eaw.eastAsianWidth('ب'));
    assert.equal('N', eaw.eastAsianWidth('ف'));
  });
});

describe('characterLength', function() {
  it('Fullwidth', function() {
    assert.equal(2, eaw.characterLength('￠'));
    assert.equal(2, eaw.characterLength('￦'));
    assert.equal(2, eaw.characterLength('𩸽'));
  });

  it('Halfwidth', function() {
    assert.equal(1, eaw.characterLength('｡'));
    assert.equal(1, eaw.characterLength('ￜ'));
  });

  it('Wide', function() {
    assert.equal(2, eaw.characterLength('ㄅ'));
    assert.equal(2, eaw.characterLength('뀀'));
  });

  it('Narrow', function() {
    assert.equal(1, eaw.characterLength('¢'));
    assert.equal(1, eaw.characterLength('⟭'));
    assert.equal(1, eaw.characterLength('a'));
  });

  it('Ambiguous', function() {
    assert.equal(2, eaw.characterLength('⊙'));
    assert.equal(2, eaw.characterLength('①'));
  });

  it('Natural', function() {
    assert.equal(1, eaw.characterLength('ب'));
    assert.equal(1, eaw.characterLength('ف'));
  });
});


describe('length', function() {
  it('Fullwidth', function() {
    assert.equal(10, eaw.length('あいうえお'));
  });

  it('Halfwidth', function() {
    assert.equal(7, eaw.length('abcdefg'));
  });

  it('Mixed', function() {
    assert.equal(19, eaw.length('￠￦｡ￜㄅ뀀¢⟭a⊙①بف'));
  });

  it('Surrogate-Pair character included', function() {
    assert.equal(4, eaw.length('a𩸽b'));
  });
});


describe('slice', function() {
  it('Fullwidth', function() {
    assert.equal(eaw.slice('あいうえお', 0, 6), 'あいう');
    assert.equal(eaw.slice('あいうえお', 2, 8), 'いうえ');
    assert.equal(eaw.slice('あいうえお', 4, 10), 'うえお');
    assert.equal(eaw.slice('あいうえお', 2, -2), 'いうえ');
    assert.equal(eaw.slice('あいうえお', -2, 10), 'お');
  });
  it('Fullwidth, start / end is not aligned', function() {
    assert.equal(eaw.slice('あいうえお', 0, 1), '');
    assert.equal(eaw.slice('あいうえお', 1, 9), 'あいうえ');
    assert.equal(eaw.slice('あいうえお', 9, 10), 'お');
    assert.equal(eaw.slice('あいうえお', -1, 10), 'お');
    assert.equal(eaw.slice('あいうえお', 1, -1), 'あいうえ');
  });
  it('Halfwidth', function() {
    assert.equal(eaw.slice('abcdefg', 0, 3), 'abc');
    assert.equal(eaw.slice('abcdefg', 3, 6), 'def');
    assert.equal(eaw.slice('abcdefg', -2, 7), 'fg');
    assert.equal(eaw.slice('abcdefg', 5, -1), 'f');
  });
  it('Mixed', function() {
    assert.equal(eaw.slice('aあb', 0, 3), 'aあ');
    assert.equal(eaw.slice('aあb', 1, 4), 'あb');
  });
  it('Mixed, start / end is not aligned', function() {
    assert.equal(eaw.slice('aあb', 0, 2), 'a');
    assert.equal(eaw.slice('aあb', 2, 4), 'あb');
    assert.equal(eaw.slice('aあb', -2, 4), 'あb');
    assert.equal(eaw.slice('aあb', 2, -1), 'あ');
    assert.equal(eaw.slice('aあb', 0, 2) + eaw.slice('aあb', 2, 4), 'aあb');
  });
});
