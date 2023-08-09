package com.travel.tai.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Users")
public class UserEntity {
	
	@Id
	@Column(name="u_id")
	private int u_id;
	
	@Column(name="u_name")
	private String u_name;
	
	@Column(name="u_address")
	private String u_address;
	
	@Column(name="num_of_people")
	private int num_of_people;
	
	@Column(name="travel_place")
	private String travel_place;
	
	@Column(name="num_days")
	private int num_days;
	
	@Column(name="u_phone")
	private String u_phone;
	
	@Column(name="g_id")
	private int g_id;
    
	@Column(name="status")
	private int status;
	
	@Column(name="viewed")
	private int viewed;
	
	public UserEntity() {}

	public UserEntity(int u_id, String u_name, String u_address, int num_of_people, String travel_place, int num_days,
			String u_phone,int g_id,int status,int viewed) {
		this.u_id = u_id;
		this.u_name = u_name;
		this.u_address = u_address;
		this.num_of_people = num_of_people;
		this.travel_place = travel_place;
		this.num_days = num_days;
		this.u_phone =u_phone;
		this.g_id = g_id;
		this.status = status;
		this.viewed = viewed;
	}

	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public String getU_name() {
		return u_name;
	}

	public void setU_name(String u_name) {
		this.u_name = u_name;
	}

	public String getU_address() {
		return u_address;
	}

	public void setU_address(String u_address) {
		this.u_address = u_address;
	}

	public int getNum_of_people() {
		return num_of_people;
	}

	public void setNum_of_people(int num_of_people) {
		this.num_of_people = num_of_people;
	}

	public String getTravel_place() {
		return travel_place;
	}

	public void setTravel_place(String travel_place) {
		this.travel_place = travel_place;
	}

	public int getNum_days() {
		return num_days;
	}

	public void setNum_days(int num_days) {
		this.num_days = num_days;
	}

	public String getu_phone() {
		return u_phone;
	}

	public void setu_phone(String u_phone) {
		this.u_phone = u_phone;
	}
	public int getG_id() {
		return g_id;
	}

	public void setG_id(int g_id) {
		this.g_id = g_id;
	}
	
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	
	public int getViewed() {
		return viewed;
	}
	public void setViewed(int viewed) {
		this.viewed = viewed;
	}
}
