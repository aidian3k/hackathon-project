package poland.hackathon.project.domain.user.data;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import poland.hackathon.project.domain.user.User;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserManagementService {

	private final UserRepository userRepository;

	public User getUserByEmail(String userEmail) {
		return userRepository
			.findByEmail(userEmail)
			.orElseThrow(() -> new NotFoundException(""));
	}
}
