package poland.hackathon.project.domain.chat.model;

import java.util.List;
import lombok.Value;

@Value
public class Step {

	String title;
	String description;
	List<String> practicalSteps;
}
