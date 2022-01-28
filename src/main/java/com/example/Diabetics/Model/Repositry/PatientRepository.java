package com.example.Diabetics.Model.Repositry;

import com.example.Diabetics.Model.Entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient,Integer> {
}
