package poland.hackathon.project.infrastructure.exception.authentication;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
	value = HttpStatus.FORBIDDEN,
	reason = "Forbidden user endpoint exception"
)
@Slf4j
public class AuthenticationBadRequestException extends RuntimeException {

	private final String userEmail;

	private AuthenticationBadRequestException(String email) {
		super(
			String.format("Authentication exception for email with user: %s", email)
		);
		this.userEmail = email;
	}

	public static RuntimeException of(String userEmail) {
		log.debug("Failing of authentication with user with email: {}", userEmail);

		return new AuthenticationBadRequestException(userEmail);
	}
}
