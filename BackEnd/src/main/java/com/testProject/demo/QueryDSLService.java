package com.testProject.demo;
//
//public class QueryDSLService {
//
//}



import java.util.List;

import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Service;

import com.testProject.demo.Student;

@Service
public class QueryDSLService {

	@Autowired
	private ElasticsearchTemplate template;

	public List<Student> searchMultiField(String name, int id) {
		QueryBuilder query = QueryBuilders.boolQuery().must(QueryBuilders.matchQuery("id", name))
				.must(QueryBuilders.matchQuery("id", id));
		NativeSearchQuery nativeSearchQuery = new NativeSearchQueryBuilder().withQuery(query).build();
		List<Student> students = template.queryForList(nativeSearchQuery, Student.class);
		return students;
	}

	public List<Student> getCustomerSerachData(String input) {
		String search = ".*" + input + ".*";
		SearchQuery searchQuery = new NativeSearchQueryBuilder()
				.withFilter(QueryBuilders.regexpQuery("name", search)).build();
		List<Student> students = template.queryForList(searchQuery, Student.class);
		return students;

	}

	public List<Student> multiMatchQuery(String text) {
		SearchQuery searchQuery = new NativeSearchQueryBuilder().withQuery(QueryBuilders.multiMatchQuery(text)
				.field("name").field("address").field("studyin").type(MultiMatchQueryBuilder.Type.BEST_FIELDS)).build();
		List<Student> students = template.queryForList(searchQuery, Student.class);
		return students;
	}

}
