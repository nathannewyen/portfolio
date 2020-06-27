import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: [ './message.component.scss' ]
})
export class MessageComponent implements OnInit {
	messages = [];

	constructor(private _httpService: HttpService) {}

	ngOnInit() {
		this.getMsg();
	}

	getMsg() {
		let observable = this._httpService.getUsers();
		observable.subscribe((data) => {
			this.messages = data['data'];
		});
	}
}
