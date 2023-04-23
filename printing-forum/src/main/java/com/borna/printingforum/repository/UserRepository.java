package com.borna.printingforum.repository;

import com.borna.printingforum.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
//    Optional<UserEntity> findByUsername (String username);

    UserEntity findByEmail(String email);

    UserEntity findByUsername (String username);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM users_roles WHERE user_id = :userId", nativeQuery = true)
    void deleteUserAndRoles(@Param("userId") Long userId);
}
