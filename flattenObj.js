function flattenObj(obj) {
    let res = {};

    for(let it of obj) {
        if(obj[it] === typeof 'object') {
            
        }

        else {
            res[""]
        }
    }

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
    },
    education: {
        highSchool: {
            name: "Springfield High",
            year: 2010,
            location: {
                city: "Springfield",
                state: "Illinois"
            }
        },
        college: {
            name: "MIT",
            degree: "Computer Science",
            graduationYear: 2014
        }
    },
    parents: {
        father: {
            name: "Robert Doe",
            age: 55,
            occupation: {
                title: "Doctor",
                hospital: "City Hospital"
            }
        },
        mother: {
            name: "Jane Doe",
            age: 52,
            occupation: {
                title: "Teacher",
                school: "Springfield High School"
            }
        }
    }
};

console.log(flattenObj(person));
