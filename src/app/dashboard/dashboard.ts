import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  projectCount = 3;
  taskCount = 8;
  completedCount = 5;
  statusMessage = 'All systems operational';
  isButtonDisabled = true;
  enableCreateProject() {
    this.isButtonDisabled = false;
  }
}
