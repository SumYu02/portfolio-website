"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const CarouselImage = ({
  images = [],
  showDots = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isModalOpen || isInteracting) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length, isModalOpen, isInteracting]);

  const nextSlide = () => {
    setIsInteracting(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIsInteracting(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setIsInteracting(true);
    setCurrentSlide(index);
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    setIsInteracting(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsInteracting(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          prevModalImage();
        } else if (e.key === "ArrowRight") {
          nextModalImage();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, images.length]);

  // Reset isInteracting after user stops interacting
  useEffect(() => {
    if (!isInteracting) return;

    const timeout = setTimeout(() => {
      setIsInteracting(false);
    }, autoPlayInterval * 2); // resume after inactivity

    return () => clearTimeout(timeout);
  }, [isInteracting, autoPlayInterval]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  const currentImage = images[currentSlide];

  return (
    <>
      <div
        className={`relative max-w-6xl mx-auto ${className}`}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <div className="relative group flex transition-transform duration-500 ease-in-out">
          {currentImage ? (
            <div
              className="mx-auto w-full max-w-xs sm:max-w-4xl cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(currentSlide)}
            >
              <Image
                src={currentImage}
                alt={`Image ${currentSlide + 1}`}
                className="w-full h-auto rounded-xl shadow-lg"
                width={800}
                height={600}
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">Image not available</p>
            </div>
          )}

          {showNavigation && images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <FaChevronLeft className="size-3 sm:size-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <FaChevronRight className="size-3 sm:size-5" />
              </button>
            </>
          )}
        </div>

        {showDots && images.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes className="size-6 sm:size-8" />
            </button>

            {images[modalImageIndex] && (
              <div className="relative">
                <Image
                  src={images[modalImageIndex]}
                  alt={`Enlarged image ${modalImageIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  width={1200}
                  height={900}
                />
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={prevModalImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 sm:p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="size-4 sm:size-6" />
                </button>

                <button
                  onClick={nextModalImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 sm:p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                  aria-label="Next image"
                >
                  <FaChevronRight className="size-4 sm:size-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {modalImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselImage;
