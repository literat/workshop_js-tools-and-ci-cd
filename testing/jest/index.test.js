const { add } = require('./../calculator');

describe('Jest', function() {
  describe('Expect', function() {
    it('may be easier to read', function() {
      expect(add(1, 2)).toEqual(3);
    });

    it('can do anything assert does', function() {
      const result = add(1, 2);
      expect(result).toBe(3);
      expect(result).toBeGreaterThan(1);
      expect(result).toBeLessThan(10);
    });
  });

  describe('Should', function() {
    it.todo('should not be used... ever');
  });
});
