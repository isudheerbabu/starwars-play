import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmDetailsComponent } from './pages/films/film-details/film-details.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component'
import { PeopleComponent } from './pages/people/people.component';
import { PlanetDetailsComponent } from './pages/planets/planet-details/planet-details.component'
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesDetailsComponent } from './pages/species/species-details/species-details.component'
import { SpeciesComponent } from './pages/species/species.component';
import { StarshipDetailsComponent } from './pages/starships/starship-details/starship-details.component'
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehicleDetailsComponent } from './pages/vehicles/vehicle-details/vehicle-details.component'
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'films',
    children: [
      {
        path: ':id',
        component: FilmDetailsComponent
      },
      { path: '', component: FilmsComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'people',
    children: [
      {
        path: ':id',
        component: PeopleDetailsComponent
      },
      { path: '', component: PeopleComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'planets',
    children: [
      {
        path: ':id',
        component: PlanetDetailsComponent
      },
      { path: '', component: PlanetsComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'species',
    children: [
      {
        path: ':id',
        component: SpeciesDetailsComponent
      },
      { path: '', component: SpeciesComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'starships',
    children: [
      {
        path: ':id',
        component: StarshipDetailsComponent
      },
      { path: '', component: StarshipsComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'vehicles',
    children: [
      {
        path: ':id',
        component: VehicleDetailsComponent
      },
      { path: '', component: VehiclesComponent, pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
