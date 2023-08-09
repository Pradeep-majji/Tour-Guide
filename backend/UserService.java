package com.travel.tai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.travel.tai.entity.UserEntity;
import com.travel.tai.repository.UserRepository;


@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	
	@Transactional(readOnly=true)
	public List<UserEntity> getAllUsers() {
		return userRepository.findAll();	
	}
	@Transactional
	public boolean insertUser(UserEntity ur)
	{
		return userRepository.save(ur)!=null;
	}
	
	@Transactional
	public boolean modifyUser(UserEntity ur)
	{
		return userRepository.save(ur)!=null;
	}
	@Transactional
	public boolean deleteUser(int u_id)
	{
		long count=userRepository.count();
		userRepository.deleteById(u_id);
		return count>userRepository.count();
	}
	@Transactional(readOnly=true)
	public UserEntity getOneUser(int u_id) {
		Optional<UserEntity> u=userRepository.findById(u_id);
		if(u.isPresent())
			return u.get();
		return null;
	}
	@Transactional(readOnly=true)
	public List<UserEntity> getHistory(int u_id) {
		return userRepository.getHistory(u_id);	
	}
	
}
