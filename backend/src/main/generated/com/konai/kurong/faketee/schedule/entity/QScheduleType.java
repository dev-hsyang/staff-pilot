package com.konai.kurong.faketee.schedule.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QScheduleType is a Querydsl query type for ScheduleType
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QScheduleType extends EntityPathBase<ScheduleType> {

    private static final long serialVersionUID = -926123527L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QScheduleType scheduleType = new QScheduleType("scheduleType");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

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

    public QScheduleType(String variable) {
        this(ScheduleType.class, forVariable(variable), INITS);
    }

    public QScheduleType(Path<? extends ScheduleType> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QScheduleType(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QScheduleType(PathMetadata metadata, PathInits inits) {
        this(ScheduleType.class, metadata, inits);
    }

    public QScheduleType(Class<? extends ScheduleType> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.corporation = inits.isInitialized("corporation") ? new com.konai.kurong.faketee.corporation.entity.QCorporation(forProperty("corporation")) : null;
    }

}

