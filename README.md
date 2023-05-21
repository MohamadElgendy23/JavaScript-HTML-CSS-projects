# JavaScript/HTML/CSS projects

This repository contains personal projects for learning and improving skills in JavaScript and HTML/CSS. Just by the titles of the projects, its obvious what it is, but as the summer goes on I will be working on larger projects that requires a description inside this README file. Feel free to download and run these projects! :)

NOTE: NO MATTER HOW SMALL A PROJECT IS, SOME CODE EXPOSURE IS BETTER THAN NO EXPOSURE :)
Simple (semi) Projects:
> Postfix Calculator: 
  > Nice looking UI with buttons handled by event listeners. 
  > The calculator handles repeating operations. For example: 2+3*6. The 2+3 is calculated on the fly => 2+3 = 5 * 6 = 30. (No PEMDAS here because 2+3 is added first in the calculator). 
  > UPDATE1: PEMDAS being worked on based on the postfix tree algorithm. Infix -> Postfix first!
  > UPDATE2: PEMDAS mostly works as the postfix being returned is accurate based on online calculator results. However, the resulting                values are off alittle bit for some reason. 
  > UPDATE3: MVC structure. => currently being worked on. Hoping to have it done tomorrow. Didnt do alot since update2 since im still                debating on how to go about the MVC....
  > UPDATE4: The lexer class is complete. Returns the correct tokenized expression. => expression = '11+2*3' => Lexer.analyze(expression) RETURNS ['11', '+', '2', '*', '3']. Notice how before 11 wasn't being returned (it was 2 1's) but now it does. :)

>Tic Tac Toe 2:
  > Multiplayer 3x3 TTT game
  > Computer player has randomized selections based on a random generated seed (index 0-8 => 9 squares)
  > Time limit of each play = 5 seconds
