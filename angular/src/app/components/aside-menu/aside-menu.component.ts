import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { IMenuItem } from 'src/app/core/models/IMenuItem';
@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    let result = this.menuService.findAll();
    console.log(result[0].title);
  }

}
