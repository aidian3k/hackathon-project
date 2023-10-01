package poland.hackathon.project.domain.chat.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poland.hackathon.project.domain.chat.entity.PracticalStepEntity;

@Repository
public interface PracticalStepRepository
	extends JpaRepository<PracticalStepEntity, Long> {}
