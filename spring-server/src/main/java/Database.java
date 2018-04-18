package src.main.java;

import org.springframework.data.repository.CrudRepository;

public interface Database extends CrudRepository<Record, Long> {

    Iterable<Record> findByName(String name);
    Iterable<Record> findByArtist(String artist);
    Iterable<Record> findByYear(int year);
    Iterable<Record> findByNameAndArtist(String name, String artist);
    Iterable<Record> findByNameAndYear(String name, int year);
    Iterable<Record> findByNameAndArtistAndYear(String name, String artist, int year);
    Iterable<Record> findByArtistAndYear(String artist, int year);

}
