export const people = [
    {
        id: 0,
        name: "Head1ton",
        age: 20,
        gender: "female"
    },
    {
        id: 1,
        name: "Head2ton",
        age: 30,
        gender: "female"
    },
    {
        id: 2,
        name: "Head3ton",
        age: 40,
        gender: "female"
    },
    {
        id: 3,
        name: "Head4ton",
        age: 50,
        gender: "female"
    },
    {
        id: 4,
        name: "Head5ton",
        age: 60,
        gender: "female"
    },
    {
        id: 5,
        name: "Head6ton",
        age: 70,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};
