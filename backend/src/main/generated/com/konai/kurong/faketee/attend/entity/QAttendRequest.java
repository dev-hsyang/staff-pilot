package com.konai.kurong.faketee.attend.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAttendRequest is a Querydsl query type for AttendRequest
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAttendRequest extends EntityPathBase<AttendRequest> {

    private static final long serialVersionUID = -1625529622L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAttendRequest attendRequest = new QAttendRequest("attendRequest");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    public final DatePath<java.time.LocalDate> atdReqDate = createDate("atdReqDate", java.time.LocalDate.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final com.konai.kurong.faketee.draft.entity.QDraft draft;

    public final com.konai.kurong.faketee.employee.entity.QEmployee employee;

    public final TimePath<java.time.LocalTime> endTime = createTime("endTime", java.time.LocalTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final TimePath<java.time.LocalTime> orgStartTime = createTime("orgStartTime", java.time.LocalTime.class);

    public final TimePath<java.time.LocalTime> startTime = createTime("startTime", java.time.LocalTime.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final EnumPath<com.konai.kurong.faketee.attend.utils.AttendRequestVal> val = createEnum("val", com.konai.kurong.faketee.attend.utils.AttendRequestVal.class);

    public QAttendRequest(String variable) {
        this(AttendRequest.class, forVariable(variable), INITS);
    }

    public QAttendRequest(Path<? extends AttendRequest> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAttendRequest(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAttendRequest(PathMetadata metadata, PathInits inits) {
        this(AttendRequest.class, metadata, inits);
    }

    public QAttendRequest(Class<? extends AttendRequest> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.draft = inits.isInitialized("draft") ? new com.konai.kurong.faketee.draft.entity.QDraft(forProperty("draft"), inits.get("draft")) : null;
        this.employee = inits.isInitialized("employee") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("employee"), inits.get("employee")) : null;
    }

}

