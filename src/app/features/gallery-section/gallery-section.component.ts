import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-gallery-section',
  imports: [CommonModule],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})

export class GallerySectionComponent {
  images: string[] = [
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
  ];

  isModalOpen = false;
  currentImageIndex = 0;

  openModal(index: number) {
    this.currentImageIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  }

  closeModal(event: MouseEvent) {
    // Закрываем только при клике на overlay или кнопку закрытия
    if (
      (event.target as HTMLElement).classList.contains('modal-overlay') ||
      (event.target as HTMLElement).classList.contains('modal-close')
    ) {
      this.isModalOpen = false;
      document.body.style.overflow = ''; // Восстанавливаем скролл
    }
  }

  nextImage(event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  selectImage(index: number, event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex = index;
  }

  // Закрытие модального окна по клавише ESC
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isModalOpen) {
      if (event.key === 'Escape') {
        this.isModalOpen = false;
        document.body.style.overflow = '';
      } else if (event.key === 'ArrowRight') {
        this.nextImage(new MouseEvent('click'));
      } else if (event.key === 'ArrowLeft') {
        this.prevImage(new MouseEvent('click'));
      }
    }
  }
}
