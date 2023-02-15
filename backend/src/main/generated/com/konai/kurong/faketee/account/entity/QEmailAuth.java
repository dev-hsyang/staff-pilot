package com.konai.kurong.faketee.account.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QEmailAuth is a Querydsl query type for EmailAuth
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QEmailAuth extends EntityPathBase<EmailAuth> {

    private static final long serialVersionUID = 4876206L;

    public static final QEmailAuth emailAuth = new QEmailAuth("emailAuth");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseUserEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseUserEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    public final StringPath email = createString("email");

    public final StringPath emailAuthToken = createString("emailAuthToken");

    public final StringPath expired = createString("expired");

    public final DateTimePath<java.time.LocalDateTime> expireDate = createDateTime("expireDate", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    public QEmailAuth(String variable) {
        super(EmailAuth.class, forVariable(variable));
    }

    public QEmailAuth(Path<? extends EmailAuth> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEmailAuth(PathMetadata metadata) {
        super(EmailAuth.class, metadata);
    }

}

