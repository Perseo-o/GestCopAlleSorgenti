import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AddUserComponent } from '../add-components/add-user/add-user.component';
import { FormDataService } from '../../../services/form-data-service.service';
import { LawyerService } from '../../../services/lawyer.service';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private userService:UserService,
    protected router: Router,
    private formDataService: FormDataService,
    private lawyerService: LawyerService,
    private doctorService: DoctorService
  ) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed'+ result);
    });
  }

  action(){
    switch (this.data.root) {
      case 'userDetailDelete':
        this.userService.delete(this.data.userId).subscribe(
          response => {
            console.log("User successfully deleted:", response);
            this.router.navigate(['GestCopAlleSorgenti/home']);
          },
          error => {
            console.error("Error deleting user:", error);
            // Gestione degli errori, ad esempio mostrare un messaggio all'utente
          }
        );
        break;
    
      case 'addUser':
        this.userService.create(this.data.newUser).subscribe(
          response => {
            console.log("User successfully created:", response);
            this.formDataService.resetForm();
            this.router.navigate(['GestCopAlleSorgenti/add-general']);
          },
          error => {
            console.error("Error creating user:", error);
          }
        );
        break;

      case 'updateUser':
        this.userService.update(this.data.newUser).subscribe(
          (response) => {
            console.log("User updated successfully:", response);
            this.router.navigate(['GestCopAlleSorgenti/user-detail', this.data.newUser.id]); 
            // Add any additional operations after user update here
          },
          (error) => {
            console.error("Error updating user:", error);
            // Handle errors here
          }
        );
        
      
      break;

      case 'addLawyer':
        this.lawyerService.create(this.data.lawyerData).subscribe(
          (response) => {
            console.log("Utente creato con successo:", response);
            // Aggiungi qui eventuali operazioni supplementari dopo la creazione dell'utente
          },
          (error) => {
            console.error("Errore durante la creazione dell'utente:", error);
            // Gestisci eventuali errori qui
          }
        );
      break;

      case 'addDoctor':
      this.doctorService.create(this.data.doctorData).subscribe(
        (response) => {
          console.log("Utente creato con successo:", response);
          // Aggiungi qui eventuali operazioni supplementari dopo la creazione dell'utente
        },
        (error) => {
          console.error("Errore durante la creazione dell'utente:", error);
          // Gestisci eventuali errori qui
        }
      );
      break;

      default:
        console.warn("Unknown action:", this.data.root);
        // Gestione di azione sconosciuta, ad esempio reindirizzamento a una pagina di errore
    }
  }
}
