package poland.hackathon.project.domain.auth.model;

import lombok.Builder;
import lombok.Value;
import poland.hackathon.project.domain.status.dto.ResponseStatus;
import poland.hackathon.project.domain.user.dto.UserDto;

@Value
@Builder
public class RegistrationResponse {

	ResponseStatus status;
	UserDto user;
	String message;
}
