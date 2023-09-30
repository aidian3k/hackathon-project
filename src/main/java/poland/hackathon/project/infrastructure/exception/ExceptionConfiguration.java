package poland.hackathon.project.infrastructure.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
class ExceptionConfiguration {

	@ExceptionHandler(value = {})
	public void handleBadRequest(Throwable throwable) {}
}
