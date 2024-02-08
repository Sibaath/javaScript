let date = new Date();
let day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

module.exports.abc = function() {
    return day[date.getDay()];
}
