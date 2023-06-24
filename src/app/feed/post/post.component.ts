import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'ngsocial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @ViewChild('postContent') postContentRef!: ElementRef;
  @Input() post: Post | null = null;
  formatedDate?: string;
  textOverflow?: boolean;
  collapse: boolean = true;

  ngOnInit(): void {
    this.formatedDate = this.post?.date.toDateString();
    setTimeout(() => {
      this.checkOverflow();
    }, 0);
  }

  checkOverflow() {
    const postContent = this.postContentRef.nativeElement;
    this.textOverflow = postContent.offsetHeight < postContent.scrollHeight;
  }

  toggleCollapse() {
    console.log(this.collapse);
    this.collapse = !this.collapse;
  }
}
