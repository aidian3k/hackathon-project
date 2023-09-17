package poland.hackathon.project.infrastructure.mapper;

public interface GenericMapper<M, D> {
	D toDto(M model);
	M toModel(D dto);
}
