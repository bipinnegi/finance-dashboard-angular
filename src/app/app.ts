import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { Header } from './components/layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Sidebar,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}