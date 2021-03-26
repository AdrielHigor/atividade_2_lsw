function get_name_initials(name) {
    let initials = ''
    let name_parts = name.split(' ')
    let conectors = ['e', 'do', 'da', 'dos', 'das', 'de', 'di', 'du']

    for (let i = 0; i < name_parts.length; i++) {
        if (!conectors.includes(name_parts[i])) {
            initials = initials + name_parts[i][0].toUpperCase();
        }
    }

    return initials
}


console.log(get_name_initials('Maria das Graças Pimenta'));