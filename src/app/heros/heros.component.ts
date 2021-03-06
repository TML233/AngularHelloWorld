import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { MockedHeroData } from '../MockedHeroData';

@Component({
	selector: 'app-heros',
	templateUrl: './heros.component.html',
	styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	heroes: Hero[] = [];

	GetHeroes() {
		this.heroService.GetHeroes().subscribe(obj => this.heroes = obj);
	}

	constructor(private heroService: HeroService,private messageService:MessageService) { }

	ngOnInit(): void {
		this.GetHeroes();
	}

}
