/**
 * Created by peto on 12/04/2016.
 */
import {Component} from 'angular2/core';
import {ProductPricingComponent} from "./product-pricing.component";

@Component({
    template: `<expo-product-pricing></expo-product-pricing>
               `,
    directives: [ProductPricingComponent]
})
export class HomeComponent {
    
}