import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../../services/api.service';
import { Post } from '../../../types/posts';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  private service = inject(ApiServiceService);


  constructor() {
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

}
