package poland.hackathon.project.infrastructure.exception;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public abstract class GenericExceptionModel extends RuntimeException {

	private final String message;
	private final HttpStatus httpStatus;

	public GenericExceptionModel(String message, HttpStatus httpStatus) {
		super(message);
		this.message = message;
		this.httpStatus = httpStatus;
	}
}
