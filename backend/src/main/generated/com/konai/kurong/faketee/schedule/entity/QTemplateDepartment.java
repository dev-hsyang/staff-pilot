package com.konai.kurong.faketee.schedule.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTemplateDepartment is a Querydsl query type for TemplateDepartment
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTemplateDepartment extends EntityPathBase<TemplateDepartment> {

    private static final long serialVersionUID = -1245815564L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTemplateDepartment templateDepartment = new QTemplateDepartment("templateDepartment");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final com.konai.kurong.faketee.department.entity.QDepartment department;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QTemplate template;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QTemplateDepartment(String variable) {
        this(TemplateDepartment.class, forVariable(variable), INITS);
    }

    public QTemplateDepartment(Path<? extends TemplateDepartment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTemplateDepartment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTemplateDepartment(PathMetadata metadata, PathInits inits) {
        this(TemplateDepartment.class, metadata, inits);
    }

    public QTemplateDepartment(Class<? extends TemplateDepartment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.department = inits.isInitialized("department") ? new com.konai.kurong.faketee.department.entity.QDepartment(forProperty("department"), inits.get("department")) : null;
        this.template = inits.isInitialized("template") ? new QTemplate(forProperty("template"), inits.get("template")) : null;
    }

}

