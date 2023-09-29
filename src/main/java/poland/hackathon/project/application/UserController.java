package poland.hackathon.project.application;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UserController {

	@GetMapping("/")
	public ResponseEntity<String> healthCheckEndpoint() {
		return new ResponseEntity<>("Works", HttpStatus.OK);
	}
}
