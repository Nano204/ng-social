import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from './post.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'ngsocial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @ViewChild('postContent') postContentRef!: ElementRef;
  @Input() post!: Post;
  formatedDate?: string;
  textOverflow?: boolean;
  collapse: boolean = true;

  constructor(private router: Router, private loginService: LoginService) {}

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
    if (this.loginService.isLogged()) {
      this.collapse = !this.collapse;
    }
    this.loginService.inviteToLogin()
    this.collapse = true;
  }

  goToPost() {
    const postId = this.post?.id;
    this.router.navigate(['feed', postId]);
  }
}
