package com.travel.tai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travel.tai.entity.UserEntity;
import com.travel.tai.entity.UserMainEntity;

public interface UserMainRepository extends JpaRepository<UserMainEntity,String>{
  @Query(value="select count(*) from user u where u.email=?1 and u.password=?2",nativeQuery=true)
  public int loginAuthenticate(String email,String Password);
  @Query(value="select u_id from user u where u.email=?1",nativeQuery=true)
  public int getId(String email);
}
