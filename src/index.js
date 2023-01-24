const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function deci(twoNum){
    if (twoNum == '10'){
        return '.';
    }
    else if(twoNum == '11'){
        return '-';
    }
    else{
        return '';
    }    
}

function decode(expr) {
    var result=[];
    const letters = expr.match(/.{1,10}/g) ?? [];
    for (var i =0; i<letters.length; i++){
        if ( letters[i] == '**********'){
            result.push(" ");
        }
        else {
            var symbol = [];
            const divLeter = letters[i].match(/.{1,2}/g) ?? [];
            for(var j =0; j<divLeter.length; j++){
                symbol.push(deci(divLeter[j]));
            }
            console.log(symbol.join(''));
            result.push(MORSE_TABLE[symbol.join('')]);
        }
    }
    return result.join('');
    
    // write your solution here
}

module.exports = {
    decode
}