package src.main.java;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Record {

    protected Record() {}

    public Record(String name, String artist, int year) {
        this.name = name;
        this.artist = artist;
        this.year = year;
    }

    public void update(Record r) {
        this.name = r.name;
        this.artist = r.artist;
        this.year = r.year;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;
    public String name;
    public String artist;
    public int year;
}
