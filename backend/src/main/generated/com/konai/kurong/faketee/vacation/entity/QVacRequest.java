package com.konai.kurong.faketee.vacation.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QVacRequest is a Querydsl query type for VacRequest
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QVacRequest extends EntityPathBase<VacRequest> {

    private static final long serialVersionUID = -955798363L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QVacRequest vacRequest = new QVacRequest("vacRequest");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final DatePath<java.time.LocalDate> date = createDate("date", java.time.LocalDate.class);

    public final com.konai.kurong.faketee.draft.entity.QDraft draft;

    public final com.konai.kurong.faketee.employee.entity.QEmployee employee;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final TimePath<java.time.LocalTime> originStartTime = createTime("originStartTime", java.time.LocalTime.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final QVacType vacType;

    public final EnumPath<com.konai.kurong.faketee.vacation.util.RequestVal> val = createEnum("val", com.konai.kurong.faketee.vacation.util.RequestVal.class);

    public QVacRequest(String variable) {
        this(VacRequest.class, forVariable(variable), INITS);
    }

    public QVacRequest(Path<? extends VacRequest> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QVacRequest(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QVacRequest(PathMetadata metadata, PathInits inits) {
        this(VacRequest.class, metadata, inits);
    }

    public QVacRequest(Class<? extends VacRequest> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.draft = inits.isInitialized("draft") ? new com.konai.kurong.faketee.draft.entity.QDraft(forProperty("draft"), inits.get("draft")) : null;
        this.employee = inits.isInitialized("employee") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.vacType = inits.isInitialized("vacType") ? new QVacType(forProperty("vacType"), inits.get("vacType")) : null;
    }

}

