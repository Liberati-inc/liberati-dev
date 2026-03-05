<!DOCTYPE html>

<html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Liberati Design System - Visual Toolkit</title>
<!-- Google Fonts: Manrope -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS v3 -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            obsidian: '#0A0A0A',
            liberatiRed: '#AE1E22',
            mutedGray: '#A0A0A0',
          },
          fontFamily: {
            sans: ['Manrope', 'sans-serif'],
          },
        },
      },
    }
  </script>
<style data-purpose="custom-utilities">body {
      background-color: #0A0A0A;
      color: #FFFFFF;
      -webkit-font-smoothing: antialiased;
    }
    .text-outline {
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
      color: transparent;
    }
    .hover-arrow {
      transition: transform 0.3s ease;
      color: #AE1E22;
    }
    .group:hover .hover-arrow {
      transform: translateX(4px);
    }</style>
</head>
<body class="font-sans" style="background-color: #0A0A0A;">
<!-- BEGIN: Main Header -->
<header class="py-12 px-8 border-b border-white/10" data-purpose="toolkit-header">
<div class="max-w-7xl mx-auto">
<p class="text-liberatiRed font-bold tracking-[0.2em] mb-4 text-xs">LIBERATI DESIGN SYSTEM</p>
<h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter">Visual Toolkit v1.0</h1>
<p class="text-mutedGray mt-4 max-w-2xl font-light text-lg">A cinematic minimalist framework for high-end digital experiences. Built for Obsidian Dark Mode environments.</p>
</div>
</header>
<!-- END: Main Header -->
<main class="max-w-7xl mx-auto px-8 pb-32">
<!-- BEGIN: Typography Scale -->
<section class="py-20 border-b border-white/5" data-purpose="typography-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">01. Typography</span>
</div>
<div class="md:col-span-3 space-y-12">
<div>
<span class="text-white/30 text-xs mb-2 block">H1 - Manrope ExtraBold (72px)</span>
<h1 class="text-6xl md:text-7xl font-extrabold tracking-tighter">Cinematic Direction.</h1>
</div>
<div>
<span class="text-white/30 text-xs mb-2 block">H2 - Manrope Bold (48px)</span>
<h2 class="text-4xl md:text-5xl font-bold tracking-tight">Immersive Digital Experiences.</h2>
</div>
<div>
<span class="text-white/30 text-xs mb-2 block">H3 - Manrope SemiBold (30px)</span>
<h3 class="text-2xl md:text-3xl font-semibold">The Intersection of Art and Code.</h3>
</div>
<div>
<span class="text-white/30 text-xs mb-2 block">Body - Manrope Regular (16px/1.6)</span>
<p class="text-lg text-mutedGray max-w-xl leading-relaxed">
              We create visual narratives that resonate with global audiences, blending high-end aesthetics with technical precision. Every pixel serves a purpose in the Liberati ecosystem.
            </p>
</div>
</div>
</div>
</section>
<!-- END: Typography Scale -->
<!-- BEGIN: Color Palette -->
<section class="py-20 border-b border-white/5" data-purpose="colors-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">02. Color Palette</span>
</div>
<div class="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Obsidian -->
<div class="space-y-2">
<div class="h-32 w-full bg-obsidian border border-white/10 rounded-sm"></div>
<p class="text-sm font-bold">Obsidican</p>
<p class="text-xs text-mutedGray">#0A0A0A</p>
</div>
<!-- Liberati Red -->
<div class="space-y-2">
<div class="h-32 w-full bg-liberatiRed rounded-sm"></div>
<p class="text-sm font-bold">Liberati Red</p>
<p class="text-xs text-mutedGray">#AE1E22</p>
</div>
<!-- Pure White -->
<div class="space-y-2">
<div class="h-32 w-full bg-white rounded-sm"></div>
<p class="text-sm font-bold text-white">Pure White</p>
<p class="text-xs text-mutedGray">#FFFFFF</p>
</div>
<!-- Muted Gray -->
<div class="space-y-2">
<div class="h-32 w-full bg-mutedGray rounded-sm"></div>
<p class="text-sm font-bold text-white">Muted Gray</p>
<p class="text-xs text-mutedGray">#A0A0A0</p>
</div>
</div>
</div>
</section>
<!-- END: Color Palette -->
<!-- BEGIN: Buttons & UI Elements -->
<section class="py-20 border-b border-white/5" data-purpose="ui-elements-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">03. UI Elements</span>
</div>
<div class="md:col-span-3 space-y-16">
<!-- Primary Action -->
<div class="flex flex-wrap items-center gap-8">
<button class="bg-liberatiRed hover:bg-red-700 text-white font-bold py-4 px-10 uppercase tracking-widest text-xs transition-colors duration-300">
              Schedule a Call
            </button>
<a class="group flex items-center text-xs font-bold uppercase tracking-widest" href="#">
              View Project 
              <span class="ml-2 hover-arrow">→</span>
</a>
</div>
<!-- Filters -->
<div class="flex flex-wrap gap-4">
<button class="border border-white/20 px-6 py-2 text-[10px] font-bold tracking-widest uppercase bg-white text-black">Brands</button>
<button class="border border-white/20 px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">Series &amp; Film</button>
<button class="border border-white/20 px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">Interactive</button>
</div>
<!-- Secondary Action -->
<div>
<button class="w-full py-6 border border-white/10 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
              Load More Work
            </button>
</div>
</div>
</div>
</section>
<!-- END: Buttons & UI Elements -->
<!-- BEGIN: Visual Accents & Icons -->
<section class="py-20 border-b border-white/5" data-purpose="iconography-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">04. Iconography</span>
</div>
<div class="md:col-span-3">
<div class="grid grid-cols-2 md:grid-cols-4 gap-12">
<!-- Service Icons -->
<div class="flex flex-col items-center gap-4">
<svg class="w-10 h-10 text-liberatiRed" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
<span class="text-[10px] tracking-widest uppercase">Direction</span>
</div>
<div class="flex flex-col items-center gap-4">
<svg class="w-10 h-10 text-liberatiRed" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
<span class="text-[10px] tracking-widest uppercase">Motion</span>
</div>
<div class="flex flex-col items-center gap-4">
<svg class="w-10 h-10 text-liberatiRed" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
<span class="text-[10px] tracking-widest uppercase">Interactive</span>
</div>
<!-- Social Icons -->
<div class="flex flex-col items-center gap-4">
<div class="flex gap-4">
<svg class="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
<svg class="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</div>
<span class="text-[10px] tracking-widest uppercase">Social Connect</span>
</div>
</div>
</div>
</div>
</section>
<!-- END: Visual Accents & Icons -->
<!-- BEGIN: Contact Form Components -->
<section class="py-20 border-b border-white/5" data-purpose="form-components-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">05. Form Components</span>
</div>
<div class="md:col-span-3">
<form class="max-w-2xl space-y-12">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="border-b border-white/20 focus-within:border-liberatiRed transition-colors pb-2">
<label class="block text-[10px] uppercase tracking-widest text-mutedGray mb-2">Full Name</label>
<input class="w-full bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/20" placeholder="John Doe" type="text"/>
</div>
<div class="border-b border-white/20 focus-within:border-liberatiRed transition-colors pb-2">
<label class="block text-[10px] uppercase tracking-widest text-mutedGray mb-2">Email Address</label>
<input class="w-full bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/20" placeholder="john@example.com" type="email"/>
</div>
</div>
<div class="border-b border-white/20 focus-within:border-liberatiRed transition-colors pb-2">
<label class="block text-[10px] uppercase tracking-widest text-mutedGray mb-2">Message</label>
<textarea class="w-full bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-white/20 resize-none" placeholder="Tell us about your vision..." rows="4"></textarea>
</div>
<div class="flex flex-col md:flex-row items-start md:items-center gap-6">
<button class="bg-white text-black font-bold py-4 px-10 uppercase tracking-widest text-xs hover:bg-liberatiRed hover:text-white transition-all">Send Message</button>
<div class="flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span class="text-[10px] tracking-widest text-green-500 uppercase">Message sent successfully</span>
</div>
</div>
</form>
</div>
</div>
</section>
<!-- END: Contact Form Components -->
<!-- BEGIN: Layout Components -->
<section class="py-20 border-b border-white/5" data-purpose="layout-grid-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">06. Service Cards</span>
</div>
<div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"><!-- Direction -->
<div class="group">
<div class="mb-6 flex items-center gap-3">
<span class="material-symbols-outlined text-liberatiRed text-3xl">explore</span>
<h4 class="text-2xl font-bold text-white tracking-widest">DIRECTION</h4>
</div>
<p class="text-mutedGray text-sm font-light leading-relaxed mb-6">Creative strategy and conceptual development that defines the soul of your project.</p>
<ul class="text-[10px] text-mutedGray tracking-[0.2em] space-y-2 uppercase">
<li>• Art Direction</li>
<li>• Brand Narrative</li>
<li>• Visual Strategy</li>
</ul>
</div>
<!-- Motion -->
<div class="group">
<div class="mb-6 flex items-center gap-3">
<span class="material-symbols-outlined text-liberatiRed text-3xl">movie_edit</span>
<h4 class="text-2xl font-bold text-white tracking-widest">MOTION</h4>
</div>
<p class="text-mutedGray text-sm font-light leading-relaxed mb-6">High-end 3D animation and cinematic sequences that bring static ideas to life.</p>
<ul class="text-[10px] text-mutedGray tracking-[0.2em] space-y-2 uppercase">
<li>• 3D Animation</li>
<li>• Title Sequences</li>
<li>• VFX Mastery</li>
</ul>
</div>
<!-- Interactive -->
<div class="group">
<div class="mb-6 flex items-center gap-3">
<span class="material-symbols-outlined text-liberatiRed text-3xl">ads_click</span>
<h4 class="text-2xl font-bold text-white tracking-widest">INTERACTIVE</h4>
</div>
<p class="text-mutedGray text-sm font-light leading-relaxed mb-6">Bespoke web experiences and UI/UX motion designed for deep engagement.</p>
<ul class="text-[10px] text-mutedGray tracking-[0.2em] space-y-2 uppercase">
<li>• Web Experiences</li>
<li>• Experimental Tech</li>
<li>• UI Motion</li>
</ul>
</div></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">07. Project Grid</span>
</div>
<div class="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Project Preview -->
<div class="group cursor-pointer">
<div class="aspect-video bg-white/5 mb-4 overflow-hidden relative">
<div class="w-full h-full bg-white/5 flex items-center justify-center">
<span class="text-white/10 text-xs tracking-widest uppercase">Project Asset Placeholder</span>
</div>
</div>
<div class="flex justify-between items-start">
<div>
<h5 class="text-lg font-bold">NEURAL ASCENT</h5>
<p class="text-[10px] text-mutedGray uppercase tracking-widest mt-1">Interactive • 2024</p>
</div>
<span class="text-xs group-hover:text-liberatiRed transition-colors">↗</span>
</div>
</div>
<div class="group cursor-pointer">
<div class="aspect-video bg-white/5 mb-4 overflow-hidden relative">
<div class="w-full h-full bg-white/5 flex items-center justify-center">
<span class="text-white/10 text-xs tracking-widest uppercase">Project Asset Placeholder</span>
</div>
</div>
<div class="flex justify-between items-start">
<div>
<h5 class="text-lg font-bold">SILK ROAD V2</h5>
<p class="text-[10px] text-mutedGray uppercase tracking-widest mt-1">Motion Design • 2023</p>
</div>
<span class="text-xs group-hover:text-liberatiRed transition-colors">↗</span>
</div>
</div>
</div>
</div>
</section>
<!-- END: Layout Components -->
<!-- BEGIN: Project Detail Components -->
<section class="py-20" data-purpose="project-detail-section">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<span class="text-mutedGray text-xs uppercase tracking-widest">08. Project Details</span>
</div>
<div class="md:col-span-3 space-y-24">
<!-- Project Hero Placeholder -->
<div data-purpose="project-hero">
<p class="text-[10px] text-mutedGray uppercase tracking-widest mb-4">Hero Component (Vimeo Ready)</p>
<div class="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
<div class="text-center">
<svg class="w-12 h-12 text-white/20 mx-auto mb-4" fill="currentColor" viewbox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
<p class="text-xs text-white/40 tracking-widest">PLAY REEL</p>
</div>
</div>
</div>
<!-- Project Brief Layout -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-purpose="project-brief">
<div>
<h6 class="text-[10px] font-bold text-liberatiRed tracking-widest uppercase mb-4">Context</h6>
<p class="text-sm text-mutedGray leading-relaxed">Revitalizing the digital presence for a global fashion house, focusing on raw materiality and high-speed interaction.</p>
</div>
<div>
<h6 class="text-[10px] font-bold text-liberatiRed tracking-widest uppercase mb-4">Strategy</h6>
<p class="text-sm text-mutedGray leading-relaxed">Utilizing 3D motion loops to create a sense of constant forward momentum, mirroring the brand's 'Always Ahead' philosophy.</p>
</div>
<div>
<h6 class="text-[10px] font-bold text-liberatiRed tracking-widest uppercase mb-4">Solution</h6>
<p class="text-sm text-mutedGray leading-relaxed">A headless CMS architecture paired with WebGL transitions, achieving a cinematic 60FPS experience across all devices.</p>
</div>
</div>
<!-- Gallery Grids -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-purpose="gallery-grid">
<div class="aspect-square bg-white/5 border border-white/5"></div>
<div class="aspect-square bg-white/5 border border-white/5"></div>
<div class="aspect-square bg-white/5 border border-white/5"></div>
<div class="aspect-square bg-white/5 border border-white/5"></div>
</div>
</div>
</div>
</section><!-- BEGIN: New Toolkit Components (Section 09) -->
<section class="py-20 border-t border-white/5" data-purpose="additional-toolkit-components">
<!-- 09.1 Project Brief Cards -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
<div><span class="text-mutedGray text-xs uppercase tracking-widest">09.1 Project Brief</span></div>
<div class="md:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-12">
<div class="space-y-4">
<div class="flex items-center gap-3">
<div class="w-1 h-1 bg-liberatiRed"></div>
<h6 class="text-xs font-bold text-white tracking-widest uppercase">CONTEXT</h6>
</div>
<p class="text-sm text-mutedGray leading-relaxed">Detailed description of project origins and requirements goes here.</p>
</div>
<div class="space-y-4">
<div class="flex items-center gap-3">
<div class="w-1 h-1 bg-liberatiRed"></div>
<h6 class="text-xs font-bold text-white tracking-widest uppercase">STRATEGY</h6>
</div>
<p class="text-sm text-mutedGray leading-relaxed">Overview of the strategic approach and creative methodology.</p>
</div>
<div class="space-y-4">
<div class="flex items-center gap-3">
<div class="w-1 h-1 bg-liberatiRed"></div>
<h6 class="text-xs font-bold text-white tracking-widest uppercase">SOLUTION</h6>
</div>
<p class="text-sm text-mutedGray leading-relaxed">Technical implementation details and project outcomes.</p>
</div>
</div>
</div>
<!-- 09.2 Video Overlay Component -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
<div><span class="text-mutedGray text-xs uppercase tracking-widest">09.2 Video Overlay</span></div>
<div class="md:col-span-3">
<div class="relative aspect-video bg-white/5 group cursor-pointer overflow-hidden">
<div class="absolute inset-0 flex flex-col items-center justify-center z-10">
<div class="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500"><svg class="w-6 h-6 text-liberatiRed ml-1" fill="currentColor" viewbox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></div>
<p class="text-[10px] text-white tracking-[0.4em] uppercase">WATCH FILM</p>
</div>
<div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div class="w-full h-full bg-neutral-900"></div>
</div>
</div>
</div>
<!-- 09.3 Gallery Section Header -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div><span class="text-mutedGray text-xs uppercase tracking-widest">09.3 Gallery Header</span></div>
<div class="md:col-span-3">
<div class="space-y-8">
<div class="flex items-center gap-8">
<h3 class="text-xl font-bold tracking-widest uppercase whitespace-nowrap">GALLERY SECTION TITLE</h3>
<div class="w-full h-[1px] bg-white/10"></div>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="aspect-video bg-white/5"></div>
<div class="aspect-video bg-white/5"></div>
</div>
</div>
</div>
</div>
</section>
<!-- END: Project Detail Components -->
</main>
<!-- BEGIN: Minimalist Brand Footer -->
<footer class="bg-black border-t border-white/10 py-24 px-8" data-purpose="main-footer">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div class="md:col-span-2">
<h2 class="text-3xl font-black tracking-tighter mb-6">LIBERATI<span class="text-liberatiRed">.</span></h2>
<p class="text-mutedGray text-sm max-w-sm font-light leading-relaxed">
            Elevating brands through cinematic digital experiences. From concept to execution, we build the future of the web.
          </p>
</div>
<div>
<h6 class="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Navigation</h6>
<ul class="space-y-4">
<li><a class="text-sm text-mutedGray hover:text-white transition-colors" href="#">Work</a></li>
<li><a class="text-sm text-mutedGray hover:text-white transition-colors" href="#">Services</a></li>
<li><a class="text-sm text-mutedGray hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h6 class="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Social</h6>
<ul class="space-y-4">
<li><a class="text-sm text-mutedGray hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a class="text-sm text-mutedGray hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a class="text-sm text-mutedGray hover:text-white transition-colors" href="#">Vimeo</a></li>
</ul>
</div>
</div>
<div class="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-[10px] text-white/30 tracking-widest">© 2024 LIBERATI. ALL RIGHTS RESERVED.</p>
<p class="text-[10px] text-white/30 tracking-widest uppercase">London / Los Angeles / Remote</p>
</div>
</div>
</footer>
<!-- END: Minimalist Brand Footer -->
</body></html>