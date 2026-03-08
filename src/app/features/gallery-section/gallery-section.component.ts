
import {
  Component,
  contentChild,
  effect,
  ElementRef,
  HostListener,
  OnInit,
  signal,
} from "@angular/core";
import { PATH_ROUT } from "../../index.constants";
import { ICarousel } from "../../models/carousel";
import { ImageService } from "../../services/carousel.service";

@Component({
  selector: "app-gallery-section",
  imports: [],
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
  private container =
    contentChild.required<ElementRef<HTMLBodyElement>>("body");

  constructor(private imageService: ImageService) {
    effect(() => {
      console.log("render");
    });
  }

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
    document.body.style.overflow = "hidden";
  }

  closeModal(event: MouseEvent) {
    // Закрываем только при клике на overlay или кнопку закрытия
    if (
      (event.target as HTMLElement).classList.contains("modal-overlay") ||
      (event.target as HTMLElement).classList.contains("modal-close")
    ) {
      this.isModalOpen.set(false);
      document.body.style.overflow = "";
    }
  }

  nextImage(event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex.set(
      (this.currentImageIndex() + 1) % this.images.length,
    );
  }

  prevImage(event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex.set(
      this.currentImageIndex() - 1 + (this.images.length % this.images.length),
    );
  }

  selectImage(index: number, event: MouseEvent) {
    event.stopPropagation();
    this.currentImageIndex.set(index);
  }

  // Закрытие модального окна по клавише ESC
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isModalOpen) {
      if (event.key === "Escape") {
        this.isModalOpen.set(false);
        document.body.style.overflow = "";
      } else if (event.key === "ArrowRight") {
        this.nextImage(new MouseEvent("click"));
      } else if (event.key === "ArrowLeft") {
        this.prevImage(new MouseEvent("click"));
      }
    }
  }
}
