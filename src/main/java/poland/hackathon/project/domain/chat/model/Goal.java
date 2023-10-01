package poland.hackathon.project.domain.chat.model;

import java.util.List;
import lombok.Value;

@Value
public class Goal {

	String title;
	String description;
	List<Step> path;
	String estimatedCompletionTime;
}
