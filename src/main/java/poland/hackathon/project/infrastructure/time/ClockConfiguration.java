package poland.hackathon.project.infrastructure.time;

import java.time.Clock;
import java.time.LocalDateTime;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration(proxyBeanMethods = false)
@Slf4j
class ClockConfiguration {

	@Bean
	public Clock configureClockUtc() {
		Clock clock = Clock.systemUTC();
		log.debug("Current time in UTC is: [{}]", LocalDateTime.now(clock));

		return clock;
	}
}
