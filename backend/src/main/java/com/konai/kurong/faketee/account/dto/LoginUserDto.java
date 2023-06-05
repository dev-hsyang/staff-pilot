package com.konai.kurong.faketee.account.dto;

import com.konai.kurong.faketee.account.util.Role;
import com.konai.kurong.faketee.account.util.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginUserDto {

    private Long id;
    private String email;
    private String name;
    private Role role;
    private Type type;
}
