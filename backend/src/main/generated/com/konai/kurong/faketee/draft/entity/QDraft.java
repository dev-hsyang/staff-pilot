package com.konai.kurong.faketee.draft.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDraft is a Querydsl query type for Draft
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDraft extends EntityPathBase<Draft> {

    private static final long serialVersionUID = 1884039415L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDraft draft = new QDraft("draft");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    public final DateTimePath<java.time.LocalDateTime> approvalDate = createDateTime("approvalDate", java.time.LocalDateTime.class);

    public final com.konai.kurong.faketee.employee.entity.QEmployee approvalEmp1;

    public final com.konai.kurong.faketee.employee.entity.QEmployee approvalEmpFin;

    public final StringPath approvalMessage = createString("approvalMessage");

    public final ListPath<com.konai.kurong.faketee.attend.entity.AttendRequest, com.konai.kurong.faketee.attend.entity.QAttendRequest> atdRequestList = this.<com.konai.kurong.faketee.attend.entity.AttendRequest, com.konai.kurong.faketee.attend.entity.QAttendRequest>createList("atdRequestList", com.konai.kurong.faketee.attend.entity.AttendRequest.class, com.konai.kurong.faketee.attend.entity.QAttendRequest.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final EnumPath<com.konai.kurong.faketee.draft.utils.DraftCrudType> crudType = createEnum("crudType", com.konai.kurong.faketee.draft.utils.DraftCrudType.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final DateTimePath<java.time.LocalDateTime> requestDate = createDateTime("requestDate", java.time.LocalDateTime.class);

    public final com.konai.kurong.faketee.employee.entity.QEmployee requestEmployee;

    public final StringPath requestMessage = createString("requestMessage");

    public final EnumPath<com.konai.kurong.faketee.draft.utils.DraftRequestType> requestType = createEnum("requestType", com.konai.kurong.faketee.draft.utils.DraftRequestType.class);

    public final EnumPath<com.konai.kurong.faketee.draft.utils.DraftStateCode> stateCode = createEnum("stateCode", com.konai.kurong.faketee.draft.utils.DraftStateCode.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final ListPath<com.konai.kurong.faketee.vacation.entity.VacRequest, com.konai.kurong.faketee.vacation.entity.QVacRequest> vacRequestList = this.<com.konai.kurong.faketee.vacation.entity.VacRequest, com.konai.kurong.faketee.vacation.entity.QVacRequest>createList("vacRequestList", com.konai.kurong.faketee.vacation.entity.VacRequest.class, com.konai.kurong.faketee.vacation.entity.QVacRequest.class, PathInits.DIRECT2);

    public QDraft(String variable) {
        this(Draft.class, forVariable(variable), INITS);
    }

    public QDraft(Path<? extends Draft> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDraft(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDraft(PathMetadata metadata, PathInits inits) {
        this(Draft.class, metadata, inits);
    }

    public QDraft(Class<? extends Draft> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.approvalEmp1 = inits.isInitialized("approvalEmp1") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("approvalEmp1"), inits.get("approvalEmp1")) : null;
        this.approvalEmpFin = inits.isInitialized("approvalEmpFin") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("approvalEmpFin"), inits.get("approvalEmpFin")) : null;
        this.requestEmployee = inits.isInitialized("requestEmployee") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("requestEmployee"), inits.get("requestEmployee")) : null;
    }

}

