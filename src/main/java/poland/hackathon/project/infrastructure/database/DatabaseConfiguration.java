package poland.hackathon.project.infrastructure.database;

import javax.sql.DataSource;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration(proxyBeanMethods = false)
class DatabaseConfiguration {

	@Bean
	@Profile({ "dev" })
	public DataSource devDataSource() {
		return DataSourceBuilder.of(
			"root",
			"root",
			"jdbc:h2:mem:test",
			"org.h2.Driver"
		);
	}

	@Bean
	@Profile({ "prod" })
	public DataSource prodDataSource() {
		return DataSourceBuilder.of(
			"root",
			"root",
			"jdbc:postgresql://5432/prod",
			"org.postgresql.Driver"
		);
	}

	@NoArgsConstructor(access = AccessLevel.PRIVATE)
	private static class DataSourceBuilder {

		static DataSource of(
			String userName,
			String password,
			String url,
			String driverName
		) {
			DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
			driverManagerDataSource.setUsername(userName);
			driverManagerDataSource.setPassword(password);
			driverManagerDataSource.setUrl(url);
			driverManagerDataSource.setDriverClassName(driverName);

			return driverManagerDataSource;
		}
	}
}
