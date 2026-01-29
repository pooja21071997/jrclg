import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { GoToTopComponent } from "./shared/go-to-top/go-to-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, GoToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jrclg');
}
