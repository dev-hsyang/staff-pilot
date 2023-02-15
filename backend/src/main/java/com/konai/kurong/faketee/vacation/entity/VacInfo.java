package com.konai.kurong.faketee.vacation.entity;

import com.konai.kurong.faketee.employee.entity.Employee;
import com.konai.kurong.faketee.utils.jpa_auditing.BaseEntity;
import com.konai.kurong.faketee.vacation.dto.VacInfoUpdateRequestDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "VAC_INFO")
@Entity
public class VacInfo extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "REMAINING")
    private Double remaining;

    @Column(name = "USED")
    private Double used;

    @ManyToOne
    @JoinColumn(name = "EMP_ID")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "VAC_GROUP_ID")
    private VacGroup vacGroup;

    public Long updateVacInfo(VacInfoUpdateRequestDto requestDto){

        this.remaining += requestDto.getAdd();
        return id;
    }
}
