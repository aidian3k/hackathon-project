package poland.hackathon.project.domain.auth.model;

import lombok.Getter;

public class AuthenticationResponse {

	@Getter
	private final String accessToken;

	private AuthenticationResponse(String accessToken) {
		this.accessToken = accessToken;
	}

	public static AuthenticationResponse of(String accessToken) {
		return new AuthenticationResponse(accessToken);
	}
}
