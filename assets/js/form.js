function postToGoogle() {
                var field1 = $("#name").val();
                var field2 = $("#email").val();
                var field3 = $("#message").val();
 				
				if(field1 == ""){
					alert('Please Fill Your Name');
					document.getElementById("name").focus();
					return false;
				}
				if(field2 == ""){
					alert('Please Fill Your Email');
					document.getElementById("email").focus();
					return false;
				}
				if(field3 == ""){
					alert('Please Write Your Message');
					document.getElementById("message").focus();
					return false;
				}


				
	
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSffXh2RnwDAJ2Quzqd_TV6r34f0w6voNzdCj_tXKp3Fw_XOVQ/viewform/formResponse?",
					data: {"entry.1868803231": field1, "entry.768201260": field2, "entry.1848599728": field3},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }
