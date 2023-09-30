package poland.hackathon.project.domain.auth.model;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Value;
import poland.hackathon.project.domain.gender.dto.Gender;

@NoArgsConstructor
@Getter
@Setter
public class RegistrationRequest {

	@NotNull
	String email;

	@NotNull
	String password;

	@NotNull
	String name;

	int age;

	@NotNull
	Gender gender;
}
