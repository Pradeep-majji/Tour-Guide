package com.travel.tai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.travel.tai.entity.UserEntity;
import com.travel.tai.entity.UserMainEntity;
import com.travel.tai.service.UserMainService;
import com.travel.tai.service.UserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserMainController {
		@Autowired
		UserMainService userMainService;
	
		@GetMapping(value="/user",produces="application/json")
		public  ResponseEntity<List<UserMainEntity>> getAllUsers(){
			return new ResponseEntity<List<UserMainEntity>>(userMainService.getAllUsers(),HttpStatus.OK);
		}
		@PostMapping(value="/user",consumes="application/json")
		public HttpStatus addUser(@RequestBody UserMainEntity ur)
		{
			if(userMainService.insertUser(ur))
				return HttpStatus.OK;
			return HttpStatus.NOT_FOUND;
		}

		
		@PutMapping(value="/user",consumes="application/json")
		public HttpStatus modifyUser(@RequestBody UserMainEntity ur)
		{
			if(userMainService.modifyUser(ur))
				return HttpStatus.OK;
			return HttpStatus.NOT_MODIFIED;
		}
		@DeleteMapping("/user/{email}")
		public HttpStatus deleteUser(@PathVariable String email)
		{
			if(userMainService.deleteUser(email))
				return HttpStatus.OK;
			return HttpStatus.NOT_FOUND;
		}
		@GetMapping(value="/user/{email}",produces="application/json")
		public ResponseEntity<UserMainEntity> getOneUser(@PathVariable String email) {
			UserMainEntity e=userMainService.getOneUser(email);
			if(e!=null)
				return new ResponseEntity<UserMainEntity>(e,HttpStatus.OK);
			return new ResponseEntity<UserMainEntity>(e,HttpStatus.NOT_FOUND);		
		}
		@GetMapping(value="/verifyUser/{email}/{password}",produces="application/json")
		public HttpStatus loginAuthenticate(@PathVariable String email,@PathVariable String password) {
			if(userMainService.loginAuthenticate(email, password))
				return HttpStatus.OK;
			return HttpStatus.NOT_FOUND;
		}
		@GetMapping(value="/id/{email}",produces="application/json")
		public ResponseEntity<Integer> getId(@PathVariable String email) {
			return new ResponseEntity<Integer>(userMainService.getId(email),HttpStatus.OK); 
		}

}
