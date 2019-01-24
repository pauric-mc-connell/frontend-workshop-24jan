const uri = 'localhost';

// login API

// { u: ...
//  p: ... }

$( document ).ready( () => {

	/*
		submit button logic
	*/
	$('#submitButton').click( () => {
		

		let username = $('#entry-username').val();
		let pass = $('#entry-pass').val();
		
		username = username.trim();
		pass = pass.trim();



		$.ajax({
		    url: uri + '/users',
		    data: { userId: username, password: pass },
		    complete: function(xhr, statusText){
		        if(xhr.status === 200) {
		        	//navigate to next page
		        	loggedIn();
		        }
		        else {
		        	displayErrorMsg();
		        }
		    },
		    error: function(xhr, statusText, err){
		        alert("Error:" + xhr.status); 

		        displayErrorMsg();
		    }
		});

	})

	/*
		logged in function
	*/
	function loggedIn() {
		window.location.href = "/somewhere/else";
	}

	function displayErrorMsg(msg) {
		//add some logic here to show the user what went wrong
	}


});