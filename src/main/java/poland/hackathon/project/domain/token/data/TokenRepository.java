package poland.hackathon.project.domain.token.data;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poland.hackathon.project.domain.token.entity.Token;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface TokenRepository extends JpaRepository<Token, Long> {
	@Query(
		"select t.id from Token t where t.expirationDate < :date and t.user=:userId"
	)
	Optional<List<Long>> getAllValidUserTokens(LocalDateTime date, Long userId);
}
