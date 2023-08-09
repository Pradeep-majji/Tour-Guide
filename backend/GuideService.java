package com.travel.tai.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.travel.tai.entity.GuideEntity;
import com.travel.tai.repository.GuideRepository;

@Service
public class GuideService {

	@Autowired
	GuideRepository guideRepository;
	
	
	@Transactional(readOnly=true)
	public List<GuideEntity> getAllGuides(String g_location) {
		return guideRepository.getGuides(g_location);	
	}
	
	@Transactional(readOnly=true)
	public List<GuideEntity> getAll() {
		return guideRepository.findAll();	
	}
	@Transactional(readOnly=true)
	public boolean loginAuthenticate(int email,String password) {
		int count=guideRepository.loginAuthenticate(email,password);
		return count>0;
	}
	
}
