package poland.hackathon.project.domain.chat.entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.*;
import poland.hackathon.project.domain.chat.model.Step;

@Entity
@Table(name = "steps")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class StepEntity {

	@Id
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "steps_id_seq"
	)
	@SequenceGenerator(name = "steps_id_seq", allocationSize = 1)
	private Long id;

	private String title;
	private String description;

	@OneToMany(
		fetch = FetchType.LAZY,
		cascade = CascadeType.ALL,
		orphanRemoval = true,
		mappedBy = "step"
	)
	private List<PracticalStepEntity> practicalSteps;

	@ManyToOne
	GoalEntity goal;

	public static StepEntity toEntity(Step step) {
		return StepEntity
			.builder()
			.practicalSteps(
				step
					.getPracticalSteps()
					.stream()
					.map(s -> PracticalStepEntity.toEntity(s))
					.toList()
			)
			.description(step.getDescription())
			.title(step.getTitle())
			.build();
	}
}
