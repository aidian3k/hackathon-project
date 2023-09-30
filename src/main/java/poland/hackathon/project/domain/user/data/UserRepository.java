package poland.hackathon.project.domain.user.data;

import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poland.hackathon.project.domain.user.entity.User;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);

	@Query("select count(*) > 0 from User u where u.email=:email")
	boolean existsByEmail(String email);
}
