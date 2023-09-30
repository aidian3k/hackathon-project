package poland.hackathon.project.infrastructure.exception.authentication;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import poland.hackathon.project.infrastructure.exception.GenericExceptionModel;

@ResponseStatus(
	value = HttpStatus.BAD_REQUEST,
	reason = "Email is already taken"
)
public class EmailTakenException extends GenericExceptionModel {

	public EmailTakenException(String message, HttpStatus httpStatus) {
		super(message, httpStatus);
	}
}
