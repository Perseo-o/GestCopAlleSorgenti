package com.nuraghenexus.GesCopAlleSorgenti.converter;

import com.nuraghenexus.GesCopAlleSorgenti.dto.DoctorDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.Doctor;
import org.springframework.stereotype.Component;

@Component
public class DoctorConverter extends AbstractConverter<Doctor, DoctorDTO> {

    @Override
    public Doctor toEntity(DoctorDTO doctorDTO) {
        Doctor doctor = null;
        if (doctorDTO != null) {
            doctor = new Doctor(
                    doctorDTO.getId(),
                    doctorDTO.getName(),
                    doctorDTO.getContDetails());
        }
        return doctor;
    }

    @Override
    public DoctorDTO toDTO(Doctor doctor) {
        DoctorDTO doctorDTO = null;
        if (doctor != null) {
            doctorDTO = new DoctorDTO(
                    doctor.getId(),
                    doctor.getName(),
                    doctor.getContDetails());
        }
        return doctorDTO;
    }
}
