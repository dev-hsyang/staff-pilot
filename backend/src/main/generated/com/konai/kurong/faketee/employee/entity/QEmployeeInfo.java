package com.konai.kurong.faketee.employee.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QEmployeeInfo is a Querydsl query type for EmployeeInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QEmployeeInfo extends EntityPathBase<EmployeeInfo> {

    private static final long serialVersionUID = 696656539L;

    public static final QEmployeeInfo employeeInfo = new QEmployeeInfo("employeeInfo");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    public final StringPath cert = createString("cert");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final StringPath email = createString("email");

    public final NumberPath<Long> empNo = createNumber("empNo", Long.class);

    public final DateTimePath<java.time.LocalDateTime> freeDate = createDateTime("freeDate", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath info = createString("info");

    public final StringPath joinCode = createString("joinCode");

    public final DateTimePath<java.time.LocalDateTime> joinDate = createDateTime("joinDate", java.time.LocalDateTime.class);

    public final StringPath major = createString("major");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public QEmployeeInfo(String variable) {
        super(EmployeeInfo.class, forVariable(variable));
    }

    public QEmployeeInfo(Path<? extends EmployeeInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEmployeeInfo(PathMetadata metadata) {
        super(EmployeeInfo.class, metadata);
    }

}

