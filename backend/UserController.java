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
import com.travel.tai.service.UserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {
		@Autowired
		UserService userService;
	
		@GetMapping(value="/",produces="application/json")
		public  ResponseEntity<List<UserEntity>> getAllUsers(){
			return new ResponseEntity<List<UserEntity>>(userService.getAllUsers(),HttpStatus.OK);
		}
		@PostMapping(value="/bookGuide",consumes="application/json")
		public HttpStatus addUser(@RequestBody UserEntity ur)
		{
			if(userService.insertUser(ur))
				return HttpStatus.OK;
			return HttpStatus.NOT_FOUND;
		}

		
		@PutMapping(value="/",consumes="application/json")
		public HttpStatus modifyUser(@RequestBody UserEntity ur)
		{
			if(userService.modifyUser(ur))
				return HttpStatus.OK;
			return HttpStatus.NOT_MODIFIED;
		}
		@DeleteMapping("/{u_id}")
		public HttpStatus deleteUser(@PathVariable int u_id)
		{
			if(userService.deleteUser(u_id))
				return HttpStatus.OK;
			return HttpStatus.NOT_FOUND;
		}
		@GetMapping(value="/{u_id}",produces="application/json")
		public ResponseEntity<UserEntity> getOneUser(@PathVariable int u_id) {
			UserEntity e=userService.getOneUser(u_id);
			if(e!=null)
				return new ResponseEntity<UserEntity>(e,HttpStatus.OK);
			return new ResponseEntity<UserEntity>(e,HttpStatus.NOT_FOUND);		
		}
		
		@GetMapping(value = "/history/{u_id}", produces = "application/json")
		public ResponseEntity<List<UserEntity>> getHistory(@PathVariable("u_id") String u_id) {
		  if (u_id == null) {
		     return new ResponseEntity<>( HttpStatus.NOT_FOUND);
		  }
		  int userId;
		  try {
		    userId = Integer.parseInt(u_id);
		  } catch (NumberFormatException e) {
		     return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
		  }
		  return new ResponseEntity<>(userService.getHistory(userId), HttpStatus.OK);
		}

		

}
