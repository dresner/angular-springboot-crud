import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Collection;
import java.util.Optional;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

    public Controller () {
        this.db = new Database();
    }

    @RequestMapping("/")
    String home() {
        return "Hello!";
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    Collection<Record> get(@RequestParam("name") Optional<String> name, 
            @RequestParam("artist") Optional<String> artist, 
            @RequestParam("year") Optional<Integer> year) {
       return this.db.getRecords(name, artist, year); 
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    boolean add(@RequestBody Record record) {
        return db.add(record);
    }

    @RequestMapping(value = "/update/{recordId}", method = RequestMethod.PUT)
    boolean update(@PathVariable int recordId, @RequestBody Record record) {
        return db.update(recordId, record);
    }

    @RequestMapping(value = "/remove/{recordId}", method = RequestMethod.DELETE)
    boolean remove(@PathVariable int recordId) {
        return db.remove(recordId);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Controller.class, args);
    }

    private Database db;
}
