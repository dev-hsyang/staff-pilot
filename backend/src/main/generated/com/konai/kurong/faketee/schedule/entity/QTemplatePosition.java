package com.konai.kurong.faketee.schedule.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTemplatePosition is a Querydsl query type for TemplatePosition
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTemplatePosition extends EntityPathBase<TemplatePosition> {

    private static final long serialVersionUID = 182498123L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTemplatePosition templatePosition = new QTemplatePosition("templatePosition");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.konai.kurong.faketee.position.entity.QPosition position;

    public final QTemplate template;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QTemplatePosition(String variable) {
        this(TemplatePosition.class, forVariable(variable), INITS);
    }

    public QTemplatePosition(Path<? extends TemplatePosition> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTemplatePosition(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTemplatePosition(PathMetadata metadata, PathInits inits) {
        this(TemplatePosition.class, metadata, inits);
    }

    public QTemplatePosition(Class<? extends TemplatePosition> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.position = inits.isInitialized("position") ? new com.konai.kurong.faketee.position.entity.QPosition(forProperty("position"), inits.get("position")) : null;
        this.template = inits.isInitialized("template") ? new QTemplate(forProperty("template"), inits.get("template")) : null;
    }

}

