import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'base-array-class', loadChildren: './base-array-class/base-array-class.module#BaseArrayClassPageModule' },
  { path: 'circle', loadChildren: './circle/circle.module#CirclePageModule' },
  { path: 'geocoding', loadChildren: './geocoding/geocoding.module#GeocodingPageModule' },
  { path: 'ground-overlay', loadChildren: './ground-overlay/ground-overlay.module#GroundOverlayPageModule' },
  { path: 'html-info-window', loadChildren: './html-info-window/html-info-window.module#HtmlInfoWindowPageModule' },
  { path: 'kml-overlay', loadChildren: './kml-overlay/kml-overlay.module#KmlOverlayPageModule' },
  { path: 'marker-cluster', loadChildren: './marker-cluster/marker-cluster.module#MarkerClusterPageModule' },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerPageModule' },
  { path: 'polygon', loadChildren: './polygon/polygon.module#PolygonPageModule' },
  { path: 'polyline', loadChildren: './polyline/polyline.module#PolylinePageModule' },
  { path: 'street-view', loadChildren: './street-view/street-view.module#StreetViewPageModule' },
  { path: 'tile-overlay', loadChildren: './tile-overlay/tile-overlay.module#TileOverlayPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
