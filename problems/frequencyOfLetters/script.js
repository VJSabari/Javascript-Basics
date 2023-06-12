var findFrequencyOfLettersInPhrase = () => {
    var phrase = prompt("Enter any phrase");
    var result = {};
    for(var letter of phrase)
    {
        if(letter in result)
        {
            result[letter] +=1;
        }
        else{
            result[letter] = 1;
        }
    }
    console.log(result);
}

findFrequencyOfLettersInPhrase();