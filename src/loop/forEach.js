export default orderByValueForEach = (object) => {
    const res = {}
    const entries = Object.entries(object)
    .sort(([keyA, valueA], [keyB, valueB]) => (valueA > valueB)?1:-1);
    entries.forEach(([key, value]) => { 
        let entryValue = value;
        entryValue.city = entryValue.city.toUpperCase()
        return res[key] = entryValue })
    return res;
}