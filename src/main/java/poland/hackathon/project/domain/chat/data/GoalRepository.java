package poland.hackathon.project.domain.chat.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poland.hackathon.project.domain.chat.entity.GoalEntity;

@Repository
public interface GoalRepository extends JpaRepository<GoalEntity, Long> {
}
