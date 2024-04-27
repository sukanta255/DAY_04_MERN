function customMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i]));
    }
    return mappedArray;
}

module.exports = customMap;
