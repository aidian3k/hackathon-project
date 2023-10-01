package poland.hackathon.project.infrastructure.spring;

import java.time.Clock;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
class StartingApplicationConfig {

	@Bean
	public CommandLineRunner startingApplicationEvent(Clock clock) {
		return args -> {
			log.info(
				"Application has successfully started at: [{}]",
				LocalDateTime.now(clock)
			);
		};
	}
}
