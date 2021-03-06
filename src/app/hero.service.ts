import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { MockedHeroData } from './MockedHeroData';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor(private messageService:MessageService) { }

	GetHeroes():Observable<Hero[]>{
		let data= of(MockedHeroData);
		this.messageService.Add("HeroService: fetched heroes.");
		return data;
	}
	GetHero(id:number):Observable<Hero>{
		let hero=MockedHeroData.find(obj=>obj.id==id)!;
		this.messageService.Add(`HeroMessage: fetched hero ${id}`);
		return of(hero);
	}
}
