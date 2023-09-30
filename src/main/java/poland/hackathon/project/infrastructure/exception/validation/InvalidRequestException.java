package poland.hackathon.project.infrastructure.exception.validation;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import poland.hackathon.project.infrastructure.exception.GenericExceptionModel;

@ResponseStatus(
	value = HttpStatus.BAD_REQUEST,
	reason = "There was bad request passed to the given endpoint"
)
public class InvalidRequestException extends GenericExceptionModel {

	public InvalidRequestException(String message, HttpStatus httpStatus) {
		super(message, httpStatus);
	}
}
