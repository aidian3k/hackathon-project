package poland.hackathon.project.infrastructure.exception.generics;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import poland.hackathon.project.infrastructure.exception.GenericExceptionModel;

@ResponseStatus(HttpStatus.NOT_FOUND)
class NotFoundException extends GenericExceptionModel {

	public NotFoundException(Long findingId, HttpStatus httpStatus) {
		super(
			String.format("Entity with id=%d could not be found", findingId),
			httpStatus
		);
	}
}
