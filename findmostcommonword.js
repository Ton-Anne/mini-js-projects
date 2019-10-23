const inputText = `JavaScript,[8] often abbreviated as JS, is a high-level, interpreted
                    scripting language that conforms to the ECMAScript specification. 
                    JavaScript has curly-bracket syntax, dynamic typing, prototype-based 
                    object-orientation, and first-class functions.`;

const findCommonWord = (input) => {
    let mostFrequent = 1;
    let count = 0;
    let item;
    const cut = input.split(/[,|.\s]+/);
    for (let i = 0; i < cut.length; i++) {
        for (var j = i; j < cut.length; j++) {
            if (cut[i] === cut[j]) {
                count++;
            }
        }
        if (mostFrequent < count) {
            mostFrequent = count;
            item = cut[i];
        }
        count = 0;
    }
    return item;
};

console.log(findCommonWord(inputText));
