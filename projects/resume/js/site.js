    $(document).ready(function() {
		
		//$(".editable").attr('spellcheck',false);
        /*
        var $name = document.getElementById("name").innerHTML;
        var $contactLeft = document.getElementById("contactLeft").innerHTML;
        var $contactRight = document.getElementById("contactRight").innerHTML;
        var $overviewHeading = document.getElementById("overviewHeading").innerHTML;
        var $overviewContent = document.getElementById("overviewContent").innerHTML;
        var $skillsHeading = document.getElementById("skillsHeading").innerHTML;
        var $skillsContent = document.getElementById("skillsContent").innerHTML;
        var $workHeading = document.getElementById("workHeading").innerHTML;
        var $workCompanyOne =document.getElementById("workCompanyOne").innerHTML;
        var $workDutiesOne = document.getElementById("workDutiesOne").innerHTML;
        var $workCompanyTwo = document.getElementById("workCompanyTwo").innerHTML;
        var $workDutiesTwo = document.getElementById("workDutiesTwo").innerHTML;
        var $workCompanyThree = document.getElementById("workCompanyThree").innerHTML;
        var $workDutiesThree = document.getElementById("workDutiesThree").innerHTML;
        var $educationHeading = document.getElementById("educationHeading").innerHTML;
        var $schoolLeftOne = document.getElementById("schoolLeftOne").innerHTML;
        var $schoolRightOne = document.getElementById("schoolRightOne").innerHTML;
        var $schoolLeftTwo = document.getElementById("schoolLeftTwo").innerHTML;
        var $schoolRightTwo = document.getElementById("schoolRightTwo").innerHTML;
        var $activitiesAwardsHeading = document.getElementById("activitiesAwardsHeading").innerHTML;
        var $activitiesAwardsContent =  document.getElementById("activitiesAwardsContent").innerHTML;
        */
        
       // $("#demo").html($workCompanyTwo); test
        
        $("#hide").click(function(){
	    $("#hide").hide();
        });

        var colorOrig = $('div').css('background-color');
        var botB = $('div').css('border-bottom-style');


        
        $('div').hover(function() {
            //mouse over

	    $(this).css('border', '2px');
	    $(this).css('border-style', 'dashed');
	    $(this).css('border-color', '#333333');
	    
	}, 
            function() {
	    $(this).css('border-style', 'none');
            $(this).css('border-bottom-style', botB);

	    },

            function(){
        });
        

        
        //$("div").click(function( event ) {
           // $( "#demo" ).html( "clicked: " + this.id );
        //});
        
            
        document.getElementById('name').innerHTML = localStorage['name'] || 'John Q. Public';
        document.getElementById('contactLeft').innerHTML = localStorage['contactLeft'] || '123 Maple Lane<br>Oak Valley, CA 00000<br><br>';
        document.getElementById('contactRight').innerHTML = localStorage['contactRight'] || 'Cell: (555) 555-1234<br>Email: johnq@email.com<br><br>';
        document.getElementById('overviewHeading').innerHTML = localStorage['overviewHeading'] || 'Overview';
        document.getElementById('overviewContent').innerHTML = localStorage['overviewContent'] || 'To gain an entry level position with a company that encourages growth and learning.';
        document.getElementById('skillsHeading').innerHTML = localStorage['skillsHeading'] || 'Skills';
        document.getElementById('skillsContent').innerHTML = localStorage['skillsContent'] || '<li>HTML5</li><li>CSS3</li><li>Javascript</li><li>Ajax</li><li>JQuery</li><li>Eclipse</li><li>SQL</li><li>Java</li><li>C#</li><li>C++</li><li>Linux</li><li>C#</li><li>C++</li><li>Linux</li>';
        document.getElementById('workHeading').innerHTML = localStorage['workHeading'] || 'Work History';
        document.getElementById('workCompanyOne').innerHTML = localStorage['workCompanyOne'] || '<b>Blank Enterprises</b><br>2012 - Current<br>Somewhere, CA<br>';
        document.getElementById('workDutiesOne').innerHTML = localStorage['workDutiesOne'] || '<li>Did some things</li><li>Did some other things</li><li>Blah blah blah</li>';
        document.getElementById('workCompanyTwo').innerHTML = localStorage['workCompanyTwo'] || '<b>Blank Enterprises</b><br>2012 - Current<br>Somewhere, CA<br>';
        document.getElementById('workDutiesTwo').innerHTML = localStorage['workDutiesTwo'] || '<li>Did some things</li><li>Did some other things</li><li>Blah blah blah</li>';
        document.getElementById('workCompanyThree').innerHTML = localStorage['workCompanyThree'] || '<b>Blank Enterprises</b><br>2012 - Current<br>Somewhere, CA<br>';
        document.getElementById('workDutiesThree').innerHTML = localStorage['workDutiesThree'] || '<li>Did some things</li><li>Did some other things</li><li>Blah blah blah</li>';
        document.getElementById('educationHeading').innerHTML = localStorage['educationHeading'] || 'Education';
        document.getElementById('schoolLeftOne').innerHTML = localStorage['schoolLeftOne'] || '<b>UCSC - Sanata Cruz, CA</b><br>GPA 3.5<br><br>';
        document.getElementById('schoolRightOne').innerHTML = localStorage['schoolRightOne'] || 'B.S. Computer Science<br>2008 - 2012<br><br>';
        document.getElementById('schoolLeftTwo').innerHTML = localStorage['schoolLeftTwo'] || '<b>Santa Cruz High School - Sanata Cruz, CA</b><br>GPA 3.5<br><br>';
        document.getElementById('schoolRightTwo').innerHTML = localStorage['schoolRightTwo'] || 'Diploma<br>2004 - 2008<br><br>';
        document.getElementById('activitiesAwardsHeading').innerHTML = localStorage['activitiesAwardsHeading'] || 'Activities / Awards';
        document.getElementById('activitiesAwardsContent').innerHTML = localStorage['activitiesAwardsContent'] || '<li><b>Some Award</b> 2011</li><li><b>Some Colleges Computer Club</b> 2011</li>';
        
        setInterval(function() {
              localStorage['name'] = document.getElementById('name').innerHTML;
              localStorage['contactLeft'] = document.getElementById('contactLeft').innerHTML;
              localStorage['contactRight'] = document.getElementById('contactRight').innerHTML;
              localStorage['overviewHeading'] = document.getElementById('overviewHeading').innerHTML;
              localStorage['overviewContent'] = document.getElementById('overviewContent').innerHTML;
              localStorage['skillsHeading'] = document.getElementById('skillsHeading').innerHTML;
              localStorage['skillsContent'] = document.getElementById('skillsContent').innerHTML;
              localStorage['workHeading'] = document.getElementById('workHeading').innerHTML;
              localStorage['workCompanyOne'] = document.getElementById('workCompanyOne').innerHTML;
              localStorage['workDutiesOne'] = document.getElementById('workDutiesOne').innerHTML;
              localStorage['workCompanyTwo'] = document.getElementById('workCompanyTwo').innerHTML;
              localStorage['workDutiesTwo'] = document.getElementById('workDutiesTwo').innerHTML;
              localStorage['workCompanyThree'] = document.getElementById('workCompanyThree').innerHTML;
              localStorage['workDutiesThree'] = document.getElementById('workDutiesThree').innerHTML;
              localStorage['educationHeading'] = document.getElementById('educationHeading').innerHTML;
              localStorage['schoolLeftOne'] = document.getElementById('schoolLeftOne').innerHTML;
              localStorage['schoolRightOne'] = document.getElementById('schoolRightOne').innerHTML;
              localStorage['schoolLeftTwo'] = document.getElementById('schoolLeftTwo').innerHTML;
              localStorage['schoolRightTwo'] = document.getElementById('schoolRightTwo').innerHTML;
              localStorage['activitiesAwardsHeading'] = document.getElementById('activitiesAwardsHeading').innerHTML;
              localStorage['activitiesAwardsContent'] = document.getElementById('activitiesAwardsContent').innerHTML;
        }, 3* 1000);
        
        // Required for drag and drop file access
        jQuery.event.props.push('dataTransfer');
        
        var Resample = (function (canvas) {
        
         // (C) WebReflection Mit Style License
        
         function Resample(img, width, height, onresample) {
          var
        
           load = typeof img == "string",
           i = load || img;
        
          // if string, a new Image is needed
          if (load) {
           i = new Image();
           i.onload = onload;
           i.onerror = onerror;
          }
        
          i._onresample = onresample;
          i._width = width;
          i._height = height;
          load ? (i.src = img) : onload.call(img);
         }
        
         function onerror() {
          throw ("not found: " + this.src);
         }
        
         function onload() {
          var
           img = this,
           width = img._width,
           height = img._height,
           onresample = img._onresample
          ;
          // if width and height are both specified
          // the resample uses these pixels
          // if width is specified but not the height
          // the resample respects proportions
          // accordingly with orginal size
          // same is if there is a height, but no width
          var minValue = Math.min(img.height, img.width);
          width === null && (width = round(img.width * height / img.height));
          height === null && (height = round(img.height * width / img.width));
        
          delete img._onresample;
          delete img._width;
          delete img._height;
        
          // when we reassign a canvas size
          // this clears automatically
          // the size should be exactly the same
          // of the final image
          // so that toDataURL ctx method
          // will return the whole canvas as png
          // without empty spaces or lines
          canvas.width = width;
          canvas.height = height;
          // drawImage has different overloads
          // in this case we need the following one ...
          context.drawImage(
           // original image
           img,
           // starting x point
           0,
           // starting y point
           0,
           // image width
           minValue,
           // image height
           minValue,
           // destination x point
           0,
           // destination y point
           0,
           // destination width
           width,
           // destination height
           height
          );
          // retrieve the canvas content as
          // base4 encoded PNG image
          // and pass the result to the callback
          onresample(canvas.toDataURL("image/png"));
         }
        
         var context = canvas.getContext("2d"),
          // local scope shortcut
          round = Math.round
         ;
        
         return Resample;
        
        }(
         document.createElement("canvas"))
        );    
            
        // IIFE to prevent globals
        (function() {
        
          var s;
          var Avatar = {
        
            settings: {
              bod: $("body"),
              img: $("#profileAvatar"),
              fileInput: $("#uploader")
            },
        
            init: function() {
              s = Avatar.settings;
              Avatar.bindUIActions();
            },
        
            bindUIActions: function() {
        
              var timer;
        
              s.bod.on("dragover", function(event) {
                clearTimeout(timer);
                if (event.currentTarget == s.bod[0]) {
                  Avatar.showDroppableArea();
                }
        
                // Required for drop to work
                return false;
              });
        
              s.bod.on('dragleave', function(event) {
                if (event.currentTarget == s.bod[0]) {
                  // Flicker protection
                  timer = setTimeout(function() {
                    Avatar.hideDroppableArea();
                  }, 200);
                }
              });
        
              s.bod.on('drop', function(event) {
                // Or else the browser will open the file
                event.preventDefault();
        
                Avatar.handleDrop(event.dataTransfer.files);
              });
        
              s.fileInput.on('change', function(event) {
                Avatar.handleDrop(event.target.files);
              });
            },
        
            showDroppableArea: function() {
              s.bod.addClass("droppable");
            },
        
            hideDroppableArea: function() {
              s.bod.removeClass("droppable");
            },
        
            handleDrop: function(files) {
        
              Avatar.hideDroppableArea();
        
              // Multiple files can be dropped. Lets only deal with the "first" one.
              var file = files[0];
        
              if (typeof file !== 'undefined' && file.type.match('image.*')) {
        
                Avatar.resizeImage(file, 256, function(data) {
                  Avatar.placeImage(data);
                });
        
              } else {
        
                alert("That file wasn't an image.");
        
              }
        
            },
        
            resizeImage: function(file, size, callback) {
        
              var fileTracker = new FileReader();
              fileTracker.onload = function() {
                Resample(
                 this.result,
                 size,
                 size,
                 callback
               );
              }
              fileTracker.readAsDataURL(file);
        
              fileTracker.onabort = function() {
                alert("The upload was aborted.");
              }
              fileTracker.onerror = function() {
                alert("An error occured while reading the file.");
              }
        
            },
        
            placeImage: function(data) {
              s.img.attr("src", data);
            }
        
          }
        
          Avatar.init();
        
        })();
    });
