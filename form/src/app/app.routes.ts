import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { ChildthreeComponent } from './childthree/childthree.component';

export const routes: Routes = [

    { 
        path: 'parent', 
        component: ParentComponent,
    }
 
];
