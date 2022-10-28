import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  @Input() title: string = '';
  @Input() textColor: string = '';
  @Input() bgColor: string = '';
  @Output() changeTopBar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.changeTopBar.emit();
  }
}
