import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Register the GSAP plugin
gsap.registerPlugin(CustomEase);

// --- Component Data ---
const slideData = [
  {
    title: "3D Render",
    description: "Concept Art",
    imageUrl: "https://images.unsplash.com/photo-1630692929609-1fbfb477602e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Agriculture",
    description: "Wind Turbine",
    imageUrl: "https://images.unsplash.com/photo-1644046266854-8c8d45a6997d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Wildlife",
    description: "Parent And Child",
    imageUrl: "https://images.unsplash.com/photo-1586778538929-ee34a8e9d8e7?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Food",
    description: "Morning Breakfast",
    imageUrl: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Travel",
    description: "Hiking",
    imageUrl: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Sports",
    description: "Playing Tennis",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Nature",
    description: "Rocky Mountains",
    imageUrl: "https://images.unsplash.com/photo-1468877294001-94aef5ebfa1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const totalSlides = slideData.length;

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Use 0-based index
  const isAnimating = useRef(false);
  const lastScrollTime = useRef(0);
  
  // Refs for DOM elements that GSAP will animate
  const sliderRef = useRef<HTMLDivElement>(null);
  const mainImageContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const descContainerRef = useRef<HTMLDivElement>(null);
  const counterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This custom ease matches the one in the original JS
    CustomEase.create("customEase", ".87, 0, .13, 1");

    const animateSlide = (direction: 'up' | 'down') => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      // Determine the next slide index
      const nextSlideIndex = direction === 'down' 
        ? (currentSlide + 1) % totalSlides 
        : (currentSlide - 1 + totalSlides) % totalSlides;
      
      const currentData = slideData[currentSlide];
      const nextData = slideData[nextSlideIndex];
      
      // Get container refs
      const slider = sliderRef.current;
      const mainImageContainer = mainImageContainerRef.current;
      const titleContainer = titleContainerRef.current;
      const descContainer = descContainerRef.current;
      const counterContainer = counterContainerRef.current;

      if (!slider || !mainImageContainer || !titleContainer || !descContainer || !counterContainer) return;

      // Get current elements
      const currentBgImg = slider.querySelector('.slide-bg-img');
      const currentMainImgWrapper = mainImageContainer.querySelector('.slide-main-img-wrapper');
      const currentTitle = titleContainer.querySelector('h1');
      const currentDesc = descContainer.querySelector('p');
      const currentCounter = counterContainer.querySelector('p');

      // Create new elements for the next slide
      // This approach directly mirrors the original vanilla JS logic for GSAP
      const newSlide = document.createElement('div');
      newSlide.className = 'slide absolute top-0 left-0 w-full h-full';
      newSlide.innerHTML = `
        <div class="slide-bg-img absolute top-0 left-0 w-full h-full [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)] will-change-clip-path after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-black/50">
          <img src="${nextData.imageUrl}" alt="${nextData.description}" class="w-full h-full object-cover will-change-transform" />
        </div>
      `;
      if (direction === 'up') {
        newSlide.querySelector('.slide-bg-img')!.setAttribute('style', '[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]');
      }

      const newMainWrapper = document.createElement('div');
      newMainWrapper.className = 'slide-main-img-wrapper absolute top-0 left-0 w-full h-full [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] will-change-clip-path';
      newMainWrapper.innerHTML = `<img src="${nextData.imageUrl}" alt="${nextData.description}" class="w-full h-full object-cover will-change-transform" />`;
      if (direction === 'up') {
        newMainWrapper.setAttribute('style', '[clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]');
      }

      const newTitle = document.createElement('h1');
      newTitle.className = "absolute text-white text-5xl font-bold leading-none will-change-transform";
      newTitle.textContent = nextData.title;
      gsap.set(newTitle, { y: direction === 'down' ? 50 : -50 });
      
      const newDesc = document.createElement('p');
      newDesc.className = "absolute text-white text-lg font-semibold leading-none will-change-transform";
      newDesc.textContent = nextData.description;
      gsap.set(newDesc, { y: direction === 'down' ? 20 : -20 });

      const newCounter = document.createElement('p');
      newCounter.className = "absolute text-base leading-none will-change-transform opacity-100";
      newCounter.textContent = String(nextSlideIndex + 1);
      gsap.set(newCounter, { y: direction === 'down' ? 18 : -18 });
      
      // Append new elements to the DOM
      slider.appendChild(newSlide);
      mainImageContainer.appendChild(newMainWrapper);
      titleContainer.appendChild(newTitle);
      descContainer.appendChild(newDesc);
      counterContainer.appendChild(newCounter);

      gsap.set(newMainWrapper.querySelector('img'), { y: direction === 'down' ? '-50%' : '50%' });

      const tl = gsap.timeline({
        onComplete: () => {
          // Cleanup old elements
          currentBgImg?.parentElement?.remove();
          currentMainImgWrapper?.remove();
          currentTitle?.remove();
          currentDesc?.remove();
          currentCounter?.remove();

          setCurrentSlide(nextSlideIndex);
          isAnimating.current = false;
        }
      });
      
      tl
        .to(newSlide.querySelector('.slide-bg-img'), {
          clipPath: direction === 'down' ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to(currentBgImg?.querySelector('img') as Element, {
          scale: 1.5,
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to(newMainWrapper, {
          clipPath: direction === 'down' ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to(currentMainImgWrapper?.querySelector('img') as Element, {
          y: direction === 'down' ? '50%' : '-50%',
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to(newMainWrapper.querySelector('img'), {
          y: 0,
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to([currentTitle, newTitle], {
          y: (i) => i === 0 ? (direction === 'down' ? -50 : 50) : 0,
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to([currentDesc, newDesc], {
          y: (i) => i === 0 ? (direction === 'down' ? -20 : 20) : 0,
          duration: 1.25,
          ease: "customEase"
        }, 0)
        .to([currentCounter, newCounter], {
          y: (i) => i === 0 ? (direction === 'down' ? -18 : 18) : 0,
          duration: 1.25,
          ease: "customEase"
        }, 0);
    };

    const handleScroll = (direction: 'up' | 'down') => {
      const now = Date.now();
      if (isAnimating.current || now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;
      animateSlide(direction);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 'down' : 'up';
      handleScroll(direction);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;
      const touchCurrentY = e.touches[0].clientY;
      const difference = touchStartY - touchCurrentY;
      if (Math.abs(difference) > 30) {
        const direction = difference > 0 ? 'down' : 'up';
        handleScroll(direction);
        touchStartY = touchCurrentY; // Reset start Y to prevent rapid firing
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup function
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSlide]); // Rerun effect if currentSlide changes to update closure scope

  return (
    <div className="font-montserrat w-full h-screen bg-black">
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 w-screen p-12 flex justify-between items-center z-10">
        <div>
          <p className="text-white text-sm font-medium">haptichash</p>
        </div>
        <div className="flex gap-8">
          <p className="text-white text-sm font-medium">Work</p>
          <p className="text-white text-sm font-medium">Studio</p>
          <p className="text-white text-sm font-medium">News</p>
          <p className="text-white text-sm font-medium">Contact</p>
        </div>
      </nav>

      {/* --- Footer --- */}
      <footer className="fixed bottom-0 left-0 w-screen p-12 flex justify-between items-center z-10">
        <p className="text-white text-sm font-medium">All Projects</p>
        <div className="flex">
          <div ref={counterContainerRef} className="relative w-6 h-[1.125rem] flex justify-center [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
            <p className="absolute text-base leading-none will-change-transform opacity-100">{currentSlide + 1}</p>
          </div>
          <p className="w-6 flex justify-center opacity-35">/</p>
          <p className="w-6 flex justify-center opacity-35">{totalSlides}</p>
        </div>
      </footer>
      
      {/* --- Slider --- */}
      <div ref={sliderRef} className="relative w-screen h-screen overflow-hidden">
        {/* Initial Slide */}
        <div className="slide absolute top-0 left-0 w-full h-full">
          <div className="slide-bg-img absolute top-0 left-0 w-full h-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] will-change-clip-path after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-black/50">
            <img src={slideData[0].imageUrl} alt={slideData[0].description} className="w-full h-full object-cover will-change-transform" />
          </div>
        </div>
      </div>
      
      {/* --- Main Image --- */}
      <div ref={mainImageContainerRef} className="slide-main-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[35%] h-1/2 z-[2] shadow-lg">
        <div className="slide-main-img-wrapper absolute top-0 left-0 w-full h-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] will-change-clip-path">
          <img src={slideData[0].imageUrl} alt={slideData[0].description} className="w-full h-full object-cover will-change-transform" />
        </div>
      </div>
      
      {/* --- Copy --- */}
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-[70%] md:top-1/2 md:left-[15%] md:-translate-x-[15%] md:-translate-y-1/2 text-white z-[2] text-shadow w-[75%] md:w-auto">
        <div ref={titleContainerRef} className="relative w-full md:w-[500px] h-[50px] mb-3 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
          <h1 className="absolute text-white text-5xl font-bold leading-none will-change-transform">{slideData[0].title}</h1>
        </div>
        <div ref={descContainerRef} className="relative w-full md:w-[500px] h-[20px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
          <p className="absolute text-white text-lg font-semibold leading-none will-change-transform">{slideData[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;