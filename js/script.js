function addFavoriteBook(bookName) {
    var favoritebook = ['livre1', 'livre2', ' livre3', ]
    var book = favoritebook.includes('Great');
    console.log(book)
    if (book !== true) {
        favoritebook.push('Great')

    } else {
        console.log('is already exist')
    }

    function printFavoriteBooks() {
        var num = favoritebook.length
        console.log('livers' + '' + 'favoris' + num);
        for (let element of favoritebook) {
            console.log(element)
        }
    }
    printFavoriteBooks()
}
addFavoriteBook()