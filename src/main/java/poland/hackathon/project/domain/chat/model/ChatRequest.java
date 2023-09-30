package poland.hackathon.project.domain.chat.model;

import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.List;

@Builder(toBuilder = true)
@AllArgsConstructor
public class ChatRequest {
    @Builder.Default
    private String model = "gpt-3.5-turbo";

    private List<ChatMessage> messages;
}
