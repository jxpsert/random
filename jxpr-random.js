const Version = "jxpr-random v" + "1.0.2";
// the functions to get random stuff
function String(amount) {
    let randomWords = ["fluctuation", "literature", "summary", "reporter", "wardrobe", "channel", "mess", "acquisition", "lose", "slam", "achievement", "mercy", "manual", "lean", "different", "closed", "promise", "grace", "freight", "accurate", "umbrella", "queue", "strike", "twilight", "conspiracy", "ladder", "history", "fiction", "courtesy", "writer", "slot", "content", "beam", "shell", "diamond", "ghostwriter", "abundant", "trivial", "reluctance", "fitness", "reception", "far", "node", "memorial", "econobox", "expect", "trap", "atmosphere", "answer", "undermine", "mutter", "frequency", "grip", "sustain", "earwax", "rent", "discuss", "attract", "fine", "perform", "horizon", "deck", "marine", "disagreement", "register", "registration", "thumb", "verdict", "radio", "prestige", "cycle", "groan", "organize", "define", "despise", "bike", "split", "misery", "at", "file", "cotton", "maze", "plug", "brake", "game", "hate", "profit", "retailer", "right", "dimension", "cucumber", "god", "conventional", "advocate", "unanimous", "contract", "snub", "graphic", "superintendent", "want"];
    let words = [];
    for (i = 0; i < amount; i++) {
        word = randomWords[(Math.floor(Math.random() * randomWords.length))];
        words.push(word);
    }
    return words;
}

function Number(min, max) {
    if (min && max) {
        return (Math.floor(Math.random() * max) + (min - 1));
    } else {
        throw Error("No min/max supplied");
    }
}

function ArrayObject(array) {
    if (array) {
        return array[Number(1, array.length)];
    } else {
        throw Error("No array supplied");
    }
}

function Decimal(min, max) {
    if (min && max) {
        return (Math.random() * max) + (min - 1);
    } else {
        throw Error("No min/max supplied");
    }
}

function Password(length, specialCharacters) {
    let characters = [];
    if (specialCharacters) {
        characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "!", "@", "?", "&", "$"
        ];
    } else if (!specialCharacters) {
        characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
        ];
    }
    let password = "";
    for (i = 0; i < length; i++) {
        word = characters[(Math.floor(Math.random() * characters.length))];
        password = password + word;
    }
    return password;
}

function FirstName(gender) {
    let maleNames = ["Lamar", "Keon", "Cohen", "Jakobe", "Santiago", "Axel", "Nigel", "Rayan", "Camron", "Maxwell", "Abel", "Jovani", "Barrett", "Derick", "Marquis", "Brendan", "John", "Jovanni", "Kyle", "Colin", "Triston", "Darren", "Angel", "Jonas", "Dominik", "Pedro", "Marlon", "Brennan", "Alex", "Ryan", "Kendrick", "Cristofer", "Mathew", "Brock", "Braylen", "Wesley", "Camren", "Jayden", "Ronald", "Brady", "Davis", "Yahir", "Luka", "Nathen", "Nicholas", "Mateo", "Jon", "Francis", "Jaylen", "Todd"];
    let femaleNames = ["Dalia", "Bryanna", "Izabelle", "Yazmin", "Mara", "Milagros", "Asia", "Lea", "Melina", "Kinsley", "Yareli", "Danica", "Aylin", "Aaliyah", "Dayami", "Jazmine", "Breanna", "Zoe", "Kamila", "Lilianna", "Lyla", "Penelope", "Mylee", "Alison", "Reese", "Angela", "Theresa", "Angelique", "Amari", "Mariam", "Carlee", "Lucy", "Jamie", "Laila", "Catherine", "Annie", "Joanna", "Addison", "Cora", "Eva", "Natasha", "Alexa", "Claudia", "Brielle", "Mallory", "Libby", "Janiyah", "Meghan", "Haylee", "Tanya"];
    let bothNames = maleNames.concat(femaleNames);

    if (gender == 1) {
        return maleNames[(Math.floor(Math.random() * maleNames.length))];
    } else if (gender == 2) {
        return femaleNames[(Math.floor(Math.random() * femaleNames.length))];
    } else if (gender == 0) {
        return bothNames[(Math.floor(Math.random() * bothNames.length))];
    }
}

function LastName() {
    let lastNames = ["Farrell", "Holmes", "Nunez", "Dunlap", "Koch", "Mccoy", "Combs", "Wood", "Johnston", "Ortega", "Hooper", "Lowe", "Riggs", "Conner", "Henson", "Macdonald", "Lindsey", "Reese", "Bowman", "Horn", "Hancock", "Johns", "Mejia", "Sawyer", "Strong", "Molina", "Mooney", "Andrade", "Frost", "Dorsey", "Nicholson", "Warren", "Giles", "Ryan", "Fisher", "Huynh", "Wiley", "Oconnell", "Cunningham", "Hardin", "Hensley", "Duncan", "Jefferson", "Coffey", "Stanton", "Howell", "Braun", "Harrison", "Wells", "Herman", "Cain", "David", "Mccormick", "Palmer", "Shelton", "Schmidt", "Contreras", "Brandt", "Waters", "Frederick", "Peck", "Knapp", "Harper", "Rosales", "Prince", "Richard", "Landry", "Eaton", "Rivas", "Escobar", "Mccarthy", "Kemp", "Flores", "Andrews", "Lucas", "Duffy", "Ayers", "Hendricks", "Wise", "Barry", "Fischer", "Mueller", "Waller", "Gillespie", "Haney", "Larson", "Ramirez", "Bradford", "Lyons", "Townsend", "Atkins", "Buchanan", "Perkins", "Frank", "Reynolds", "Ewing", "Benson", "Rivera", "Burnett", "Maldonado"];
    return lastNames[(Math.floor(Math.random() * lastNames.length))];
}

module.exports = {
    Version,
    String,
    Number,
    Decimal,
    ArrayObject,
    Password,
    FirstName,
    LastName
}