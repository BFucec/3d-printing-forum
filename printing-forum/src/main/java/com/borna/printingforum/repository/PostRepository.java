package com.borna.printingforum.repository;

import com.borna.printingforum.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {
    @Query(value = "SELECT * FROM posts WHERE user_id = :userId", nativeQuery = true)
    List<PostEntity> findAllByUserId(@Param("userId") Long userId);
}
