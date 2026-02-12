export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanjeev NC - Product Management Blog</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fafafa;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: white;
            padding: 2rem 0;
            margin-bottom: 3rem;
            border-bottom: 1px solid #eee;
        }
        
        .hero {
            text-align: center;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
            margin-bottom: 1rem;
        }
        
        .bio {
            max-width: 600px;
            margin: 0 auto;
            font-size: 1.1rem;
            color: #555;
        }
        
        .blog-section {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        
        .section-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }
        
        .post-preview {
            padding: 1.5rem 0;
            border-bottom: 1px solid #eee;
        }
        
        .post-preview:last-child {
            border-bottom: none;
        }
        
        .post-title {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: #2980b9;
            text-decoration: none;
        }
        
        .post-title:hover {
            text-decoration: underline;
        }
        
        .post-excerpt {
            color: #666;
            margin-bottom: 0.5rem;
        }
        
        .post-date {
            font-size: 0.9rem;
            color: #999;
        }
        
        .topics {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        
        .topic-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .topic-card {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 6px;
            border-left: 4px solid #3498db;
        }
        
        .topic-card h3 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        
        footer {
            text-align: center;
            padding: 2rem 0;
            color: #7f8c8d;
            margin-top: 3rem;
        }
        
        .social-links {
            margin: 1rem 0;
        }
        
        .social-links a {
            color: #3498db;
            text-decoration: none;
            margin: 0 1rem;
        }
        
        .social-links a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            
            .container {
                padding: 0 15px;
            }
            
            .blog-section, .topics {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="hero">
                <h1>Sanjeev NC</h1>
                <div class="subtitle">Product Management Expert & Strategic Thinker</div>
                <div class="bio">
                    Welcome to my corner of the internet where I share insights on product strategy, user experience, market dynamics, and the art of building products that matter.
                </div>
            </div>
        </div>
    </header>

    <main class="container">
        <section class="blog-section">
            <h2 class="section-title">Latest Posts</h2>
            
            <article class="post-preview">
                <a href="#" class="post-title">The Product Manager's Guide to Strategic Roadmapping</a>
                <p class="post-excerpt">How to balance stakeholder needs, technical constraints, and market opportunities while building a roadmap that actually drives results...</p>
                <div class="post-date">Coming Soon</div>
            </article>
            
            <article class="post-preview">
                <a href="#" class="post-title">User Research That Actually Influences Product Decisions</a>
                <p class="post-excerpt">Moving beyond vanity metrics and surface-level feedback to uncover insights that transform your product strategy...</p>
                <div class="post-date">Coming Soon</div>
            </article>
            
            <article class="post-preview">
                <a href="#" class="post-title">Building Products in Uncertain Markets</a>
                <p class="post-excerpt">Strategies for product development when customer needs are evolving and competitive landscapes shift rapidly...</p>
                <div class="post-date">Coming Soon</div>
            </article>
        </section>

        <section class="topics">
            <h2 class="section-title">What I Write About</h2>
            <div class="topic-grid">
                <div class="topic-card">
                    <h3>Product Strategy</h3>
                    <p>Framework development, competitive analysis, and long-term planning</p>
                </div>
                <div class="topic-card">
                    <h3>User Experience</h3>
                    <p>Research methodologies, design thinking, and user-centered development</p>
                </div>
                <div class="topic-card">
                    <h3>Market Analysis</h3>
                    <p>Opportunity assessment, trend identification, and positioning strategies</p>
                </div>
                <div class="topic-card">
                    <h3>Team Leadership</h3>
                    <p>Cross-functional collaboration, stakeholder management, and team dynamics</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Email</a>
            </div>
            <p>&copy; 2024 Sanjeev NC. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>` }} />
  );
}