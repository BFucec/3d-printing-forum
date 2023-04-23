package com.borna.printingforum.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "posts")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String postTitle;

    private String postDescription;

    private String postImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable=false)
    private UserEntity userEntity;

}
