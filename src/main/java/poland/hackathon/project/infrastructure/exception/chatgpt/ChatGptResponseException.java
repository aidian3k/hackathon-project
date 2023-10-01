package poland.hackathon.project.infrastructure.exception.chatgpt;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import poland.hackathon.project.infrastructure.exception.GenericExceptionModel;

@ResponseStatus(
	value = HttpStatus.INTERNAL_SERVER_ERROR,
	reason = "An error occurred while getting the response from the chatbot"
)
public class ChatGptResponseException extends GenericExceptionModel {

	public ChatGptResponseException(String message, HttpStatus status) {
		super(message, status);
	}
}
