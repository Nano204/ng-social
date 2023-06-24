import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'ngsocial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, AfterViewInit {
  @ViewChild('postContent') postContentRef!: ElementRef;
  @Input() post: Post | null = null;
  formatedDate?: string;
  textOverflow: boolean = false;

  ngOnInit(): void {
    this.formatedDate = this.post?.date.toDateString();
  }

  ngAfterViewInit(): void {
    this.checkOverflow();
  }

  checkOverflow() {
    const postContent = this.postContentRef.nativeElement;
    if (postContent.offsetHeight < postContent.scrollHeight) {
      this.textOverflow = true;
    }
  }
}
