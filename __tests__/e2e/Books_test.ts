import Injector from './Injector'
const { I } = inject()

const { bookstorePage } = Injector.getPageObjects()

Feature('Bookstore')

Before(() => {
	I.amOnPage('/')
})

Scenario('Bookstore is showing', async () => {
	await I.checkVisualDifferences('bookstore.png')
})

Scenario('Adding new book', async () => {
	bookstorePage.addNewBook()
	I.see('This is a new book')
})

Scenario('Add a book to cart', async () => {
	bookstorePage.addNewBook()
	bookstorePage.buyBook()
	I.see('Total Price: 120')
})
