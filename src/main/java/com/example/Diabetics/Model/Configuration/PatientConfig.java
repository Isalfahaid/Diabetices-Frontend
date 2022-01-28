package com.example.Diabetics.Model.Configuration;

//import com.example.Diabetics.Model.Entities.Patient;
import com.example.Diabetics.Model.Entities.Patient;
import com.example.Diabetics.Model.Repositry.PatientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
@Configuration
public class PatientConfig {

    @Bean
    CommandLineRunner commandLineRunner(PatientRepository repository) {
        return args -> {
            Patient salma = new Patient(1,"salma","fahaid",25,"typr1",44444,"sakaka");
           Patient manal = new Patient(2,"sss","hhhh",257,"typr2",44477744,"sakaka");

            repository.saveAll(List.of(salma,manal));
        };
    }

}
