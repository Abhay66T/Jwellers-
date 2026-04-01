document.addEventListener('DOMContentLoaded', () => {
        
            // 1. Sticky Navbar Effect
                const navbar = document.getElementById('navbar');
                    
                        window.addEventListener('scroll', () => {
                                if (window.scrollY > 50) {
                                            navbar.classList.add('scrolled');
                                                    } else {
                                                                navbar.classList.remove('scrolled');
                                                                        }
                                                                            });

                                                                                // 2. Mobile Menu Toggle
                                                                                    const menuToggle = document.getElementById('mobile-menu');
                                                                                        const navLinks = document.querySelector('.nav-links');

                                                                                            menuToggle.addEventListener('click', () => {
                                                                                                    navLinks.classList.toggle('active');
                                                                                                            // Change Icon from bars to cross and vice versa
                                                                                                                    const icon = menuToggle.querySelector('i');
                                                                                                                            if (navLinks.classList.contains('active')) {
                                                                                                                                        icon.classList.remove('fa-bars');
                                                                                                                                                    icon.classList.add('fa-times');
                                                                                                                                                                // Ensure background becomes white when menu opens on mobile at top
                                                                                                                                                                            if(window.scrollY <= 50) navbar.classList.add('scrolled');
                                                                                                                                                                                    } else {
                                                                                                                                                                                                icon.classList.remove('fa-times');
                                                                                                                                                                                                            icon.classList.add('fa-bars');
                                                                                                                                                                                                                        if(window.scrollY <= 50) navbar.classList.remove('scrolled');
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                        // Close mobile menu when clicking a link
                                                                                                                                                                                                                                            const links = document.querySelectorAll('.nav-links li a');
                                                                                                                                                                                                                                                links.forEach(link => {
                                                                                                                                                                                                                                                        link.addEventListener('click', () => {
                                                                                                                                                                                                                                                                    navLinks.classList.remove('active');
                                                                                                                                                                                                                                                                                menuToggle.querySelector('i').classList.remove('fa-times');
                                                                                                                                                                                                                                                                                            menuToggle.querySelector('i').classList.add('fa-bars');
                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                            // 3. Prevent Form Submission Refresh (Since it's UI only)
                                                                                                                                                                                                                                                                                                                const form = document.getElementById('formUI');
                                                                                                                                                                                                                                                                                                                    form.addEventListener('submit', (e) => {
                                                                                                                                                                                                                                                                                                                            e.preventDefault();
                                                                                                                                                                                                                                                                                                                                    alert('Thank you! Your message has been received. We will get back to you shortly.');
                                                                                                                                                                                                                                                                                                                                            form.reset();
                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                });

