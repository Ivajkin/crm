#!/bin/bash

# Create main project directory
mkdir crm
cd crm

# Create source code directory
mkdir src
cd src

# Create controllers directory
mkdir controllers
touch controllers/customerController.js
touch controllers/leadController.js
touch controllers/userController.js

# Create models directory
mkdir models
touch models/customerModel.js
touch models/leadModel.js
touch models/userModel.js

# Create routes directory
mkdir routes
touch routes/customerRoutes.js
touch routes/leadRoutes.js
touch routes/userRoutes.js

# Create views directory
mkdir views
cd views

# Create layouts directory
mkdir layouts
touch layouts/main.handlebars

# Create partials directory
mkdir partials
touch partials/header.handlebars
touch partials/footer.handlebars

touch home.handlebars

cd ../..

# Create other project files
touch package.json
touch package-lock.json
touch README.md

# Output success message
echo "CRM project file structure created successfully."
