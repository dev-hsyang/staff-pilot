package com.konai.kurong.faketee.account.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 1967877441L;

    public static final QUser user = new QUser("user");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseUserEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseUserEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    public final StringPath email = createString("email");

    public final StringPath emailAuthStatus = createString("emailAuthStatus");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final StringPath password = createString("password");

    public final EnumPath<com.konai.kurong.faketee.account.util.Role> role = createEnum("role", com.konai.kurong.faketee.account.util.Role.class);

    public final EnumPath<com.konai.kurong.faketee.account.util.Type> type = createEnum("type", com.konai.kurong.faketee.account.util.Type.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

