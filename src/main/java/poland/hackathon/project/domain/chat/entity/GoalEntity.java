package poland.hackathon.project.domain.chat.entity;

import jakarta.persistence.*;
import java.util.List;
import lombok.*;
import poland.hackathon.project.domain.chat.model.Goal;
import poland.hackathon.project.domain.user.entity.User;

@Entity
@Table(name = "goals")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class GoalEntity {

	@Id
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "goals_id_seq"
	)
	@SequenceGenerator(name = "goals_id_seq", allocationSize = 1)
	private Long id;

	private String title;
	private String description;
	private String estimatedCompletionTime;

	@ManyToOne
	private User user;

	@OneToMany(
		fetch = FetchType.LAZY,
		cascade = CascadeType.ALL,
		orphanRemoval = true,
		mappedBy = "goal"
	)
	private List<StepEntity> steps;

	public static GoalEntity toEntity(Goal goal) {
		return GoalEntity
			.builder()
			.description(goal.getDescription())
			.steps(
				goal.getPath().stream().map(step -> StepEntity.toEntity(step)).toList()
			)
			.estimatedCompletionTime(goal.getEstimatedCompletionTime())
			.title(goal.getTitle())
			.build();
	}
}
