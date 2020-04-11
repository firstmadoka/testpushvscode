import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = 'Basic angular 7';
  title: string = 'Basic Angular 7 is very easy.';
  content: string = `With <a href="https://getbootstrap.com">supporting</a> text below as a natural lead-in to additional content.`;
  button: string = "เนื้อหาเพิ่มเติม";

  boxId: string = `box-${Math.random()}`;
  linkAddress: string = 'https://getbootstrap.com';
  ttvoneAttr: string = 'Angular binding ttvone attribute';
  styleColor: string = 'blue';
  alertClass: string = 'alert alert-primary';
  isSuccess: boolean = true; // สำหรับตรวจสอบ ng class

  isHindAlert: boolean = true;
  constructor() {
    setTimeout(() => {
      this.styleColor = 'red';
      this.alertClass = 'alert alert-danger';
      this.isSuccess = false;
      this.title = 'คอร์สพื้นฐาน Angular 7 ง่ายมาก';
    }, 1000);
  }
  onClick(e: Event) {
    this.isHindAlert = !this.isHindAlert;
  }
  onMouseHover(text: string) {
    this.header = text;
  }
}