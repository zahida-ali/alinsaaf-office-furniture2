const ads = [
            "Get 20% off on all office chairs this week!",
            "Free delivery on orders above PKR 50,000!",
            "New arrivals: Modern workstations for your office!",
            "Limited time offer: Buy one table, get a chair at 50% off!"
        ];
        function updateAd() {
            const adText = document.getElementById('adText');
            const randomAd = ads[Math.floor(Math.random() * ads.length)];
            adText.textContent = randomAd;
        }
        setInterval(updateAd, 5000); // Update ad every 5 seconds
        updateAd(); // Initial ad display

        // Google Maps Integration
        function initMap() {
            const location = { lat: 33.5651, lng: 73.0169 }; // Approximate coordinates for Saddiqabad, Rawalpindi
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: location
            });
            new google.maps.Marker({
                position: location,
                map: map,
                title: 'Alinsaaf Office Furniture'
            });
        }
        window.onload = initMap;

        // Three.js 3D Viewer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.9, 400);
        document.getElementById('threeDViewer').appendChild(renderer.domElement);

        // Simple 3D chair model (cube as a placeholder)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brown color for furniture
        const chair = new THREE.Mesh(geometry, material);
        scene.add(chair);
        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            chair.rotation.x += 0.01;
            chair.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // Responsive renderer size
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth * 0.9, 400);
            camera.aspect = window.innerWidth / 400;
            camera.updateProjectionMatrix();
        });
    </script>
</body>
</html>
Explanation of Features

Owners and Contact Information:

The "About Us" section includes the owners' names, Sajjad Ali and Ijaz Ali.
The "Contact Us" section lists the phone number (03166687166) and the location (Kurry Road, Saddiqabad, Rawalpindi).


Professional Website Design:

The website has a clean, modern layout with a navigation bar, header, and footer.
It includes sections for Home, Products, 3D Viewer, About Us, and Contact.
The design is responsive, ensuring compatibility with various screen sizes.


Location with Google Maps:

A Google Maps integration displays the approximate location of Kurry Road, Saddiqabad, Rawalpindi (using coordinates lat: 33.5651, lng: 73.0169).
Note: Replace YOUR_GOOGLE_MAPS_API_KEY in the Google Maps script with a valid API key from the Google Cloud Console.


Auto-Generated Ads:

The website features a dynamic ad section that cycles through a predefined list of promotional messages every 5 seconds using JavaScript (setInterval).
Ads are randomized from a list of offers, such as discounts and free delivery, to keep the content engaging.


3D Image Viewer:

The 3D viewer uses Three.js to render a simple 3D model (a rotating cube as a placeholder for a furniture item like a chair).
The model rotates continuously for an interactive experience.
In a real implementation, you would replace the cube with an actual 3D furniture model (e.g., in GLTF or OBJ format) loaded via Three.js.



Setup Instructions

Host the Website:

Save the code as index.html and host it on a web server (e.g., XAMPP, Node.js, or a hosting provider like Netlify).
Ensure an internet connection for loading external libraries (Three.js and Google Maps).


Google Maps API Key:

Obtain a Google Maps API key from Google Cloud Console.
Replace YOUR_GOOGLE_MAPS_API_KEY in the <script> tag with your key.


Enhancing the 3D Viewer:

To display actual furniture models, replace the cube geometry with a 3D model file (e.g., GLTF). Use Three.js’s GLTFLoader:
javascriptconst loader = new THREE.GLTFLoader();
loader.load('path/to/furniture.gltf', (gltf) => {
    scene.add(gltf.scene);
});

Host the 3D model files on your server or a CDN.


Customizing Ads:

Modify the ads array in the JavaScript section to include different promotional messages or link to specific product pages.


Styling and Content:

Customize the CSS in the <style> section to match your brand colors or style preferences.
Add more product details, images, or categories in the "Products" section.



Notes

3D Models: The current 3D viewer uses a placeholder cube. For a production website, source or create 3D models of your furniture (e.g., using Blender) and integrate them with Three.js.
SEO and Accessibility: Add meta tags (e.g., <meta name="description" content="Alinsaaf Office Furniture in Rawalpindi...">) and ensure images have alt attributes for better SEO and accessibility.
Security: If collecting user data (e.g., through a contact form), implement HTTPS and validate inputs to prevent security issues.
Local Testing: Test the website locally using a tool like VS Code’s Live Server or a local server setup to ensure all features work as expected.

This code provides a solid foundation for a professional furniture website with the requested features. Let me know if you need further customization or help with specific aspects, like loading actual 3D models or adding a contact form!20 𝕏 posts25 web pages4.4s