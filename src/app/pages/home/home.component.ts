import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Categories } from 'src/app/interfaces/categories'
import { StarwarsService } from '../../services/starwars.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCategories$: Observable<Categories>

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.allCategories$ = this.starwarsService.getAllCategories()
  }
}
