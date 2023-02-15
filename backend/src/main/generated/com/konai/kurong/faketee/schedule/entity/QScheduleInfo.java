package com.konai.kurong.faketee.schedule.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QScheduleInfo is a Querydsl query type for ScheduleInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QScheduleInfo extends EntityPathBase<ScheduleInfo> {

    private static final long serialVersionUID = -926462099L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QScheduleInfo scheduleInfo = new QScheduleInfo("scheduleInfo");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final DatePath<java.time.LocalDate> date = createDate("date", java.time.LocalDate.class);

    public final com.konai.kurong.faketee.employee.entity.QEmployee employee;

    public final TimePath<java.time.LocalTime> endTime = createTime("endTime", java.time.LocalTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final TimePath<java.time.LocalTime> startTime = createTime("startTime", java.time.LocalTime.class);

    public final StringPath state = createString("state");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QScheduleInfo(String variable) {
        this(ScheduleInfo.class, forVariable(variable), INITS);
    }

    public QScheduleInfo(Path<? extends ScheduleInfo> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QScheduleInfo(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QScheduleInfo(PathMetadata metadata, PathInits inits) {
        this(ScheduleInfo.class, metadata, inits);
    }

    public QScheduleInfo(Class<? extends ScheduleInfo> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("employee"), inits.get("employee")) : null;
    }

}

