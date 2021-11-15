import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  Tasks: Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.Tasks=tasks)
  }
    deleteTask(task:Task){
      this.taskService.deleteTask(task).subscribe(()=>(this.Tasks=this.Tasks.filter(t=>t.id !== task.id))) 
    }
    toggleReminder(task:Task){task.reminder= !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()}
    addTask(task:Task){
      this.taskService.addTask(task).subscribe((task)=>this.Tasks.push(task))
    }
}
