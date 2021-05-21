# Bloger-Space

A Blogging website where an author can create, update, post ,and delete blogs, and a viewer/reader can present their views by adding comments.
The app has CRUD functionality.

it is deployed at -
https://blogerspace.herokuapp.com/


I have implemented all levels .

<strong>level-1</strong>

• POST: Add a blog   -- by clicking  on New Blog or going to /blogs/add 
• GET : Get all the blogs -- by clicking  on Blog logo or Home  or going to /blogs or only /
• GET : Get a blog by id -- by clicking  on read more for each blog or going to /blogs/:id
• DELETE : Delete a blog with given id -- by clicking  on delete button inside each blog  or sending delete request to /blogs/:id
• PUT : Update the blog with given id -- by clicking  on update button inside each blog  or sending request to /blogs/edit/:id

<strong>level-2</strong>

• POST : Post a comment on post -- by clicking  on post button inside each blog in comment form or sending post request to /blogs/:id/comment
• GET : Get all comment for a post -- by clicking  on read more for each blog or going to /blogs/:id . Each blog has its comments there.
