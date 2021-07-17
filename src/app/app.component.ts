import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  exists = false;
  
  product = this.fb.group({
    id: ['', [Validators.required, Validators.maxLength(11)]],
    name: ['', [Validators.required, Validators.maxLength(21)]],
  });

  productInitialValue = this.product.value;
  
  feature: Array<FeatureComponent> = [new FeatureComponent(this.serivce)];
  constructor(private fb: FormBuilder, private serivce: AppService){

  }

  setFile(event){
    this.serivce.setFile(event.target.files[0]);
  }

  checkProductId(event){
    let id = parseInt(event.target.value);
    this.serivce.checkProductId(id).then((res) => this.exists = res.valueOf());
  }

  onSubmit(): void{
    this.product.value.features = this.serivce.getFeatures();
    this.serivce.addProduct(this.product.value);
    this.product.reset(this.productInitialValue);
  }

  addFeature(): void{
    this.feature.push(new FeatureComponent(this.serivce));
  }
}
