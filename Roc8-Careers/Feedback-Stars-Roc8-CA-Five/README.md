# Feedback Stars

Create a feedback rating component that takes in a number of stars and outputs the corresponding star (asterisk) on the output window. When the user clicks on any of the stars, that stars till that point are highlighted (filled). Once the user hovers over the stars, the stars till that point are highlighted - but not persisted until the user clicks on the star.

# Tasks
   
   1.Feedback component takes in a prop numberOfStars which will render the number of stars on the page.

   2.On hover, the background color of the star should turn to yellow.

   3.On clicking a single star, save the feedback in state Ratings should be in the range of `1 <= ratings <= numberOfStars.` (It cannot be zero)

   4.Once the star is hovered over, all the stars starting from 1 to the star being hovered over should be highlighted (irrespective of the persisted state of stars).

   5.Give the class name of `star` to the star element. Note: Test cases will fail if you don't have the star class.

   6.If the star is highlighed, the star element should have a class of `highlighted`.

   7.Note: Test cases will fail if you don't have the highlighted class.

# Notes

    1.Write your code in the Feedback.tsx component under `/components/Feedback.tsx`

    2.Test cases will fail if you don't have the `star` class and the `highlighted` class.

    3.If you want to have a look at the test cases, refer the `Tests.test.js` file at the root.