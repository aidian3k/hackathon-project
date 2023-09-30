package poland.hackathon.project.domain.auth.data;

import io.jsonwebtoken.Claims;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import poland.hackathon.project.domain.auth.model.RegistrationRequest;
import poland.hackathon.project.domain.token.data.JwtUtils;
import poland.hackathon.project.domain.token.data.TokenRepository;
import poland.hackathon.project.domain.token.entity.Token;
import poland.hackathon.project.domain.user.data.UserRepository;
import poland.hackathon.project.domain.user.dto.UserDto;
import poland.hackathon.project.domain.user.entity.User;
import poland.hackathon.project.infrastructure.exception.authentication.EmailTakenException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

	private final UserRepository userRepository;
	private final TokenRepository tokenRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtUtils jwtUtils;

	public UserDto registerUser(RegistrationRequest request) {
		final String password = request.getPassword();
		final String hashedPassword = passwordEncoder.encode(password);

		User user = User
			.builder()
			.name(request.getName())
			.email(request.getEmail())
			.password(hashedPassword)
			.age(request.getAge())
			.gender(request.getGender())
			.build();

		if (userRepository.existsByEmail(user.getEmail())) {
			throw new EmailTakenException("User with this email already exists");
		}

		User savedUser = userRepository.save(user);
		if (savedUser.getTokens() == null) {
			savedUser.setTokens(new ArrayList<>());
		}

		String tokenStr = jwtUtils.generateToken(savedUser);
		LocalDateTime expirationDate = dateToLocalDateTime(
			jwtUtils.extractSignedClaim(tokenStr, Claims::getExpiration)
		);
		LocalDateTime issuedDate = dateToLocalDateTime(
			jwtUtils.extractSignedClaim(tokenStr, Claims::getIssuedAt)
		);
		Token token = Token
			.builder()
			.value(tokenStr)
			.user(savedUser)
			.expirationDate(expirationDate)
			.issuedDate(issuedDate)
			.build();
		tokenRepository.save(token);
		savedUser.getTokens().add(token);

		return UserDto
			.builder()
			.id(savedUser.getId())
			.tokens(savedUser.getTokens().stream().map(Token::getValue).toList())
			.email(savedUser.getEmail())
			.gender(savedUser.getGender())
			.age(savedUser.getAge())
			.name(savedUser.getName())
			.build();
	}

	private LocalDateTime dateToLocalDateTime(Date date) {
		return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
	}
}
