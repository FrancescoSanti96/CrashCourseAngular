import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // Input sono come le props in react andare a vedere in button - ButtonComponent.component.html che il compoennbte é richiamato e li vengo passate delle props
  @Input() text: string = '';
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
