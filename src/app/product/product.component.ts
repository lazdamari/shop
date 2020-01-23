import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { AlertifyService } from "../services/alertify.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService: AlertifyService) {}
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4 Tech",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4 Tech",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus Zenbook",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4 Tech",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 25,
      categoryId: 2,
      description: "A4 Tech",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
  ];
  ngOnInit() {}

  addToCart(product) {
    this.alertifyService.success(product.name + " eklendi");
  }
}
