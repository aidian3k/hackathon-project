package poland.hackathon.project.domain.auth.model;

import lombok.Value;

@Value
public class AuthenticationRequest {
    String email;
    String password;
}
