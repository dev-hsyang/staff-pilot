package com.konai.kurong.faketee.vacation.dto;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.ConstructorExpression;
import javax.annotation.processing.Generated;

/**
 * com.konai.kurong.faketee.vacation.dto.QVacTypeResponseDto is a Querydsl Projection type for VacTypeResponseDto
 */
@Generated("com.querydsl.codegen.DefaultProjectionSerializer")
public class QVacTypeResponseDto extends ConstructorExpression<VacTypeResponseDto> {

    private static final long serialVersionUID = 831852856L;

    public QVacTypeResponseDto(com.querydsl.core.types.Expression<? extends com.konai.kurong.faketee.vacation.entity.VacType> vacType) {
        super(VacTypeResponseDto.class, new Class<?>[]{com.konai.kurong.faketee.vacation.entity.VacType.class}, vacType);
    }

}

