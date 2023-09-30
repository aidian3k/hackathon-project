package poland.hackathon.project.infrastructure.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
class SecurityConfiguration {

	private final TokenAuthenticationFilter tokenAuthenticationFilter;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http)
		throws Exception {
		// disabling csrf and cors because of using JWT token
		http.csrf().disable();
		http.cors().disable();

		// disable server authentication management
		http.sessionManagement(httpSecuritySessionManagementConfigurer ->
			httpSecuritySessionManagementConfigurer.sessionCreationPolicy(
				SessionCreationPolicy.STATELESS
			)
		);

		http.addFilterBefore(
			tokenAuthenticationFilter,
			UsernamePasswordAuthenticationFilter.class
		);

		http.authorizeHttpRequests(request -> {
			request.requestMatchers("localhost:8080/swagger-ui").permitAll();
			request.anyRequest().authenticated();
		});

		return http.build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfiguration);

		return source;
	}
}
