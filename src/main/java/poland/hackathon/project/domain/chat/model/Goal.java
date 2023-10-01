package poland.hackathon.project.domain.chat.model;

import java.util.List;
import lombok.Value;

@Value
public class Goal {

	private String title;
	private String description;
	private List<Step> path;
	private String estimatedCompletionTime;
}
