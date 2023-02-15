package com.konai.kurong.faketee.attend.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAttend is a Querydsl query type for Attend
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAttend extends EntityPathBase<Attend> {

    private static final long serialVersionUID = -571872283L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAttend attend = new QAttend("attend");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final DatePath<java.time.LocalDate> date = createDate("date", java.time.LocalDate.class);

    public final com.konai.kurong.faketee.employee.entity.QEmployee employee;

    public final TimePath<java.time.LocalTime> endTime = createTime("endTime", java.time.LocalTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.konai.kurong.faketee.schedule.entity.QScheduleInfo scheduleInfo;

    public final TimePath<java.time.LocalTime> startTime = createTime("startTime", java.time.LocalTime.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final StringPath val = createString("val");

    public QAttend(String variable) {
        this(Attend.class, forVariable(variable), INITS);
    }

    public QAttend(Path<? extends Attend> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAttend(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAttend(PathMetadata metadata, PathInits inits) {
        this(Attend.class, metadata, inits);
    }

    public QAttend(Class<? extends Attend> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.scheduleInfo = inits.isInitialized("scheduleInfo") ? new com.konai.kurong.faketee.schedule.entity.QScheduleInfo(forProperty("scheduleInfo"), inits.get("scheduleInfo")) : null;
    }

}

