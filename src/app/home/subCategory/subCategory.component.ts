import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subCategory',
  templateUrl: './subCategory.component.html',
  styleUrls: ['./subCategory.component.css']
})
export class SubCategoryComponent implements OnInit {
  categoryId: any;
  subCategories: any;
  subCategoryName: string;
  loader: boolean;
  urlChange: any;
  constructor(private router: Router, private homeService: HomeService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.urlChange = this.route.params.subscribe(params => {
      this.loader = false;
      const categoryId = params['categoryId'];
      this.homeService.getSubCategories(categoryId).subscribe(result => {
        this.loader = true;
        this.subCategories = result.data;
        if(this.subCategories.length > 0){
          this.subCategoryName = this.subCategories[0].categoryId.name;
        }
      });
    });

  }
}
