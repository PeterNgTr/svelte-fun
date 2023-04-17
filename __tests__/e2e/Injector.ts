import Bookstore from './pages/Bookstore'

class Injector {
	private static isInitialized: boolean
	private static bookstorePage: Bookstore

	constructor() {
		Injector.isInitialized = true
	}

	public static getPageObjects() {
		if (!this.isInitialized) {
			this.bookstorePage = new Bookstore()

			return {
				bookstorePage: this.bookstorePage,
			}
		}
	}
}

export = Injector
