package poland.hackathon.project.application;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import poland.hackathon.project.domain.auth.model.AuthenticationRequest;
import poland.hackathon.project.domain.auth.model.AuthenticationResponse;
import poland.hackathon.project.domain.token.data.JwtUtils;

@RestController
@RequiredArgsConstructor
@Slf4j
class AuthenticationController {

	private final AuthenticationProvider authenticationProvider;
	private final JwtUtils tokenProvider;
	private final UserDetailsService userDetailsService;

	@GetMapping(
		value = "/api/authenticate",
		consumes = MediaType.APPLICATION_JSON_VALUE
	)
	public ResponseEntity<AuthenticationResponse> authenticateUser(
		AuthenticationRequest authenticationRequest
	) {
		final String userEmail = authenticationRequest.getEmail();
		final String hashedPassword = authenticationRequest.getPassword();

		authenticationProvider.authenticate(
			new UsernamePasswordAuthenticationToken(userEmail, hashedPassword)
		);

		final String generatedUserAccessToken = tokenProvider.generateToken(
			userDetailsService.loadUserByUsername(userEmail)
		);

		return new ResponseEntity<>(
			AuthenticationResponse.of(generatedUserAccessToken),
			HttpStatus.OK
		);
	}
}
