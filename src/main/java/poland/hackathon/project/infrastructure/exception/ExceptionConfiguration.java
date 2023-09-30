package poland.hackathon.project.infrastructure.exception;

import java.time.Clock;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@RequiredArgsConstructor
class ExceptionConfiguration {

	private final Clock clock;

	@ExceptionHandler(value = { GenericExceptionModel.class })
	public ResponseEntity<GenericExceptionResponse> handleBadRequest(
		GenericExceptionModel throwable
	) {
		return new ResponseEntity<>(
			GenericExceptionResponse
				.builder()
				.httpStatus(throwable.getHttpStatus().value())
				.timeStamp(LocalDateTime.now(clock))
				.message(throwable.getMessage())
				.throwableName(throwable.getClass().getSimpleName())
				.build(),
			throwable.getHttpStatus()
		);
	}
}
