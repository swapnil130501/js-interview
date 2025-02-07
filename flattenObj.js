function flattenObj(obj, parent = "", res = {}) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenObj(obj[key], key, res);
        } else {
            res[`${parent}.${key}`] = obj[key];
        }
    }
    return res;
}

const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
    job: {
        title: "Software Engineer",
        company: {
            name: "TechCorp",
            location: {
                city: "San Francisco",
                state: "California"
            }
        }
    }
};

console.log(flattenObj(person));
