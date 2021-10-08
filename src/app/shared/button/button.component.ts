import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btn_icon: string;
  @Input() btn_label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
