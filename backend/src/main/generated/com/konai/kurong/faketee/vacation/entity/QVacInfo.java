package com.konai.kurong.faketee.vacation.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QVacInfo is a Querydsl query type for VacInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QVacInfo extends EntityPathBase<VacInfo> {

    private static final long serialVersionUID = 1353896536L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QVacInfo vacInfo = new QVacInfo("vacInfo");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final com.konai.kurong.faketee.employee.entity.QEmployee employee;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Double> remaining = createNumber("remaining", Double.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final NumberPath<Double> used = createNumber("used", Double.class);

    public final QVacGroup vacGroup;

    public QVacInfo(String variable) {
        this(VacInfo.class, forVariable(variable), INITS);
    }

    public QVacInfo(Path<? extends VacInfo> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QVacInfo(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QVacInfo(PathMetadata metadata, PathInits inits) {
        this(VacInfo.class, metadata, inits);
    }

    public QVacInfo(Class<? extends VacInfo> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employee = inits.isInitialized("employee") ? new com.konai.kurong.faketee.employee.entity.QEmployee(forProperty("employee"), inits.get("employee")) : null;
        this.vacGroup = inits.isInitialized("vacGroup") ? new QVacGroup(forProperty("vacGroup"), inits.get("vacGroup")) : null;
    }

}

