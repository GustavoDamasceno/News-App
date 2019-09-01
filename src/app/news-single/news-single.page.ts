import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article;
  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.article = this.newService.currentArticle;
    console.log(this.newService.currentArticle);
  }

}
