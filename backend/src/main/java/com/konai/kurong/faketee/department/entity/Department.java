package com.konai.kurong.faketee.department.entity;

import com.konai.kurong.faketee.corporation.entity.Corporation;
import com.konai.kurong.faketee.schedule.entity.TemplateDepartment;
import com.konai.kurong.faketee.utils.jpa_auditing.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Getter
@Builder
@AllArgsConstructor()
@NoArgsConstructor()
@Table(name = "DEP")
public class Department extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DEP_LEVEL")
    private Long level;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "DEP_ID")
    private Department superDepartment;

    @OneToMany(fetch = LAZY, mappedBy = "superDepartment", orphanRemoval = true)
    @Builder.Default
    private List<Department> childDepartments = new ArrayList<>();

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "COR_ID")
    private Corporation corporation;

    public void changeName(String name){
        this.name = name;
    }
}
