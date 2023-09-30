package poland.hackathon.project.domain.token.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "access_token")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Token {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "token_seq")
	@SequenceGenerator(name = "token_seq", allocationSize = 1)
	private Long id;

	private String value;
	private LocalDateTime expirationDate;
	private LocalDateTime validTo;
}
