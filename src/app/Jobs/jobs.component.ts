import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../model/employee-data';
import { Job } from '../model/Job';
import { EmployeeService } from '../service/employee.service';
import { JobService } from '../service/job.service';
@Component({
    selector: 'jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

    jobs: Job[];
    ngOnInit(): void {
        this.getEmployees();
    }
    constructor(private jobService: JobService) {


    }
    getEmployees() {
     //   this.jobs = [];

        this.jobService.getAllJobs()
            .subscribe((data: any) => {
                this.jobs = data;
            });

    }
}