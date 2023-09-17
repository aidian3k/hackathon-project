package poland.hackathon.project.infrastructure.spring;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@EnableCaching
@Profile("!dev")
class CachingConfiguration {}
