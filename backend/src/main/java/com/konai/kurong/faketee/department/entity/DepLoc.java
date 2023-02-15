package com.konai.kurong.faketee.department.entity;

import com.konai.kurong.faketee.location.entity.Location;
import com.konai.kurong.faketee.utils.jpa_auditing.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Getter
@Builder
@AllArgsConstructor()
@NoArgsConstructor()
@Table(name = "DEP_LOC")
public class DepLoc extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "LOC_ID")
    private Location location;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "DEP_ID")
    private Department department;
}
