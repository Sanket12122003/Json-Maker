Live Website:https://frontend-jsonmaker.vercel.app/
Example form JSON Schema :https://drive.google.com/file/d/1RUU_ueF9BbQRLReuX88w8PWe2jsz3Z3C/view?usp=sharing

The goal of this project is to create a React application using Chakra UI that allows users to paste a UI schema on the left side and preview the rendered form on the right-hand side. The UI schema is a JSON array that contains all the information required to generate dynamic forms. The application will have a single screen divided into two equal sections. The left section will contain a JSON editor where users can paste the UI schema, and the right section will automatically render a form based on the pasted UI schema.

The UI schema will contain objects with various fields that define the form's structure and functionalities. Each object in the UI schema will have properties such as "sort" for determining the sequence of form sections, "label" for displaying the section label, "description" for holding the description of the section or field, "validate" for defining field validations like "required" and "immutable", "jsonKey" for holding a unique key for each field/section, "uiType" for specifying the type of form element (e.g., input, number, group, select, switch), "level" for determining the nesting of fields, and "placeholder" for adding placeholder/hint text in the form fields.

The application will also have advanced fields that can be toggled on and off. These fields will be hidden by default and will only be displayed when the user clicks on the "Show advanced fields" toggle button. The visibility of these advanced fields will be controlled by the "validate" property in the UI schema.


Tech Stack
Frontend: React, JavaScript, Chakra UI

Installation
1. Clone the repository
  git clone https://github.com/Priyanshu9898/Frontend-Assignment.git
2. Install dependencies 
  cd Frontend-Assignment
  npm install
3. Start the development server
  npm start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
Building for production
To create a production build, run:
npm run build
This will build the app for production and output the files to the build folder. The build is minified, and the filenames include the hashes for efficient caching.



