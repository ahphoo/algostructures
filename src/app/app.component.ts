import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algostructures';
  links = [
    {url:"https://ahphoo.github.io/Advent of Code", name: "Advent of Code"},
    {url:"https://ahphoo.github.io/Algoexpert", name: "Algoexpert"},
    {url:"https://ahphoo.github.io/Cracking%20the%20Coding%20Interview/", name: "Cracking the Coding Interview"},
    {url:"https://ahphoo.github.io/EPI/", name: "Elements of Programming Interviews"},
    {url:"https://ahphoo.github.io/Javascript.Info/", name: "Javascript.Info"},
    {url:"https://ahphoo.github.io/Linux/", name: "Linux"},
    {url:"https://ahphoo.github.io/Resources/", name: "Resources"},
    {url:"https://ahphoo.github.io/Yang%20Shun%20Handbook/", name: "Yang Shun Handbook"}
  ];
}
