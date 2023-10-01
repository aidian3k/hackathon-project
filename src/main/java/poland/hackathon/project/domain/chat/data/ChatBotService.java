package poland.hackathon.project.domain.chat.data;

import com.google.gson.Gson;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.ContentType;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.core5.http.HttpHeaders;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import poland.hackathon.project.domain.chat.entity.GoalEntity;
import poland.hackathon.project.domain.chat.model.GoalsResponse;
import poland.hackathon.project.domain.chat.model.Role;
import poland.hackathon.project.domain.user.data.UserRepository;
import poland.hackathon.project.domain.user.entity.User;
import poland.hackathon.project.infrastructure.exception.chatgpt.ChatGptResponseException;

@Service
@Slf4j
@RequiredArgsConstructor
public class ChatBotService {

	@Value("${app.chatgpt.endpoint}")
	private String endpoint;

	@Value("${app.chatgpt.apiKey}")
	private String apiKey;

	private final GoalRepository goalRepository;
	private final UserRepository userRepository;

	public List<GoalsResponse> getGoals(
		Map<String, String> questionsAndAnswers,
		User user
	) {
		String input = formatInputData(questionsAndAnswers);
		List<GoalsResponse> goals = sendGoalsQuery(input);
		if (!goals.isEmpty()) {
			List<GoalEntity> goalEntities = goals
				.get(0)
				.getGoals()
				.stream()
				.map(GoalEntity::toEntity)
				.toList();
			goalEntities.forEach(goalEntity -> goalEntity.setUser(user));
			goalRepository.saveAll(goalEntities);
			user.setFirstLogin(false);
			userRepository.save(user);
		}
		return goals;
	}

	private String formatInputData(Map<String, String> questionsAndAnswers) {
		StringBuilder chatInput = new StringBuilder(
			"Give me 5 main goals with paths to achieve each of them. Each goal has 1 path which contains at least 4 steps. The goals should be generated based on the following questions and answers:\n"
		);
		List<String> collected = questionsAndAnswers
			.entrySet()
			.stream()
			.map(entry ->
				"Question:\n" +
				entry.getKey() +
				"\n" +
				"Answer:\n" +
				entry.getValue() +
				"\n"
			)
			.toList();
		String formattedQuestions = String.join("\n", collected);
		chatInput
			.append(formattedQuestions)
			.append(
				"\nThe response must be in json format and contain the following array of objects with fields:\n [title: string, description: string, path: Array<{title: string, description: string, practicalSteps: Array<string>}>, estimatedCompletionTime: string]"
			);
		return chatInput.toString();
	}

	private List<GoalsResponse> sendGoalsQuery(String input) {
		HttpPost post = createHttpPost(input);

		try (
			CloseableHttpClient httpClient = HttpClients.createDefault();
			CloseableHttpResponse response = httpClient.execute(post)
		) {
			HttpEntity resEntity = response.getEntity();
			String resJsonString = new String(
				resEntity.getContent().readAllBytes(),
				StandardCharsets.UTF_8
			);
			JSONObject resJson = new JSONObject(resJsonString);

			if (resJson.has("error")) {
				String errorMsg = resJson.getString("error");
				log.error("Chatbot API error: {}", errorMsg);
				throw new IllegalStateException(errorMsg);
			}

			// Parse JSON response
			JSONArray responseArray = resJson.getJSONArray("choices");
			List<GoalsResponse> responseList = new ArrayList<>();
			for (int i = 0; i < responseArray.length(); i++) {
				JSONObject responseObj = responseArray.getJSONObject(i);
				String responseString = responseObj
					.getJSONObject("message")
					.getString("content");
				GoalsResponse goalsResponse = new Gson()
					.fromJson(responseString, GoalsResponse.class);
				responseList.add(goalsResponse);
			}

			return responseList;
		} catch (IOException | JSONException e) {
			log.error("An error occured while trying to get a response from CHATGPT");
			throw new ChatGptResponseException(
				"ChatGpt's response exception",
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	private HttpPost createHttpPost(String input) {
		JSONObject payload = new JSONObject();
		JSONObject message = new JSONObject();
		JSONArray messageList = new JSONArray();

		message.put("role", Role.USER.name().toLowerCase());
		message.put("content", input);
		messageList.put(message);

		payload.put("model", "gpt-3.5-turbo");
		payload.put("messages", messageList);
		payload.put("max_tokens", 3000);
		payload.put("temperature", 0.7);

		StringEntity inputEntity = new StringEntity(
			payload.toString(),
			ContentType.APPLICATION_JSON
		);

		HttpPost post = new HttpPost(endpoint);
		post.setEntity(inputEntity);
		post.setHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey);
		post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json");
		return post;
	}
}
