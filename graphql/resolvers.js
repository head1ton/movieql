const head1ton = {
    name: "Head1ton",
    age: 90,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => head1ton
    }
};

export default resolvers;
