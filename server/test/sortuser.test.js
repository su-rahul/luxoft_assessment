var sortUser = require("../src/utils/sort");

var sortedUsers = [
    {
        "id": 4,
        "name": "Fred",
        "email": "Fred@123.com",
        "password": "68651",
        "role": "ADMIN"
    },
    {
        "id": 1,
        "name": "James",
        "email": "James@123.com",
        "password": "1!23#4",
        "role": "EMPLOYEE"
    },
    {
        "id": 3,
        "name": "John",
        "email": "John@123.com",
        "password": "98!891",
        "role": "ADMIN"
    },
    {
        "id": 2,
        "name": "Peter",
        "email": "Peter@123.com",
        "password": "8^23!3",
        "role": "EMPLOYEE"
    }
]

var unsortedUsers = [ 
    {
        id: 1,
        name: 'James',
        email: 'James@123.com',
        password: '1!23#4',
        role: 'EMPLOYEE' 
    },
    { 
        id: 2,
        name: 'Peter',
        email: 'Peter@123.com',
        password: '8^23!3',
        role: 'EMPLOYEE' 
    },
    {
        id: 3,
        name: 'John',
        email: 'John@123.com',
        password: '98!891',
        role: 'ADMIN' 
    },
    {
        id: 4,
        name: 'Fred',
        email: 'Fred@123.com',
        password: '68651',
        role: 'ADMIN' 
    }
]

describe("This should short user object array based on their name", () => {
    test('Sort User array object', () => {
        var result = sortUser.sortUserByName(unsortedUsers);
        // assert
        expect(result).toStrictEqual(sortedUsers);
    });
})
    