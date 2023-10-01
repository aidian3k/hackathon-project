package poland.hackathon.project.domain.chat.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "practical_steps")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class PracticalStepEntity {

	@Id
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "practical_steps_id_seq"
	)
	@SequenceGenerator(name = "practical_steps_id_seq", allocationSize = 1)
	private Long id;

	private String description;

	@ManyToOne
	private StepEntity step;

	public static PracticalStepEntity toEntity(String stepDescription) {
		return PracticalStepEntity.builder().description(stepDescription).build();
	}
}
