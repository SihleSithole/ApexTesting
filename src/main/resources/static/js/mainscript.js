const navbarToggle = document.getElementById('navbar-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on button click
navbarToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('show'); // Close the menu
    });
});

// Optional: Close menu when clicking outside of it
window.addEventListener('click', function(event) {
    if (!navbarToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('show'); // Close the menu
    }
});


document.addEventListener("DOMContentLoaded", function() {
  var imageWrapper = document.querySelector('.image-wrapper');
  var tutorContainer = document.querySelector('.tutor-container');
  var tutorRect = tutorContainer.getBoundingClientRect();
  var tutorTop = tutorRect.top + window.scrollY;
  var images = document.querySelectorAll('.image');

  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;

    // Check if the scroll position is past the tutor container
    if (scrollTop > tutorTop) {
      images.forEach(function(image) {
        image.classList.add('fixed-image');
      });
    } else {
      images.forEach(function(image) {
        image.classList.remove('fixed-image');
      });
    }
  });
});

         /*#########################BOOKINGS#######################*/

         function onceOffPackage(){

            var ghg = document.getElementById('tutor-style').value.trim(); 
            var pack_details = document.getElementById('pack-details');
            var helpingFor = document.querySelector('input[name="help-with"]:checked');
            var forwho = helpingFor ? helpingFor.value : 'None';

            if (ghg === "Online" && forwho === 'school' ){

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session 
                    <ul>
                        <li>•Format: One-on-one live sessions </li>
                        <li>•Currency: All prices quoted in South African Rand (ZAR)</li>
                    </ul>`;
                  
            } 

            else{

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one In-person tutoring at your home</li>
                        <li>•Pricing: All prices are quoted in South African Rand.</li>
                    </ul>`;

               }

            document.getElementById('popup').classList.remove('hide');

         }
          

         function basicPackage(){

            var ghg = document.getElementById('tutor-style').value.trim(); 
            var pack_details = document.getElementById('pack-details');
            var helpingFor = document.querySelector('input[name="help-with"]:checked');
            var forwho = helpingFor ? helpingFor.value : 'None';

            if (ghg === "Online" && forwho === 'school' ){

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one live sessions</li>
                        <li>•Special Offer: 10% sibling discount available</li>
                        <li>•Currency: All prices quoted in South African Rand (ZAR)</li>
                        <li>•Only covers one subject in a month</li>
                    </ul>`;
                  
            } 

            else{

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one, in-person tutoring at your home</li>
                        <li>•Pricing: All prices quoted in South African Rand (ZAR)</li>
                        <li>•Family Discount: 10% sibling discount available.</li>
                        <li>•Covers one subject per month.</li>
                    </ul>`;

               }

            document.getElementById('popup').classList.remove('hide');
         }

         function premiumPackage(){

            var ghg = document.getElementById('tutor-style').value.trim(); 
            var pack_details = document.getElementById('pack-details');
            var helpingFor = document.querySelector('input[name="help-with"]:checked');
            var forwho = helpingFor ? helpingFor.value : 'None';

            if (ghg === "Online" && forwho === 'school' ){

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one live sessions</li>
                        <li>•Special Offer: 10% sibling discount available</li>
                        <li>•Currency: All prices quoted in South African Rand (ZAR)</li>
                        <li>•Covers 2 subjects in a month</li>
                    </ul>`;
                  
            } 

            else{

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one, in-person tutoring at your home</li>
                        <li>•Pricing: All prices quoted in South African Rand (ZAR)</li>
                        <li>•Family Discount: 10% sibling discount available.</li>
                        <li>•Covers up to two subjects per month.</li>
                    </ul>`;

               }

            document.getElementById('popup').classList.remove('hide');

         }


         function advanceElite(){

            var ghg = document.getElementById('tutor-style').value.trim(); 
            var pack_details = document.getElementById('pack-details');
            var helpingFor = document.querySelector('input[name="help-with"]:checked');
            var forwho = helpingFor ? helpingFor.value : 'None';

            if (ghg === "Online" && forwho === 'school' ){

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one live sessions</li>
                        <li>•Special Offer: 10% sibling discount available</li>
                        <li>•Currency: All prices quoted in South African Rand (ZAR)</li>
                        <li>•Covers two or more subjects per month </li>
                    </ul>`;
                  
            } 

            else{

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•Format: One-on-one, in-person tutoring at your home</li>
                        <li>•Pricing: All prices quoted in South African Rand (ZAR)</li>
                        <li>•Family Discount: 10% sibling discount available.</li>
                        <li>•Covers two or more subjects </li>
                    </ul>`;

               }

            document.getElementById('popup').classList.remove('hide');
              
         }

         function oneOnoneUniversity(){

            var ghg = document.getElementById('tutor-style').value.trim(); 
            var pack_details = document.getElementById('pack-details');

            if (ghg === "Online"){

                pack_details.innerHTML = `
                    •Duration: 60 minutes 
                    <ul>
                        <li>•Format: One-on-one live sessions.</li>
                        <li>•Discount: we offer a discount if you book more than 5 sessions</li>
                        <li>•All prices are quoted in South African Rand (ZAR).</li>
                    </ul>`;
                  
            } 

            else{

                pack_details.innerHTML = `
                    •Duration: 60 minutes 
                    <ul>
                        <li>•Location: Campus or home tutoring</li>
                        <li>•Discount: we offer a discount if you book more than 5 sessions.</li>
                        <li>•All prices are quoted in South African Rand (ZAR)</li>
                    </ul>`;

               }

            document.getElementById('popup').classList.remove('hide');

         }

         function groupUniversity(){

            var ghg = document.getElementById('tutor-style').value.trim(); 
            var pack_details = document.getElementById('pack-details');

            if (ghg === "Online"){

                pack_details.innerHTML = `
                    •Duration: 60 minutes per session
                    <ul>
                        <li>•All sessions are live interactive learning experiences </li>
                        <li>•Currency: All prices quoted in South African Rand (ZAR)</li>
                      
                    </ul>`;

     
                  
            } 

            else{

                pack_details.innerHTML = `
                    •Duration: 60 minutes 
                    <ul>
                        <li>•Location: Campus or home tutoring</li>
                        <li>•Discount: we offer a discount if you book more than 5 sessions.</li>
                        <li>•All prices are quoted in South African Rand (ZAR)</li>
                    </ul>`;

               }

            document.getElementById('popup').classList.remove('hide');


         }




function closePopup() {
  document.getElementById('popup').classList.add('hide');
}

function openPackageDetailsUniversity(){

    var pack_details = document.getElementById('pack-details');
    var ghg = document.getElementById('tutor-style').value.trim(); 


     if (ghg === "In Person"){

        pack_details.innerHTML = `
      •Each session is 60 minutes
      <ul>
          <li>•Campus Tutoring or home tutoring (in-person)</li>
          <li>•All prices are in South African currency</li>
      </ul>`;

     }
     else{

        
        pack_details.innerHTML = `
      •Live sessions
      <ul>
          <li>•These prices are per session</li>
          <li>•All prices are in South African currency</li>
      </ul>`;

     }

     document.getElementById('popup').classList.remove('hide');


}

 document.addEventListener('DOMContentLoaded', function() {
  const otherOption = document.getElementById('other-option');
  otherOption.style.display = 'none'; // Hide the "Other" option
});

document.addEventListener('DOMContentLoaded', function() {
            var form_1 = document.querySelector(".form_1");
            var form_2 = document.querySelector(".form_2");
            var form_3 = document.querySelector(".form_3");
            var form_4 = document.querySelector(".form_4");
            var form_5 = document.querySelector(".form_5");

            var form_1_btns = document.querySelector(".form_1_btns");
            var form_2_btns = document.querySelector(".form_2_btns");
            var form_3_btns = document.querySelector(".form_3_btns");
            var form_4_btns = document.querySelector(".form_4_btns");
            var form_5_btns = document.querySelector(".form_5_btns");

            var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
            var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
            var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
            var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
            var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
            var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
            var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
            var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
            var consult = document.querySelector(".form_5_btns .btn_next");


            var form_2_progessbar = document.querySelector(".form_2_progessbar");
            var form_3_progessbar = document.querySelector(".form_3_progessbar");

            var btn_done = document.querySelector(".btn_done");
            var modal_wrapper = document.querySelector(".modal_wrapper");
            var shadow = document.querySelector(".shadow");

            function validateForm1() {

                var firstName = document.getElementById('first-name').value.trim();
                var lastName = document.getElementById('last-name').value.trim();
                var email = document.getElementById('email').value.trim();
                var phone = document.getElementById('phone').value.trim();
                var province = document.getElementById('province').value;
                var country = document.getElementById('country').value;
                var language = document.getElementById('language').value;

                var isValid = true;

                // Validate required text inputs
                if (!firstName) {
                    document.getElementById('first-name-error').textContent = "First name is required.";
                    isValid = false;
                } else {
                    document.getElementById('first-name-error').textContent = "";
                }

                if (!lastName) {
                    document.getElementById('last-name-error').textContent = "Last name is required.";
                    isValid = false;
                } else {
                    document.getElementById('last-name-error').textContent = "";
                }

                if (!email) {
                    document.getElementById('email-error').textContent = "Email is required.";
                    isValid = false;
                } else {
                    document.getElementById('email-error').textContent = "";
                }

                if (!phone) {
                document.getElementById('phone-error').textContent = "Phone number is required.";
                isValid = false;
                }
                else{

                     var checkNumber = validatePhoneNumber();

                       if(!checkNumber){
                        isValid = false;
                       }
                      
                }

                if (!country) {
                    document.getElementById('country-error').textContent = "Country is required.";
                    isValid = false;
                } else {
                    document.getElementById('country-error').textContent = "";
                }

                // Validate radio buttons
                if (!language) {
                    document.getElementById('language-error').textContent = "Language is required.";
                    isValid = false;
                } else {
                    document.getElementById('language-error').textContent = "";
                }

                // Validate dropdown
                if(country === "South Africa"){
                     document.getElementById("in-peerson").style.display = 'block';
                    if (!province) {
                    document.getElementById('province-error').textContent = "Please select a province.";
                    isValid = false;
                } else {
                    document.getElementById('province-error').textContent = "";
                }

                }
               else{

                   document.getElementById("in-peerson").style.display = 'none';
               }


                return isValid;                

            }

            function validateForm2() {
        
                var isValid = true;
				var tutoringfor = document.getElementById("tutoring-for").value;
				var helpingFor = document.querySelector('input[name="help-with"]:checked');
				var ghg = helpingFor ? helpingFor.value : 'None';
				var studentName = document.getElementById('student-name').value.trim();
				var studentLastName = document.getElementById('student-last-name').value.trim();
				var yearFor = document.querySelector('input[name="year"]:checked');
				var syllabusId = document.getElementById('syllabus').value;
				var gradeId = document.getElementById('grade').value;
                var gradeIds = document.getElementById('inter-grade').value;
                var studname =  document.getElementById('stud-name').value;
                var studlast =  document.getElementById('stud-last').value;
                var country = document.getElementById('country').value;
				
               	if(ghg === "school"){
					
					if (!studentName) {
                    document.getElementById('student-name-error').textContent = "Student name is required.";
                    isValid = false;
                } else {
                    document.getElementById('student-name-error').textContent = "";
                }

				if (!studentLastName) {
                    document.getElementById('student-last-name-error').textContent = "Last name is required.";
                    isValid = false;
                } else {
                    document.getElementById('student-last-name-error').textContent = "";
                }

				if (!syllabusId) {
                    document.getElementById('syllabus-error').textContent = "Please select syllabus.";
                    isValid = false;
                } else {
                    document.getElementById('syllabus-error').textContent = "";
                }

                /*Grade*/


                 if(country === "South Africa"){

                    if (!gradeId) {
                    document.getElementById('grade-error').textContent = "Please select grade.";
                    isValid = false;
                        } else {
                            document.getElementById('grade-error').textContent = "";
                        }

                    }
                    else{

                        if (!gradeIds) {
                            document.getElementById('inter-grade-error').textContent = "Please select grade.";
                            isValid = false;
                        } else {
                            document.getElementById('inter-grade-error').textContent = "";
                        }


                    }

				}
                else{
					
					if (!yearFor) {
                    document.getElementById('year-error').textContent = "Please select year.";
                    isValid = false;
                    } else {
                    document.getElementById('year-error').textContent = "";
                    }

                    const postgradRadio = document.getElementById('year-postgrad');
                    var postType = document.querySelector('input[name="postgrad-type"]:checked');

                    if (postgradRadio.checked) {
                    
                         if(!postType){

                            document.getElementById('postType-error').textContent = "Please select qualification.";
                            isValid = false;

                         }

                         else{

                            document.getElementById('postType-error').textContent = "";

                         }
                       

                    }
                


                    if (!studname) {
                    document.getElementById('stud-name-error').textContent = "Student name required.";
                    isValid = false;
                    } else {
                    document.getElementById('stud-name-error').textContent = "";
                    }

                    if (!studlast) {
                    document.getElementById('stud-last-error').textContent = "Student surname required.";
                    isValid = false;
                    } else {
                    document.getElementById('stud-last-error').textContent = "";
                    }

				}

				// Validate dropdown
                if (!tutoringfor) {
                    document.getElementById('tutoring-for-error').textContent = "Please select one.";
                    isValid = false;
                } else {
                    document.getElementById('tutoring-for-error').textContent = "";
                }

				// Validate radio buttons
                if (!helpingFor) {
                    document.getElementById('help-with-error').textContent = "Please choose what you need help with.";
                    isValid = false;
                } else {
                    document.getElementById('help-with-error').textContent = "";
                }

                return isValid;
            }

            function validateForm3() {

            var isValid = true;
            
            var helpingFor = document.querySelector('input[name="help-with"]:checked');
            var schoolUniversity = helpingFor ? helpingFor.value : 'None';
            var subject = document.getElementById('subject').value.trim();
            var ghg = document.getElementById('tutor-style').value.trim(); 
            var addressTeaching = document.getElementById('address-inperson').value.trim(); 
            var suburbTeaching = document.getElementById('suburb-inperson').value.trim(); 
            var internet_check = document.getElementById('internet-check').value.trim();
            var qualification = document.getElementById('qualification-id').value.trim(); 
            var module = document.getElementById('module-id').value.trim();
            var specification = document.getElementById('specification-id').value.trim();

            if(schoolUniversity === 'school'){
                if (!subject) {
                    document.getElementById('subject-error').textContent = "Please select subject(s) type.";
                    isValid = false;
                } else {
                    document.getElementById('subject-error').textContent = "";
                }

            }
            else{

                if (!qualification) {
                    document.getElementById('qualification-error').textContent = "Qualification is Required.";
                    isValid = false;
                } else {
                    document.getElementById('qualification-error').textContent = "";
                }

                if (!module) {
                    document.getElementById('module-error').textContent = "Module is Required.";
                    isValid = false;
                } else {
                    document.getElementById('module-error').textContent = "";
                }

                if (!specification) {
                    document.getElementById('specification-error').textContent = "Specificatioin area is Required.";
                    isValid = false;
                } else {
                    document.getElementById('specification-error').textContent = "";
                }


            }

            if (!ghg) {
                    document.getElementById('tutor-style-error').textContent = "Please select a tutoring type.";
                    isValid = false;
                } else {
                    document.getElementById('tutor-style-error').textContent = "";
                }

                if (!addressTeaching) {
                    document.getElementById('inperson-error').textContent = "please specify.";
                    isValid = false;
                } else {
                    document.getElementById('inperson-error').textContent = "";
                }

                if(ghg === "In Person"){
					
				if (!suburbTeaching) {
                    document.getElementById('suburb-inperson-error').textContent = "please fill in your suburb.";
                    isValid = false;
                } else {
                    document.getElementById('suburb-inperson-error').textContent = "";
                }

                 }

   
				return isValid;

            }

            consult.addEventListener("click", function() {

                alert("Consultant will get in touch  with you shortly. Thank you.");

                const allData = combineFormData();

                var other = "consult";

                const dataToSend = {
                    ...allData, who : other
                };

                        fetch('/other-booking', { // Replace with your actual endpoint URL
                                method: 'POST',
                                headers: { 
                                    'Content-Type': 'application/json' 
                                },
                                body: JSON.stringify(dataToSend)
                            })
                            .then(response => response.json())
                            .then(result => {
                            
                                setTimeout(function(){
                                        window.location.href = '/';
                                    } , 2000);

                                    
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Optionally handle error response
                            });

                setTimeout(function(){
                    window.location.href = '/';
                } , 2000);
        
});

            function validateForm4() {

                var ghg = document.getElementById('tutor-style').value.trim(); 
                var helpingFor = document.querySelector('input[name="help-with"]:checked');
				var forWho = helpingFor ? helpingFor.value : 'None';
                var syllabusId = document.getElementById('syllabus').value;

                if(forWho === "school"){

                    var universityPackages = document.getElementById("universityPackages");
                    universityPackages.style.display = 'none';
                    var schoolPackages = document.getElementById("schoolPackages");
                    schoolPackages.style.display = 'flex';

                if(ghg === "Online" && (syllabusId === "IEB" || syllabusId === "CAPs")){

                    const onceOffPackage = document.getElementById('onceOffPackage');
                    onceOffPackage.textContent = 'R300'; // I changed R300 to R10 for testing

                    const basicPackage= document.getElementById('basicPackage');
                    basicPackage.textContent = 'R1100'; // or button.innerHTML = 'Submit';

                    const premiumPackage = document.getElementById('premiumPackage');
                    premiumPackage.textContent = 'R2150'; // or button.innerHTML = 'Submit';

                    const advancedPackage = document.getElementById('advancedPackage');
                    advancedPackage.textContent = 'R3250'; // or button.innerHTML = 'Submit';

                    const elitePackage =  document.getElementById('elitePackage');
                    elitePackage.textContent = 'R4350'; // or button.innerHTML = 'Submit';

                }
                else{
                    if(ghg === "Online" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel")){
                       
                       
                    
                        const onceOffPackage = document.getElementById('onceOffPackage');
                        onceOffPackage.textContent = 'R400'; // or button.innerHTML = 'Submit';

                        const basicPackage= document.getElementById('basicPackage');
                        basicPackage.textContent = 'R1550'; // or button.innerHTML = 'Submit';

                        const premiumPackage = document.getElementById('premiumPackage');
                        premiumPackage.textContent = 'R3100'; // or button.innerHTML = 'Submit';

                        const advancedPackage = document.getElementById('advancedPackage');
                        advancedPackage.textContent = 'R4650'; // or button.innerHTML = 'Submit';

                        const elitePackage =  document.getElementById('elitePackage');
                        elitePackage.textContent = 'R6200'; // or button.innerHTML = 'Submit';

                    }
                    else{
                        if(ghg === "In Person" && (syllabusId === "IEB" || syllabusId === "CAPs")){

                            

                            const onceOffPackage = document.getElementById('onceOffPackage');
                            onceOffPackage.textContent = 'R400'; // or button.innerHTML = 'Submit';

                            const basicPackage= document.getElementById('basicPackage');
                            basicPackage.textContent = 'R1550'; // or button.innerHTML = 'Submit';

                            const premiumPackage = document.getElementById('premiumPackage');
                            premiumPackage.textContent = 'R3100'; // or button.innerHTML = 'Submit';

                            const advancedPackage = document.getElementById('advancedPackage');
                            advancedPackage.textContent = 'R4650'; // or button.innerHTML = 'Submit';

                            const elitePackage =  document.getElementById('elitePackage');
                            elitePackage.textContent = 'R6200'; // or button.innerHTML = 'Submit';

                                }

                            else{
                                if(ghg === "In Person" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel")){
                       
                                  

                                        const onceOffPackage = document.getElementById('onceOffPackage');
                                        onceOffPackage.textContent = 'R550'; // or button.innerHTML = 'Submit';

                                        const basicPackage= document.getElementById('basicPackage');
                                        basicPackage.textContent = 'R2150'; // or button.innerHTML = 'Submit';

                                        const premiumPackage = document.getElementById('premiumPackage');
                                        premiumPackage.textContent = 'R4300'; // or button.innerHTML = 'Submit';

                                        const advancedPackage = document.getElementById('advancedPackage');
                                        advancedPackage.textContent = 'R6350'; // or button.innerHTML = 'Submit';

                                        const elitePackage =  document.getElementById('elitePackage');
                                        elitePackage.textContent = 'R8500'; // or button.innerHTML = 'Submit';

                                    }
                                   
                            }
                    }
                }
            }

                else{

                     var schoolPackages = document.getElementById("schoolPackages");
                     schoolPackages.style.display = 'none';
                     var universityPackages = document.getElementById("universityPackages");
                     universityPackages.style.display = 'flex';


                        var yearFor = document.querySelector('input[name="year"]:checked');
                        var yearIn = yearFor ? yearFor.value : 'None';

                       if(ghg === "In Person" && (yearIn === '1st' ||  yearIn === '2nd')){
                       
                       const onceOffPackage = document.getElementById('oneOnone');
                       onceOffPackage.textContent = 'R650'; // or button.innerHTML = 'Submit';

                       const basicPackage= document.getElementById('twoTofivePackage');
                       basicPackage.textContent = 'R450'; // or button.innerHTML = 'Submit';

                       const premiumPackage = document.getElementById('sixTo10Package');
                       premiumPackage.textContent = 'R350'; // or button.innerHTML = 'Submit';

                        }

                        else{

                            if(ghg === "Online" && (yearIn === '1st' ||  yearIn === '2nd')){
                       
                       const onceOffPackage = document.getElementById('oneOnone');
                       onceOffPackage.textContent = 'R450'; // or button.innerHTML = 'Submit';

                       const basicPackage= document.getElementById('twoTofivePackage');
                       basicPackage.textContent = 'R300'; // or button.innerHTML = 'Submit';

                       const premiumPackage = document.getElementById('sixTo10Package');
                       premiumPackage.textContent = 'R200'; // or button.innerHTML = 'Submit';

                        }

                        else{

                            if(ghg === "In Person" && (yearIn === '3rd' ||  yearIn === '4th')){
                       
                       const onceOffPackage = document.getElementById('oneOnone');
                       onceOffPackage.textContent = 'R750'; // or button.innerHTML = 'Submit';

                       const basicPackage= document.getElementById('twoTofivePackage');
                       basicPackage.textContent = 'R550'; // or button.innerHTML = 'Submit';

                       const premiumPackage = document.getElementById('sixTo10Package');
                       premiumPackage.textContent = 'R450'; // or button.innerHTML = 'Submit';

                        }

                        else{

                            if(ghg === "Online" && (yearIn === '3rd' ||  yearIn === '4th')){
                       
                       const onceOffPackage = document.getElementById('oneOnone');
                       onceOffPackage.textContent = 'R550'; // or button.innerHTML = 'Submit';

                       const basicPackage= document.getElementById('twoTofivePackage');
                       basicPackage.textContent = 'R400'; // or button.innerHTML = 'Submit';

                       const premiumPackage = document.getElementById('sixTo10Package');
                       premiumPackage.textContent = 'R300'; // or button.innerHTML = 'Submit';

                        }


                        else{

                            if(ghg === "In Person" && yearIn === 'postgrad'){
                       
                       const onceOffPackage = document.getElementById('oneOnone');
                       onceOffPackage.textContent = 'R850'; // or button.innerHTML = 'Submit';

                       const basicPackage= document.getElementById('twoTofivePackage');
                       basicPackage.textContent = 'R750'; // or button.innerHTML = 'Submit';

                       const premiumPackage = document.getElementById('sixTo10Package');
                       premiumPackage.textContent = 'R550'; // or button.innerHTML = 'Submit';

                        }
                        else{

                            if(ghg === "Online" && yearIn === 'postgrad'){
                       
                       const onceOffPackage = document.getElementById('oneOnone');
                       onceOffPackage.textContent = 'R650'; // or button.innerHTML = 'Submit';

                       const basicPackage= document.getElementById('twoTofivePackage');
                       basicPackage.textContent = 'R450'; // or button.innerHTML = 'Submit';

                       const premiumPackage = document.getElementById('sixTo10Package');
                       premiumPackage.textContent = 'R350'; // or button.innerHTML = 'Submit';

                        }
                        }

    

                        }


                        }


                        }


                        }

                
                  

                }

                    var isValid = true;

                    var message = document.getElementById('message').value.trim();
                    var secondTutor = document.querySelector('input[name="tutor-option"]:checked');
                    var ghg = secondTutor ? secondTutor.value : 'None';

                    if (!secondTutor) {
                    document.getElementById('tutor-option-error').textContent = "Please specify.";
                    isValid = false;
                    } else {
                    document.getElementById('tutor-option-error').textContent = "";
                    }
                    
                    var termsCheckbox = document.getElementById('terms');
                        if (termsCheckbox.checked) {
                            document.getElementById('terms-error').textContent = "";
                        } else {
                            document.getElementById('terms-error').textContent = "Required";
                            isValid = false;
                        }


                         return isValid;

                    }

            form_1_next_btn.addEventListener("click", function() {

                if (validateForm1()) {

                  var southGrade = document.getElementById('southGrade');
                  var interGrade = document.getElementById('interGrade');

                  var country = document.getElementById('country').value;

                  if(country === "South Africa"){
                      interGrade.style.display = 'none';
                      southGrade.style.display = 'block';
                  }
                  else{
                    southGrade.style.display = 'none';
                    interGrade.style.display = 'block';
                  }

                    form_1.style.display = "none";
                    form_2.style.display = "block";

                    form_1_btns.style.display = "none";
                    form_2_btns.style.display = "flex";

                    form_2_progessbar.classList.add("active");
                    form_1.classList.remove("active");
                }
            });

            form_2_back_btn.addEventListener("click", function() {
                form_1.style.display = "block";
                form_2.style.display = "none";

                form_1_btns.style.display = "flex";
                form_2_btns.style.display = "none";

                form_2_progessbar.classList.remove("active");
                form_1.classList.add("active");
            });

            form_2_next_btn.addEventListener("click", function() {
                if (validateForm2()) {

                    var schoolSubject = document.getElementById('schoolSubject');
                    var universitySubject = document.getElementById('universitySubject');
                    var helpingFor = document.querySelector('input[name="help-with"]:checked');
                    var schoolUniversity = helpingFor ? helpingFor.value : 'None';

                    if(schoolUniversity === 'school'){

                          universitySubject.style.display = 'none';
                          schoolSubject.style.display = 'block';
                    }
                    else{

                        schoolSubject.style.display = 'none';
                        universitySubject.style.display = 'block';
                    }

                    form_2.style.display = "none";
                    form_3.style.display = "block";

                    form_2_btns.style.display = "none";
                    form_3_btns.style.display = "flex";

                    form_3_progessbar.classList.add("active");
                    form_2.classList.remove("active");
                }
            });

            form_3_back_btn.addEventListener("click", function() {
                form_2.style.display = "block";
                form_3.style.display = "none";

                form_2_btns.style.display = "flex";
                form_3_btns.style.display = "none";

                form_3_progessbar.classList.remove("active");
                form_2.classList.add("active");
            });

            form_3_next_btn.addEventListener("click", function() {
               if (validateForm3()) {
                    form_2.style.display = "none";
                    form_3.style.display = "none";
                    form_4.style.display = "block";

                    form_2_btns.style.display = "none";
                    form_4_btns.style.display = "flex";

                }
            });

            form_4_back_btn.addEventListener("click", function() {

                const modC = document.getElementById('yesyes');
                    modC.style.backgroundColor = ''; // Reset to default
                    modC.style.width = ''; // Reset to default

                form_3.style.display = "block";
                form_4.style.display = "none";

                form_3_btns.style.display = "flex";
                form_4_btns.style.display = "none";

            });


            function applyResponsiveStyles() {
    const divContainer = document.getElementById('universityPackages');
    const modC = document.getElementById('yesyes');
    
    const currentWidth = window.innerWidth; // Get the current width of the viewport

    if (currentWidth === 480) { // Mobile view
        divContainer.style.width = '250px'; // Width for small screens
        modC.style.width = '300px'; // Width for small screens
    } 
    // Apply styles based on the current width
    if (currentWidth < 768) { // Mobile view
        divContainer.style.width = '250px'; // Width for small screens
        modC.style.width = '300px'; // Width for small screens
    } else if (currentWidth < 1024) { // Tablet view
        divContainer.style.width = '625px'; // Default width for larger screens
        modC.style.width = '780px'; // Default width for larger screens
    } else { // Large screens
        divContainer.style.width = '625px'; // Default width for larger screens
        modC.style.width = '780px'; // Default width for larger screens
    }
}

 /*window.addEventListener('resize', applyResponsiveStyles);*/

            form_4_next_btn.addEventListener("click", function() {


                if(validateForm4()) {

                    const divContainer = document.getElementById('universityPackages');

const modC = document.getElementById('yesyes');

var helpingFor = document.querySelector('input[name="help-with"]:checked');
var forWho = helpingFor ? helpingFor.value : 'None';

if (forWho === "university") {

        divContainer.style.padding = '10px'; // Add padding if desired
        divContainer.style.justifyContent = 'center'; // Change justification if needed
        applyResponsiveStyles(); // Apply responsive styles

    }


                    var syllabus = document.getElementById("syllabus").value;
                    var helpingFor = document.querySelector('input[name="help-with"]:checked');
				    var forWho = helpingFor ? helpingFor.value : 'None';

                    if(syllabus === "Other" && forWho !== "university"){

                    modal_wrapper.classList.add("active");
                    shadow.addEventListener("click", function() {
                        modal_wrapper.classList.remove("active");
                    });

                    const allData = combineFormData();

                    var other = "other";

                    const dataToSend = {
                        ...allData, who : other
                    };

                            fetch('/other-booking', { // Replace with your actual endpoint URL
                                    method: 'POST',
                                    headers: { 
                                        'Content-Type': 'application/json' 
                                    },
                                    body: JSON.stringify(dataToSend)
                                })
                                .then(response => response.json())
                                .then(result => {
                                
                                    setTimeout(function(){
                                            window.location.href = '/';
                                        } , 2000);

                                        
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Optionally handle error response
                                });

                    setTimeout(function(){
                        window.location.href = '/';
                    } , 2000);

                    }

                  else{


                    form_3.style.display = "none";
                    form_4.style.display = "none";
                    form_5.style.display = "block";

                    form_4_btns.style.display = "none";
                    form_5_btns.style.display = "flex";

                  }

                }
            });

            form_5_back_btn.addEventListener("click", function() {

                const modC = document.getElementById('yesyes');
                    modC.style.backgroundColor = ''; // Reset to default
                    modC.style.width = ''; // Reset to default

                form_4.style.display = "block";
                form_5.style.display = "none";

                form_4_btns.style.display = "flex";
                form_4_btns.style.display = "flex";

            });

						
        });


        document.getElementById("student-info").style.display = 'none';
        document.getElementById("year-selection-container").style.display='none';
        document.getElementById("in-person-teaching").style.display='none';
      
           function studentInfo(){

            document.getElementById("student-info").style.display = 'block';
            document.getElementById("year-selection-container").style.display='none';

           }

           function vasityInfo(){
            document.getElementById("year-selection-container").style.display='block';
            document.getElementById("student-info").style.display = 'none';
        
           }

           function handleTutorStyleChange() {
        const selectedValue = document.getElementById('tutor-style').value;
        if (selectedValue === 'Online') {
            onlineInfo();
        } else if (selectedValue === 'In Person') {
            inPersonInfo();
        }
    }

        function inPersonInfo(){

            document.getElementById("internetCheck").style.display = 'none';
          document.getElementById("in-person-teaching").style.display = 'block';
           
         }

         document.getElementById("internetCheck").style.display = 'none';

         function onlineInfo(){

                document.getElementById("in-person-teaching").style.display = 'none';
                document.getElementById("internetCheck").style.display = 'block';

            }

		/*var modal = document.getElementById("modal");
        var btn = document.getElementById("open-popup");*/

		function openOpenopen(name, email, subjects, grades , subsub) {

            if(subjects === undefined){

                const syll = "CAPs,IEB,Cambridge,IB,Pearson Edexcel";
                const syllabusArray = syll.split(',').map(item => item.trim());

                const syllabi = syllabusArray.map(item => {
                        return { value: item, text: item };
                    });

                const syllabusSelect = document.getElementById('syllabus');

                while (syllabusSelect.options.length > 1) {

                    const secondOption = syllabusSelect.options[1];

                    // Check if the second option exists and remove it
                    if (secondOption) {
                        syllabusSelect.remove(1); // Remove the second option
                    } else {
                        break; // Exit the loop if no second option exists
                    }
                }


                syllabi.forEach(syllabus => {
                    const option = document.createElement('option');
                    option.value = syllabus.value;
                    option.textContent = syllabus.text;

                    syllabusSelect.appendChild(option);

                });
                            
            }
           else{
            const syllabusArray = subjects.split(',').map(item => item.trim());

            const syllabi = syllabusArray.map(item => {
                    return { value: item, text: item };
                });

                const syllabusSelect = document.getElementById('syllabus');

                while (syllabusSelect.options.length > 1) {

                    const secondOption = syllabusSelect.options[1];

                    // Check if the second option exists and remove it
                    if (secondOption) {
                        syllabusSelect.remove(1); // Remove the second option
                    } else {
                        break; // Exit the loop if no second option exists
                    }
                }


                syllabi.forEach(syllabus => {
                    const option = document.createElement('option');
                    option.value = syllabus.value;
                    option.textContent = syllabus.text;

                    syllabusSelect.appendChild(option);

                });

           }

           /*Grades Start Here*/

           if(grades === undefined){

                    const grd = "GRD:1,GRD:2,GRD:3,GRD:4,GRD:5,GRD:6,GRD:7,GRD:8,GRD:9,GRD:10,GRD:11,GRD:12";
                    const gradesArray = grd.split(',').map(item => item.trim());

                    const gr = gradesArray.map(item => {
                            return { value: item, text: item };
                        });

                    const gradesSelect = document.getElementById('grade');

                    while (gradesSelect.options.length > 0) {

                        const secondOption = gradesSelect.options[0];

                        // Check if the second option exists and remove it
                        if (secondOption) {
                            gradesSelect.remove(0); // Remove the second option
                        } else {
                            break; // Exit the loop if no second option exists
                        }
                    }


                    gr.forEach(gradee => {
                        const option = document.createElement('option');
                        option.value = gradee.value;
                        option.textContent = gradee.text;

                        gradesSelect.appendChild(option);

                    });
                                
                    }
                        else{
                            const gradesArray = grades.split(',').map(item => item.trim());

                            const gr = gradesArray.map(item => {
                                                    return { value: item, text: item };
                                                });

                                                const gradesSelect = document.getElementById('grade');

                        while (gradesSelect.options.length > 0) {

                            const secondOption = gradesSelect.options[0];

                            // Check if the second option exists and remove it
                            if (secondOption) {
                                gradesSelect.remove(0); // Remove the second option
                            } else {
                                break; // Exit the loop if no second option exists
                            }
                        }


                            gr.forEach(gradee => {
                                const option = document.createElement('option');
                                option.value = gradee.value;
                                option.textContent = gradee.text;

                                gradesSelect.appendChild(option);

                            });

                            }


           /*Grades End Here*/

           /*Subects Start Here*/
           const defaultSubjects = "Mathematics, Mathematics Literacy, English, Afrikaans, IsiZulu, Physics, Life Sciences, Physical Sciences, Biology, Chemistry, Natural Sciences, E.M.S, Sepedi, Accounting, History, Geography, German, Computer Science, Information Technology, Combined Science, Marine Science, Social Sciences, Technology, Humanities and Social Sciences, Creative Arts, Life Orientation, Life Skills, Business Studies, Economics, Sociology, Tourism, Travel & Tourism, French, Spanish, Portuguese, Engineering Graphics and Design, Sesotho, Setswana, IsiNdebele, Tshivenda, Xitsonga, Arabic, Italian, Computer Application Technology, Chinese, Swahili, Hindi, Environmental Management, Thai, Turkish, Vietnamese, Malay, IsiXhosa, Urdu, Psychology, Enterprise, Civil Technology, Electrical Technology, Mechanical Technology, Dance Studies, Design, Dramatic Arts, Agricultural Management Practices, Design & Technology, Drama, Chinese, Agricultural Sciences, Music, Agricultural Technology, Physical Education";

const subjectsArray = (subsub || defaultSubjects).split(',').map(item => item.trim());

const subjectContainer = document.getElementById('subjectContainer');


// Clear existing checkboxes
subjectContainer.innerHTML = '';

// Calculate the maximum length of subject names
const maxSubjectLength = Math.max(...subjectsArray.map(subject => subject.length));

// Increased spacing values
const baseGap = 10; // Increased base gap for styling
const dynamicGap = maxSubjectLength * 2; // Increased multiplier for more spacing
const gapSize = Math.max(baseGap, dynamicGap); // Ensure the gap isn't too small

const columnCount = 4; // Number of columns to display

function appendCheckboxes() {
    let wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap'; // Allow wrapping to the next line
    wrapper.style.gap = `${gapSize}px`; // Space between checkboxes based on longest subject

    subjectsArray.forEach((subject, index) => {
        const label = document.createElement('label');
        label.className = 'subject-label'; // Add class to the label
        label.style.display = 'flex'; // Use flex to align checkbox and text
        label.style.alignItems = 'center'; // Center vertically
        label.style.width = 'calc(25% - 15px)'; // Set width for each label to fit 4 columns and adjust for gaps
        label.style.overflow = 'hidden'; // Hide overflow text
        label.style.textOverflow = 'ellipsis'; // Show ellipsis for overflow text
        label.style.whiteSpace = 'nowrap'; // Prevent text wrapping

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = subject;
        checkbox.onchange = updateSubjects; // Assuming updateSubjects is defined elsewhere

        // Set the label text
        label.textContent = subject; // Set the text for the label

        // Append checkbox to label
        label.prepend(checkbox); // Add checkbox before the label text

        // Check if the screen width is greater than 768px
        if (window.innerWidth > 768) {
            // Append the label to the wrapper only if not a small screen
            
            wrapper.appendChild(label);
        }

        // Append the wrapper to the container after every specified number of subjects (columns)
        if ((index + 1) % columnCount === 0) {
            subjectContainer.appendChild(wrapper); // Append the current column set
            wrapper = document.createElement('div'); // Create a new wrapper for the next column
            wrapper.style.display = 'flex';
            wrapper.style.flexWrap = 'wrap'; // Allow wrapping to the next line
            wrapper.style.gap = `${gapSize}px`; // Space between checkboxes based on longest subject
        }
    });

    // Append remaining subjects if there are less than 'columnCount' in the last wrapper
    if (wrapper.childElementCount > 0) {
        subjectContainer.appendChild(wrapper);
    }
}

// Call the function to append checkboxes initially
appendCheckboxes();

// Add an event listener for window resize
window.addEventListener('resize', () => {
    // Clear existing checkboxes
    subjectContainer.innerHTML = '';
    // Re-append the checkboxes based on current screen width
    appendCheckboxes();
});

           /*Subects End Here*/

            const button = document.getElementById('tutorBtn');
            const tutorBtnClass = document.getElementById('tutorBtnClass');
           
            const directTutors = document.querySelectorAll('.directTutor');
            const otherOption = document.getElementById('other-option');

            if (event.target === button || event.target === tutorBtnClass) {
                // The button was clicked
                directTutors.forEach(tutor => {
                    tutor.textContent = 'BOOK A PERSONALIZED TUTOR';
                });
                otherOption.style.display = 'block'; // Show the "Other" option

                const tutorOptionGroup = document.getElementById('tutor-option-group');
                tutorOptionGroup.style.display = 'none'; // Hide the radio buttons

                
                const tutorOptionInputs = document.getElementsByName('tutor-option');
                for (let input of tutorOptionInputs) {
                    if (input.value === 'No') {
                        input.checked = true; 
                    }
                }
                

            } else {
                directTutors.forEach(tutor => {
                    tutor.textContent = 'Book ' + name + ' for Tutoring!';
                });
                otherOption.style.display = 'none'; // Hide the "Other" option
                document.querySelector("#syllabus option:first-child").textContent = "";

                const tutorOptionGroup = document.getElementById('tutor-option-group');
                    tutorOptionGroup.style.display = 'block'; // Hide the radio buttons



                 }

			document.getElementById("modal").style.display = 'block';
			var span = document.getElementById("close-popup");

			var tutorName = document.getElementById('hiddenTutorName');
			tutorName.value = name;

			var tutorEmail = document.getElementById('hiddenTutorEmail');
			tutorEmail.value = email;

			span.onclick = function() {
            modal.style.display = "none";
            }

			window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
         }

		}

		function formDataToObject(formData) {
    const data = {};
    formData.forEach((value, key) => {
        // Handle multiple values for the same key
        if (data[key]) {
            // If value is already an array, push the new value
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                // Convert existing value to an array and add new value
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    });
    return data;
}

function combineFormData() {

    const form1 = document.getElementById('contact-form');
    const form2 = document.getElementById('additional-form');
    const form3 = document.getElementById('submit-form');
    const form4 = document.getElementById('formFour');

    const form1Data = new FormData(form1);
    const form2Data = new FormData(form2);
    const form3Data = new FormData(form3);
    const form4Data = new FormData(form4);

    const data1 = formDataToObject(form1Data);
    const data2 = formDataToObject(form2Data);
    const data3 = formDataToObject(form3Data);
    const data4 = formDataToObject(form4Data);

    // Combine all data into a single object
    return { ...data1, ...data2, ...data3, ...data4,};
}



document.addEventListener('DOMContentLoaded', (event) => {
    // Get the buttons by their IDs
    const onceOffButton = document.getElementById('onceOffPackage');
    const basicButton = document.getElementById('basicPackage');
    const premiumButton = document.getElementById('premiumPackage');
    const advancedButton = document.getElementById('advancedPackage');
    const eliteButton = document.getElementById('elitePackage');

    const oneOnone = document.getElementById('oneOnone');
    const twoTofivePackage = document.getElementById('twoTofivePackage');
    const sixTo10Package = document.getElementById('sixTo10Package');

    // Function to handle button clicks
    function handleButtonClick(event) {
        // Get the ID of the button that was clicked
        const buttonId = event.target.id;

        
        var syllabusId = document.getElementById('syllabus').value;
  
        // You can use a switch statement or if-else logic to handle specific buttons
        switch (buttonId) {
            case 'onceOffPackage':
            //alert('Once Off Package selected');

            let num;
      
                          do {
                                num = prompt("How many sessions do you want? (Please enter a number greater than 0)");
                                
                                // If user cancels, exit the loop
                                if (num === null) {
                                    console.log("Prompt was canceled.");
                                    break; // Exit the loop
                                }

                            } while (isNaN(num) || num <= 0);


            var amountTopay;
            var typePackage = 'Once off Package';
            var ghg = document.getElementById('tutor-style').value.trim(); 

            if(ghg === "Online" && (syllabusId === "IEB" || syllabusId === "CAPs")){
                 amountTopay = '300'; // amount to pay; i changed R300 to R10 for testing
               }
               else{

               if(ghg === "Online" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel" )){
                       
                       amountTopay = '400'; // amount to pay;

               }

               else{

                if(ghg === "In Person" && (syllabusId === "IEB" || syllabusId === "CAPs")){

                        amountTopay = '400'; // amount to pay;

                        }

                        else{

                            if(ghg === "In Person" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                       
                                    amountTopay = '550'; // amount to pay;
                
                                }

                        }

               }

            }

               amountTopay *= num;

               alert('Once Off Package selected. Amount to pay : R'+amountTopay);

                const allData = combineFormData();

                const dataToSend = {
                    ...allData, // Spread the existing data
                    amount: amountTopay , package : typePackage
                };

                fetch('/booking', { // Replace with your actual endpoint URL
								method: 'POST',
								headers: { 
									'Content-Type': 'application/json' 
								},
								body: JSON.stringify(dataToSend)
							})
							.then(response => response.json())
							.then(result => {
							
								// Optionally show success message or handle response
							})
							.catch(error => {
								console.error('Error:', error);
								// Optionally handle error response
							});

                            setTimeout(function(){
                        window.location.href = '/payment';
                    } , 2000);

                break;
            case 'basicPackage':
                alert('Basic Package selected');

                var amountTopay;
                var typePackage = 'Basic Package';
                var ghg = document.getElementById('tutor-style').value.trim(); 

                if(ghg === "Online" && (syllabusId === "IEB" || syllabusId === "CAPs")){
                 amountTopay = '1100'; // amount to pay;
                  }
                  else{
                  if(ghg === "Online" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                      amountTopay = '1550'; // amount to pay;

                  }

                  else{

                    if(ghg === "In Person" && (syllabusId === "IEB" || syllabusId === "CAPs")){

                        amountTopay = '1550'; // or button.innerHTML = 'Submit';

                        }
                        else{

                            if(ghg === "In Person" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel" )){
                            amountTopay = '2150'; // amount to pay;
                  }

                            
                        }
                  }

                }

                const all = combineFormData();

                const ToSend = {
                    ...all, // Spread the existing data
                    amount: amountTopay , package : typePackage
                };

                fetch('/booking', { // Replace with your actual endpoint URL
								method: 'POST',
								headers: { 
									'Content-Type': 'application/json' 
								},
								body: JSON.stringify(ToSend)
							})
							.then(response => response.json())
							.then(result => {
								
								// Optionally show success message or handle response
							})
							.catch(error => {
								console.error('Error:', error);
								// Optionally handle error response
							});

                            setTimeout(function(){
                        window.location.href = '/payment';
                    } , 2000);

                break;
            case 'premiumPackage':
                alert('Premium Package selected');

                var amountTopay;
                var typePackage = 'Premium Package';
                var ghg = document.getElementById('tutor-style').value.trim(); 

                if(ghg === "Online" && (syllabusId === "IEB" || syllabusId === "CAPs")){
                amountTopay = '2150'; // amount to pay;
                }
                else{
                    if(ghg === "Online" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                       amountTopay = '3100'; // amount to pay;
                }

                else{

                    if(ghg === "In Person" && (syllabusId === "IEB" || syllabusId === "CAPs")){

                            amountTopay = '3100'; // amount to pay;

                            }
                            else{

                                if(ghg === "In Person" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                       amountTopay = '4300'; // amount to pay;
                }

             }

                }

                }

                const dataall = combineFormData();

                const ToSendData = {
                    ...dataall, // Spread the existing data
                    amount: amountTopay , package : typePackage
                };

                fetch('/booking', { // Replace with your actual endpoint URL
								method: 'POST',
								headers: { 
									'Content-Type': 'application/json' 
								},
								body: JSON.stringify(ToSendData)
							})
							.then(response => response.json())
							.then(result => {
								
								// Optionally show success message or handle response
							})
							.catch(error => {
								console.error('Error:', error);
								// Optionally handle error response
							});

                            setTimeout(function(){
                        window.location.href = '/payment';
                    } , 2000);

                break;
            case 'advancedPackage':
                alert('Advanced Package selected');

                var amountTopay;
                var typePackage = 'Advanced Package';
                var ghg = document.getElementById('tutor-style').value.trim(); 

                if(ghg === "Online" && (syllabusId === "IEB" || syllabusId === "CAPs")){
                 amountTopay = '3250'; // amount to pay;
                  }
                  else{
                    if(ghg === "Online" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                     amountTopay = '4650'; // amount to pay;
                  }

                  else{
                    if(ghg === "In Person" && (syllabusId === "IEB" || syllabusId === "CAPs")){
                   amountTopay = '4650'; // amount to pay;
                  }
                  else{

                    if(ghg === "In Person" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel" )){
                       amountTopay = '6350'; // amount to pay;
                      }

                  }

                  }

                  }

                const data = combineFormData();

                const sendData = {
                    ...data, // Spread the existing data
                    amount: amountTopay, package : typePackage
                };

                fetch('/booking', { // Replace with your actual endpoint URL
                                method: 'POST',
                                headers: { 
                                    'Content-Type': 'application/json' 
                                },
                                body: JSON.stringify(sendData)
                            })
                            .then(response => response.json())
                            .then(result => {
                                
                                // Optionally show success message or handle response
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Optionally handle error response
                            });

                            setTimeout(function(){
                        window.location.href = '/payment';
                    } , 2000);


                break;
            case 'elitePackage':
               alert('Elite Package selected');
               var  typePackage = 'Elite Package';

               var amountTopay;
               var ghg = document.getElementById('tutor-style').value.trim(); 

                if(ghg === "Online" && (syllabusId === "IEB" || syllabusId === "CAPs")){
                amountTopay = '4350'; // amount to pay;
                }
                else{
                    if(ghg === "Online" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                    amountTopay = '6200'; // or button.innerHTML = 'Submit';

                    }
                    else{

                        if(ghg === "In Person" && syllabusId === "IEB" || syllabusId === "CAPs"){
                        amountTopay = '6200'; // or button.innerHTML = 'Submit';

                            }
                            else{

                                if(ghg === "In Person" && (syllabusId === "Cambridge" || syllabusId === "IB" || syllabusId === "Pearson Edexcel") ){
                      amountTopay = '8500'; // or button.innerHTML = 'Submit';

                   }

                            }
                    }

                }

                const gatherData = combineFormData();

                const dataSend = {
                    ...gatherData, // Spread the existing data
                    amount: amountTopay , package : typePackage
                };

                fetch('/booking', { // Replace with your actual endpoint URL
                                method: 'POST',
                                headers: { 
                                    'Content-Type': 'application/json' 
                                },
                                body: JSON.stringify(dataSend)
                            })
                            .then(response => response.json())
                            .then(result => {
                                
                                // Optionally show success message or handle response
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Optionally handle error response
                            });

                            setTimeout(function(){
                        window.location.href = '/payment';
                    } , 2000);

                break;

                case 'oneOnone':

                let value;
                var ghg = document.getElementById('tutor-style').value.trim(); 

                          do {
                                value = prompt("How many sessions do you want? (Please enter a number greater than 0)");
                                
                                // If user cancels, exit the loop
                                if (value === null) {
                                    console.log("Prompt was canceled.");
                                    break; // Exit the loop
                                }

                            } while (isNaN(value) || value <= 0);

                  //const value = prompt("How many sessions do you want?");

                  var yearFor = document.querySelector('input[name="year"]:checked');
                  var yearIn = yearFor ? yearFor.value : 'None';

                   var amountTopay;
                   var calcAmount;
                   var discountAmount;
                   var amountAfterDiscount;
                   var trackDiscount = 0;
                   var  typePackage = 'One on One: University';

                   if(ghg === "In Person" && yearIn === '1st' ||  yearIn === '2nd'){

                         calcAmount = 650 * value;

                              if(value >= 8 && value <= 11){

                                 discountAmount = (5 / 100) * calcAmount; // 5% discount applied
                                 amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                 amountAfterDiscount = amountAfterDiscount.toString();
                                 amountTopay = amountAfterDiscount;
                                 trackDiscount = 1;
                                
                              }
                              else{
                                if(value >= 12 && value <= 19){

                                    discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                                    amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                    amountAfterDiscount = amountAfterDiscount.toString();
                                    amountTopay = amountAfterDiscount;
                                    trackDiscount = 2;
                                  
                                    }
                                    else{
                                        if(value >= 20 ){

                                        discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                                        amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                        amountAfterDiscount = amountAfterDiscount.toString();
                                        amountTopay = amountAfterDiscount;
                                        trackDiscount =3;
                                        }
                                        else{

                                            if(value <= 7){

                                            calcAmount = calcAmount.toString();
                                            amountTopay = calcAmount;

                                            }
                                        }
                                    }
                              }

                   }
                   else{

                    if(ghg === "Online" && yearIn === '1st' ||  yearIn === '2nd'){

                         calcAmount = 450 * value;

                         if(value >= 8 && value <= 11){

                            discountAmount = (5 / 100) * calcAmount; // 5% discount applied
                            amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                            amountAfterDiscount = amountAfterDiscount.toString();
                            amountTopay = amountAfterDiscount;
                            trackDiscount = 1;
                            
                            }
                            else{
                            if(value >= 12 && value <= 19){

                            discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                            amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                            amountAfterDiscount = amountAfterDiscount.toString();
                            amountTopay = amountAfterDiscount;
                            trackDiscount = 2;
                            
                            }
                            else{
                                if(value >= 20 ){

                                discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                                amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                amountAfterDiscount = amountAfterDiscount.toString();
                                amountTopay = amountAfterDiscount;
                                trackDiscount = 3;
                                
                                }
                                else{

                                    if(value <= 7){

                                    calcAmount = calcAmount.toString();
                                    amountTopay = calcAmount;

                                    }
                                }
                            }
                            }

                    }
                    else{
                        if(ghg === "Online" && yearIn === '3rd' ||  yearIn === '4th'){

                            calcAmount = 550 * value;
                            
                              if(value >= 8 && value <= 11){

                                 discountAmount = (5 / 100) * calcAmount; // 5% discount applied
                                 amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                 amountAfterDiscount = amountAfterDiscount.toString();
                                 amountTopay = amountAfterDiscount;
                                 trackDiscount = 1;
                                 
                              }
                              else{
                                if(value >= 12 && value <= 19){

                                    discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                                    amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                    amountAfterDiscount = amountAfterDiscount.toString();
                                    amountTopay = amountAfterDiscount;
                                    trackDiscount = 2;
                                    
                                    }
                                    else{
                                        if(value >= 20 ){

                                        discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                                        amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                        amountAfterDiscount = amountAfterDiscount.toString();
                                        amountTopay = amountAfterDiscount;
                                        trackDiscount = 3;
                                        
                                        }
                                        else{

                                            if(value <= 7){

                                            calcAmount = calcAmount.toString();
                                            amountTopay = calcAmount;

                                            }
                                        }
                                    }
                              }
                           

                            }
                            else{
                                if(ghg === "In Person" && yearIn === '3rd' ||  yearIn === '4th'){

                                calcAmount = 750 * value;

                              if(value >= 8 && value <= 11){

                                 discountAmount = (5 / 100) * calcAmount; // 5% discount applied
                                 amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                 amountAfterDiscount = amountAfterDiscount.toString();
                                 amountTopay = amountAfterDiscount;
                                 trackDiscount = 1;
                                
                              }
                              else{
                                if(value >= 12 && value <= 19){

                                    discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                                    amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                    amountAfterDiscount = amountAfterDiscount.toString();
                                    amountTopay = amountAfterDiscount;
                                    trackDiscount = 2;
                                   
                                    }
                                    else{
                                        if(value >= 20 ){

                                        discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                                        amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                        amountAfterDiscount = amountAfterDiscount.toString();
                                        amountTopay = amountAfterDiscount;
                                        trackDiscount = 3;
                                        
                                        }
                                        else{

                                            if(value <= 7){

                                            calcAmount = calcAmount.toString();
                                            amountTopay = calcAmount;

                                            }
                                        }
                                    }
                              }

                                }

                                else{
                                    if(ghg === "In Person" && yearIn === 'postgrad'){

                                        calcAmount = 850 * value;

                              if(value >= 8 && value <= 11){

                                 discountAmount = (5 / 100) * calcAmount; // 5% discount applied
                                 amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                 amountAfterDiscount = amountAfterDiscount.toString();
                                 amountTopay = amountAfterDiscount;
                                 trackDiscount = 1;
                                 
                              }
                              else{
                                if(value >= 12 && value <= 19){

                                    discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                                    amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                    amountAfterDiscount = amountAfterDiscount.toString();
                                    amountTopay = amountAfterDiscount;
                                    trackDiscount = 2;
                                    
                                    }
                                    else{
                                        if(value >= 20 ){

                                        discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                                        amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                        amountAfterDiscount = amountAfterDiscount.toString();
                                        amountTopay = amountAfterDiscount;
                                        trackDiscount = 3;
                                        
                                        }
                                        else{

                                            if(value <= 7){

                                            calcAmount = calcAmount.toString();
                                            amountTopay = calcAmount;

                                            }
                                        }
                                    }
                              }

                                        }
                                        else{
                                            if(ghg === "Online" && yearIn === 'postgrad'){

                                            calcAmount = 650 * value;

                              if(value >= 8 && value <= 11){

                                 discountAmount = (5 / 100) * calcAmount; // 5% discount applied
                                 amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                 amountAfterDiscount = amountAfterDiscount.toString();
                                 amountTopay = amountAfterDiscount;
                                 trackDiscount = 1;
                                
                              }
                              else{
                                if(value >= 12 && value <= 19){

                                    discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                                    amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                    amountAfterDiscount = amountAfterDiscount.toString();
                                    amountTopay = amountAfterDiscount;
                                    trackDiscount = 2;
                                    
                                    }
                                    else{
                                        if(value >= 20 ){

                                        discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                                        amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                                        amountAfterDiscount = amountAfterDiscount.toString();
                                        amountTopay = amountAfterDiscount;
                                        trackDiscount = 3;
                                        

                                        }
                                        else{

                                            if(value <= 7){

                                            calcAmount = calcAmount.toString();
                                            amountTopay = calcAmount;

                                            }
                                        }
                                    }
                              }

                                          }

                                        }

                                }

                            }

                    }

                   }

                   if (value !== null) {
                                  
                    if(trackDiscount === 1){

                       alert("5% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

                   }
                   else{
                    if(trackDiscount === 2){

                        alert("10% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

                            }
                            else{

                                if(trackDiscount === 3){

                                    alert("20% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

                                }

                                else{

                                    alert("Amount to pay R"+amountTopay);
                                }

                            }

                   }

                   const gatheredData = combineFormData();

                    const dataSendout = {
                        ...gatheredData, // Spread the existing data
                        amount: amountTopay , package : typePackage , sessions : value
                    };

                    fetch('/booking', { // Replace with your actual endpoint URL
                                    method: 'POST',
                                    headers: { 
                                        'Content-Type': 'application/json' 
                                    },
                                    body: JSON.stringify(dataSendout)
                                })
                                .then(response => response.json())
                                .then(result => {
                                    
                                    // Optionally show success message or handle response
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Optionally handle error response
                                });

                                setTimeout(function(){
                            window.location.href = '/payment';
                        } , 2000);

                    }

                break;

                case 'twoTofivePackage':
                var ghg = document.getElementById('tutor-style').value.trim(); 

                let valuee;

                    do {
                        valuee= prompt("How many sessions do you want? (Please enter a number greater than 0)");
                        
                        // If user cancels, exit the loop
                        if (valuee === null) {
                            console.log("Prompt was canceled.");
                            break; // Exit the loop
                        }

                    } while (isNaN(valuee) || valuee <= 0);

var yearFor = document.querySelector('input[name="year"]:checked');
var yearIn = yearFor ? yearFor.value : 'None';

 var amountTopay;
 var calcAmount;
 var discountAmount;
 var amountAfterDiscount;
 var trackDiscount = 0;
 var typePackage = 'Two to Five : University';

 if(ghg === "In Person" && yearIn === '1st' ||  yearIn === '2nd'){

       calcAmount = 450 * valuee;

            if(valuee >= 8 && valuee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
              
            }
            else{
              if(valuee >= 12 && valuee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                
                  }
                  else{
                      if(valuee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount =3;
                      }
                      else{

                          if(valuee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

 }
 else{

  if(ghg === "Online" && yearIn === '1st' ||  yearIn === '2nd'){

       calcAmount = 300 * valuee;

       if(valuee >= 8 && valuee <= 11){

          discountAmount = (5 / 100) * calcAmount; // 5% discount applied
          amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
          amountAfterDiscount = amountAfterDiscount.toString();
          amountTopay = amountAfterDiscount;
          trackDiscount = 1;
          
          }
          else{
          if(valuee >= 12 && valuee <= 19){

          discountAmount = (10 / 100) * calcAmount; // 10% discount applied
          amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
          amountAfterDiscount = amountAfterDiscount.toString();
          amountTopay = amountAfterDiscount;
          trackDiscount = 2;
          
          }
          else{
              if(valuee >= 20 ){

              discountAmount = (20 / 100) * calcAmount; // 20% discount applied
              amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
              amountAfterDiscount = amountAfterDiscount.toString();
              amountTopay = amountAfterDiscount;
              trackDiscount = 3;
              
              }
              else{

                  if(valuee <= 7){

                  calcAmount = calcAmount.toString();
                  amountTopay = calcAmount;

                  }
              }
          }
          }

  }
  else{
      if(ghg === "Online" && yearIn === '3rd' ||  yearIn === '4th'){

          calcAmount = 400 * valuee;
          
            if(valuee >= 8 && valuee <= 11){

               discountAmount = (5 / 100) * calcAmount; 
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
               
            }
            else{
              if(valuee >= 12 && valuee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                  
                  }
                  else{
                      if(valuee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      
                      }
                      else{

                          if(valuee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }
         

          }
          else{
              if(ghg === "In Person" && yearIn === '3rd' ||  yearIn === '4th'){

              calcAmount = 550 * valuee;

            if(valuee >= 8 && valuee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
              
            }
            else{
              if(valuee >= 12 && valuee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                 
                  }
                  else{
                      if(valuee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      
                      }
                      else{

                          if(valuee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

              }

              else{
                  if(ghg === "In Person" && yearIn === 'postgrad'){

                      calcAmount = 750 * valuee;

            if(valuee >= 8 && valuee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
               
            }
            else{
              if(valuee >= 12 && valuee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                  
                  }
                  else{
                      if(valuee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      
                      }
                      else{

                          if(valuee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

                      }
                      else{
                          if(ghg === "Online" && yearIn === 'postgrad'){

                          calcAmount = 450 * valuee;

            if(valuee >= 8 && valuee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
              
            }
            else{
              if(valuee >= 12 && valuee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                  
                  }
                  else{
                      if(valuee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      

                      }
                      else{

                          if(valuee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

                        }

                      }

              }

          }

  }

 }

 if (valuee !== null) {

 if(trackDiscount === 1){

     alert("5% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

 }
 else{
  if(trackDiscount === 2){

      alert("10% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

          }
          else{

              if(trackDiscount === 3){

                  alert("20% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

              }

              else{

                  alert("Amount to pay R"+amountTopay);
              }

          }

               }

                    const gd= combineFormData();

                        const dso = {
                            ...gd, // Spread the existing data
                            amount: amountTopay , package : typePackage , sessions : valuee
                        };

    
                    fetch('/booking', { // Replace with your actual endpoint URL
                                    method: 'POST',
                                    headers: { 
                                        'Content-Type': 'application/json' 
                                    },
                                    body: JSON.stringify(dso)
                                })
                                .then(response => response.json())
                                .then(result => {
                                    
                                    // Optionally show success message or handle response
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Optionally handle error response
                                });

                                setTimeout(function(){
                            window.location.href = '/payment';
                        } , 2000);

                          }

                break;

                case 'sixTo10Package':

                let valueee;
                var ghg = document.getElementById('tutor-style').value.trim(); 
                    do {
                        valueee = prompt("How many sessions do you want? (Please enter a number greater than 0)");
                        
                        // If user cancels, exit the loop
                        if (valueee === null) {
                            console.log("Prompt was canceled.");
                            break; // Exit the loop
                        }

                    } while (isNaN(valueee) || valueee <= 0);

                    var yearFor = document.querySelector('input[name="year"]:checked');
                    var yearIn = yearFor ? yearFor.value : 'None';

                    var amountTopay;
                    var calcAmount;
                    var discountAmount;
                    var amountAfterDiscount;
                    var trackDiscount = 0;
                    var typePackage = 'Six to Ten : University';

 if(ghg === "In Person" && yearIn === '1st' ||  yearIn === '2nd'){

       calcAmount = 350 * valueee;

            if(valueee >= 8 && valueee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
              
            }
            else{
              if(valueee >= 12 && valueee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                
                  }
                  else{
                      if(valueee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount =3;
                      }
                      else{

                          if(valueee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

 }
 else{

  if(ghg === "Online" && yearIn === '1st' ||  yearIn === '2nd'){

       calcAmount = 200 * valueee;

       if(valueee >= 8 && valueee <= 11){

          discountAmount = (5 / 100) * calcAmount; // 5% discount applied
          amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
          amountAfterDiscount = amountAfterDiscount.toString();
          amountTopay = amountAfterDiscount;
          trackDiscount = 1;
          
          }
          else{
          if(valueee >= 12 && valueee <= 19){

          discountAmount = (10 / 100) * calcAmount; // 10% discount applied
          amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
          amountAfterDiscount = amountAfterDiscount.toString();
          amountTopay = amountAfterDiscount;
          trackDiscount = 2;
          
          }
          else{
              if(valueee >= 20 ){

              discountAmount = (20 / 100) * calcAmount; // 20% discount applied
              amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
              amountAfterDiscount = amountAfterDiscount.toString();
              amountTopay = amountAfterDiscount;
              trackDiscount = 3;
              
              }
              else{

                  if(valueee <= 7){

                  calcAmount = calcAmount.toString();
                  amountTopay = calcAmount;

                  }
              }
          }
          }

  }
  else{
      if(ghg === "Online" && yearIn === '3rd' ||  yearIn === '4th'){

          calcAmount = 300 * valueee;
          
            if(valueee >= 8 && valueee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
               
            }
            else{
              if(valueee >= 12 && valueee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                  
                  }
                  else{
                      if(valueee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      
                      }
                      else{

                          if(valueee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }
         

          }
          else{
              if(ghg === "In Person" && yearIn === '3rd' ||  yearIn === '4th'){

              calcAmount = 450 * valueee;

            if(valueee >= 8 && valueee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
              
            }
            else{
              if(valueee >= 12 && valueee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                 
                  }
                  else{
                      if(valueee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      
                      }
                      else{

                          if(valueee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

              }

              else{
                  if(ghg === "In Person" && yearIn === 'postgrad'){

                      calcAmount = 550 * valueee;

            if(valueee >= 8 && valueee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
               
            }
            else{
              if(valueee >= 12 && valueee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                  
                  }
                  else{
                      if(valueee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      
                      }
                      else{

                          if(valueee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

                      }
                      else{
                          if(ghg === "Online" && yearIn === 'postgrad'){

                          calcAmount = 350 * valueee;

            if(valueee >= 8 && valueee <= 11){

               discountAmount = (5 / 100) * calcAmount; // 5% discount applied
               amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
               amountAfterDiscount = amountAfterDiscount.toString();
               amountTopay = amountAfterDiscount;
               trackDiscount = 1;
              
            }
            else{
              if(valueee >= 12 && valueee <= 19){

                  discountAmount = (10 / 100) * calcAmount; // 10% discount applied
                  amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                  amountAfterDiscount = amountAfterDiscount.toString();
                  amountTopay = amountAfterDiscount;
                  trackDiscount = 2;
                  
                  }
                  else{
                      if(valueee >= 20 ){

                      discountAmount = (20 / 100) * calcAmount; // 20% discount applied
                      amountAfterDiscount = calcAmount - discountAmount; // Subtract the discount
                      amountAfterDiscount = amountAfterDiscount.toString();
                      amountTopay = amountAfterDiscount;
                      trackDiscount = 3;
                      

                      }
                      else{

                          if(valueee <= 7){

                          calcAmount = calcAmount.toString();
                          amountTopay = calcAmount;

                          }
                      }
                  }
            }

                        }

                      }

              }

          }

  }

 }
 if (valueee !== null) {

 if(trackDiscount === 1){

     alert("5% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

 }
 else{
  if(trackDiscount === 2){

      alert("10% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

          }
          else{

              if(trackDiscount === 3){

                  alert("20% discount of R"+calcAmount  + " applied. Amount to pay R"+amountTopay);

              }

              else{

                  alert("Amount to pay R"+amountTopay);
              }

          }

 }

                    const outData = combineFormData();

                    const sendOut = {
                        ...outData, // Spread the existing data
                        amount: amountTopay , package : typePackage , sessions : valueee
                    };

                    fetch('/booking', { // Replace with your actual endpoint URL
                                    method: 'POST',
                                    headers: { 
                                        'Content-Type': 'application/json' 
                                    },
                                    body: JSON.stringify(sendOut)
                                })
                                .then(response => response.json())
                                .then(result => {
                                    
                                    // Optionally show success message or handle response
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Optionally handle error response
                                });

                                setTimeout(function(){
                            window.location.href = '/payment';
                        } , 2000);

                    }

                break;
            default:
                console.log('Unknown button clicked');
        }
    }

    // Add click event listeners to the buttons
    onceOffButton.addEventListener('click', handleButtonClick);
    basicButton.addEventListener('click', handleButtonClick);
    premiumButton.addEventListener('click', handleButtonClick);
    advancedButton.addEventListener('click', handleButtonClick);
    eliteButton.addEventListener('click', handleButtonClick);
    oneOnone.addEventListener('click' , handleButtonClick);
    twoTofivePackage.addEventListener('click' , handleButtonClick);
    sixTo10Package.addEventListener('click' , handleButtonClick);

});


function openPopup(email) {
    fetch('/view-profile', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            // Redirect to profile page after successful response
            window.location.href = '/profile'; // Adjust the path as needed
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

function toggleSubjectOptions() {
    const container = document.getElementById('subjectContainer');
    const inputField = document.getElementById('subject');

    var helpingFor = document.querySelector('input[name="help-with"]:checked');
    var forwho = helpingFor ? helpingFor.value : 'None';
    
    // For larger screens, toggle the visibility of the checkbox list

    if(forwho === "school"){

    if (window.innerWidth > 768) {
        // Show the container if hidden and hide it if shown
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block'; // Show container
            inputField.readOnly = true; // Keep input read-only
        } else {
            container.style.display = 'none'; // Hide container
        }
    }
    
    else {
        // For small screens, toggle the visibility of the subject container
        if (container.style.display === 'none' || container.style.display === '') {
            // Show the container
            container.style.display = 'block';
            inputField.readOnly = false; // Allow typing in the input field
        } else {
            // Hide the container and enable typing
            container.style.display = 'none';
            inputField.readOnly = true; // Make input read-only when container is hidden
        }
    }

}
else{

    if (window.innerWidth > 768) {
        // Show the container if hidden and hide it if shown
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'none'; // Show container
            inputField.readOnly = false; // Keep input read-only
        } else {
            container.style.display = 'none'; // Hide container
        }
    }
    
    else {
        // For small screens, toggle the visibility of the subject container
        if (container.style.display === 'none' || container.style.display === '') {
            // Show the container
            container.style.display = 'block';
            inputField.readOnly = false; // Allow typing in the input field
        } else {
            // Hide the container and enable typing
            container.style.display = 'none';
            inputField.readOnly = true; // Make input read-only when container is hidden
        }
    }



}


}


function updateSubjects() {
    const checkboxes = document.querySelectorAll('#subjectContainer input[type="checkbox"]');
    const selectedSubjects = [];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedSubjects.push(checkbox.value);
        }
    });
    
    document.getElementById('subject').value = selectedSubjects.join(', ');
}

function toggleReadOnly() {
        const tutoringFor = document.getElementById('tutoring-for').value;
        const studentName = document.getElementById('student-name');
        const studentLastName = document.getElementById('student-last-name');
        const studName = document.getElementById('stud-name');
        const studLast = document.getElementById('stud-last');

        var firstName = document.getElementById('first-name').value.trim();
        var lastName = document.getElementById('last-name').value.trim();

   

        const isMe = tutoringFor === 'me';

        studentName.readOnly = isMe;
        studentLastName.readOnly = isMe;
        studName.readOnly = isMe;
        studLast.readOnly = isMe;

        // Optionally clear values if readOnly is set
        if (isMe) {
            studentName.value = firstName;
            studentName.placeholder = firstName;
            studentLastName.value = lastName;
            studentLastName.placeholder = lastName;
            studName.value = firstName;
            studName.placeholder = firstName;
            studLast.value = lastName;
            studLast.placeholder = lastName;
        }
         else{

            studentName.value = '';
            studentName.placeholder = '';
            studentLastName.value = '';
            studentLastName.placeholder = '';
            studName.value = '';
            studName.placeholder = '';
            studLast.value = '';
            studLast.placeholder = '';

            }


    }


    function checkPostgrad() {
        const postgradRadio = document.getElementById('year-postgrad');
        const postgradOptions = document.getElementById('postgrad-options');

        if (postgradRadio.checked) {
            postgradOptions.classList.remove('opt');
        } else {
            postgradOptions.classList.add('opt');
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const countrySelect = document.getElementById("country");
        const provinceGroup = document.getElementById("fProvince");

        function toggleProvince() {
            if (countrySelect.value === "South Africa") {
                provinceGroup.style.display = "block";
            } else {
                provinceGroup.style.display = "none";
                document.getElementById("province").value = "";
            }
        }

        toggleProvince();
        countrySelect.addEventListener("change", toggleProvince);
    });


    /*ENCRYPTEMAIL*/

       function simpleEncrypt(text) {
        let shift = 3; // You can change this value to shift by more or less
        let encrypted = '';
        
        for (let i = 0; i < text.length; i++) {
            let char = text.charCodeAt(i);
            
            // Shift uppercase letters
            if (char >= 65 && char <= 90) {
                char = ((char - 65 + shift) % 26) + 65;
            }
            // Shift lowercase letters
            else if (char >= 97 && char <= 122) {
                char = ((char - 97 + shift) % 26) + 97;
            }
            // Shift numbers
            else if (char >= 48 && char <= 57) {
                char = ((char - 48 + shift) % 10) + 48;
            }
            
            encrypted += String.fromCharCode(char);
        }
        return encrypted;
    }

    function encryptEmail(event, email, hiddenFieldId) {
        // Prevent the form from submitting immediately
        event.preventDefault();

        // Encrypt the email
        const encryptedEmail = simpleEncrypt(email);

        // Set the encrypted email in the hidden input
        document.getElementById(hiddenFieldId).value = encryptedEmail;

        // Now submit the form
        document.getElementById(hiddenFieldId).closest('form').submit();
    }



    function updateCountryCode() {
    const countrySelect = document.getElementById("country");
    const phoneInput = document.getElementById("phone");
    const lengthMessage = document.getElementById("lengthMessage");
    const phoneError = document.getElementById("phone-error");

    // Get the selected option
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const code = selectedOption.getAttribute("data-code");
    const length = selectedOption.getAttribute("data-length");

    // Update the phone input with the country code and a space
    phoneInput.value = code + " ";
    
    // Update the message to display required length
    lengthMessage.textContent = `Required length: ${length} digits (excluding code)`;
    phoneError.textContent = ''; // Clear previous error message
}

function validatePhoneNumber() {
    const phoneInput = document.getElementById("phone");
    const countrySelect = document.getElementById("country");
    const phoneError = document.getElementById("phone-error");

    if (countrySelect.selectedIndex === 0) {
        phoneError.textContent = ''; // Clear error if no country selected
        return;
    }

    // Get the selected option's length
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const requiredLength = parseInt(selectedOption.getAttribute("data-length"), 10);
    
    // Extract the digits entered after the country code
    const phoneValue = phoneInput.value.trim();
    const phoneDigits = phoneValue.slice(phoneValue.indexOf(" ") + 1).replace(/\D/g, ''); // Get only the digits

    // Validate the phone number length
    const actualLength = phoneDigits.length; // Actual length of entered digits
    var phoneValid = false;

    // Check if the entered digits match the required length
    if (actualLength < requiredLength) {
        phoneError.textContent = `Phone number must be exactly ${requiredLength} digits (excluding code).`;
        
        
    } else if (actualLength > requiredLength) {
        // If too long, prevent further input
        phoneInput.value = phoneValue.slice(0, phoneValue.indexOf(" ") + requiredLength + 1); // Keep the code, space, and required digits
        
       
    } else {

        phoneValid = true;
        phoneError.textContent = ''; // Clear error if valid
    }

   return phoneValid;

}

// Ensure the input maintains the format
document.getElementById("phone").addEventListener("input", (event) => {
    const phoneInput = event.target;
    const code = document.getElementById("country").options[document.getElementById("country").selectedIndex].getAttribute("data-code");

    // If the current value doesn't start with the country code, reset it
    if (!phoneInput.value.startsWith(code + " ")) {
        phoneInput.value = code + " "; // Reset to include country code and space
    }

    // Move cursor to the end of the input
    phoneInput.setSelectionRange(phoneInput.value.length, phoneInput.value.length);
});

/*SEARCH ENGINE*/
function checkInputs() {
            // Get the input values by their IDs
            const location = document.getElementById('eng-location').value;
            const subject = document.getElementById('eng-subject').value;
            const curriculum = document.getElementById('eng-curriculum').value;
            const tutoring = document.getElementById('eng-tutoring').value;

            // Initialize an array to hold the values
            const values = [location, subject, curriculum, tutoring];

                // Initialize an array to hold prefixed values
                const prefixedValues = [];

                // Add prefixes based on non-empty values
                if (location !== "") {
                    prefixedValues.push("l" + location);
                }
                if (subject !== "") {
                    prefixedValues.push("s" + subject);
                }
                if (curriculum !== "") {
                    prefixedValues.push("c" + curriculum);
                }
                if (tutoring !== "") {
                    prefixedValues.push("t" + tutoring);
                }


            const nonEmptyValues = prefixedValues.filter(value => value !== ""); // Filter out empty values

            // Alert the values if there are any non-empty inputs
            if (nonEmptyValues.length > 0) {

                var searchInput =  nonEmptyValues.join(', ');
              
                const dataToSend = {
    search: searchInput // Assuming searchInput is formatted correctly
};

// Fetch using POST method
fetch('/searchEngine', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend) // Send the data as JSON
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text(); // or response.json() if you're expecting JSON
})
.then(result => {
    // Handle success here
    console.log('Search results received:', result);

    window.location.href = '/searchOptimazation';

})
.catch(error => {
    console.error('Error during search:', error);
    // Assuming messageElement is defined in your scope
    messageElement.innerText = 'An error occurred while trying to search'; // Show error message
});

                        // Clear the inputs after search
                /*    document.getElementById('eng-location').value = '';
                    document.getElementById('eng-subject').value = '';
                    document.getElementById('eng-curriculum').value = '';
                    document.getElementById('eng-tutoring').value = '';  */

            } else {
                alert("One of the fields must have a value");
            }
        }

        // Function to serialize data to query parameters
function serialize(obj) {
    return Object.keys(obj)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        .join('&');
}
/*SEARCH ENGINE*/

function onlineClass(){

   alert("Pending payment...");

}

function subscribeMethod() {
    var emailField = document.querySelector('input[name="email"]');

    
    if (!emailField.checkValidity()) {
       
        alert("Please enter a valid email address.");
        return false; 
    }

    
    alert("Thank you for subscribing, please check your emails.");
    return true; 
}
