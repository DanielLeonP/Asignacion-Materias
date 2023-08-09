export const includeClave = (data = [], value = 0) => {

    let found = 0;
    found = data.find((row) => row[1] === value);
    // console.log(value)

    if (found === undefined) {
        // console.log('No se encontro')
        return false;
    }
    // console.log('Se encontro')
    return true;
}
