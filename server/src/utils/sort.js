function sortUserByName(userArray){
    userArray.sort(function(a,b) {
        return b.name.toLowerCase() < a.name.toLowerCase();
    });
    return userArray;
}

module.exports = {
    sortUserByName : sortUserByName
}