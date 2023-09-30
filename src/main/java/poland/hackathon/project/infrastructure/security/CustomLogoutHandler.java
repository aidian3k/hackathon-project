package poland.hackathon.project.infrastructure.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;
import poland.hackathon.project.domain.token.data.TokenManagementService;

@Component
@RequiredArgsConstructor
class CustomLogoutHandler implements LogoutHandler {
	private final TokenManagementService tokenManagementService;

	@Override
	public void logout(
		@NonNull HttpServletRequest request,
		@NonNull HttpServletResponse response,
		@NonNull Authentication authentication
	) {
		tokenManagementService.deleteAllActiveUserTokens();
		SecurityContextHolder.clearContext();
    }
}
