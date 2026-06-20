import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { ICarousel } from "../../models/carousel";
import { ImageService } from "../../services/carousel.service";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  standalone: true,
  selector: "app-carousel-section",
  imports: [CommonModule, ModalComponent],
  templateUrl: "./carousel-section.component.html",
  styleUrl: "./carousel-section.component.scss",
})
export class CarouselSectionComponent implements OnInit {
  list: ICarousel[] = [];

  error = signal(false);
  loading = signal(true);
  currentIndex = signal(0);
  currentItem = signal<ICarousel | null>(null);
  modalOpen = signal(false);
  currentImage = signal<ICarousel[]>([]);
  currentIndexImage = signal<number>(0);

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.list = data;
        this.loading.set(false);

        this.currentItem.set(this.list[this.currentIndex()]);
      },
      error: (error) => {
        this.error.set(true);
        this.loading.set(false);
        console.log(error);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  getCurrentItem(item: ICarousel, index: number) {
    this.currentImage.set([item]);
    this.currentIndexImage.set(0);
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }
}
