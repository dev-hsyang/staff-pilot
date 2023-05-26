package com.konai.kurong.faketee.schedule.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTemplate is a Querydsl query type for Template
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTemplate extends EntityPathBase<Template> {

    private static final long serialVersionUID = 1447221250L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTemplate template = new QTemplate("template");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final TimePath<java.time.LocalTime> endTime = createTime("endTime", java.time.LocalTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final QScheduleType scheduleType;

    public final TimePath<java.time.LocalTime> startTime = createTime("startTime", java.time.LocalTime.class);

    public final ListPath<TemplateDepartment, QTemplateDepartment> templateDepartments = this.<TemplateDepartment, QTemplateDepartment>createList("templateDepartments", TemplateDepartment.class, QTemplateDepartment.class, PathInits.DIRECT2);

    public final ListPath<TemplatePosition, QTemplatePosition> templatePositions = this.<TemplatePosition, QTemplatePosition>createList("templatePositions", TemplatePosition.class, QTemplatePosition.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QTemplate(String variable) {
        this(Template.class, forVariable(variable), INITS);
    }

    public QTemplate(Path<? extends Template> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTemplate(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTemplate(PathMetadata metadata, PathInits inits) {
        this(Template.class, metadata, inits);
    }

    public QTemplate(Class<? extends Template> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.scheduleType = inits.isInitialized("scheduleType") ? new QScheduleType(forProperty("scheduleType"), inits.get("scheduleType")) : null;
    }

}

