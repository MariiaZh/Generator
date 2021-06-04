import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, SubscriptionLike } from "rxjs";


@Component({
    selector: 'app-word-generator',
    templateUrl: './word-generator.component.html',
    styleUrls: ['./word-generator.component.css']
})
export class WordGeneratorComponent implements OnInit {

    symbolsText: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    wordsArray: string[] = [];
    counter: number = -1;
    isPalindrom: boolean = false;
    isNumber: boolean = false;
    isToggle: boolean = true;
    observer: Observable<number> = interval(3000);
    subscript: Subscription = new Subscription();

    constructor() {

    }

    getWord(): string {

        let word: string = "";
        for (let i = 0; i <= 4; i++) {
            let randomValue: number = Math.round(Math.random() * 35);
            word += this.symbolsText[randomValue];
        }

        return word += " ";
    }

    getPalindrom(): string {

        let word: string = "";

        for (let i = 0; i <= 2; i++) {
            let randomValue: number = Math.round(Math.random() * 35);
            word += this.symbolsText[randomValue];
        }
        return word += word[1] + word[0] + " ";
    }

    getNumber(): string {
        let word: string = "";
        for (let i = 0; i <= 4; i++) {
            let randomValue: number = Math.round(Math.random() * (35 - 26) + 26);
            word += this.symbolsText[randomValue];
        }

        return word += " ";
    }

    addWord() {

        let flag: number = Math.round(Math.random() * 22);

        if (flag % 4 == 0) {
            this.wordsArray.push(this.getPalindrom());
            this.isPalindrom = true;
            this.isNumber = false;
        } else if (flag % 5 == 0) {
            this.wordsArray.push(this.getNumber());
            this.isPalindrom = false;
            this.isNumber = true;
        }
        else {
            this.wordsArray.push(this.getWord());
            this.isPalindrom = false;
            this.isNumber = false;
        }
    }

    writeText(par: HTMLElement) {

        this.addWord();
        this.counter++;

        let $span = document.createElement("span");
        $span.innerHTML = this.wordsArray[this.counter];

        if (this.isPalindrom) {
            $span.style.color = "red";
        }

        if (this.isNumber) {
            $span.style.color = "blue";
        }

        let matches: number = $span.innerHTML.search(/[0]/);

        if (matches !== -1) {
            $span.style.visibility = "hidden";
        }

        $span.classList.add("words");
        par.appendChild($span);
    }

    goInterval(par: HTMLElement) {

        if (this.isToggle) {
            this.subscript = this.observer.subscribe(() => this.writeText(par));
            this.isToggle = false;
        }
    }

    stopInterval() {
        this.isToggle = true;
        if (this.subscript) {
            this.subscript.unsubscribe();
        }
    }

    removeWords() {

        let $par: HTMLElement | null = document.querySelector("p");

        if ($par) {
            $par.innerHTML = "";
        }
        this.wordsArray.splice(0, this.wordsArray.length);
        this.counter = -1;
    }

    ngOnInit(): void {
    }

}
