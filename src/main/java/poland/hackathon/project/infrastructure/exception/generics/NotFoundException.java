package poland.hackathon.project.infrastructure.exception.generics;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
class NotFoundException extends RuntimeException {

	public NotFoundException(Long findingId) {
		super(String.format("Entity with id=%d could not be found", findingId));
	}
}
