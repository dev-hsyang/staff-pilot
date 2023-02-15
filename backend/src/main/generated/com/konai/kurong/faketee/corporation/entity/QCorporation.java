package com.konai.kurong.faketee.corporation.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCorporation is a Querydsl query type for Corporation
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCorporation extends EntityPathBase<Corporation> {

    private static final long serialVersionUID = -294669801L;

    public static final QCorporation corporation = new QCorporation("corporation");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QCorporation(String variable) {
        super(Corporation.class, forVariable(variable));
    }

    public QCorporation(Path<? extends Corporation> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCorporation(PathMetadata metadata) {
        super(Corporation.class, metadata);
    }

}

