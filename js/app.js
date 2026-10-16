/**
 * Karn's Plant Catalogue - Interactive Application Logic
 * Modular separation of concerns: Handles catalog rendering, reactive filtering,
 * photo carousels, expandable horticultural detail drawers, and fullscreen lightbox modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    plants: plantCatalogData || [],
    filteredPlants: [...plantCatalogData],
    activeFilter: 'all',
    searchQuery: '',
    currentCarouselIndexes: {},
    modalState: {
      isOpen: false,
      plantId: null,
      photoIndex: 0
    }
  };

  // DOM Elements
  const plantGrid = document.getElementById('plantGrid');
  const searchInput = document.getElementById('searchInput');
  const filterChips = document.querySelectorAll('.filter-chip');
  const displayedCountEl = document.getElementById('displayedCount');
  const emptyState = document.getElementById('emptyState');
  
  // Modal Elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCaption = document.getElementById('modalCaption');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Initialize carousel index trackers
  state.plants.forEach(plant => {
    state.currentCarouselIndexes[plant.id] = 0;
  });

  /**
   * Render all plant cards based on active filtered list
   */
  function renderPlants() {
    if (!plantGrid) return;
    plantGrid.innerHTML = '';

    if (state.filteredPlants.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (displayedCountEl) displayedCountEl.textContent = '0';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (displayedCountEl) displayedCountEl.textContent = state.filteredPlants.length.toString();

    state.filteredPlants.forEach(plant => {
      const card = createPlantCard(plant);
      plantGrid.appendChild(card);
    });
  }

  /**
   * Generate DOM element for an individual plant specimen card
   */
  function createPlantCard(plant) {
    const card = document.createElement('article');
    card.className = 'plant-card';
    card.id = `card-${plant.id}`;

    const currentIndex = state.currentCarouselIndexes[plant.id] || 0;
    const currentPhoto = plant.images[currentIndex] || plant.images[0];
    const hasMultiplePhotos = plant.images.length > 1;

    // Card Media HTML
    const mediaHTML = `
      <div class="card-media" data-plant-id="${plant.id}" title="Click to view full photo">
        <span class="category-tag">${escapeHTML(plant.category)}</span>
        <img src="${escapeHTML(currentPhoto.file)}" alt="${escapeHTML(plant.name)}" class="card-image" id="img-${plant.id}">
        
        ${hasMultiplePhotos ? `
          <button class="carousel-nav-btn carousel-prev" data-action="prev" data-plant-id="${plant.id}" title="Previous photo" aria-label="Previous photo">
            &#10094;
          </button>
          <button class="carousel-nav-btn carousel-next" data-action="next" data-plant-id="${plant.id}" title="Next photo" aria-label="Next photo">
            &#10095;
          </button>
          <span class="carousel-counter" id="counter-${plant.id}">
            ${currentIndex + 1} / ${plant.images.length} photos
          </span>
        ` : ''}
      </div>
    `;

    // Badges HTML
    const badgesHTML = `
      <div class="badge-strip">
        <span class="quick-badge badge-indoor">🏡 ${escapeHTML(plant.environment)}</span>
        <span class="quick-badge badge-sun">☀️ ${escapeHTML(plant.sunExposure.split(';')[0])}</span>
        <span class="quick-badge badge-water">💧 ${escapeHTML(plant.wateringCycle.split(':')[0])}</span>
      </div>
    `;

    // Core Care Breakdown HTML
    const careHTML = `
      <div class="care-section">
        <div class="care-item">
          <span class="care-label">🍃 Foliage</span>
          <span class="care-value">${escapeHTML(plant.foliageColor)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">🌸 Flowers</span>
          <span class="care-value">${escapeHTML(plant.flowerInfo)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">💧 Watering</span>
          <span class="care-value">${escapeHTML(plant.wateringCycle)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">☀️ Sunlight</span>
          <span class="care-value">${escapeHTML(plant.sunExposure)}</span>
        </div>
      </div>
    `;

    // Extended Care (Accordion Drawer) HTML
    const extendedCareHTML = `
      <button type="button" class="extended-care-toggle" data-toggle-target="drawer-${plant.id}">
        <span>🌿 Full Growing & Soil Guide</span>
        <span class="toggle-icon">&#9662;</span>
      </button>

      <div class="extended-care-details" id="drawer-${plant.id}">
        <div class="care-item">
          <span class="care-label">🌡️ Climate</span>
          <span class="care-value">${escapeHTML(plant.suitableWeather)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">🌱 Soil Mix</span>
          <span class="care-value">${escapeHTML(plant.soilRequirements)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">🧪 Nutrition</span>
          <span class="care-value">${escapeHTML(plant.nutritionalRequirements)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">💨 Wind</span>
          <span class="care-value">${escapeHTML(plant.windConditions)}</span>
        </div>
        <div class="care-item">
          <span class="care-label">💡 Pro Tips</span>
          <span class="care-value">${escapeHTML(plant.cultivationTips)}</span>
        </div>
      </div>
    `;

    card.innerHTML = `
      ${mediaHTML}
      <div class="card-content">
        <div class="plant-header">
          <h2 class="plant-title">${escapeHTML(plant.name)}</h2>
          <p class="plant-scientific">${escapeHTML(plant.scientificName)}</p>
          <p class="plant-family">${escapeHTML(plant.family)}</p>
        </div>
        ${badgesHTML}
        ${careHTML}
        ${extendedCareHTML}
      </div>
    `;

    return card;
  }

  /**
   * Escape HTML to guard against XSS
   */
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Filter and search handler
   */
  function applyFilters() {
    const query = state.searchQuery.toLowerCase().trim();
    const filter = state.activeFilter;

    state.filteredPlants = state.plants.filter(plant => {
      // Category match
      let matchesFilter = true;
      if (filter === 'indoor') {
        matchesFilter = plant.environment.toLowerCase().includes('indoor');
      } else if (filter === 'outdoor') {
        matchesFilter = plant.environment.toLowerCase().includes('outdoor') || plant.category.toLowerCase().includes('landscape');
      } else if (filter === 'flowering') {
        matchesFilter = plant.category.toLowerCase().includes('flowering');
      } else if (filter === 'foliage') {
        matchesFilter = plant.category.toLowerCase().includes('foliage') || plant.category.toLowerCase().includes('aroid');
      }

      // Search query match
      let matchesQuery = true;
      if (query) {
        const searchableFields = [
          plant.name,
          plant.scientificName,
          plant.family,
          plant.category,
          plant.foliageColor,
          plant.flowerInfo,
          plant.environment,
          plant.sunExposure,
          plant.soilRequirements
        ].join(' ').toLowerCase();

        matchesQuery = searchableFields.includes(query);
      }

      return matchesFilter && matchesQuery;
    });

    renderPlants();
  }

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
    });
  }

  // Filter Chips Events
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Global Click Delegation (Carousel Navigation, Expandable Accordions, Lightbox Modal)
  document.addEventListener('click', (e) => {
    // 1. Carousel Navigation
    const navBtn = e.target.closest('.carousel-nav-btn');
    if (navBtn) {
      e.stopPropagation();
      const plantId = navBtn.getAttribute('data-plant-id');
      const action = navBtn.getAttribute('data-action');
      const plant = state.plants.find(p => p.id === plantId);
      if (!plant || plant.images.length <= 1) return;

      let idx = state.currentCarouselIndexes[plantId] || 0;
      if (action === 'next') {
        idx = (idx + 1) % plant.images.length;
      } else if (action === 'prev') {
        idx = (idx - 1 + plant.images.length) % plant.images.length;
      }
      state.currentCarouselIndexes[plantId] = idx;

      // Update image and counter directly without full re-render
      const imgEl = document.getElementById(`img-${plantId}`);
      const counterEl = document.getElementById(`counter-${plantId}`);
      if (imgEl) imgEl.src = plant.images[idx].file;
      if (counterEl) counterEl.textContent = `${idx + 1} / ${plant.images.length} photos`;
      return;
    }

    // 2. Expandable Growing Details Drawer
    const toggleBtn = e.target.closest('.extended-care-toggle');
    if (toggleBtn) {
      const targetId = toggleBtn.getAttribute('data-toggle-target');
      const drawer = document.getElementById(targetId);
      const icon = toggleBtn.querySelector('.toggle-icon');
      if (drawer) {
        drawer.classList.toggle('open');
        if (icon) {
          icon.innerHTML = drawer.classList.contains('open') ? '&#9652;' : '&#9662;';
        }
      }
      return;
    }

    // 3. Card Media Click -> Open Fullscreen Modal Lightbox
    const mediaEl = e.target.closest('.card-media');
    if (mediaEl && !e.target.closest('.carousel-nav-btn')) {
      const plantId = mediaEl.getAttribute('data-plant-id');
      const plant = state.plants.find(p => p.id === plantId);
      if (plant) {
        const photoIndex = state.currentCarouselIndexes[plantId] || 0;
        openModal(plant, photoIndex);
      }
      return;
    }

    // 4. Close Modal on Backdrop Click
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Modal Open / Close Logic
  function openModal(plant, photoIndex) {
    if (!modalOverlay || !modalImage || !modalTitle || !modalCaption) return;
    const photo = plant.images[photoIndex] || plant.images[0];
    
    modalImage.src = photo.file;
    modalImage.alt = plant.name;
    modalTitle.textContent = `${plant.name} (${plant.scientificName})`;
    modalCaption.textContent = photo.caption || `${photoIndex + 1} of ${plant.images.length} photos`;

    modalOverlay.classList.add('active');
    state.modalState.isOpen = true;
    state.modalState.plantId = plant.id;
    state.modalState.photoIndex = photoIndex;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    state.modalState.isOpen = false;
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Keyboard Accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.modalState.isOpen) {
      closeModal();
    }
  });

  // Initial Render
  renderPlants();
});
