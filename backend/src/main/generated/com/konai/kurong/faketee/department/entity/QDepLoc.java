package com.konai.kurong.faketee.department.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDepLoc is a Querydsl query type for DepLoc
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDepLoc extends EntityPathBase<DepLoc> {

    private static final long serialVersionUID = -848765260L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDepLoc depLoc = new QDepLoc("depLoc");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final QDepartment department;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.konai.kurong.faketee.location.entity.QLocation location;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QDepLoc(String variable) {
        this(DepLoc.class, forVariable(variable), INITS);
    }

    public QDepLoc(Path<? extends DepLoc> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDepLoc(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDepLoc(PathMetadata metadata, PathInits inits) {
        this(DepLoc.class, metadata, inits);
    }

    public QDepLoc(Class<? extends DepLoc> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.department = inits.isInitialized("department") ? new QDepartment(forProperty("department"), inits.get("department")) : null;
        this.location = inits.isInitialized("location") ? new com.konai.kurong.faketee.location.entity.QLocation(forProperty("location"), inits.get("location")) : null;
    }

}

