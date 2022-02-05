# etch-a-sketch

This file creates a grid of size X by X, where is X is inputted by the user. Then whenever a mouse hovers over any of the squares, a random color is assigned to that square. With each subsequent hover over a colored square, that square turns 10% darker and becomes black after 10 passes. 

Thigns Learned: 
#1 box-sizing: border box. This allowed the divs to be aligned within the borders of the container without having to calculate for padding/margin of each square. 

#2 filter: brightness(x). This is what makes backgrounds/colors/images turn darker or brighter. I used this property and function to make squares turn 'blacker' with each hover.

#3 DOM Manipulation. Extra practice for creating and manipulating elements with javascript. 

#4 Clearing out all the children within a parent element. The two lines of code within the fillGrid() function showcase this effectively. A great way for clearing and emptying out a parent element.