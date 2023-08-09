package com.travel.tai.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.travel.tai.entity.GuideEntity;
import com.travel.tai.service.GuideService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class GuideController {

	@Autowired
	GuideService guideService;
	
	@GetMapping(value="/userHome",produces="application/json")
	public  ResponseEntity<List<GuideEntity>> getAllGuides(){
		return new ResponseEntity<List<GuideEntity>>(guideService.getAll(),HttpStatus.OK);
	}
	
	@GetMapping(value="/guideDetails/{g_location}",produces="application/json")
	public  ResponseEntity<List<GuideEntity>> getAllGuides(@PathVariable String g_location){
		return new ResponseEntity<List<GuideEntity>>(guideService.getAllGuides(g_location),HttpStatus.OK);
	}
	
	@GetMapping(value="/verifyGuide/{email}/{password}",produces="application/json")
	public HttpStatus loginAuthenticate(@PathVariable int email,@PathVariable String password) {
		if(guideService.loginAuthenticate(email, password))
			return HttpStatus.OK;
		return HttpStatus.NOT_FOUND;
	}
}
