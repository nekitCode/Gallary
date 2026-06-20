import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { ICarousel } from "../../models/carousel";
import { ImageService } from "../../services/carousel.service";

@Component({
  standalone: true,
  selector: "app-carousel-section",
  imports: [CommonModule],
  templateUrl: "./carousel-section.component.html",
  styleUrl: "./carousel-section.component.scss",
})
export class CarouselSectionComponent implements OnInit {
  list: ICarousel[] = [];

  error = signal(false);
  loading = signal(true);
  currentIndex = signal(0);
  currentItem = signal<ICarousel | null>(null);

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.list = data;
        this.loading.set(false);

        this.currentItem.set(this.list[this.currentIndex()]);
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

  getCurrentItem(item: ICarousel) {
    console.log(item);
  }
}
