import { PATH_ROUT } from "../../index.constants";
import { EMenuList, MenuList } from "../../models/header";

export const menuList: MenuList[] = [
  { id: 0, name: EMenuList.MAIN, path: "" },
  { id: 1, name: EMenuList.GALLERY, path: PATH_ROUT.GALLERY },
  // { id: 2, name: EMenuList.ABOUT_US, path: "" },
  // { id: 3, name: EMenuList.SERVICES, path: "" },
  // { id: 4, name: EMenuList.CONTACT, path: PATH_ROUT.CONTACT },
  // { id: 5, name: EMenuList.QUESTION_AND_ANSWER, path: "" },
];
