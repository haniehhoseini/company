import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { VERSION } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , MenuItemComponent , CommonModule  , RouterModule , MatIconModule , MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
