package com.konai.kurong.faketee.employee.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QEmployee is a Querydsl query type for Employee
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QEmployee extends EntityPathBase<Employee> {

    private static final long serialVersionUID = 1627535437L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QEmployee employee = new QEmployee("employee");

    public final com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity _super = new com.konai.kurong.faketee.utils.jpa_auditing.QBaseEntity(this);

    public final com.konai.kurong.faketee.corporation.entity.QCorporation corporation;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> CRE_DTTM = _super.CRE_DTTM;

    //inherited
    public final NumberPath<Long> CRE_ID = _super.CRE_ID;

    public final com.konai.kurong.faketee.department.entity.QDepartment department;

    public final QEmployeeInfo employeeInfo;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final com.konai.kurong.faketee.position.entity.QPosition position;

    public final EnumPath<com.konai.kurong.faketee.employee.utils.EmpRole> role = createEnum("role", com.konai.kurong.faketee.employee.utils.EmpRole.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> UPD_DTTM = _super.UPD_DTTM;

    //inherited
    public final NumberPath<Long> UPD_ID = _super.UPD_ID;

    public final com.konai.kurong.faketee.account.entity.QUser user;

    public final ListPath<com.konai.kurong.faketee.vacation.entity.VacInfo, com.konai.kurong.faketee.vacation.entity.QVacInfo> vacationInfo = this.<com.konai.kurong.faketee.vacation.entity.VacInfo, com.konai.kurong.faketee.vacation.entity.QVacInfo>createList("vacationInfo", com.konai.kurong.faketee.vacation.entity.VacInfo.class, com.konai.kurong.faketee.vacation.entity.QVacInfo.class, PathInits.DIRECT2);

    public final StringPath val = createString("val");

    public QEmployee(String variable) {
        this(Employee.class, forVariable(variable), INITS);
    }

    public QEmployee(Path<? extends Employee> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QEmployee(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QEmployee(PathMetadata metadata, PathInits inits) {
        this(Employee.class, metadata, inits);
    }

    public QEmployee(Class<? extends Employee> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.corporation = inits.isInitialized("corporation") ? new com.konai.kurong.faketee.corporation.entity.QCorporation(forProperty("corporation")) : null;
        this.department = inits.isInitialized("department") ? new com.konai.kurong.faketee.department.entity.QDepartment(forProperty("department"), inits.get("department")) : null;
        this.employeeInfo = inits.isInitialized("employeeInfo") ? new QEmployeeInfo(forProperty("employeeInfo")) : null;
        this.position = inits.isInitialized("position") ? new com.konai.kurong.faketee.position.entity.QPosition(forProperty("position"), inits.get("position")) : null;
        this.user = inits.isInitialized("user") ? new com.konai.kurong.faketee.account.entity.QUser(forProperty("user")) : null;
    }

}

