package poland.hackathon.project.infrastructure.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import poland.hackathon.project.domain.token.data.JwtUtils;
import poland.hackathon.project.infrastructure.exception.validation.InvalidRequestException;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class TokenAuthenticationFilter extends OncePerRequestFilter {

	private final JwtUtils tokenProvider;
	private final UserDetailsService userDetailsService;

	private static final String JWT_TOKEN_PREFIX = "Baerer ";
	private static final String JWT_TOKEN_HEADER = "Authentication";

	@Override
	protected void doFilterInternal(
		@NonNull HttpServletRequest request,
		@NonNull HttpServletResponse response,
		@NonNull FilterChain filterChain
	) throws ServletException, IOException {
		final String userToken = getJwtFromUserRequest(request);
		final String userEmail = tokenProvider.extractEmail(
			userToken
		);

		try {
			final UserDetails userDetails = userDetailsService.loadUserByUsername(
				userEmail
			);
			final UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
				userDetails,
				null,
				userDetails.getAuthorities()
			);
			tokenProvider.isTokenValid(userToken, userDetails);

			authentication.setDetails(
				new WebAuthenticationDetailsSource().buildDetails(request)
			);
			SecurityContextHolder.getContext().setAuthentication(authentication);

			log.debug("Successfuly authenticated user with email=[{}]", userEmail);
		} catch (Exception exception) {
			log.error("Cannot set user authenticated!", exception);
		}

		filterChain.doFilter(request, response);
	}

	@NonNull
	private String getJwtFromUserRequest(@NotNull HttpServletRequest request) {
		final String userToken = request.getHeader(JWT_TOKEN_HEADER);

		if (userToken != null && userToken.startsWith(JWT_TOKEN_PREFIX)) {
			return userToken.replace(JWT_TOKEN_PREFIX, "");
		}

		throw new InvalidRequestException(
			String.format("There is a problem with token request=[%s]", userToken)
		);
	}
}
