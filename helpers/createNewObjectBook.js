const { v4 } = require("uuid");
function createNewObjectBook(title, pages, author) {
  const newBook = {
    id: v4(),
    title: title,
    pages: pages,
    author: author,
  };
  return newBook;
}

module.exports = createNewObjectBook;
