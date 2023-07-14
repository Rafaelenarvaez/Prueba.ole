import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  frase:any;
  landing=false;

  constructor(private apiService : ApiServiceService) { 
  }

  ngOnInit(): void {
    
    this.apiService.getFrases().subscribe(
      rp => {
        this.frase = rp.slip;
        console.log(rp);
      }
    )
  }

  botonFrase(event?:Event){
    this.apiService.getFrases().subscribe(
      rp => {
        this.frase = rp.slip;
        console.log(rp);
      }
    )
  }
  
}
