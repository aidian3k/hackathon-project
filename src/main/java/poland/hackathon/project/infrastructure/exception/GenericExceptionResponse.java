package poland.hackathon.project.infrastructure.exception;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Builder
@Setter
public class GenericExceptionResponse {

	private String message;

	private String throwableName;
}
