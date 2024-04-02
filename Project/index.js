










document.addEventListener("DOMContentLoaded", function () {
    // Fetch user data and render dashboard
    // fetchUserData();
});

// Load feedback form for the selected task
document.getElementById("task").addEventListener("change", function () {
    var selectedTask = this.value;
    var feedbackForm = document.getElementById("feedbackForm");

    // Clear existing form fields
    feedbackForm.innerHTML = "";

    // Load form fields based on selected task
    switch (selectedTask) {
        case "task1":
            feedbackForm.innerHTML = `
                <!-- Task 1 feedback fields -->
                <div>
                    <h2>Responsibility Rating</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating10" name="rating" value="10" /><label for="rating10" title="5 stars"></label>
                    <input type="radio" id="rating9" name="rating" value="9" /><label class="half" for="rating9" title="4 1/2 stars"></label>
                    <input type="radio" id="rating8" name="rating" value="8" /><label for="rating8" title="4 stars"></label>
                    <input type="radio" id="rating7" name="rating" value="7" /><label class="half" for="rating7" title="3 1/2 stars"></label>
                    <input type="radio" id="rating6" name="rating" value="6" /><label for="rating6" title="3 stars"></label>
                    <input type="radio" id="rating5" name="rating" value="5" /><label class="half" for="rating5" title="2 1/2 stars"></label>
                    <input type="radio" id="rating4" name="rating" value="4" /><label for="rating4" title="2 stars"></label>
                    <input type="radio" id="rating3" name="rating" value="3" /><label class="half" for="rating3" title="1 1/2 stars"></label>
                    <input type="radio" id="rating2" name="rating" value="2" /><label for="rating2" title="1 star"></label>
                    <input type="radio" id="rating1" name="rating" value="1" /><label class="half" for="rating1" title="1/2 star"></label>
                    <input type="radio" id="rating0" name="rating" value="0" /><label for="rating0" title="No star"></label>
                    </fieldset>
                </div>

                <div>
                    <h2>Research Skills Rating</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset>
                </div>
                
                <div>
                    <h2>Quality of Work</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating32" name="rating2" value="10" /><label for="rating32" title="5 stars"></label>
                    <input type="radio" id="rating31" name="rating2" value="9" /><label class="half" for="rating31" title="4 1/2 stars"></label>
                    <input type="radio" id="rating30" name="rating2" value="8" /><label for="rating30" title="4 stars"></label>
                    <input type="radio" id="rating29" name="rating2" value="7" /><label class="half" for="rating29" title="3 1/2 stars"></label>
                    <input type="radio" id="rating28" name="rating2" value="6" /><label for="rating28" title="3 stars"></label>
                    <input type="radio" id="rating27" name="rating2" value="5" /><label class="half" for="rating27" title="2 1/2 stars"></label>
                    <input type="radio" id="rating26" name="rating2" value="4" /><label for="rating26" title="2 stars"></label>
                    <input type="radio" id="rating25" name="rating2" value="3" /><label class="half" for="rating25" title="1 1/2 stars"></label>
                    <input type="radio" id="rating24" name="rating2" value="2" /><label for="rating24" title="1 star"></label>
                    <input type="radio" id="rating23" name="rating2" value="1" /><label class="half" for="rating23" title="1/2 star"></label>
                    <input type="radio" id="rating22" name="rating2" value="0" /><label for="rating22" title="No star"></label>
                    </fieldset><br>
                    <div class="link-box">
                    <p>Docs:</p>
                    <input type="text" id="link-input" placeholder="Enter URL here..." />
                    <br>
                    <input type="text" id="link-input" placeholder="Remarks" />
                    <ul id="link-list"></ul>
                    </div>
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                
                `;
            break;
        case "task2":
            feedbackForm.innerHTML = `
                <!-- Task 2 feedback fields -->
                <div>
                    <h2>Responsibility Rating</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating10" name="rating" value="10" /><label for="rating10" title="5 stars"></label>
                    <input type="radio" id="rating9" name="rating" value="9" /><label class="half" for="rating9" title="4 1/2 stars"></label>
                    <input type="radio" id="rating8" name="rating" value="8" /><label for="rating8" title="4 stars"></label>
                    <input type="radio" id="rating7" name="rating" value="7" /><label class="half" for="rating7" title="3 1/2 stars"></label>
                    <input type="radio" id="rating6" name="rating" value="6" /><label for="rating6" title="3 stars"></label>
                    <input type="radio" id="rating5" name="rating" value="5" /><label class="half" for="rating5" title="2 1/2 stars"></label>
                    <input type="radio" id="rating4" name="rating" value="4" /><label for="rating4" title="2 stars"></label>
                    <input type="radio" id="rating3" name="rating" value="3" /><label class="half" for="rating3" title="1 1/2 stars"></label>
                    <input type="radio" id="rating2" name="rating" value="2" /><label for="rating2" title="1 star"></label>
                    <input type="radio" id="rating1" name="rating" value="1" /><label class="half" for="rating1" title="1/2 star"></label>
                    <input type="radio" id="rating0" name="rating" value="0" /><label for="rating0" title="No star"></label>
                    </fieldset>
                </div>

                <div>
                    <h2>Research Skills Rating</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset>
                </div>
                
                <div>
                    <h2>Quality of Work</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating32" name="rating2" value="10" /><label for="rating32" title="5 stars"></label>
                    <input type="radio" id="rating31" name="rating2" value="9" /><label class="half" for="rating31" title="4 1/2 stars"></label>
                    <input type="radio" id="rating30" name="rating2" value="8" /><label for="rating30" title="4 stars"></label>
                    <input type="radio" id="rating29" name="rating2" value="7" /><label class="half" for="rating29" title="3 1/2 stars"></label>
                    <input type="radio" id="rating28" name="rating2" value="6" /><label for="rating28" title="3 stars"></label>
                    <input type="radio" id="rating27" name="rating2" value="5" /><label class="half" for="rating27" title="2 1/2 stars"></label>
                    <input type="radio" id="rating26" name="rating2" value="4" /><label for="rating26" title="2 stars"></label>
                    <input type="radio" id="rating25" name="rating2" value="3" /><label class="half" for="rating25" title="1 1/2 stars"></label>
                    <input type="radio" id="rating24" name="rating2" value="2" /><label for="rating24" title="1 star"></label>
                    <input type="radio" id="rating23" name="rating2" value="1" /><label class="half" for="rating23" title="1/2 star"></label>
                    <input type="radio" id="rating22" name="rating2" value="0" /><label for="rating22" title="No star"></label>
                    </fieldset>
                </div>    

                <div>
                    <h2>Communication Skills</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating43" name="rating3" value="10" /><label for="rating43" title="5 stars"></label>
                    <input type="radio" id="rating42" name="rating3" value="9" /><label class="half" for="rating42" title="4 1/2 stars"></label>
                    <input type="radio" id="rating41" name="rating3" value="8" /><label for="rating41" title="4 stars"></label>
                    <input type="radio" id="rating40" name="rating3" value="7" /><label class="half" for="rating40" title="3 1/2 stars"></label>
                    <input type="radio" id="rating39" name="rating3" value="6" /><label for="rating39" title="3 stars"></label>
                    <input type="radio" id="rating38" name="rating3" value="5" /><label class="half" for="rating38" title="2 1/2 stars"></label>
                    <input type="radio" id="rating37" name="rating3" value="4" /><label for="rating37" title="2 stars"></label>
                    <input type="radio" id="rating36" name="rating3" value="3" /><label class="half" for="rating36" title="1 1/2 stars"></label>
                    <input type="radio" id="rating35" name="rating3" value="2" /><label for="rating35" title="1 star"></label>
                    <input type="radio" id="rating34" name="rating3" value="1" /><label class="half" for="rating34" title="1/2 star"></label>
                    <input type="radio" id="rating33" name="rating3" value="0" /><label for="rating33" title="No star"></label>
                    </fieldset><br>
                    <div class="link-box">
                    <p>Docs:</p>
                    <input type="text" id="link-input" placeholder="Enter URL here..." />
                    <br>
                    <input type="text" id="link-input" placeholder="Remarks" />
                    <ul id="link-list"></ul>
                    </div>    
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task3":
            feedbackForm.innerHTML = `
                <!-- Task 3 feedback fields -->
                <div>
                    <h2>Research Skills Rating</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset>
                </div>
                
                <div>
                    <h2>Quality of Work</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating32" name="rating2" value="10" /><label for="rating32" title="5 stars"></label>
                    <input type="radio" id="rating31" name="rating2" value="9" /><label class="half" for="rating31" title="4 1/2 stars"></label>
                    <input type="radio" id="rating30" name="rating2" value="8" /><label for="rating30" title="4 stars"></label>
                    <input type="radio" id="rating29" name="rating2" value="7" /><label class="half" for="rating29" title="3 1/2 stars"></label>
                    <input type="radio" id="rating28" name="rating2" value="6" /><label for="rating28" title="3 stars"></label>
                    <input type="radio" id="rating27" name="rating2" value="5" /><label class="half" for="rating27" title="2 1/2 stars"></label>
                    <input type="radio" id="rating26" name="rating2" value="4" /><label for="rating26" title="2 stars"></label>
                    <input type="radio" id="rating25" name="rating2" value="3" /><label class="half" for="rating25" title="1 1/2 stars"></label>
                    <input type="radio" id="rating24" name="rating2" value="2" /><label for="rating24" title="1 star"></label>
                    <input type="radio" id="rating23" name="rating2" value="1" /><label class="half" for="rating23" title="1/2 star"></label>
                    <input type="radio" id="rating22" name="rating2" value="0" /><label for="rating22" title="No star"></label>
                    </fieldset>
                </div>    

                <div>
                    <h2>Communication Skills</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating43" name="rating3" value="10" /><label for="rating43" title="5 stars"></label>
                    <input type="radio" id="rating42" name="rating3" value="9" /><label class="half" for="rating42" title="4 1/2 stars"></label>
                    <input type="radio" id="rating41" name="rating3" value="8" /><label for="rating41" title="4 stars"></label>
                    <input type="radio" id="rating40" name="rating3" value="7" /><label class="half" for="rating40" title="3 1/2 stars"></label>
                    <input type="radio" id="rating39" name="rating3" value="6" /><label for="rating39" title="3 stars"></label>
                    <input type="radio" id="rating38" name="rating3" value="5" /><label class="half" for="rating38" title="2 1/2 stars"></label>
                    <input type="radio" id="rating37" name="rating3" value="4" /><label for="rating37" title="2 stars"></label>
                    <input type="radio" id="rating36" name="rating3" value="3" /><label class="half" for="rating36" title="1 1/2 stars"></label>
                    <input type="radio" id="rating35" name="rating3" value="2" /><label for="rating35" title="1 star"></label>
                    <input type="radio" id="rating34" name="rating3" value="1" /><label class="half" for="rating34" title="1/2 star"></label>
                    <input type="radio" id="rating33" name="rating3" value="0" /><label for="rating33" title="No star"></label>
                    </fieldset><br>
                    <div class="link-box">
                    <p>Docs:</p>
                    <input type="text" id="link-input" placeholder="Enter URL here..." />
                    <br>
                    <input type="text" id="link-input" placeholder="Remarks" />
                    <ul id="link-list"></ul>
                    </div>    
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task4":
            feedbackForm.innerHTML = `
                <!-- Task 4 feedback fields -->
                <div>
                    <h2>Ability to Learn</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset><br>
                    <div class="link-box">
                    <p>Docs:</p>
                    <input type="text" id="link-input" placeholder="Enter URL here..." />
                    <br>
                    <input type="text" id="link-input" placeholder="Remarks" />
                    <ul id="link-list"></ul>
                    </div> 
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task5":
            feedbackForm.innerHTML = `
                <!-- Task 5 feedback fields -->
                <div>
                    <h2>Ability to Learn</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating10" name="rating" value="10" /><label for="rating10" title="5 stars"></label>
                    <input type="radio" id="rating9" name="rating" value="9" /><label class="half" for="rating9" title="4 1/2 stars"></label>
                    <input type="radio" id="rating8" name="rating" value="8" /><label for="rating8" title="4 stars"></label>
                    <input type="radio" id="rating7" name="rating" value="7" /><label class="half" for="rating7" title="3 1/2 stars"></label>
                    <input type="radio" id="rating6" name="rating" value="6" /><label for="rating6" title="3 stars"></label>
                    <input type="radio" id="rating5" name="rating" value="5" /><label class="half" for="rating5" title="2 1/2 stars"></label>
                    <input type="radio" id="rating4" name="rating" value="4" /><label for="rating4" title="2 stars"></label>
                    <input type="radio" id="rating3" name="rating" value="3" /><label class="half" for="rating3" title="1 1/2 stars"></label>
                    <input type="radio" id="rating2" name="rating" value="2" /><label for="rating2" title="1 star"></label>
                    <input type="radio" id="rating1" name="rating" value="1" /><label class="half" for="rating1" title="1/2 star"></label>
                    <input type="radio" id="rating0" name="rating" value="0" /><label for="rating0" title="No star"></label>
                    </fieldset>
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task6":
            feedbackForm.innerHTML = `
                <!-- Task 6 feedback fields -->

                <div>
                    <h2>Research Skills Rating</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating10" name="rating" value="10" /><label for="rating10" title="5 stars"></label>
                    <input type="radio" id="rating9" name="rating" value="9" /><label class="half" for="rating9" title="4 1/2 stars"></label>
                    <input type="radio" id="rating8" name="rating" value="8" /><label for="rating8" title="4 stars"></label>
                    <input type="radio" id="rating7" name="rating" value="7" /><label class="half" for="rating7" title="3 1/2 stars"></label>
                    <input type="radio" id="rating6" name="rating" value="6" /><label for="rating6" title="3 stars"></label>
                    <input type="radio" id="rating5" name="rating" value="5" /><label class="half" for="rating5" title="2 1/2 stars"></label>
                    <input type="radio" id="rating4" name="rating" value="4" /><label for="rating4" title="2 stars"></label>
                    <input type="radio" id="rating3" name="rating" value="3" /><label class="half" for="rating3" title="1 1/2 stars"></label>
                    <input type="radio" id="rating2" name="rating" value="2" /><label for="rating2" title="1 star"></label>
                    <input type="radio" id="rating1" name="rating" value="1" /><label class="half" for="rating1" title="1/2 star"></label>
                    <input type="radio" id="rating0" name="rating" value="0" /><label for="rating0" title="No star"></label>
                    </fieldset>
                </div>
                
                <div>
                    <h2>Quality of Work</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating32" name="rating2" value="10" /><label for="rating32" title="5 stars"></label>
                    <input type="radio" id="rating31" name="rating2" value="9" /><label class="half" for="rating31" title="4 1/2 stars"></label>
                    <input type="radio" id="rating30" name="rating2" value="8" /><label for="rating30" title="4 stars"></label>
                    <input type="radio" id="rating29" name="rating2" value="7" /><label class="half" for="rating29" title="3 1/2 stars"></label>
                    <input type="radio" id="rating28" name="rating2" value="6" /><label for="rating28" title="3 stars"></label>
                    <input type="radio" id="rating27" name="rating2" value="5" /><label class="half" for="rating27" title="2 1/2 stars"></label>
                    <input type="radio" id="rating26" name="rating2" value="4" /><label for="rating26" title="2 stars"></label>
                    <input type="radio" id="rating25" name="rating2" value="3" /><label class="half" for="rating25" title="1 1/2 stars"></label>
                    <input type="radio" id="rating24" name="rating2" value="2" /><label for="rating24" title="1 star"></label>
                    <input type="radio" id="rating23" name="rating2" value="1" /><label class="half" for="rating23" title="1/2 star"></label>
                    <input type="radio" id="rating22" name="rating2" value="0" /><label for="rating22" title="No star"></label>
                    </fieldset>
                </div>    

                <div>
                    <h2>Communication Skills</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating43" name="rating3" value="10" /><label for="rating43" title="5 stars"></label>
                    <input type="radio" id="rating42" name="rating3" value="9" /><label class="half" for="rating42" title="4 1/2 stars"></label>
                    <input type="radio" id="rating41" name="rating3" value="8" /><label for="rating41" title="4 stars"></label>
                    <input type="radio" id="rating40" name="rating3" value="7" /><label class="half" for="rating40" title="3 1/2 stars"></label>
                    <input type="radio" id="rating39" name="rating3" value="6" /><label for="rating39" title="3 stars"></label>
                    <input type="radio" id="rating38" name="rating3" value="5" /><label class="half" for="rating38" title="2 1/2 stars"></label>
                    <input type="radio" id="rating37" name="rating3" value="4" /><label for="rating37" title="2 stars"></label>
                    <input type="radio" id="rating36" name="rating3" value="3" /><label class="half" for="rating36" title="1 1/2 stars"></label>
                    <input type="radio" id="rating35" name="rating3" value="2" /><label for="rating35" title="1 star"></label>
                    <input type="radio" id="rating34" name="rating3" value="1" /><label class="half" for="rating34" title="1/2 star"></label>
                    <input type="radio" id="rating33" name="rating3" value="0" /><label for="rating33" title="No star"></label>
                    </fieldset>

                <div>
                    <h2>Planning & Problem Solving Skills</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset><br>
                    <div class="link-box">
                    <p>Docs:</p>
                    <input type="text" id="link-input" placeholder="Enter URL here..." />
                    <br>
                    <input type="text" id="link-input" placeholder="Remarks" />
                    <ul id="link-list"></ul>
                    </div>
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task7":
            feedbackForm.innerHTML = `
                <!-- Task 7 feedback fields -->

                <div>
                    <h2>Planning & Problem Solving Skills</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset>
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task8":
            feedbackForm.innerHTML = `
                <!-- Task 8 feedback fields -->


                <div>
                    <h2>Planning & Problem Solving Skills</h2>
                    <fieldset class="rate">
                    <input type="radio" id="rating21" name="rating1" value="10" /><label for="rating21" title="5 stars"></label>
                    <input type="radio" id="rating20" name="rating1" value="9" /><label class="half" for="rating20" title="4 1/2 stars"></label>
                    <input type="radio" id="rating19" name="rating1" value="8" /><label for="rating19" title="4 stars"></label>
                    <input type="radio" id="rating18" name="rating1" value="7" /><label class="half" for="rating18" title="3 1/2 stars"></label>
                    <input type="radio" id="rating17" name="rating1" value="6" /><label for="rating17" title="3 stars"></label>
                    <input type="radio" id="rating16" name="rating1" value="5" /><label class="half" for="rating16" title="2 1/2 stars"></label>
                    <input type="radio" id="rating15" name="rating1" value="4" /><label for="rating15" title="2 stars"></label>
                    <input type="radio" id="rating14" name="rating1" value="3" /><label class="half" for="rating14" title="1 1/2 stars"></label>
                    <input type="radio" id="rating13" name="rating1" value="2" /><label for="rating13" title="1 star"></label>
                    <input type="radio" id="rating12" name="rating1" value="1" /><label class="half" for="rating12" title="1/2 star"></label>
                    <input type="radio" id="rating11" name="rating1" value="0" /><label for="rating11" title="No star"></label>
                    </fieldset>
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task9":
            feedbackForm.innerHTML = `
                <!-- Task 9 feedback fields -->

                <div class="checkbox-wrapper-11">
                  <input id="01-11" type="checkbox" name="a" value="1">
                     <label for="01-11">Type-A</label>
                </div>

                <div class="checkbox-wrapper-11">
                  <input id="02-11" type="checkbox" name="b" value="2">
                     <label for="02-11">Type-B</label>
                </div>

                <div class="checkbox-wrapper-11">
                  <input id="03-11" type="checkbox" name="c" value="3">
                     <label for="03-11">Type-C</label>
                </div>

                <div class="checkbox-wrapper-11">
                  <input id="04-11" type="checkbox" name="d" value="4">
                     <label for="04-11">Type-D</label>
                </div>
                    <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                </div>
                `;
            break;
        case "task10":
            feedbackForm.innerHTML = `
                <!-- Task 10 feedback fields -->

                
                <div class="description">
          <div><label for="description">
             <h3>Personal Description:</h3>
          </label><br>
          <textarea id="description" name="description" rows="7" cols="70">
                </textarea>
          </div>
         
                </div>

                <br><br>
                    <div class="button">
        <label><button class="button-33" role="button">Commit</button></label>
      </div>
                `;
            break;

    }
});




// Function to disable feedback form
// function disableFeedbackForm() {
//     var feedbackFormElements = document.querySelectorAll("#feedbackForm input");
//     feedbackFormElements.forEach(function(element) {
//         element.disabled = true;
//     });
// }


// // Function to enable feedback form
// function enableFeedbackForm() {
//     var feedbackFormElements = document.querySelectorAll("#feedbackForm input");
//     feedbackFormElements.forEach(function(element) {
//         element.disabled = false;
//     });
// }



// // Function to toggle the visibility of dropdown content
// function toggleDropdown() {
//     var dropdownContent = document.getElementById("myDpdn");
//     dropdownContent.classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dpbt')) {
//       var dropdowns = document.getElementsByClassName("ddn-contnt");
//       for (var i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
  

