import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];
// <Route index path='/' element={<Navigate to='/dashboard' />} />
//   <Route path='/dashboard' element={<Dashboard />} />
//   <Route path='/tasks' element={<Tasks />} />
//   <Route path='/completed/:status' element={<Tasks />} />
//   <Route path='/in-progress/:status' element={<Tasks />} />
//   <Route path='/todo/:status' element={<Tasks />} />
//   <Route path='/team' element={<Users />} />
//   <Route path='/trashed' element={<Trash />} />
//   <Route path='/task/:id' element={<TaskDetails />} />
// </Route>

// <Route path='/log-in' element={<Login />} />
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
