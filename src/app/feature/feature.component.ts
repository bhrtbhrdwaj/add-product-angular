import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  setFeature(event: any){
    this.service.addFeature(event.target.value);
  }
}
