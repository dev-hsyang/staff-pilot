package com.konai.kurong.faketee.employee.entity;

import com.konai.kurong.faketee.utils.jpa_auditing.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.time.LocalDateTime;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Getter
@Builder
@AllArgsConstructor()
@NoArgsConstructor()
@Table(name = "EMP_INFO")
public class EmployeeInfo extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name="JOIN_DATE")
    private LocalDateTime joinDate;

    @Column(name="FREE_DATE")
    private LocalDateTime freeDate;

    @Column(name="MAJOR")
    private String major;

    @Column(name="CERT")
    private String cert;

    @Column(name = "INFO")
    private String info;

    @Column(name="EMP_NO")
    private Long empNo;

    @Column(name = "EMAIL", nullable = false)
    private String email;

    @Column(name="JOIN_CODE", nullable = false)
    private String joinCode;

    public void update(EmployeeInfo requestDto) {
        this.joinDate = requestDto.getJoinDate();
        this.freeDate = requestDto.getFreeDate();
        this.major = requestDto.getMajor();
        this.cert = requestDto.getCert();
        this.info = requestDto.getInfo();
        this.empNo = requestDto.getEmpNo();
    }
}
