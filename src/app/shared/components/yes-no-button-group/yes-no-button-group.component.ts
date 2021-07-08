import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum YesNoButtonGroupOptions {
  YES='yes',
  NO='no'
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent implements OnInit {
  public options = YesNoButtonGroupOptions;

  @Input() public value: string = null;
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public label = ''; 

  constructor() {}

  ngOnInit(): void {}

  /**
   * @param value 
   */
  public activate(value: string): void {
    this.value = value;
    /** Emite o valor para o "mundo externo" (output) */
    this.valueChange.emit(this.value); 
  }

  /**
   * @param value 
   * @returns boolean
   */
  public activated(value: string): boolean {
    return this.value === value;
  }
}
