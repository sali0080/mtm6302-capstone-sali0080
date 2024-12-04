# BRANCH-01
## mtm6302-capstone-sali0080
Author: Kaline Marie Salibi
Student #: 040932016

# Astronomy Picture of the Day

This project allows users to explore stunning astronomy pictures from NASA's APOD API by selecting a date and viewing the Astronomy Picture of the Day (APOD).

--------------------------------

# BRANCH-02
## Design Decisions

The design of this mockup focuses on user experience, accessibility, and visual appeal with both functionality and user experience in mind. Key design decisions include:

### 1. Simplified Date Selection Interface
- The date selection feature is designed to be straightforward, using a clean and simple date picker input. Users are instructed to enter a non-future date, ensuring clarity on input expectations.

### 2. Focus on Visual Content
- Given the visual nature of the app, the featured APOD images are displayed prominently. Descriptions and dates are provided in a subtle, subtle manner to ensure the images remain the focal point.

### 3. Favorites Feature
- Users can mark their favorite images with a "Favorite" button. This functionality encourages users to engage with the app over time and return to their saved images for future viewing directly from the website.

### 4. Orginized Image Navigation
- The app includes a orginized selection of APOD images, each accompanied by a brief description and preview. This allows users to easily browse through content in a visually engaging way.

### 5. Detailed APOD Information
- Each image is paired with detailed information including the title, date, and a description of the space event. This adds an educational informed layer to the visual experience by providing insights about the images.

### 6. Responsive Design
- The layout is responsive, ensuring a seamless experience on both mobile and desktop devices. The design adjusts fluidly to different screen sizes, making the app accessible to a broad audience.

### 7. Consistent Branding
- A cohesive color palette and font choice were selected to reflect space exploration themes and align with NASA's branding. The modern, clean aesthetic enhances the professionalism of the app.

By balancing simplicity, visual impact, and engagement, this design ensures that users have an enjoyable and educational experience while exploring the universe through NASA's APOD images.

------------------------------------

# BRANCH-03
## Styling protype 

### 8. Prototype Development Process
The prototype was developed with a focus on meeting user needs while maintaining alignment with the initial high-fidelity wireframes. Here are the key steps taken to build this mockup:

### 9. HTML Structure Creation
   - Established the main HTML structure, dividing the page into clearly defined sections, such as the heading, date selection, featured picture, APOD details, favorite images, and footer sections.
   - Utilized semantic HTML elements to enhance accessibility and readability, ensuring a logical layout for both users and screen readers.

### 10. CSS Styling and Layout 
   - Applied CSS styles for each section, ensuring consistency with the visual theme inspired by NASA's branding. Key colors and fonts were defined at the root level for easy updates.
   - Created a balanced visual hierarchy by emphasizing important sections (like the featured image) and using padding, margin, and alignment to organize the content effectively.

### 11. Responsive Design with Media Queries  
   - To ensure usability on mobile devices, media queries were added to adjust the layout and styling for smaller screens, specifically targeting widths around iPhone dimensions.
   - Adjusted the alignment, font sizes, padding, and image scaling for mobile views to provide a seamless experience on different devices.

### 12. Bootstrap Integration
   - Integrated Bootstrap to streamline the implementation of responsive design and spacing, leveraging grid classes for flexible alignment and easy scalability.

### 13. JavaScript and API Integration (Planned)  
   - Placeholder elements were included for JavaScript functions to fetch data from NASA's APOD API and dynamically update the featured picture section based on the selected date.
   - Buttons for functionality, such as "Save as Favorite" and "View HD," were prepared for future JavaScript integration.

### 15.User-Centric Adjustments
   - Based on user feedback and needs, minor changes were made to the website layout and features compared to the original high-fidelity wireframes. These changes enhanced usability and better aligned with user preferences, ensuring the final design is both functional and visually appealing.

By following these steps, the prototype successfully achieves a balance between visual design, functionality, and user-centered adjustments to meet the intended goals of the Astronomy Picture of the Day project.

------------------------------------ 

# BRANCH-04
## JavaScript Implementation and Dynamic Changes

The JavaScript in this project ensures a dynamic and interactive user experience by enabling key functionalities that go beyond static content. Here's how it works:

### 16. Fetching Data Dynamically
   - When a user selects a date and clicks "Submit," JavaScript uses the Fetch API to retrieve the Astronomy Picture of the Day (APOD) data from NASA's API without refreshing the page.
   - The script dynamically updates the featured image, title, and description based on the API response.

### 17. Real-Time Image Updates
   - The featured picture section updates in real time to show the new image and its details as soon as the user selects a date.
   - A "View HD" button dynamically links to the high-definition version of the image.

### 18. Favorites Functionality
   - Users can save their favorite images by clicking "Save as Favorite." This action stores the image data in local storage.
   - Saved favorites are dynamically displayed in the "Favorites" section, allowing users to revisit their selected images.
   - JavaScript ensures that removing a favorite immediately updates the UI and local storage without requiring a page reload.

### 19. Responsive Adjustments
   - The layout adjusts dynamically through JavaScript logic combined with CSS to ensure smooth user interaction across different devices.

### 20. Event-Driven Actions
   - All user interactions, such as button clicks and date selection, are handled with JavaScript event listeners.
   - The app avoids inline event handlers to ensure clean, maintainable, and scalable code.

These dynamic JavaScript functionalities enhance the interactivity and usability of the Astronomy Picture of the Day app, creating a seamless and engaging experience for users.
