package com.travel.tai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travel.tai.entity.GuideEntity;
import com.travel.tai.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity,Integer>{
	@Query(value="select * from users g where g.u_id=?1",nativeQuery=true)
	public List<UserEntity> getHistory(int u_id);
}
