//isAnagram 

var isAnagramFrequencyCounter = function (first, second) {
    if (first.length !== second.length) { return false; }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        let singleLetter = first[i];
        if (lookup[singleLetter]) {
            lookup[singleLetter] += 1;
        }
        else {
            lookup[singleLetter] = 1;
        }
    }
    console.log(lookup);

    for (let i = 0; i < second.length; i++) {
        let singleLetter = second[i];
        if (!lookup[singleLetter]) {
            return false;
        }
        else {

            lookup[singleLetter] -= 1;
        }
    }
    return true;
};

var validAnagram= function(string1, string2){
    if (string1.length !== string2.length) {
        return false;
    }
    const string1Helper = string1.split("").sort();
    const string2Helper = string2.split("").sort();

    console.log(string1Helper, string2Helper)

    for (let i=0; i < string1Helper.length; i++) {

        if(string1Helper[i] !== string2Helper[i]){
            return false;
        }
        else{
            return true;
        }
    }
}


validAnagram('anagram', 'anagram');
isAnagramFrequencyCounter("anagram", "anagram")
