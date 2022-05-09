const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('lookupChar-function testing...', () => {
    it('Should return *undefined* if the first parameter is not a string', () => {
        assert.strictEqual(lookupChar(1, 1), undefined);
        assert.strictEqual(lookupChar([], 1), undefined);
        assert.strictEqual(lookupChar({}, 1), undefined);
        assert.strictEqual(lookupChar(null, 1), undefined);
    })

    it('Should return *undefined* if the second parameter is not an integer', () => {
        assert.strictEqual(lookupChar('testvaime', 1.23), undefined);
        assert.strictEqual(lookupChar('zcore', '1'), undefined);
        assert.strictEqual(lookupChar('testvaime', 'bs'), undefined);
    })

    it('Should return *Incorrect index* when index is out of range //below 0 or above (length-1)//', () => {
        assert.strictEqual(lookupChar('dai', -1), "Incorrect index");
        assert.strictEqual(lookupChar('kaka', -10), "Incorrect index");
        assert.strictEqual(lookupChar('dai', 4), "Incorrect index");
        assert.strictEqual(lookupChar('kaka', 44), "Incorrect index");
    })

    it('Should return the correct answer //char at index// if the index is valid', () => {
        assert.strictEqual(lookupChar('kajibabatenkiu', 0), "k");
        assert.strictEqual(lookupChar('kajibabatenkiu', 1), "a");
        assert.strictEqual(lookupChar('kajibabatenkiu', 2), "j");
        assert.strictEqual(lookupChar('kajibabatenkiu', 3), "i");
        assert.strictEqual(lookupChar('kajibabatenkiu', 4), "b");
    })
})
