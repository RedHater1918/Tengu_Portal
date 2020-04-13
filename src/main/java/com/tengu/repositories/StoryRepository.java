package com.tengu.repositories;

import com.tengu.models.Story;
import com.tengu.models.projections.RatedProjection;
import com.tengu.models.projections.StoryProjection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StoryRepository extends PagingAndSortingRepository<Story, UUID> {
    @Query("SELECT s.id as id," +
            "    s.title as title," +
            "    s.createdDate as createdDate," +
            "    s.author as author," +
            "    s.price as price " +
            "FROM Story s")
    Iterable<StoryProjection> findAllProjected();

    @Query(value = "select  s.id as id," +
            "    s.title as title," +
            "    s.createdDate as createdDate," +
            "    s.author as author," +
            "    s.price as price," +
            "    (select count(p) from Purchase p where p.storyId = s.id and p.userId = :userId) > 0 as purchased," +
            "    coalesce(" +
            "           (select sum(p.value) from Rate p where p.storyId = s.id) / " +
            "           (select count(p) from Rate p where p.storyId = s.id)" +
            "     ,0) / 5.0 * 100 as rating " +
            "from Story s")
    Iterable<RatedProjection> findAllRated(@Param("userId") UUID userId);
}
