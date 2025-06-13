import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ICarousel } from '../../models/carousel';
import { ImageService } from '../../services/carousel.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './carousel-section.component.html',
  styleUrl: './carousel-section.component.scss',
})
export class CarouselSectionComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private container =
    viewChild.required<ElementRef<HTMLDivElement>>('container');
  private track = viewChild.required<ElementRef<HTMLDivElement>>('track');

  list: ICarousel[] = [];

  error = signal(false);
  loading = signal(true);
  currentIndex = signal(0);
  transformValue = computed(() => {
    return `translateX(-${this.currentIndex() * 100}%)`;
  });
  currentItem = signal<ICarousel | null>(null);

  private autoPlayDelay = 3000;
  private startX = 0;
  private currentX = 0;
  private isDragging = false;
  private isPaused = false;
  private autoPlayTimer: any;
  private readonly SWIPE_THRESHOLD = 50;

  constructor(private imageService: ImageService) {
    this.destroyRef.onDestroy(() => {
      this.stopAutoPlay();
    });

    effect(() => {
      this.currentIndex();
      if (!this.isPaused) {
        this.restartAutoPlay();
      }
    });
  }

  ngOnInit() {
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.list = data;
        this.loading.set(false);

        this.currentItem.set(this.list[this.currentIndex()]);
        this.startAutoPlay();
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

  private startAutoPlay() {
    this.stopAutoPlay();
    if (this.isPaused || this.list.length <= 1) return;

    this.autoPlayTimer = setInterval(() => {
      this.next();
      this.getCurrentItem(this.list[this.currentIndex()]);
    }, this.autoPlayDelay);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  private restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  pause() {
    this.isPaused = true;
    this.stopAutoPlay();
  }

  resume() {
    this.isPaused = false;
    this.startAutoPlay();
  }

  onTouchStart(event: TouchEvent) {
    this.pause();
    this.startX = event.touches[0].clientX;
    this.currentX = this.startX;
    this.isDragging = true;
    this.track().nativeElement.style.transition = 'none';
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;

    this.currentX = event.touches[0].clientX;
    const diff = this.currentX - this.startX;
    const containerWidth = this.container().nativeElement.offsetWidth;
    const dragOffset = (diff / containerWidth) * 100;
    const baseOffset = -this.currentIndex() * 100;
    this.track().nativeElement.style.transform = `translateX(calc(${baseOffset}% + ${dragOffset}px)`;
  }

  onTouchEnd() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.track().nativeElement.style.transition = 'transform 1s ease';

    const diff = this.currentX - this.startX;
    if (Math.abs(diff) > this.SWIPE_THRESHOLD) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    } else {
      this.goTo(this.currentIndex());
    }

    this.resume();
  }

  next() {
    this.currentIndex.update((idx) => (idx + 1) % this.list.length);
    this.getCurrentItem(this.list[this.currentIndex()]);
  }

  prev() {
    this.currentIndex.update(
      (idx) => (idx - 1 + this.list.length) % this.list.length
    );
    this.getCurrentItem(this.list[this.currentIndex()]);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  getCurrentItem(item: ICarousel) {
    this.currentItem.set(item);
  }
}
