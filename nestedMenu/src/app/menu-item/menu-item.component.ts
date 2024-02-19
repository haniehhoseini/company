import { Component , Input, OnInit, ViewChild} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule , MatMenuTrigger} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterModule , CommonModule , MatIconModule , MatMenuModule , MatMenuTrigger , MatButtonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  menuItems = [
    {
      label: 'Menu 1',
      subItems: [
        { label: 'Item 1.1', action: () => console.log('Clicked Item 1.1') },
        { label: 'Item 1.2', action: () => console.log('Clicked Item 1.2') }
      ]
    },
    {
      label: 'Menu 2',
      subItems: [
        { label: 'Item 2.1', action: () => console.log('Clicked Item 2.1') },
        { label: 'Item 2.2', action: () => console.log('Clicked Item 2.2') }
      ]
    },
    {
      label: 'Menu 3',
      subItems: [
        { label: 'Item 3.1', action: () => console.log('Clicked Item 3.1') },
        { label: 'Item 3.2', action: () => console.log('Clicked Item 3.2') }
      ]
    },
    {
      label: 'Menu 4',
      subItems: [
        { label: 'Subitem 4.1', action: () => console.log('Clicked Item 4.1') },
        {
          label: 'Item 4.2',
          subItems: [
            { label: 'Subitem 4.2.1', action: () => console.log('Clicked Subitem 4.2.1') },
            { 
              label: 'Item 4.2.2',
              subItems: [
                { label: 'Subsubitem 4.2.2.1', action: () => console.log('Clicked Subsubitem 4.2.2.1') },
                { label: 'Subsubitem 4.2.2.2', action: () => console.log('Clicked Subsubitem 4.2.2.2') }
              ]
            }
          ]
        }
      ]
    },
  ];

  @Input() menuItem: any; 

  handleItemClick(subItem: any): void {
    if (subItem && subItem.action && typeof subItem.action === 'function') {
      subItem.action();
    }
  }
}
