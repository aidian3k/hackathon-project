package poland.hackathon.project.domain.chat.model;


import lombok.Value;

import java.util.List;

@Value
public class ChatResponse {
    Long index;
    List<ChatMessage> choices;
}
