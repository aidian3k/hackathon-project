package poland.hackathon.project.application;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.openfeign.FeignClientsConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import poland.hackathon.project.domain.chat.data.ChatBotService;
import poland.hackathon.project.domain.chat.model.ChatRequest;
import poland.hackathon.project.domain.chat.model.ChatResponse;

@RestController
@RequiredArgsConstructor
@Slf4j
@Import(FeignClientsConfiguration.class)
class ChatController {

	private final ChatBotService chatBotService;

	@PostMapping("/api/chat")
	public ChatResponse makeRequestToChat(@RequestBody ChatRequest chatRequest) {
		return chatBotService.makeChatRequest(chatRequest);
	}
}
