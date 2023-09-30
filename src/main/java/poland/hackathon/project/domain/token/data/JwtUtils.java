package poland.hackathon.project.domain.token.data;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class JwtUtils {

	@Value("${app.jwt.secret}")
	private String jwtSecret;

	@Value("${app.jwt.token.expiration.milis}")
	private long tokenExpMilis;

	public String generateToken(UserDetails userDetails) {
		return generateNewToken(userDetails, tokenExpMilis);
	}

	public String extractEmail(String token) {
		return extractClaim(token, Claims::getSubject);
	}

	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = Jwts
			.parserBuilder()
			.setSigningKey(getSigningKey())
			.build()
			.parseClaimsJwt(token)
			.getBody();
		return claimsResolver.apply(claims);
	}

	public <T> T extractSignedClaim(
		String token,
		Function<Claims, T> claimsResolver
	) {
		final Claims claims = Jwts
			.parserBuilder()
			.setSigningKey(getSigningKey())
			.build()
			.parseClaimsJws(token)
			.getBody();
		return claimsResolver.apply(claims);
	}

	public boolean isTokenValid(String token, UserDetails userDetails) {
		final String email = extractEmail(token);
		return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

	private String generateNewToken(UserDetails userDetails, long tokenExpMilis) {
		return Jwts
			.builder()
			.setSubject(userDetails.getUsername())
			.setIssuedAt(new Date())
			.setExpiration(new Date(new Date().getTime() + tokenExpMilis))
			.signWith(getSigningKey())
			.compact();
	}

	private Key getSigningKey() {
		byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
		return Keys.hmacShaKeyFor(keyBytes);
	}

	private boolean isTokenExpired(String token) {
		Date jwtDate = extractClaim(token, Claims::getExpiration);
		return jwtDate.before(new Date());
	}
}
