let animals = ["elephant", "zebra", "bear", "tiger"];

describe('Testing animals array', () => {
    
    // beforeAll(() => {
        // console.log("Before all tests!")
    // });
    
    // Works with bot beforeEach and with afterEach
    beforeEach(() => {
        // console.log("Before each test!")
        animals = ["elephant", "zebra", "bear", "tiger"];
    });
    
    // afterEach(() => {
    //     console.log("After each test!")
    //     animals = ["elephant", "zebra", "bear", "tiger"];
    // });
        
    // afterAll(() => {
        // console.log("After all tests!")    
    // });
    
    it('should add an animal to the edn of the array', () => {
        animals.push("alligator");

        expect(animals[animals.length - 1]).toBe("alligator")
    });

    it('should add an animal to the edn of the array', () => {
        animals.unshift("monkey");

        expect(animals[0]).toBe("monkey")
    });

    it('should have initial length of 4', () => {
        // This test fails :)
        expect(animals.length).toBe(4);
    });
});

describe('Some other tests', () => {
    it('should be truthy', () => {
        expect(true).toBeTruthy();
    });
});