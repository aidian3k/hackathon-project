package poland.hackathon.project.domain.chat.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poland.hackathon.project.domain.chat.entity.StepEntity;

@Repository
public interface StepRepository extends JpaRepository<StepEntity, Long> {
}
