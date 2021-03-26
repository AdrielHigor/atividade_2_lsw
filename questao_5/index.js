function compare_number_last_digits(to_be_compared, comparation_value) {
    to_be_compared = to_be_compared.toString();
    comparation_value = comparation_value.toString();

    for (let i = 0; i < comparation_value.length; i++) {
        let inverse_to_be_compared = to_be_compared[to_be_compared.length - 1 - i];
        let inverse_comparation_value = comparation_value[comparation_value.length - 1 - i];

        if (inverse_to_be_compared !== inverse_comparation_value) {
            return false;
        }
    }
    return true;
}

console.log(compare_number_last_digits(567890, 890));
console.log(compare_number_last_digits(2457, 245));
