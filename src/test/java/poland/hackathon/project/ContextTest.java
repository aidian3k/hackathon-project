package poland.hackathon.project;

import java.util.logging.Logger;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class ContextTest {

	private static final Logger logger = Logger.getLogger(
		ContextTest.class.getName()
	);

	@Test
	void shouldContextLoadCorrectly_when_runningApplication() {
		logger.info("Application loaded successfully");
	}
}
