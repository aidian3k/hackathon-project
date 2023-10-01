package poland.hackathon.project.infrastructure.spring;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import poland.hackathon.project.domain.gender.dto.Gender;
import poland.hackathon.project.domain.token.data.JwtUtils;
import poland.hackathon.project.domain.token.entity.Token;
import poland.hackathon.project.domain.user.data.UserRepository;
import poland.hackathon.project.domain.user.entity.User;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
class StartingApplicationConfig {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtUtils jwtUtils;

	@Bean
	public CommandLineRunner startingApplicationEvent(Clock clock) {
		return args -> {
			User sampleUser = User
				.builder()
				.password(passwordEncoder.encode("chuj"))
				.age(5)
				.email("chuj@chuj.pl")
				.gender(Gender.MALE)
				.name("Adrian")
				.build();
			sampleUser =
				sampleUser
					.toBuilder()
					.tokens(
						List.of(
							Token
								.builder()
								.value(
										jwtUtils.generateToken(sampleUser)
								)
								.build()
						)
					)
					.build();
			log.info("TOKEN: {}", sampleUser.getTokens().get(0).getValue());
			userRepository.save(sampleUser);

			log.info(
				"Application has successfully started at: [{}]",
				LocalDateTime.now(clock)
			);
		};
	}
}
