package com.borna.printingforum.services;

import com.borna.printingforum.entity.UserEntity;
import com.borna.printingforum.model.User;

import java.util.List;

public interface UserService {

    User createUser(User user);

    List<User> getAllUsers();

    UserEntity findUserByEmail(String email);

    User getUserById(Long id);

    boolean deleteUser(Long id);

    boolean deleteFromUsersRoles(Long id);

    User getUserByUsername(String username);

}
