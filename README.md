# JavaScript, HTML, and CSS projects

This repository contains unique and visually appealing personal projects that are all documented well for learning and improving skills in the JavaScript, HTML, and CSS languages. Feel free to download and run these projects! :)

NOTE: To download and run, simply clone the repo and then select the project you want to run. Should be able to run on any browser, but I recommend using Chrome for a better experience. 

Projects:
1) Advanced Postfix Calculator:

  > Description: Nice looking UI with buttons handled by event listeners. Follows PEMDAS computation. Utilizes clean and professional MVC Architecture by the use of Lexer, Parser, and View classes.

  > UPDATE 1: PEMDAS being worked on based on the postfix tree algorithm. Infix -> Postfix first!
  
  > UPDATE 2: PEMDAS mostly works as the postfix being returned is accurate based on online calculator results. However, the resulting values are off alittle bit for some reason. 
  
  > UPDATE 3: MVC structure. => currently being worked on. Hoping to have it done tomorrow. Didnt do alot since update2 since im still debating on how to go about the MVC....
 
  > UPDATE 4: The lexer class is complete. Returns the correct tokenized expression. => expression = '11+2*3' Lexer.analyze(expression) RETURNS ['11', '+', '2', '*', '3']. Notice how before 11 wasn't being returned (it was 2 1's instead) but now it does. :)
  
  > UPDATE 5: After some good amount of time, I finished. View has a method called compute(input) that takes in input (user input) and calls all 3 created classes (PostfixCalculator, Lexer, Parser) in order to output the final result. As mentioned before, organized on an MVC architecture and the code is all documented clearly.

_______________________________________________________________________________________________________________
2) Color Switcher (DIY Design App):

  > Description: App where users can change the color of the background and the foreground to any color of their choosing (this app is like a DIY app). The 3 options given to the user are: 
        1) Name: User enters a color by its name (orange, blue, etc) and the colors get changed to that. 
        2) Hex: User enters a color by its hex code and the colors get chaged to that.
        3) Palette: User selects a color instead of entering it. This is done by the magic of a color palette.

________________________________________________________________________________________________________________
3) NBA Superstar About Me:

  > Description: This App is for users who are fans of the NBA, including myself :). Users can select an NBA superstar from the dropdown list (containing 3 NBA superstars). The app will display a "who am i?" section, a "brief career timeline" section, and a "learn more" section (where users can browse through the actual NBA website for more info on the superstar or other players). It will also contain the image of the NBA superstar. All of this will be displayed in a professional and visually appealing manner.  
