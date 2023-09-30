package poland.hackathon.project.infrastructure.exception.authentication;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
	value = HttpStatus.BAD_REQUEST,
	reason = "Email is already taken"
)
public class EmailTakenException extends RuntimeException {

	public EmailTakenException(String message) {
		super(message);
	}
}
