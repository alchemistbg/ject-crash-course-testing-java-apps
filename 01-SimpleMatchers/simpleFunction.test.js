const simpleFunction = require('./simpleFunction');

describe('Testing sum function', () => {
    it('should check if 1 + 2 us equal to 3', () => {
        const result = simpleFunction(1, 2);
        expect(result).toBe(3);
    });    
});

describe('Performing some tricky tests', () => {
    it('should check if two objects are equal', () => {
        const obj = {};
        
        //This test fails :)
        // expect(obj).toBe({});
        
        expect(obj).toEqual({});
        expect(obj).toStrictEqual({});
    });

    it('should check if value is truthy or falsy', () => {
        // const n = false;
        // const n = null;
        // const n = undefined;
        // const n = 0;
        // const n = NaN;
        const n = "";

        // This test fails
        // expect(n).toBeTruthy();
        
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
    });
});

describe('Testing numbers', () => {
    it('should return 4', () => {
        const v = 2 + 2;

        expect(v).toBe(4);
        expect(v).toBeGreaterThan(3);
        expect(v).toBeGreaterThanOrEqual(4);

        // This test fails
        // expect(v).toBeGreaterThan(4);
    });

    it('should 0.1 + 0.2 be close to 0.3', () => {
        const v = 0.1 + 0.2;

        expect(v).toBeCloseTo(0.3);
    });
});

describe('Testing strings', () => {
    it('should not contain i in team', () => {
        const s = "team";
        expect(s).not.toMatch(/i/);
    });
});

describe('Testing arrays', () => {
    it('should contain milk', () => {
        const shoppingList = ["milk", "cheese", "salt", "ham", "carrots"];
    
        expect(shoppingList).toContain("milk");
    });
});

function badFunction() {
    throw new Error("Something went wrong");
}

describe('Testing exceptions', () => {
    it('should throw error', () => {
        expect(() => badFunction()).toThrow();
    });
});