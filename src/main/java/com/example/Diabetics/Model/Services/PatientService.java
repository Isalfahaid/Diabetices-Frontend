package com.example.Diabetics.Model.Services;

import com.example.Diabetics.Model.Entities.Patient;
import com.example.Diabetics.Model.Repositry.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {



    private PatientRepository patientRepository;
    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }



    public List<Patient> getPatients()
    {
        return patientRepository.findAll();
    }

    public Optional<Patient> getPatient(Integer nationalId) {
        return patientRepository.findById(nationalId);

    }


    public void addNewPatient(Patient patient){
        patientRepository.save(patient);
    }

    public void deletePatient(Integer nationalId) {
        patientRepository.deleteById(nationalId);
        //boolean exist = studentRepository.existsById(studentId);
        // put a condition on 'exist'. if exist then delete
    }
}
