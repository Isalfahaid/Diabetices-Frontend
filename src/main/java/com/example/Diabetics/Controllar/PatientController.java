package com.example.Diabetics.Controllar;

import com.example.Diabetics.Model.Entities.Patient;
import com.example.Diabetics.Model.Services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/patient")
public class PatientController {


    private PatientService patientService ;

    @Autowired

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public List<Patient> getPatients() {

        return patientService.getPatients();
    }
    @GetMapping(path = "{nationalId}")
    public Optional<Patient> getPatient(@PathVariable(name = "nationalId") Integer nationalId) {
        return patientService.getPatient(nationalId);

    }


    @PostMapping("add")
    public void registerNewPatient(@RequestBody Patient patient){
        patientService.addNewPatient(patient);
    }

    @DeleteMapping(path = "delete/{nationalId}")
    public void deletePatient(@PathVariable ("nationalId") Integer nationalId){
        patientService.deletePatient(nationalId);
    }


}
