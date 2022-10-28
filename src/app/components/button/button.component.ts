import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input per le props
// Output ed Evenmitter per il ritorno dell'evento

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // Input sono come le props in react andare a vedere in button - ButtonComponent.component.html che il compoennbte é richiamato e li vengo passate delle props
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
    // console.log('click');
  }
}
