package com.borna.printingforum.model;

import com.borna.printingforum.entity.RoleEntity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private long id;

    @NotEmpty
    private String firstName;

    @NotEmpty
    private String lastName;

    @NotEmpty
    @Email(message = "Email cannot be empty")
    private String email;

    @NotEmpty
    private String username;

    @NotEmpty(message = "Password cannot be empty")
    private String password;

    private List<RoleEntity> roles;
}
