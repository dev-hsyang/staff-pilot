package com.konai.kurong.faketee.vacation.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QVacType is a Querydsl query type for VacType
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QVacType extends EntityPathBase<VacType> {

    private static final long serialVersionUID = 1354235108L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QVacType vacType = new QVacType("vacType");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final TimePath<java.time.LocalTime> endTime = createTime("endTime", java.time.LocalTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final TimePath<java.time.LocalTime> startTime = createTime("startTime", java.time.LocalTime.class);

    public final NumberPath<Double> sub = createNumber("sub", Double.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final QVacGroup vacGroup;

    public QVacType(String variable) {
        this(VacType.class, forVariable(variable), INITS);
    }

    public QVacType(Path<? extends VacType> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QVacType(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QVacType(PathMetadata metadata, PathInits inits) {
        this(VacType.class, metadata, inits);
    }

    public QVacType(Class<? extends VacType> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.vacGroup = inits.isInitialized("vacGroup") ? new QVacGroup(forProperty("vacGroup"), inits.get("vacGroup")) : null;
    }

}

