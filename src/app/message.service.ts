import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	messages: string[] = [];
	Add(message: string) {
		this.messages.push(message);
	}
	clear() {
		this.messages = [];
	}
}
