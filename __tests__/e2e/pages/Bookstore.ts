const { I } = inject()

class Bookstore {
	private fields: { price: string; description: string; title: string }
	private buttons: { addBook: string; buyBook: string }

	constructor() {
		this.fields = {
			title: '#title',
			price: '#price',
			description: '#description',
		}

		this.buttons = {
			addBook: '#addNewBook button',
			buyBook: '//button[text()="Buy"]',
		}
	}

	addNewBook() {
		I.fillField(this.fields.title, 'New book')
		I.fillField(this.fields.price, '120')
		I.fillField(this.fields.description, 'This is a new book')
		I.click(this.buttons.addBook)
	}

	buyBook() {
		I.click(this.buttons.buyBook)
	}
}

export = Bookstore
