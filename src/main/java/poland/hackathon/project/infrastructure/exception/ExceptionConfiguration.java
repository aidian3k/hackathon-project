package poland.hackathon.project.infrastructure.exception;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import poland.hackathon.project.infrastructure.exception.validation.InvalidRequestException;

@RestControllerAdvice
class ExceptionConfiguration {
    @ExceptionHandler(value = {InvalidRequestException.class})
    public ResponseEntity<Void> handleBadRequest() {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
