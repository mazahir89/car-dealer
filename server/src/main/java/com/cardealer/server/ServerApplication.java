package com.cardealer.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

//	@Bean
//	public FilterRegistrationBean corsFilterBean() {
//
//		final CorsConfiguration corsConfiguration = new CorsConfiguration();
//
//		corsConfiguration.setAllowedOrigins(Collections.singletonList("*"));
//		corsConfiguration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));
//
//		corsConfiguration.setAllowCredentials(true);
//		corsConfiguration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
//
//		final UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();
//
//		corsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
//
//		FilterRegistrationBean corsFilter = new FilterRegistrationBean<>(new CorsFilter(corsConfigurationSource));
//
//		corsFilter.setOrder(Ordered.HIGHEST_PRECEDENCE);
//		return corsFilter;
//	}


}
