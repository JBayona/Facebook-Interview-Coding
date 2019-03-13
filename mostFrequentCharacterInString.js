function findMostFrequent(str) {
    let hash = {};
    let max = 0;
    let letter;

    for(let i = 0; i < str.length; i++) {
        if(str[i] in hash) {
            hash[str[i]]++;
        } else {
            hash[str[i]] = 1;
        }

        if(hash[str[i]] > max) {
            max = hash[str[i]];
            letter = str[i];
        }
    }

    console.log(hash);
    console.log(letter);
    return max;
}

str = 'testingfrequency';
console.log(findMostFrequent(str));