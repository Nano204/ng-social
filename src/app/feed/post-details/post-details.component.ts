import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { Sections } from './post-details.enum';

@Component({
  selector: 'ngsocial-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  formatedDate!: string;
  post: Post = {
    id: '1',
    user: 'User1',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: new Date(),
  };
  sections = Sections;
  activeSection: Sections = Sections.description;

  ngOnInit(): void {
    this.formatedDate = this.post?.date.toDateString();
  }

  onSelectSection(section: Sections) {
    this.activeSection = section;
  }
}
