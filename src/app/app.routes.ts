import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactDetailsComponent } from './features/contact-details/contact-details.component';
import { GallerySectionComponent } from './features/gallery-section/gallery-section.component';
import { PATH_ROUT } from './index.constants';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { GalleryComponent } from './layout/gallery/gallery.component';

export const routes: Routes = [
  {
    path: PATH_ROUT.ROOT,
    component: MainComponent,
  },
  {
    path: PATH_ROUT.CONTACT,
    component: ContactsComponent,
    children: [
      {
        path: '',
        component: ContactDetailsComponent,
      },
    ],
  },
  {
    path: PATH_ROUT.GALLERY,
    component: GalleryComponent,
    children: [
      {
        path: '',
        component: GallerySectionComponent,
      },
    ],
  },
];
