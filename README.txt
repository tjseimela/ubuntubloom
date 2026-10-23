UBUNTU BLOOM — WEB DEVELOPMENT 3.2 PROJECT
===========================================

Project concept
---------------
Ubuntu Bloom is presented as a South African Plant Nursery & Plant Care Centre based in Vanderbijlpark.
Tagline: “Grow together. Bloom together.”

Included pages
--------------
- index.html        Home page with responsive hero slider and featured plants
- plants.html       Searchable/filterable plant catalogue
- plant-care.html   Care guides, table, lists and 3 local videos
- about.html        Business story, mission and values
- contact.html      Business details and contact form
- process-contact.php  PHP form processor (no database)

Technologies
------------
- HTML5 for page structure and semantic content
- CSS3 for layout, responsive design, hover/focus states and branding
- JavaScript for:
  1. Responsive hamburger navigation
  2. Dropdown navigation
  3. Hero image slider
  4. Plant category filtering
  5. Plant search
  6. Language switching (English, isiZulu and Sesotho)
  7. Contact form validation
  8. Plant enquiry pre-filling
- PHP for server-side contact form validation and CSV storage

No database is required.

XAMPP setup on Windows
----------------------
1. Install XAMPP.
2. Copy the complete “ubuntu-bloom” folder into:
   C:\xampp\htdocs\
3. Start Apache from the XAMPP Control Panel.
4. Open a browser and visit:
   http://localhost/ubuntu-bloom/
5. Submit the Contact form to test PHP.
6. Submitted messages are saved automatically to:
   ubuntu-bloom\data\messages.csv

IMPORTANT:
Do not open contact.html only by double-clicking the file if you want to test PHP.
Use localhost through XAMPP so process-contact.php can run.

Business details used in the project
--------------------------
Ubuntu Bloom
18 Riverleaf Avenue, Vanderbijlpark, Gauteng, 1911
+27 16 555 0148
hello@ubuntubloom.co.za

The website uses consistent business contact details, products and pricing across all pages.

Project structure
-----------------
ubuntu-bloom/
  index.html
  plants.html
  plant-care.html
  about.html
  contact.html
  process-contact.php
  README.txt
  css/
    style.css
  js/
    script.js
  images/
    logo.svg
    hero/
    plants/
    about/
  media/
    watering-basics.mp4
    light-basics.mp4
    repotting-basics.mp4
  data/
    messages.csv   (created automatically after first successful form submission)

Testing checklist
-----------------
- Resize the browser to phone/tablet/desktop widths.
- Test the hamburger menu.
- Test the Plants dropdown.
- Test all navigation links and footer links.
- Switch between EN, ZU and ST.
- Search plants by name.
- Filter Indoor / Outdoor / Succulents / Herbs.
- Click enquiry buttons on the Plants page.
- Play all three care videos.
- Submit invalid form values to see JavaScript validation.
- Submit a valid form while running through XAMPP.
- Confirm data/messages.csv is created.

External educational links in the footer
----------------------------------------
- SANBI: https://www.sanbi.org/
- PlantZAfrica: https://pza.sanbi.org/

