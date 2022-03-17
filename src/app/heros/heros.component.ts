import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { MockedHeroData } from '../MockedHeroData';

@Component({
	selector: 'app-heros',
	templateUrl: './heros.component.html',
	styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	heroes=MockedHeroData;

	selectedHero?:Hero=undefined;

	OnSelect(hero:Hero){
		this.selectedHero=hero;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
