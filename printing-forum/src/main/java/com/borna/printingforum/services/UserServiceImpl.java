package com.borna.printingforum.services;

import com.borna.printingforum.entity.PostEntity;
import com.borna.printingforum.entity.RoleEntity;
import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.model.Post;
import com.borna.printingforum.model.User;
import com.borna.printingforum.repository.RoleRepository;
import com.borna.printingforum.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public UserServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User createUser(User user) {
        UserEntity userEntity = new UserEntity();
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());
        userEntity.setEmail(user.getEmail());
        userEntity.setUsername(user.getUsername());
        userEntity.setPassword(passwordEncoder.encode(user.getPassword()));

        RoleEntity roleEntityAdmin = roleRepository.findByName("ROLE_ADMIN");
        RoleEntity roleEntityUser = roleRepository.findByName("ROLE_USER");
        if (roleEntityAdmin == null){
            roleEntityAdmin = checkRoleExistAdmin();
        }
        if (roleEntityUser == null){
            roleEntityUser = checkRoleExistUser();
        }
        List<RoleEntity> roles = user.getRoles();
        if (roles.size() > 1)
            userEntity.setRoles(Arrays.asList(roleEntityUser, roleEntityAdmin));
        else{
            RoleEntity oneRole = roles.get(0);
            if (oneRole.getName().equals("ROLE_USER"))
                userEntity.setRoles(Arrays.asList(roleEntityUser));
            else
                userEntity.setRoles(Arrays.asList(roleEntityAdmin));
        }
        userRepository.save(userEntity);
        return user;
    }

    private RoleEntity checkRoleExistAdmin(){
        RoleEntity roleEntity = new RoleEntity();
        roleEntity.setName("ROLE_ADMIN");
        return roleRepository.save(roleEntity);
    }
    private RoleEntity checkRoleExistUser(){
        RoleEntity roleEntity = new RoleEntity();
        roleEntity.setName("ROLE_USER");
        return roleRepository.save(roleEntity);
    }

    @Override
    public List<User> getAllUsers(){
        List<UserEntity> userEntities = userRepository.findAll();
        List<User> users = userEntities.stream()
                .map(us -> new User(
                        us.getId(),
                        us.getFirstName(),
                        us.getLastName(),
                        us.getEmail(),
                        us.getUsername(),
                        us.getPassword(),
                        us.getRoles()))
                .collect(Collectors.toList());
        return users;
    }

    @Override
    public UserEntity findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User getUserById(Long id) {
        UserEntity userEntity = userRepository.findById(id).get();
        User user = new User();
        BeanUtils.copyProperties(userEntity, user);
        return user;
    }

    @Override
    @Transactional
    public boolean deleteUser(Long id) {
        UserEntity userEntity = userRepository.findById(id).get();
        userRepository.delete(userEntity);
        return true;
    }

    @Transactional
    public boolean deleteFromUsersRoles(Long id){
        userRepository.deleteUserAndRoles(id);
        return true;
    }

    public User getUserByUsername(String username){
        UserEntity userEntity = userRepository.findByUsername(username);
        User user = new User();
        BeanUtils.copyProperties(userEntity, user);
        return user;
    }

}
