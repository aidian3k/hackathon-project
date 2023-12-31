package poland.hackathon.project.application;

import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import poland.hackathon.project.domain.chat.data.ChatBotService;
import poland.hackathon.project.domain.chat.model.GoalsResponse;
import poland.hackathon.project.domain.user.entity.User;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserProfilizerController {

	private final ChatBotService chatBotService;

	@PostMapping("/api/buildUserGoals")
	public ResponseEntity<List<GoalsResponse>> generateProfile(
		@RequestBody Map<String, String> questionsAndAnswers,
		@AuthenticationPrincipal User user
	) {
		int minSize = 1;
		if (questionsAndAnswers.size() < minSize) {
			return ResponseEntity.badRequest().build();
		}
		List<GoalsResponse> result = chatBotService.getGoals(
			questionsAndAnswers,
			user
		);
		return ResponseEntity.ok(result);
	}
}
