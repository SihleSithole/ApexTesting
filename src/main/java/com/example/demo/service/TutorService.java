package com.example.demo.service;

import java.util.Base64;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Projection.TutorProjection;
import com.example.demo.model.Tutor;
import com.example.demo.repository.TutorRepository;

import jakarta.annotation.PostConstruct;


@Service
public class TutorService {
	
	@Autowired
	private TutorRepository repo;
	
	private List<Tutor> tutors;
	
    @PostConstruct
    public void init() {
        // Load data from the database when the application starts
        tutors = repo.findAll();  // Or your custom query
        
        for (Tutor tutor : tutors) {
            if (tutor.getImage() != null) {
                // Convert byte[] image to Base64
                String base64Image = Base64.getEncoder().encodeToString(tutor.getImage());
                tutor.setImageBase64(base64Image);  // Set the Base64 string in the tutor object
            }
        }
        
        System.out.println("Tutor data preloaded at startup!");
        
    }

    public List<Tutor> getAllTutors() {
        return tutors;
    }
	
	public List<Tutor> listAll(){
		
		 return repo.findAll();
	}
	
	public List<Tutor> getRandomTutors() {
	    // Get all tutors
	    List<Tutor> allTutors = repo.findAll();

	    // Return the first 8 tutors (or fewer if there are not enough)
	    return allTutors.subList(0, Math.min(5, allTutors.size()));
	    
	}
	
	public void save(Tutor msc) {
		
		  repo.save(msc);
	}
	
	public void delete(Tutor msc) {
		
		repo.delete(msc);
		
	}
	
	public void update(String id , Tutor updatedTutor) {
	       
		 Optional<Tutor> tutor = repo.findById(updatedTutor.getEmail());
		 
		 if (tutor.isPresent()){
			 
			 Tutor existingTutor = tutor.get();

			    existingTutor.setFullNames(updatedTutor.getFullNames());
			    existingTutor.setImage(updatedTutor.getImage());
			    existingTutor.setPhoneNumber(updatedTutor.getPhoneNumber());
			    existingTutor.setEmail(updatedTutor.getEmail());
			    existingTutor.setAddress(updatedTutor.getAddress());
			    existingTutor.setSubjects(updatedTutor.getSubjects());
			    existingTutor.setGrades(updatedTutor.getGrades());
			    existingTutor.setSyllabus(updatedTutor.getSyllabus());
			    existingTutor.setAvailability(updatedTutor.getAvailability());
			    existingTutor.setBio(updatedTutor.getBio());
			    existingTutor.setAbout(updatedTutor.getAbout());
			    existingTutor.setHoursTutored(updatedTutor.getHoursTutored());
			    existingTutor.setBackground("Yes");
			    existingTutor.setArea(updatedTutor.getArea());
			    existingTutor.setCountry(updatedTutor.getCountry());

	            // Save the updated student object
	            repo.save(existingTutor);
	            
         }
	        
	 }
	
	public void updateRatings(String email , int rate) {
		
		String noSpaces = email.replaceAll("\\s+", "");
		
		 Optional<Tutor> tutor = repo.findById(noSpaces);
		 
		 if (tutor.isPresent()){
			 
			 Tutor existingTutor = tutor.get();
			 
			 int ratings = existingTutor.getRatings();
			   ratings += 0;
			 
			 existingTutor.setRatings(ratings);
			 			 
			 repo.save(existingTutor);
			 
		 }
		
	}

/*	public Page<Tutor> findPage(int pageNumber){
		
	    Pageable pageable = PageRequest.of(pageNumber - 1, 10, Sort.by(Sort.Order.desc("ratings")));
	    return repo.findAll(pageable);
	    
	} */
	
/*	@Cacheable("tutors")
	public Page<TutorProjection> findPage(int pageNumber) {
	    Pageable pageable = PageRequest.of(pageNumber - 1, 10, Sort.by(Sort.Order.desc("ratings")));
	    return repo.findAllProjectedBy(pageable);
	}*/
	
	public Page<Tutor> findPage(List<Tutor> tutorProjections, int pageNumber, int pageSize) {
	    // Calculate the start index for the pagination
	    int start = (pageNumber - 1) * pageSize;
	    int end = Math.min((start + pageSize), tutorProjections.size());

	    // Create a sublist to return the paginated results
	    List<Tutor> pagedList = tutorProjections.subList(start, end);

	    // Create a Pageable object based on the pageNumber and pageSize
	    Pageable pageable = PageRequest.of(pageNumber - 1, pageSize);

	    // Create and return a Page object
	    return new PageImpl<>(pagedList, pageable, tutorProjections.size());
	}
	
	/*TUTORS BY LOCATION*/
	

	 public Page<Tutor> paginateTutors(List<Tutor> tutors, int currentPage) {
	     int pageSize = 10; 
	     int start = Math.max((currentPage - 1) * pageSize, 0);
	     int end = Math.min(start + pageSize, tutors.size());
	     List<Tutor> pageContent = tutors.subList(start, end);

	     // Return a paginated page of tutors
	     return new PageImpl<>(pageContent, PageRequest.of(currentPage - 1, pageSize), tutors.size());
	 }
	 
	 public Page<Tutor> viewProfile(int pageNumber) {
		    Pageable pageable = PageRequest.of(pageNumber - 1, 5); // No sorting
		    return repo.findAll(pageable);
		}
	 
	 public List<Tutor> listAllByLocation(String location){
		    return repo.findTutorsByLocation(location);
     }
		
	 
	/* public List<Tutor> listAllBySubjects(String subject){
		    return repo.findTutorsBySubjects(subject);
     }*/
	 
	 public Page<Tutor> paginateTutorsBySubject(String subject, int currentPage) {
		    int pageSize = 10; // Number of tutors per page
		    Pageable pageable = PageRequest.of(currentPage - 1, pageSize); // Convert 1-based index to 0-based

		    return repo.findTutorsBySubjects(subject, pageable);
		}

	
	
		
}