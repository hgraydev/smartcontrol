import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { SubjectService } from '../../../services/subject.service';
import { EmployeeService } from '../../../services/employee.service';
import { ScheduleService } from '../../../services/schedule.service';

@Component({
  selector: 'app-new-subject-schedule',
  templateUrl: './new-subject-schedule.component.html',
  styleUrls: ['./new-subject-schedule.component.css']
})
export class NewSubjectScheduleComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;
  _GroupId: any;
  Group: any;
  Subjects: any;
  Teachers: any;
  flagMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService,
    private subjectService: SubjectService,
    private employeeService: EmployeeService,
    private scheduleService: ScheduleService

  ) { 
    this.createForm();

    this._GroupId = this.activatedRoute.snapshot.params.id;
    this.loadGrouop(this._GroupId);

  }

  ngOnInit() {
    
  }

  get f() { return this.templateForm.controls; }

  createForm() {
    this.templateForm = this.formBuilder.group({
      group_id: ['', [Validators.required]],
      subject_id: ['', [Validators.required]],
      teacher_id: ['', [Validators.required]],
      lunStart:[''], lunEnd:[''],
      marStart:[''], marEnd:[''],
      mieStart:[''], mieEnd:[''],
      jueStart:[''], jueEnd:[''],
      vieStart:[''], vieEnd:[''],
      sabStart:[''], sabEnd:[''],
      domStart:[''], domEnd:['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
        // this.offerService.setOffer(this.templateForm.value).subscribe( result => {
        //   this.toastrService.success(JSON.stringify(result[0].message));
        // }, err => {
        //   console.log(err);
        // })
        let data = {
          group_id: this.templateForm.get('group_id').value,
          employee_id: this.templateForm.get('teacher_id').value,
          subject_id: this.templateForm.get('subject_id').value
        }
        
        if(this.templateForm.get('lunStart').value && this.templateForm.get('lunEnd')) {
            data['day']= "LUNES";
            data['start']= this.templateForm.get('lunStart').value;
            data['end']= this.templateForm.get('lunEnd').value;
          this.setSchedule_(data);
        }
        // 
        if(this.templateForm.get('marStart').value && this.templateForm.get('marEnd')) {
          data['day']= "MARTES";
            data['start']= this.templateForm.get('marStart').value;
            data['end']= this.templateForm.get('marEnd').value;
          this.setSchedule_(data);
        }
        // 
        if(this.templateForm.get('mieStart').value && this.templateForm.get('mieEnd')) {
          data['day']= "MIERCOLES";
            data['start']= this.templateForm.get('mieStart').value;
            data['end']= this.templateForm.get('mieEnd').value;
          this.setSchedule_(data);
        }
        // 
        if(this.templateForm.get('jueStart').value && this.templateForm.get('jueEnd')) {
          data['day']= "JUEVES";
            data['start']= this.templateForm.get('jueStart').value;
            data['end']= this.templateForm.get('jueEnd').value;
          this.setSchedule_(data);
        }
        // 
        if(this.templateForm.get('vieStart').value && this.templateForm.get('vieEnd')) {
          data['day']= "VIERNES";
            data['start']= this.templateForm.get('vieStart').value;
            data['end']= this.templateForm.get('vieEnd').value;
          this.setSchedule_(data);
        }
        // 
        if(this.templateForm.get('sabStart').value && this.templateForm.get('sabEnd')) {
          data['day']= "SABADO";
            data['start']= this.templateForm.get('sabStart').value;
            data['end']= this.templateForm.get('sabEnd').value;
          this.setSchedule_(data);
        }
        // 
        if(this.templateForm.get('domStart').value && this.templateForm.get('domEnd')) {
          data['day']= "DOMINGO";
            data['start']= this.templateForm.get('domStart').value;
            data['end']= this.templateForm.get('domEnd').value;
          this.setSchedule_(data);
        }


        if(this.flagMessage) {
          this.toastrService.success("Su horario se ha registraro exitosamente!!!");
        }
    }    
  }
  

  loadGrouop(id: any) {
    this.groupService.getGroupById(id).subscribe( result => { console.log(result);
      this.Group = result;
      if(this.Group) {
        let data = {
          grade: this.Group.grade,
          syllabus_id: this.Group.offer.syllabus_id
        }

        this.templateForm.controls['group_id'].setValue(this.Group.uuid); 

        this.subjectService.getSubjectsByGroupAndSyllabus(data).subscribe( result => { console.log(result);
          this.Subjects = result;
        })

        this.employeeService.getTeachers().subscribe( result => { console.log(result) 
          this.Teachers =result;
        })
      }
    })
  }

  setSchedule_(data: any) {
    this.scheduleService.setSchedule(data).subscribe( result => {
      this.flagMessage = true;
    })
  }
  


}
