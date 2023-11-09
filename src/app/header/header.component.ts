import { Component, OnInit } from '@angular/core';
import { HeaderCategories } from '../interfaces/header-categories.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public search: string = '';
  public iconCatalogue: string = '../../assets/icons/icon_catalogue.svg';
  public isSubMenuVisible: boolean = false;

  public categories: HeaderCategories[] = [
    {
      name: 'Textile',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Cuir',
      subcategories: [
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Habillement',
      subcategories: [
        {
          name: 'trois tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'trois tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'trois tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'su su',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Suspendu',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Suspendu',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Suspendu',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'du du',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Durable',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Durable',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Durable',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Nom de la catégorie',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Nom de la catégorie',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Nom de la catégorie',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
  ];

  public showLeftSubMenu() {
    this.isSubMenuVisible = true;
  }

  public hideLeftSubMenu() {
    this.isSubMenuVisible = false;
  }
}
