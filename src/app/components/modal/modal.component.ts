import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  signal,
} from "@angular/core";
import { ICarousel } from "../../models/carousel";

@Component({
  selector: "app-modal",
  imports: [],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() images: ICarousel[] = [];
  @Input() currentImageIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  public setImageIndex = signal(0);

  ngOnInit() {
    document.body.style.overflow = "hidden";
    this.setImageIndex.set(this.currentImageIndex);
  }

  ngOnDestroy() {
    document.body.style.overflow = "";
    this.setImageIndex.set(0);
  }

  closeModal() {
    this.close.emit();
  }

  nextImage(event: MouseEvent) {
    event.stopPropagation();
    this.setImageIndex.set((this.setImageIndex() + 1) % this.images.length);
  }

  prevImage(event: MouseEvent) {
    event.stopPropagation();

    if (this.setImageIndex() < 1) {
      this.setImageIndex.set(this.images.length - 1);
    } else {
      this.setImageIndex.set(
        this.setImageIndex() - 1 + (this.images.length % this.images.length),
      );
    }
  }

  selectImage(index: number, event: MouseEvent) {
    event.stopPropagation();
    this.setImageIndex.set(index);
  }

  // Закрытие модального окна по клавише ESC
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.close.emit();
    } else if (event.key === "ArrowRight") {
      this.nextImage(new MouseEvent("click"));
    } else if (event.key === "ArrowLeft") {
      this.prevImage(new MouseEvent("click"));
    }
  }
}
