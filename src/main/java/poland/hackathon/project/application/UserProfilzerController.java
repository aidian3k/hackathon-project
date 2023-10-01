package poland.hackathon.project.application;

import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poland.hackathon.project.domain.chat.data.ChatBotService;
import poland.hackathon.project.domain.chat.model.GoalsResponse;

@RestController
@RequestMapping("/api/userprofilzer")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserProfilzerController {

	private final ChatBotService chatBotService;

	@PostMapping("/generateProfile")
	public ResponseEntity<List<GoalsResponse>> generateProfile(
		@RequestBody Map<String, String> questionsAndAnswers
	) {
		List<GoalsResponse> result = chatBotService.getGoals(questionsAndAnswers);
		return ResponseEntity.ok(result);
	}
}
