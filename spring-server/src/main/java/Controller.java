package src.main.java;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

    @Autowired
    private Database db;

    public Controller() {}

    @RequestMapping("/")
    String home() {
        return "Hello!";
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    Iterable<Record> get(@RequestParam("name") Optional<String> name, 
            @RequestParam("artist") Optional<String> artist, 
            @RequestParam("year") Optional<Integer> year) {
       if(name.isPresent()) {
           if(artist.isPresent()) {
               if(year.isPresent()) {
                   return db.findByNameAndArtistAndYear(name.get(), artist.get(), year.get());
               }
               return db.findByNameAndArtist(name.get(), artist.get());
           }
           return db.findByName(name.get());
       }
       if(artist.isPresent()) {
           if(year.isPresent()) {
               return db.findByArtistAndYear(artist.get(), year.get());
           }
           return db.findByArtist(artist.get());
       }
       if(year.isPresent()) {
           return db.findByYear(year.get());
       }
       return db.findAll(); 
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    Record add(@RequestBody Record record) {
        Record rec = new Record();
        rec.update(record);
        return db.save(rec);
    }

    @RequestMapping(value = "/update/{recordId}", method = RequestMethod.PUT)
    boolean update(@PathVariable Long recordId, @RequestBody Record record) {
        Optional<Record> r = db.findById(recordId);
        if(r.isPresent()) {
            Record rec = r.get();
            rec.update(record);
            db.save(rec);
            return true;
        }
        return false;
    }

    @RequestMapping(value = "/remove/{recordId}", method = RequestMethod.DELETE)
    boolean remove(@PathVariable Long recordId) {
        Optional<Record> r = db.findById(recordId);
        if(r.isPresent()) {
            db.delete(r.get());
            return true;
        }
        return false;
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Controller.class, args);
    }

}
