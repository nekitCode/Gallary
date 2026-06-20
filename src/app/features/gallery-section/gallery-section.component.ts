import { Component, OnInit, signal } from "@angular/core";
import { ModalComponent } from "../../components/modal/modal.component";
import { ICarousel } from "../../models/carousel";
import { ImageService } from "../../services/carousel.service";
import { PATH_ROUT } from "../../index.constants";

@Component({
  selector: "app-gallery-section",
  imports: [ModalComponent],
  templateUrl: "./gallery-section.component.html",
  styleUrl: "./gallery-section.component.scss",
})
export class GallerySectionComponent implements OnInit {
  images: ICarousel[] = [];
  readonly path = PATH_ROUT;
  readonly isModalOpen = signal(false);
  readonly loading = signal(false);
  readonly error = signal(false);
  readonly currentImageIndex = signal(0);

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.images = data;
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(true);
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  openModal(index: number) {
    this.currentImageIndex.set(index);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
