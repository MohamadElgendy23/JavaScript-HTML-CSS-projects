# JavaScript/HTML/CSS projects

This repository contains personal projects for learning and improving skills in JavaScript, HTML and CSS. Feel free to download and run these projects! :)

Projects:
> Postfix Calculator:

  > Description: Nice looking UI with buttons handled by event listeners. Follows PEMDAS computation. Utilizes clean and professional MVC Architecture by the use of Lexer, Parser, and View classes.

  > UPDATE 1: PEMDAS being worked on based on the postfix tree algorithm. Infix -> Postfix first!
  
  > UPDATE 2: PEMDAS mostly works as the postfix being returned is accurate based on online calculator results. However, the resulting values are off alittle bit for some reason. 
  
  > UPDATE 3: MVC structure. => currently being worked on. Hoping to have it done tomorrow. Didnt do alot since update2 since im still debating on how to go about the MVC....
 
  > UPDATE 4: The lexer class is complete. Returns the correct tokenized expression. => expression = '11+2*3' Lexer.analyze(expression) RETURNS ['11', '+', '2', '*', '3']. Notice how before 11 wasn't being returned (it was 2 1's instead) but now it does. :)
  
  > UPDATE 5: After some good amount of time, I finished. View has a method called compute(input) that takes in input (user input) and calls all 3 created classes (PostfixCalculator, Lexer, Parser) in order to output the final result. As mentioned before, organized on an MVC architecture and the code is all documented clearly.

____________________________________________
>Tic Tac Toe 2:

  > Description: Multiplayer 3x3 TTT game. Computer player has randomized selections based on a random generated seed (index 0-8 => 9 squares). Time limit of each play = 5 seconds.


