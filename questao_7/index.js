function convert_number_to_string(number) {
    return String.fromCharCode(number + 96);
}

function convert_coded_text(text) {
    let numbers = text.split(' –')
    let final_text = ''
    for (let i = 0; i < numbers.length; i++) {
        let letter = convert_number_to_string(parseInt(numbers[i]));
        final_text = final_text + letter
    }
    return final_text;
}

console.log(convert_coded_text('3 –14 –12 –15 –20 –19 –1 –4 –14 –17'));
console.log(convert_coded_text('1 –2 –3 –4 –5 –6 –7 –8 –9 –10 –11 –12 –13 –14 –15 –16 –17 –18 –19 –20 –21 –22 –23 –24 –25 –26'));