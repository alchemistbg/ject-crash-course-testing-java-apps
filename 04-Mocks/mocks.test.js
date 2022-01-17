describe('Testing function mocks', () => {

    const myForEach = (items, callback) => {
        for (let i = 0; i < items.length; i++) {
            callback(items[i]);
        }
    }

    let mockCallback = jest.fn(x => x + 42);
    myForEach([0, 1], mockCallback);

    it('should call callback function 2 times', () => {
        expect(mockCallback.mock.calls.length).toBe(2);
    });
    
    it('should pass 0 as a parameter to first call of the  callback', () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    });

    it('should pass 1 as a parameter to second call of the  callback', () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    });

    it('should return 42 when callback was called with 0', () => {
        expect(mockCallback.mock.results[0].value).toBe(42);
    });

    it('should return 43 when callback was called with 1', () => {
        expect(mockCallback.mock.results[1].value).toBe(43);
    });
});

describe('Testing mocking of the results', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(84).mockReturnValueOnce(168).mockReturnValueOnce("END");
    
    it('should return 84', () => {
        const mockResult1 = mock();
        expect(mockResult1).toBe(84);
    });

    it('should return 168', () => {
        const mockResult2 = mock();
        expect(mockResult2).toBe(168);
    });

    it('should return END', () => {
        const mockResult3 = mock();
        expect(mockResult3).toBe("END");
    });
});

//
const axios = require('axios');

const fetchData = async (todoId) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    console.log(result.data);
    return result.data;
}

describe('Testing axios mock', () => {
    it('should return string with certain value', async () => {
        jest.spyOn(axios, "get").mockReturnValueOnce({
            data: {
                id: 1,
                todo: "Learn JS testing"
            },
        });

        const result = await fetchData(1);

        expect(result.todo).toBe("Learn JS testing");
    });    
});