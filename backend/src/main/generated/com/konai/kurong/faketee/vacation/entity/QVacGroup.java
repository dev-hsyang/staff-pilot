package com.konai.kurong.faketee.vacation.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QVacGroup is a Querydsl query type for VacGroup
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QVacGroup extends EntityPathBase<VacGroup> {

    private static final long serialVersionUID = -980599275L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QVacGroup vacGroup = new QVacGroup("vacGroup");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    public final StringPath approvalLevel = createString("approvalLevel");

    public final com.konai.kurong.faketee.corporation.entity.QCorporation corporation;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final ListPath<VacInfo, QVacInfo> vacInfos = this.<VacInfo, QVacInfo>createList("vacInfos", VacInfo.class, QVacInfo.class, PathInits.DIRECT2);

    public final ListPath<VacType, QVacType> vacTypes = this.<VacType, QVacType>createList("vacTypes", VacType.class, QVacType.class, PathInits.DIRECT2);

    public QVacGroup(String variable) {
        this(VacGroup.class, forVariable(variable), INITS);
    }

    public QVacGroup(Path<? extends VacGroup> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QVacGroup(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QVacGroup(PathMetadata metadata, PathInits inits) {
        this(VacGroup.class, metadata, inits);
    }

    public QVacGroup(Class<? extends VacGroup> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.corporation = inits.isInitialized("corporation") ? new com.konai.kurong.faketee.corporation.entity.QCorporation(forProperty("corporation")) : null;
    }

}

