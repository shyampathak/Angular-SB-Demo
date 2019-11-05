package com.testProject.demo;



import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "kibana_sample_data_logs", type="default")
public class Logs {

	@Id
	int id;
	String name;
	String address;
	String studyin;
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getStudyin() {
		return studyin;
	}
	public void setStudyin(String studyin) {
		this.studyin = studyin;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	
	public void setName(String name) {
		this.name = name;
	}
	public Logs(int id, String name, String address, String studyin) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.studyin = studyin;
	}
	public Logs(){}
	
}
