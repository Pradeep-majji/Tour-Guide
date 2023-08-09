package com.travel.tai.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="guides")
@Entity
public class GuideEntity {

	@Id
	@Column(name="g_id")
	private int g_id;
	@Column(name="g_name")
	private String g_name;
	@Column(name="g_rating")
	private int g_rating;
	@Column(name="g_charge")
	private double g_charge;
	@Column(name="g_location")
	private String g_location;
	@Column(name="g_phone")
	private String g_phone;
	public GuideEntity() {}
	public GuideEntity(int g_id, String g_name, int g_rating, double g_charge, String g_location, String g_phone) {
		this.g_id = g_id;
		this.g_name = g_name;
		this.g_rating = g_rating;
		this.g_charge = g_charge;
		this.g_location = g_location;
		this.g_phone = g_phone;
	}
	public int getG_id() {
		return g_id;
	}
	public void setG_id(int g_id) {
		this.g_id = g_id;
	}
	public String getG_name() {
		return g_name;
	}
	public void setG_name(String g_name) {
		this.g_name = g_name;
	}
	public int getG_rating() {
		return g_rating;
	}
	public void setG_rating(int g_rating) {
		this.g_rating = g_rating;
	}
	public double getG_charge() {
		return g_charge;
	}
	public void setG_charge(int g_charge) {
		this.g_charge = g_charge;
	}
	public String getG_location() {
		return g_location;
	}
	public void setG_location(String g_location) {
		this.g_location = g_location;
	}
	public String getG_phone() {
		return g_phone;
	}
	public void setG_phone(String g_phone) {
		this.g_phone = g_phone;
	}
	
}
