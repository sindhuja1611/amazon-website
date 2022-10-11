import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
   
    this.auth.logout();
    
  }
}
