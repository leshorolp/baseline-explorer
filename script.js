// Interactive Baseline Explorer - Main JavaScript

class BaselineExplorer {
    constructor() {
        this.features = [];
        this.filteredFeatures = [];
        this.currentCategory = 'all';
        this.currentStatus = 'all';
        this.searchTerm = '';
        
        this.initializeApp();
    }
    
    // Initialize the application
    initializeApp() {
        this.loadFeatures();
        this.setupEventListeners();
    }
    
    // Load features from web-features package
    async loadFeatures() {
        try {
            // In a real implementation, we would use:
            // import { features } from 'web-features';
            // But for this demo, we'll use a sample dataset
            
            // Simulate loading delay
            setTimeout(() => {
                this.features = this.getSampleFeatures();
                this.filteredFeatures = [...this.features];
                this.renderStats();
                this.renderFeatures();
            }, 1000);
            
        } catch (error) {
            console.error('Error loading features:', error);
            document.getElementById('features-container').innerHTML = 
                '<div class="loading">Error loading features. Please check the console for details.</div>';
        }
    }
    
    // Create sample features data (in a real app, this would come from web-features)
    getSampleFeatures() {
        return [
            // HTML Features
            {
                id: 'html-article',
                name: '<article>',
                category: 'html',
                status: 'baseline',
                description: 'Represents a self-contained composition in a document, page, application, or site.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article'
            },
            {
                id: 'html-section',
                name: '<section>',
                category: 'html',
                status: 'baseline',
                description: 'Represents a generic standalone section of a document.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section'
            },
            {
                id: 'html-nav',
                name: '<nav>',
                category: 'html',
                status: 'baseline',
                description: 'Represents a section of a page whose purpose is to provide navigation links.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav'
            },
            {
                id: 'html-dialog',
                name: '<dialog>',
                category: 'html',
                status: 'baseline',
                description: 'Represents a dialog box or other interactive component.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog'
            },
            {
                id: 'html-details',
                name: '<details>',
                category: 'html',
                status: 'baseline',
                description: 'Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details'
            },
            {
                id: 'html-input-types',
                name: 'Input Types',
                category: 'html',
                status: 'baseline',
                description: 'Various input types like email, url, tel, number, date, etc.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input'
            },
            
            // CSS Features
            {
                id: 'css-flexbox',
                name: 'Flexbox',
                category: 'css',
                status: 'baseline',
                description: 'CSS Flexible Box Layout for efficient layout of items in a container.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'
            },
            {
                id: 'css-grid',
                name: 'CSS Grid',
                category: 'css',
                status: 'baseline',
                description: 'CSS Grid Layout for creating complex, responsive web layouts.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'
            },
            {
                id: 'css-custom-properties',
                name: 'CSS Custom Properties',
                category: 'css',
                status: 'baseline',
                description: 'CSS variables that allow value reuse and easier theming.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/--*'
            },
            {
                id: 'css-transforms',
                name: 'CSS Transforms',
                category: 'css',
                status: 'baseline',
                description: 'CSS properties that let you rotate, scale, skew, or translate an element.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform'
            },
            {
                id: 'css-transitions',
                name: 'CSS Transitions',
                category: 'css',
                status: 'baseline',
                description: 'CSS properties that allow you to change property values smoothly over a given duration.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions'
            },
            {
                id: 'css-media-queries',
                name: 'Media Queries',
                category: 'css',
                status: 'baseline',
                description: 'CSS technique for applying styles based on device characteristics.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries'
            },
            
            // JavaScript Features
            {
                id: 'js-arrow-functions',
                name: 'Arrow Functions',
                category: 'javascript',
                status: 'baseline',
                description: 'Shorter function syntax with lexical this binding.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
            },
            {
                id: 'js-promises',
                name: 'Promises',
                category: 'javascript',
                status: 'baseline',
                description: 'Objects representing the eventual completion or failure of an asynchronous operation.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'
            },
            {
                id: 'js-async-await',
                name: 'Async/Await',
                category: 'javascript',
                status: 'baseline',
                description: 'Syntactic sugar for working with promises in a more synchronous-looking way.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
            },
            {
                id: 'js-modules',
                name: 'ES Modules',
                category: 'javascript',
                status: 'baseline',
                description: 'Native JavaScript module system for organizing and sharing code.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'
            },
            {
                id: 'js-template-literals',
                name: 'Template Literals',
                category: 'javascript',
                status: 'baseline',
                description: 'String literals allowing embedded expressions and multi-line strings.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
            },
            {
                id: 'js-destructuring',
                name: 'Destructuring',
                category: 'javascript',
                status: 'baseline',
                description: 'JavaScript expression that makes it possible to unpack values from arrays or properties from objects.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
            },
            
            // API Features
            {
                id: 'api-fetch',
                name: 'Fetch API',
                category: 'api',
                status: 'baseline',
                description: 'Modern interface for fetching resources asynchronously across the network.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
            },
            {
                id: 'api-intersection-observer',
                name: 'Intersection Observer',
                category: 'api',
                status: 'baseline',
                description: 'API that allows observing changes in the intersection of a target element with an ancestor element.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
            },
            {
                id: 'api-web-storage',
                name: 'Web Storage',
                category: 'api',
                status: 'baseline',
                description: 'API for storing data in the browser (localStorage and sessionStorage).',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API'
            },
            {
                id: 'api-geolocation',
                name: 'Geolocation API',
                category: 'api',
                status: 'baseline',
                description: 'API for accessing the geographical location of the device.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API'
            },
            {
                id: 'api-canvas',
                name: 'Canvas API',
                category: 'api',
                status: 'baseline',
                description: 'API for drawing graphics via JavaScript and the HTML <canvas> element.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'
            },
            {
                id: 'api-web-workers',
                name: 'Web Workers',
                category: 'api',
                status: 'baseline',
                description: 'API for running scripts in background threads separate from the main execution thread.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API'
            },
            
            // Some non-baseline features for demonstration
            {
                id: 'css-container-queries',
                name: 'Container Queries',
                category: 'css',
                status: 'not-baseline',
                description: 'CSS queries that allow elements to adapt their styles based on the size of their container.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries'
            },
            {
                id: 'api-webgpu',
                name: 'WebGPU API',
                category: 'api',
                status: 'not-baseline',
                description: 'Next-generation graphics and compute API for the web.',
                mdn_url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API'
            }
        ];
    }
    
    // Set up event listeners for filters and search
    setupEventListeners() {
        // Category filter buttons
        document.querySelectorAll('.filter-btn[data-filter]').forEach(button => {
            button.addEventListener('click', (e) => {
                // Update active state
                document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Update current category and filter
                this.currentCategory = e.target.dataset.filter;
                this.applyFilters();
            });
        });
        
        // Status filter buttons
        document.querySelectorAll('.filter-btn[data-status]').forEach(button => {
            button.addEventListener('click', (e) => {
                // Update active state
                document.querySelectorAll('.filter-btn[data-status]').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Update current status and filter
                this.currentStatus = e.target.dataset.status;
                this.applyFilters();
            });
        });
        
        // Search input
        document.getElementById('search').addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.applyFilters();
        });
    }
    
    // Apply all current filters and search
    applyFilters() {
        this.filteredFeatures = this.features.filter(feature => {
            // Category filter
            if (this.currentCategory !== 'all' && feature.category !== this.currentCategory) {
                return false;
            }
            
            // Status filter
            if (this.currentStatus === 'baseline' && feature.status !== 'baseline') {
                return false;
            }
            
            // Search filter
            if (this.searchTerm && !feature.name.toLowerCase().includes(this.searchTerm) && 
                !feature.description.toLowerCase().includes(this.searchTerm)) {
                return false;
            }
            
            return true;
        });
        
        this.renderStats();
        this.renderFeatures();
    }
    
    // Render statistics
    renderStats() {
        const totalFeatures = this.features.length;
        const baselineFeatures = this.features.filter(f => f.status === 'baseline').length;
        const htmlFeatures = this.features.filter(f => f.category === 'html').length;
        const cssFeatures = this.features.filter(f => f.category === 'css').length;
        const jsFeatures = this.features.filter(f => f.category === 'javascript').length;
        const apiFeatures = this.features.filter(f => f.category === 'api').length;
        
        document.getElementById('total-features').textContent = totalFeatures;
        document.getElementById('baseline-features').textContent = baselineFeatures;
        document.getElementById('html-features').textContent = htmlFeatures;
        document.getElementById('css-features').textContent = cssFeatures;
        document.getElementById('js-features').textContent = jsFeatures;
        document.getElementById('api-features').textContent = apiFeatures;
    }
    
    // Render features in the grid
    renderFeatures() {
        const container = document.getElementById('features-container');
        
        if (this.filteredFeatures.length === 0) {
            container.innerHTML = '<div class="loading">No features match your current filters. Try adjusting your search or filters.</div>';
            return;
        }
        
        container.innerHTML = this.filteredFeatures.map(feature => `
            <div class="feature-card" data-category="${feature.category}" data-status="${feature.status}">
                <h3 class="feature-name">${feature.name}</h3>
                <span class="feature-category">${feature.category.toUpperCase()}</span>
                <div class="feature-status ${feature.status}">
                    ${feature.status === 'baseline' ? 'Baseline' : 'Not Baseline'}
                </div>
                <p class="feature-description">${feature.description}</p>
                <div class="feature-links">
                    <a href="${feature.mdn_url}" target="_blank" class="feature-link">MDN Docs</a>
                </div>
            </div>
        `).join('');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BaselineExplorer();
});