export const movies = [
    {
        id: 0,
        name: "Head1ton",
        score: 20
    },
    {
        id: 1,
        name: "Head2ton",
        score: 30
    },
    {
        id: 2,
        name: "Head3ton",
        score: 40
    },
    {
        id: 3,
        name: "Head4ton",
        score: 50
    },
    {
        id: 4,
        name: "Head5ton",
        score: 60
    },
    {
        id: 5,
        name: "Head6ton",
        score: 70
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1, // `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
