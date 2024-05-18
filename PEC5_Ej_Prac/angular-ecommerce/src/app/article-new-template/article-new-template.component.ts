import { Component} from '@angular/core';
import { Article } from './article-new-template.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css',
})
export class ArticleNewTemplateComponent   {

public article?: Article;



createArticle(articleForm: NgForm) {
    if (articleForm.valid) {
      this.article = articleForm.value.article;
      console.log('Artículo Creado', this.article);
    }
  }
}
