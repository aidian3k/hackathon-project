package poland.hackathon.project.application;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class HealthCheckController {
	@GetMapping("/api/health-check")
	public ResponseEntity<Void> healthCheck() {
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
