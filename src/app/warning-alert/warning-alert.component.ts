import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
   styles: [`
  p {
    padding: 20px;
    background-color: mistyrose;
    border: 1px solid red;
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  showSecret = false;
  log= [1];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDisplay() {
this.showSecret = !this.showSecret;
this.log.push(this.log.length+1);
  }

}
