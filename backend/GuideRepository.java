package com.travel.tai.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.travel.tai.entity.GuideEntity;
public interface GuideRepository extends JpaRepository<GuideEntity,Integer>{

	@Query(value="select * from guides g where g.g_location=?1",nativeQuery=true)
	public List<GuideEntity> getGuides(String g_location);
	@Query(value="select count(*) from guides u where u.g_id=?1 and u.g_phone=?2",nativeQuery=true)
	public int loginAuthenticate(int email,String Password);
}
