function scrollToTop(){
	document.getElementById('landing-page-container').scrollIntoView({ 
  		behavior: 'smooth' 
	});
	
}



function scrollToAboutMe(){
	document.getElementById('about-me-container').scrollIntoView({ 
  		behavior: 'smooth' 
	});
	
}

function scrollToExperties(){
	document.getElementById('career-page-container').scrollIntoView({ 
  		behavior: 'smooth' 
	});
	
}

function scrollToContactMe(){
	document.getElementById('contact-container').scrollIntoView({ 
  		behavior: 'smooth' 
	});
	
}

function sendEmail(){
	Email.send({
    SecureToken : "87bda069-0aa7-4c21-8541-be41ea1f7f6d",
    To : 'andregvalvarez@gmail.com',
    From : "andretheemail@gmail.com",
    Subject : document.getElementById("user-name").value,
    Body : "Email: "+document.getElementById("user-email").value+"<br> Message: "+document.getElementById("user-message").value
}).then(
  message => {
  	  if(message=='OK'){
                    alert('Thank you for contacting me. I will get back to you soon.');
                    }
                    else{
                        console.error (message);
                        alert('Error submitting form.')
                    }

  }
);
}



function download(dataurl, filename) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = filename;
  link.click();
}


function expandMenu(){
	var menus = document.getElementsByName("nav-link-menu"),
	len = menus != null ? menus.length : 0,
	i=0;

	for(i; i<len; i++){
		if(menus[i].className == "nav-link-container"){
			menus[i].className += " responsive";
		}
		else{
			menus[i].className = "nav-link-container"
		}
	}
}