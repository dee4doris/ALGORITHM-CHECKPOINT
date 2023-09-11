function determainationSentenceStatus(sentence) {
    // intialize variables
    let length = 0;
    let words = 0;
    let vowels = 0;
    // Read the sentence character by character.
    for (let i = 0; i < sentence.length; i++) {
        const currentchar = sentence[i];


        // increment the length variable.
        if (currentchar !== ' ') 
        length++;
    
        //if the character is a space, increment the words variable.
        if (currentchar === ' ' || i === sentence.length - 1) {
            words++;
        }
    
        //if the character is a vowel, increament the vowels variable.
        if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
            vowels++;
        }
    
    }
    // Return the results
    return {
        length: length,
        Words: words,
        vowels: vowels,
    };
}

const sentence = "This is a simple sentence";
const results = determainationSentenceStatus(sentence);
console.log(results);