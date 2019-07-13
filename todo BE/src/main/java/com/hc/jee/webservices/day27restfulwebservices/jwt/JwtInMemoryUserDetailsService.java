package com.hc.jee.webservices.day27restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "ayoub",
//        "$2a$10$8/xT8dJgMYtCkJkVzxRf1eL1Y3ZALMkyvdeG2MYPpRgKd5FRppnN.", "ROLE_USER_2"));
//    	  "$2a$10$TxxPKZxK/xGXp6vq5wwfGeFtKkFyYUunhA4w/wvU0FjRbz5no/bV2", "ROLE_USER_2"));
//      	  "$2a$10$MCXnAd9rd6/SIZuZ2KUmDOB/.2TEVtbTNJOFWVNL7AuQP5yVUWsTm", "ROLE_USER_2"));
    		
    		"$2a$10$8zdOggmeEhTD9yOiKAw8BeM8QIa8qG5ojyvbrHqVgpfLtrptVg5SK", "ROLE_USER_2"));
    

  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


