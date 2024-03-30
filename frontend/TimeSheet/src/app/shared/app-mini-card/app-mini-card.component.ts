import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-app-mini-card',
  templateUrl: './app-mini-card.component.html',
  styleUrls: ['./app-mini-card.component.css']
})
export class AppMiniCardComponent {
  
  

  @Input()
  title!: string; @Input()
  content!: string; 
}
