import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
features = new Array();
productImage;
baseUrl = "https://product-review-x.herokuapp.com/";


  constructor(private httpClient: HttpClient) { }

  addProduct(product: any){
    let p ={
      id: product.id, name: product.name, features: this.features
    }
 
    var formData=new FormData();
    
    formData.append("productJson", JSON.stringify(p));
    
    formData.append("productImage", this.productImage);

    this.httpClient.post(this.baseUrl+"products", formData).subscribe(
      (data) => alert("Server Response: " + JSON.stringify(data))
    );
     
    
  }

  async checkProductId(id: number){
    return await this.httpClient.get<Boolean>(this.baseUrl+"valid-product-id/"+id).toPromise();
  }

  addFeature(feature: string){
    this.features.push(feature);
  }

  getFeatures(){
    return this.features;
  }

  setFile(file: File){
    this.productImage = file;
  }
}
