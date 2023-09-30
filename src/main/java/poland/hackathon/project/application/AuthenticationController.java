package poland.hackathon.project.application;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import poland.hackathon.project.domain.auth.data.AuthenticationService;
import poland.hackathon.project.domain.auth.model.AuthenticationRequest;
import poland.hackathon.project.domain.auth.model.AuthenticationResponse;
import poland.hackathon.project.domain.auth.model.RegistrationRequest;
import poland.hackathon.project.domain.auth.model.RegistrationResponse;
import poland.hackathon.project.domain.status.dto.ResponseStatus;
import poland.hackathon.project.domain.token.data.JwtUtils;
import poland.hackathon.project.domain.user.dto.UserDto;

@RestController
@RequiredArgsConstructor
@Slf4j
@Validated
@CrossOrigin(origins = "http://localhost:3000")
class AuthenticationController {

	private final AuthenticationProvider authenticationProvider;
	private final JwtUtils tokenProvider;
	private final UserDetailsService userDetailsService;
	private final AuthenticationService authenticationService;

	@PostMapping(
		value = "/api/authenticate",
		consumes = MediaType.APPLICATION_JSON_VALUE
	)
	public ResponseEntity<AuthenticationResponse> authenticateUser(
		@RequestBody AuthenticationRequest authenticationRequest
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

	@PostMapping(
		value = "/api/register",
		consumes = MediaType.APPLICATION_JSON_VALUE
	)
	public ResponseEntity<RegistrationResponse> registerUser(
		@RequestBody RegistrationRequest registrationRequest
	) {
		UserDto user = authenticationService.registerUser(registrationRequest);

		RegistrationResponse response = RegistrationResponse
			.builder()
			.user(user)
			.status(ResponseStatus.SUCCESS)
			.message("User registered successfully")
			.build();

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
}
