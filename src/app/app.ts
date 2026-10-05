import { Component } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  imports : [Dashboard, RouterOutlet,RouterLink,RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  appName = 'DevTrack';
  projectCount = 3;
  addProject() {
    this.projectCount++;
  }
}
