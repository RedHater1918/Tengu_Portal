import {
  Input,
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Exercise } from '../exercise.model';
import { UserService } from 'src/app/user/user.service';
import { ExerciseService } from '../exercise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public dataSource;
  @Input() exercieses: Exercise[];
  status:string;
  statuses:string[]=["Сделано","Взято","Все"];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService:ExerciseService
  ) {}

  ngOnInit() {
    if (this.route.params["value"]["status"]){ 
      this.status = this.statuses[this.route.params["value"]["status"]];
    }else{
      this.status = "Все";
    }
  }

  ngAfterViewInit() {
    if (this.route.params["value"]["status"]){ 
      this.userService
        .getExerciseByStatus(this.route.params["value"]["status"])
        .subscribe((value: Exercise[]) => {
          console.log(value);
          this.dataSource = new MatTableDataSource(value);
          this.dataSource.paginator = this.paginator;
        });
      }else{
      if(this.exercieses) {
      this.dataSource = new MatTableDataSource(this.exercieses);
      } else {
      this.exerciseService
        .loadExercises()
        .subscribe((value: Exercise[]) => {
          console.log(value);
          this.dataSource = new MatTableDataSource(value);
          this.dataSource.paginator = this.paginator;
        });
      }
    }
  }

  changeStatus(status){
    if(this.statuses.indexOf(status)!=-1 && this.statuses.indexOf(status)!=2){
    this.router.navigateByUrl(`/exercises/${this.statuses.indexOf(status)}`).then(()=>(this.ngAfterViewInit())); 
    }else{
      this.router.navigateByUrl(`/exercises`);
    }
  }
}
