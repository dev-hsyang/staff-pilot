package com.konai.kurong.faketee.position.entity;

import com.konai.kurong.faketee.corporation.entity.Corporation;
import com.konai.kurong.faketee.schedule.entity.TemplatePosition;
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
@Table(name = "POS")
public class Position extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "COR_ID")
    private Corporation corporation;

}
