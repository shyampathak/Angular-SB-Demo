package com.testProject.demo;

import java.util.List;

import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;




@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NewStudentController {
	
	@Autowired	
	QueryDSLService newrepository;
	
//	@Autowired
//	private ElasticsearchTemplate template;
	
	
	@GetMapping("/student/nameid/{name}/{id}")
	public List<Student> serachByMultiField(@PathVariable String name, @PathVariable int id) {
		return newrepository.searchMultiField(name, id);
	}

	@GetMapping("/student/name/{name}")
	public List<Student> getCustomerByField(@PathVariable String name) {
		return newrepository.getCustomerSerachData(name);
	}

	
	@GetMapping("/student/search/{text}")
	public List<Student> doMultimatchQuery(@PathVariable String text) {
		return newrepository.multiMatchQuery(text);
	}
	
}



