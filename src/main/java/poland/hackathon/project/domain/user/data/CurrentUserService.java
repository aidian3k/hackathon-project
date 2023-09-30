package poland.hackathon.project.domain.user.data;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import poland.hackathon.project.domain.user.entity.User;

import java.util.Optional;

@Component
public class CurrentUserService {

	public Long getCurrentUserId() {
		return getCurrentUser().map(User::getId).orElse(null);
	}

	public User getCurrentUserDetails() {
		return getCurrentUser()
			.orElseThrow(() ->
				new IllegalStateException(
					"Illegal state - trying to get context while it is empty"
				)
			);
	}

	private Optional<User> getCurrentUser() {
		return Optional
			.ofNullable(SecurityContextHolder.getContext().getAuthentication())
			.map(authentication -> (User) authentication.getPrincipal());
	}
}
