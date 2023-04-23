package com.borna.printingforum.services;

import com.borna.printingforum.entity.RoleEntity;
import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username);

        if (userEntity != null) {
            return new org.springframework.security.core.userdetails.User(userEntity.getUsername(),
                    userEntity.getPassword(),
                    mapRolesToAuthorities(userEntity.getRoles()));
        }else{
            throw new UsernameNotFoundException("Invalid username or password.");
        }

    }

    private Collection< ? extends GrantedAuthority> mapRolesToAuthorities(Collection <RoleEntity> roles) {
        Collection < ? extends GrantedAuthority> mapRoles = roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
        return mapRoles;
    }
}
