import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  GetHero() {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.GetHero(id).subscribe(obj => this.hero = obj);
  }
  ngOnInit(): void {
    this.GetHero();
  }

  GoBack() {
    this.location.back();
  }

  @Input() hero?: Hero = undefined;
}
