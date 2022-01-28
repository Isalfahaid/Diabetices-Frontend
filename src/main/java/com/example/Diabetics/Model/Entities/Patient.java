package com.example.Diabetics.Model.Entities;

import javax.persistence.*;
import java.awt.print.Book;

@Entity
@Table
public class Patient {
    @Id
    int nationalId;
    String firstname;
    String lastname;
    int age;
    String patient_type;
    int phone;
    String address;


    @ManyToOne
    @JoinColumn(name = "id",referencedColumnName="id")
    private Doctor doctor;

    public Patient() {
    }

    public Patient(int nationalId, String firstname, String lastname, int age, String patient_type, int phone, String address) {
        this.nationalId = nationalId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.patient_type = patient_type;
        this.phone = phone;
        this.address = address;
    }

    public int getNationalId() {
        return nationalId;
    }

    public void setNationalId(int nationalId) {
        this.nationalId = nationalId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPatient_type() {
        return patient_type;
    }

    public void setPatient_type(String patient_type) {
        this.patient_type = patient_type;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}