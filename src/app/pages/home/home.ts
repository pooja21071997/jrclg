import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
@ViewChildren('counter') counters!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    // 🔹 Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // 🔹 If it is a counter section, start counter
          if (entry.target.classList.contains('counter-section')) {
            this.startCounterAnimation();
          }

          observerRef.unobserve(entry.target); // Run only once
        }

      });
    }, {
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  }

  startCounterAnimation() {

    const speed = 200;

    this.counters.forEach((counterEl: ElementRef) => {

      const element = counterEl.nativeElement;

      // Prevent re-running
      if (element.classList.contains('counted')) return;
      element.classList.add('counted');

      const target = +element.getAttribute('data-target');
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          element.innerText = Math.ceil(count);
          setTimeout(updateCount, 10);
        } else {
          element.innerText = target + "+";
        }
      };

      updateCount();
    });

  }
}
