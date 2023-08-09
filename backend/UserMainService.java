package com.travel.tai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.travel.tai.entity.UserEntity;
import com.travel.tai.entity.UserMainEntity;
import com.travel.tai.repository.UserMainRepository;
import com.travel.tai.repository.UserRepository;


@Service
public class UserMainService {
	@Autowired
	UserMainRepository userMainRepository;
	
	
	@Transactional(readOnly=true)
	public List<UserMainEntity> getAllUsers() {
		return userMainRepository.findAll();	
	}
	@Transactional
	public boolean insertUser(UserMainEntity ur)
	{
		return userMainRepository.save(ur)!=null;
	}
	
	@Transactional
	public boolean modifyUser(UserMainEntity ur)
	{
		return userMainRepository.save(ur)!=null;
	}
	@Transactional
	public boolean deleteUser(String email)
	{
		long count=userMainRepository.count();
		userMainRepository.deleteById(email);
		return count>userMainRepository.count();
	}
	@Transactional(readOnly=true)
	public UserMainEntity getOneUser(String email) {
		Optional<UserMainEntity> u=userMainRepository.findById(email);
		if(u.isPresent())
			return u.get();
		return null;
	}
	@Transactional(readOnly=true)
	public boolean loginAuthenticate(String email,String password) {
		int count=userMainRepository.loginAuthenticate(email,password);
		return count>0;
	}
	
	@Transactional(readOnly=true)
	public int getId(String email) {
		return userMainRepository.getId(email);
	}
	
}
