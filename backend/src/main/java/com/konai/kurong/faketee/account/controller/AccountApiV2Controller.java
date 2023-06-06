package com.konai.kurong.faketee.account.controller;

import com.konai.kurong.faketee.account.dto.LoginUserDto;
import com.konai.kurong.faketee.account.dto.UserJoinRequestDto;
import com.konai.kurong.faketee.account.service.UserService;
import com.konai.kurong.faketee.auth.LoginUser;
import com.konai.kurong.faketee.auth.dto.SessionUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@Slf4j
@RequestMapping("/api/v2/account")
@RequiredArgsConstructor
@RestController
public class AccountApiV2Controller {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserJoinRequestDto userJoinRequestDto, HttpServletRequest request, HttpServletResponse response){

        Long userid = userService.join(userJoinRequestDto);
        response.setContentType("application/json;charset=utf-8");
        JSONObject json = new JSONObject();
        json.put("code", 200);
        json.put("message", "회원가입 성공");
        json.put("user id", userid);
        return ResponseEntity.ok(json);
    }

    @GetMapping("/info")
    public ResponseEntity<?> loginUser(@LoginUser SessionUser sessionUser){

        LoginUserDto loginUserDto = new LoginUserDto(sessionUser.getId(), sessionUser.getEmail(), sessionUser.getName(), sessionUser.getRole(), sessionUser.getType());
        return  ResponseEntity.ok(loginUserDto);
    }

    @GetMapping("/duplicate")
    public ResponseEntity<?> checkEmail(@RequestParam("email") String email){

        boolean dup = userService.validateEmail(email);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code", 200);
        jsonObject.put("message", dup);
        return ResponseEntity.ok(jsonObject);
    }
}
