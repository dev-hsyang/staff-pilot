package com.konai.kurong.faketee.utils.exception.controller.employee;

import com.konai.kurong.faketee.utils.exception.controller.ExceptionController;
import com.konai.kurong.faketee.utils.exception.custom.employee.EmpJoinCodeDiffException;
import com.konai.kurong.faketee.utils.exception.custom.employee.EmpUserDuplException;
import com.konai.kurong.faketee.utils.exception.custom.employee.EmpJoinEmailDiffException;
import com.konai.kurong.faketee.utils.exception.response.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = "com.konai.kurong.faketee.employee")
public class EmployeeExceptionController extends ExceptionController {

    @ExceptionHandler(EmpJoinEmailDiffException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public ExceptionResponse empJoinEmailDiff(EmpJoinEmailDiffException exception) {
        return getExceptionResponse(exception);
    }

    @ExceptionHandler(EmpUserDuplException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public ExceptionResponse empUserDuplication(EmpUserDuplException exception) {
        return getExceptionResponse(exception);
    }

    @ExceptionHandler(EmpJoinCodeDiffException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public ExceptionResponse mpJoinCodeDiff(EmpJoinCodeDiffException exception) {
        return getExceptionResponse(exception);
    }
}
