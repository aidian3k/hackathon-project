package poland.hackathon.project.domain.chat.model;

import lombok.Value;

@Value
public class ChatMessage {
    Role role;
    String content;
}
