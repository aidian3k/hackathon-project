package poland.hackathon.project.infrastructure.security;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.webjars.NotFoundException;
import poland.hackathon.project.domain.user.data.UserRepository;

@Configuration
@RequiredArgsConstructor
public class AuthenticationConfiguration {

	private final UserRepository userRepository;

	@Bean
	public UserDetailsService userDetailsService() {
		return username ->
			userRepository
				.findByEmail(username)
				.orElseThrow(() ->
					new NotFoundException("User with email: %s has not been found")
				);
	}

	@Bean
	public AuthenticationProvider authenticationProvider(
		PasswordEncoder passwordEncoder
	) {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder);

		return authenticationProvider;
	}

	@Bean
	@SneakyThrows
	public AuthenticationManager authenticationManager(
		org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration configuration
	) {
		return configuration.getAuthenticationManager();
	}
}
