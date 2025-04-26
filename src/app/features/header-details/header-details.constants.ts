import { PATH_ROUT } from '../../index.constants';
import { EMenuList, MenuList } from '../../services/header.service';

export const menuList: MenuList[] = [
  { id: 0, name: EMenuList.MAIN, path: '' },
  { id: 1, name: EMenuList.ABOUT_US, path: '' },
  { id: 2, name: EMenuList.SERVICES, path: '' },
  { id: 3, name: EMenuList.CONTACT, path: PATH_ROUT.CONTACT },
  { id: 4, name: EMenuList.QUESTION_AND_ANSWER, path: '' },
  { id: 5, name: EMenuList.GALLERY, path: '' },
];
