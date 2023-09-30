package poland.hackathon.project.domain.token.data;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import poland.hackathon.project.domain.user.data.CurrentUserService;
import poland.hackathon.project.domain.user.entity.User;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TokenManagementService {

	private final TokenRepository tokenRepository;
	private final CurrentUserService currentUserService;
	private final Clock clock;

	public void deleteAllActiveUserTokens() {
		final User currentUserDetails = currentUserService.getCurrentUserDetails();
		final LocalDateTime currentTime = LocalDateTime.now(clock);
		final List<Long> activeUserTokens = tokenRepository
			.getAllValidUserTokens(currentTime, currentUserDetails.getId())
			.orElse(Collections.emptyList());

		tokenRepository.deleteAllById(activeUserTokens);
	}
}
