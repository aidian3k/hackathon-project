package poland.hackathon.project.domain.token.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.*;
import poland.hackathon.project.domain.user.entity.User;

@Entity
@Table(name = "tokens")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Token {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "token_seq")
	@SequenceGenerator(name = "token_seq", allocationSize = 1)
	private Long id;

	private String value;
	private LocalDateTime expirationDate;
	private LocalDateTime issuedDate;

	@ManyToOne
	@ToString.Exclude
	private User user;
}
