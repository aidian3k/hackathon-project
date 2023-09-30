package poland.hackathon.project.infrastructure.exception.authentication;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import poland.hackathon.project.infrastructure.exception.GenericExceptionModel;

@ResponseStatus(
	value = HttpStatus.FORBIDDEN,
	reason = "Forbidden user endpoint exception"
)
@Slf4j
public class AuthenticationBadRequestException extends GenericExceptionModel {

	public AuthenticationBadRequestException(
		String message,
		HttpStatus httpStatus
	) {
		super(message, httpStatus);
	}
}
