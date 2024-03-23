//1

const user1 = {
    name: 'kirill',
    surname: 'bazelev',
    age: 17
}

console.log(user1)

//2

const user2 = {
    ivan: {
        surname: 'belfort',
        age: 20,
        sayHello(name) {
            console.log('Hello Ivan')
        }
    }

}

user2.ivan.sayHello('Ivan')
console.log(user2)


//3

const users = [
    {
        name: 'alex',
        isAdmin: true
    },
    {
        name: 'ivan',
        isAdmin: false
    },
    {
        name: 'kirill',
        isAdmin: false
    },
    {
        name: 'tom',
        isAdmin: true
    }
]

let simpleUsersCount = 0

for(let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsersCount++;
    }
}

console.log (simpleUsersCount)

