package com.borna.printingforum.services;

import com.borna.printingforum.entity.UserEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class CustomUserDetails implements UserDetails {

    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private List<GrantedAuthority> authorities;

    public CustomUserDetails(UserEntity userEntity) {
        this.firstName = userEntity.getFirstName();
        this.lastName = userEntity.getLastName();
        this.password = userEntity.getPassword();
        this.email = userEntity.getEmail();
        this.username = userEntity.getUsername();
        this.authorities = userEntity.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return authorities;
    }

    @Override
    public String getPassword() {

        return password;
    }

    @Override
    public String getUsername() {

        return username;
    }

    @Override
    public boolean isAccountNonExpired() {

        return true;
    }

    @Override
    public boolean isAccountNonLocked() {

        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {

        return true;
    }

    @Override
    public boolean isEnabled() {

        return true;
    }
}
