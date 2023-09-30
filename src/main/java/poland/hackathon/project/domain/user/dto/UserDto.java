package poland.hackathon.project.domain.user.dto;

import java.util.List;
import lombok.*;
import poland.hackathon.project.domain.gender.dto.Gender;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
@Builder
public class UserDto {

	private Long id;
	private String name;
	private String email;
	private int age;
	private Gender gender;
	private List<String> tokens;
}
