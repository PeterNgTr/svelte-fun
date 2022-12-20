/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type bookstorePage = typeof import('./pages/Bookstore');
type PixelmatchHelper = import('codeceptjs-pixelmatchhelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, bookstorePage: bookstorePage }
  interface Methods extends Playwright, PixelmatchHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<PixelmatchHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
