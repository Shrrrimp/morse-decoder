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

function decode(expr) {
    let result="";
    let letterArr=[];

    //разбиваем expr на буквы и создаем массив закодированных букв
    for(let i=0; i<expr.length; i+=10){
        letterArr.push(expr.slice(i, i+10));
    }

    //проходимся по буквам
    for(let i=0; i<letterArr.length; i++){
        if(letterArr[i] == "**********"){
            result+=" ";
            continue;
        }

        //morse - закодированный символ
        let morse="";
        for(let j=0; j<letterArr[i].length; j+=2){
            let char = letterArr[i].slice(j, j+2);
            switch (char){
                case "10": morse+=".";
                break;

                case "11": morse+="-";
                break;
            }

        }
        result+=MORSE_TABLE[morse];
    }
    return result;
}

module.exports = {
    decode
}