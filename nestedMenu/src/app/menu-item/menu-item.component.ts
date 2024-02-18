import { Component , Input, OnInit, ViewChild} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from '../nav-item';
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
export class MenuItemComponent implements OnInit{
  @Input() items!: NavItem[];
  @ViewChild('childMenu') public childMenu!: ElementRef;
  

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
