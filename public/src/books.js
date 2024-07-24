function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i ++) {
    if (id === authors[i].id) {
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i ++) {
    if (id === books[i].id) {
      return books[i];
    }
  }
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
