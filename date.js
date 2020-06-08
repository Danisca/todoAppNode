//this is a own module
exports.getDate = function() {
    const options = { weekday: 'long', day: 'numeric', month: 'long'};
    const today  = new Date();
    return today.toLocaleDateString("en-Us",options);
}
exports.getDay = function() {
    const options = { weekday: 'long'};
    const today  = new Date();
    return today.toLocaleDateString("en-Us",options);
}