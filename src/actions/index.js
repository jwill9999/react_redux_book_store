export function selectBook(book) {
    return {
        type: 'SELECTED_BOOK',
        payLoad: book
    }
}