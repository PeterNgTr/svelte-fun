import Bookstore from './pages/Bookstore';

class Injector {
	private static isInitialized: boolean;
	private static bookstorePage: Bookstore;

	private constructor() {}

	public static getPageObjects(){
		if (!this.isInitialized) {
			this.bookstorePage = new Bookstore()
			this.isInitialized = true
		}
		return {
			bookstorePage: this.bookstorePage
		}
	}
}

export = Injector
