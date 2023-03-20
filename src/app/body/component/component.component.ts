import { Component } from '@angular/core';
import { BloemModel } from 'src/models/bloem.model';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  bloemenlist: BloemModel[] = [
    new BloemModel(1, "Avalance", "Vianen", "50"),
    new BloemModel(2, "Tulpen", "Hoek Flowers", "250"),
    new BloemModel(5, "Rozen", "Van der Plas", "10"),
    new BloemModel(9, "Dahlia's", "Stargu", "1000"),
    new BloemModel(42, "Zonnebloemen", "Vianen", "230"),
  ];
}
