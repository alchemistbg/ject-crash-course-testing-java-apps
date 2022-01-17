const fetchData = require('./asyncFunction');

describe('Testing async functions', () => {
    it('should return correct todo using then/catch', () => {
        fetchData(1).then((todo) => {
            expect(todo.id).toBe(1);
        }).catch();
    });
    
    it('should return correct todo using async/await', async () => {
        const todo = await fetchData(1);
        
        expect(todo.id).toBe(1);
    });
});