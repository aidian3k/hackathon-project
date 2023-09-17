package poland.hackathon.project.application;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UserController {

	public ResponseEntity<Void> healthCheckEndpoint() {
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
