import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
  article: FormGroup;
  constructor(private articleForm: FormBuilder) {
    this.article = this.articleForm.group({
      name: [''],
      price: [''],
      imageUrl: [''],
      onSale: [false]
    });
  }
}
