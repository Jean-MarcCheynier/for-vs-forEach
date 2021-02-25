export default orderByValueFor = (object) => {
    const res = {}
    const entries = Object.entries(object)
    .sort(([keyA, valueA], [keyB, valueB]) => (valueA > valueB)?1:-1);
    for(let i = 0; i<entries.length; i++) {
        let entryValue = entries[i][1];
        entryValue.city = entryValue.city.toUpperCase()
        res[entries[i][0]] = entryValue;
    }
    return res;
}