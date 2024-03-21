import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { MenuItem } from './interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuItems: Observable<MenuItem[]> ;

  constructor(private dataService: DataService) {}

  ngOnInit() {
   this.menuItems = this.dataService.getMenuOpts();
  }

  toggleGroup(menuItem: MenuItem) {
    menuItem.expanded = !menuItem.expanded;
  }
}
