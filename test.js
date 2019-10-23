const inputText = `JavaScript,[8] often abbreviated as JS, is a high-level, interpreted
                    scripting language that conforms to the ECMAScript specification. 
                    JavaScript has curly-bracket syntax, dynamic typing, prototype-based 
                    object-orientation, and first-class functions.`;

const findWord = (input, word) => {
    let count = 0;
    const cut = input.split(/\W/);
    for (let i = 0; i < cut.length; i++) {
        if (cut[i] === word) {
            count += 1;
        }
    }
    return count;
};

console.log(findWord(inputText, 'JavaScript'));
