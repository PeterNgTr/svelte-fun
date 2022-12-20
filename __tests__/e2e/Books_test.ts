Feature('Bookstore');

Before(({ I }) => {
    I.amOnPage('/')
})

Scenario('Bookstore is showing',  async ({ I }) => {
    await I.checkVisualDifferences("bookstore.png");
});

Scenario('Adding new book',  async ({ I, bookstorePage }) => {
    bookstorePage.addNewBook();
    I.see('This is a new book');
});

Scenario('Add a book to cart',  async ({ I, bookstorePage }) => {
    bookstorePage.addNewBook();
    bookstorePage.buyBook();
    I.see('Total Price: 120');
});