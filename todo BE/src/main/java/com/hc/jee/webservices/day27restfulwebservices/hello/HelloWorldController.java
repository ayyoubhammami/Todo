package com.hc.jee.webservices.day27restfulwebservices.hello;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @CrossOrigin(origins="http://localhost:4200")
@CrossOrigin
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World 3");
		// throw new RuntimeException("Some error happened. Contact support at *** - ***");
	}
	
	///hello-world/path-variable/hugeCoders
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean("Hello World "+ name + " updated 2");
	}
}
