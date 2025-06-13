export enum EMenuList {
  MAIN = 'главная',
  ABOUT_US = 'О нас',
  SERVICES = 'услуги',
  CONTACT = 'контакты',
  QUESTION_AND_ANSWER = 'вопросы и ответы',
  GALLERY = 'галерея',
  PRODUCTS = 'продукты',
}

export interface MenuList {
  id: number;
  name: EMenuList;
  path: string;
}
