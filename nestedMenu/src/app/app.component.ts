import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , MenuItemComponent , CommonModule  , RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
