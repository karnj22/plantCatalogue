/**
 * Plant Catalogue - Dual Screen Application Controller
 * Handles real-time search, multi-image carousel with swipe gestures,
 * and expanding/condensing horticultural care documentation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    plants: plantCatalogData || [],
    filteredPlants: [...plantCatalogData],
    searchQuery: '',
    photoIndices: {},
    expandedCards: new Set()
  };

  // Initialize photo index tracking for all plants
  state.plants.forEach(plant => {
    state.photoIndices[plant.id] = 0;
  });

  // DOM Elements
  const phonesGrid = document.getElementById('phonesGrid');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const noResultsView = document.getElementById('noResultsView');

  /**
   * Helper to compute short, punchy visual summary tags from detailed text
   */
  function extractVisualSummaries(plant) {
    // Water metric
    let waterSummary = "Moderate";
    const wLow = plant.wateringCycle.toLowerCase();
    if (wLow.includes("very low") || wLow.includes("dry out 100%")) {
      waterSummary = "Low / Dry";
    } else if (wLow.includes("high moisture") || wLow.includes("evenly moist")) {
      waterSummary = "Even Moist";
    } else if (wLow.includes("top 1-2") || wLow.includes("top inch")) {
      waterSummary = "Moderate";
    }

    // Light metric
    let lightSummary = "Indirect";
    const lLow = plant.sunExposure.toLowerCase();
    if (lLow.includes("full sun") || lLow.includes("direct")) {
      lightSummary = "Full / Direct";
    } else if (lLow.includes("low to")) {
      lightSummary = "Low / Indirect";
    } else if (lLow.includes("bright indirect") || lLow.includes("filtered")) {
      lightSummary = "Bright Indirect";
    } else if (lLow.includes("partial")) {
      lightSummary = "Part Shade";
    }

    // Climate / Weather metric
    let weatherSummary = "Warm";
    const envLow = plant.environment.toLowerCase();
    const wthLow = plant.suitableWeather.toLowerCase();
    if (envLow.includes("indoor") && !envLow.includes("outdoor")) {
      weatherSummary = "Indoor";
    } else if (envLow.includes("outdoor")) {
      weatherSummary = "Outdoor";
    } else if (wthLow.includes("tropical")) {
      weatherSummary = "Tropical";
    } else {
      weatherSummary = "18°C-30°C";
    }

    // Soil metric
    let soilSummary = "Aroid Mix";
    const sLow = plant.soilRequirements.toLowerCase();
    if (sLow.includes("succulent") || sLow.includes("cactus")) {
      soilSummary = "Porous / Sand";
    } else if (sLow.includes("aroid") || sLow.includes("coco chips")) {
      soilSummary = "Chunky Aroid";
    } else if (sLow.includes("coco peat")) {
      soilSummary = "Coco Peat";
    } else if (sLow.includes("loam") || sLow.includes("garden soil")) {
      soilSummary = "Rich Loam";
    }

    return { waterSummary, lightSummary, weatherSummary, soilSummary };
  }

  /**
   * Render all plant cards
   */
  function renderPlants() {
    if (!phonesGrid) return;
    phonesGrid.innerHTML = '';

    if (state.filteredPlants.length === 0) {
      if (noResultsView) noResultsView.style.display = 'block';
      return;
    }

    if (noResultsView) noResultsView.style.display = 'none';

    state.filteredPlants.forEach(plant => {
      const card = createPhoneCard(plant);
      phonesGrid.appendChild(card);
    });
  }

  /**
   * Create an individual Phone Mockup card
   */
  function createPhoneCard(plant) {
    const card = document.createElement('div');
    const isExpanded = state.expandedCards.has(plant.id);
    card.className = `phone-card ${isExpanded ? 'expanded' : ''}`;
    card.id = `plant-card-${plant.id}`;
    card.setAttribute('data-plant-id', plant.id);

    const activeIndex = state.photoIndices[plant.id] || 0;
    const currentPhoto = plant.images[activeIndex] || plant.images[0];
    const totalPhotos = plant.images.length;
    const hasMultiple = totalPhotos > 1;

    const { waterSummary, lightSummary, weatherSummary, soilSummary } = extractVisualSummaries(plant);

    card.innerHTML = `
      <!-- Phone Top Status Bar -->
      <div class="phone-status-bar">
        <span>3:41</span>
        <div class="status-speaker-notch"></div>
        <div class="status-icons">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M1 9.5H3V11H1V9.5ZM4.5 7H6.5V11H4.5V7ZM8 4.5H10V11H8V4.5ZM11.5 1.5H13.5V11H11.5V1.5Z"/>
          </svg>
          <svg width="14" height="11" viewBox="0 0 14 11" fill="currentColor">
            <path d="M7 2C9.4 2 11.5 3 13 4.6L7 11 1 4.6C2.5 3 4.6 2 7 2ZM7 0C3.9 0 1.2 1.3 0 3.3L7 11 14 3.3C12.8 1.3 10.1 0 7 0Z"/>
          </svg>
          <svg width="18" height="9" viewBox="0 0 18 9" fill="currentColor">
            <rect x="0.5" y="0.5" width="14" height="8" rx="2" stroke="currentColor" fill="none"/>
            <rect x="2" y="2" width="10" height="5" rx="1" fill="currentColor"/>
            <path d="M16 3V6" stroke="currentColor" stroke-linecap="round"/>
          </svg>
        </div>
      </div>

      <!-- Upper Picture Gallery -->
      <div class="phone-media-gallery" id="gallery-${plant.id}">
        <span class="category-badge-chip">${escapeHTML(plant.category)}</span>
        
        <div class="gallery-image-wrapper" title="Click or swipe to cycle through photos">
          <img 
            id="img-${plant.id}" 
            src="${escapeHTML(currentPhoto.file)}" 
            alt="${escapeHTML(plant.name)}" 
            class="gallery-img"
          >
        </div>

        ${hasMultiple ? `
          <button class="gallery-nav-btn gallery-prev" data-action="prev" data-plant-id="${plant.id}" aria-label="Previous image">&#10094;</button>
          <button class="gallery-nav-btn gallery-next" data-action="next" data-plant-id="${plant.id}" aria-label="Next image">&#10095;</button>
          <div class="gallery-counter-pill" id="counter-${plant.id}">
            ${activeIndex + 1} / ${totalPhotos}
          </div>
        ` : ''}
      </div>

      <!-- Bottom Sheet -->
      <div class="phone-bottom-sheet" id="sheet-${plant.id}">
        <div class="sheet-handle-row" data-action="toggle-expand" data-plant-id="${plant.id}" title="Tap to expand / collapse full documentation">
          <div class="sheet-handle-pill"></div>
        </div>

        <div class="plant-title-wrap">
          <h2 class="plant-name">${escapeHTML(plant.name)}</h2>
        </div>
        <p class="plant-binomial">${escapeHTML(plant.scientificName)} &bull; ${escapeHTML(plant.family.split(' ')[0])}</p>

        <!-- Visual Summaries Pods (4 Circular Metrics) -->
        <div class="visual-pods-grid">
          <div class="visual-pod" data-action="toggle-expand" data-plant-id="${plant.id}" title="Watering summary: ${escapeHTML(plant.wateringCycle)}">
            <div class="pod-icon-circle">💧</div>
            <span class="pod-category">Water</span>
            <span class="pod-value">${escapeHTML(waterSummary)}</span>
          </div>

          <div class="visual-pod" data-action="toggle-expand" data-plant-id="${plant.id}" title="Sunlight summary: ${escapeHTML(plant.sunExposure)}">
            <div class="pod-icon-circle">☀️</div>
            <span class="pod-category">Sunlight</span>
            <span class="pod-value">${escapeHTML(lightSummary)}</span>
          </div>

          <div class="visual-pod" data-action="toggle-expand" data-plant-id="${plant.id}" title="Climate summary: ${escapeHTML(plant.suitableWeather)}">
            <div class="pod-icon-circle">🌡️</div>
            <span class="pod-category">Weather</span>
            <span class="pod-value">${escapeHTML(weatherSummary)}</span>
          </div>

          <div class="visual-pod" data-action="toggle-expand" data-plant-id="${plant.id}" title="Soil summary: ${escapeHTML(plant.soilRequirements)}">
            <div class="pod-icon-circle">🌱</div>
            <span class="pod-category">Soil</span>
            <span class="pod-value">${escapeHTML(soilSummary)}</span>
          </div>
        </div>

        <!-- Toggle Button -->
        <button type="button" class="expand-toggle-bar" data-action="toggle-expand" data-plant-id="${plant.id}">
          <span class="toggle-text">${isExpanded ? 'Hide Documentation' : 'View Full Care Guide'}</span>
          <span class="toggle-arrow">&#9662;</span>
        </button>

        <!-- Extended Horticultural Documentation (Expanded View) -->
        <div class="extended-doc-panel">
          <div class="doc-section-card">
            <div class="doc-section-title">🍃 Foliage Colour &amp; Texture</div>
            <div class="doc-section-text">${escapeHTML(plant.foliageColor)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">🌸 Flower Characteristics</div>
            <div class="doc-section-text">${escapeHTML(plant.flowerInfo)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">💧 Watering Cycle &amp; Moisture</div>
            <div class="doc-section-text">${escapeHTML(plant.wateringCycle)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">☀️ Optimal Sun Exposure</div>
            <div class="doc-section-text">${escapeHTML(plant.sunExposure)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">🌡️ Suitable Weather &amp; Environment</div>
            <div class="doc-section-text">${escapeHTML(plant.suitableWeather)} &bull; ${escapeHTML(plant.environment)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">🧪 Nutritional Requirements</div>
            <div class="doc-section-text">${escapeHTML(plant.nutritionalRequirements)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">🌱 Soil Substrates &amp; Requirements</div>
            <div class="doc-section-text">${escapeHTML(plant.soilRequirements)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">💨 Wind Conditions &amp; Tolerance</div>
            <div class="doc-section-text">${escapeHTML(plant.windConditions)}</div>
          </div>

          <div class="doc-section-card">
            <div class="doc-section-title">💡 Pro Cultivation &amp; Propagation Tips</div>
            <div class="doc-section-text">${escapeHTML(plant.cultivationTips)}</div>
          </div>

          <div class="doc-photo-caption" id="caption-${plant.id}">
            📷 <strong>Photo Note:</strong> ${escapeHTML(currentPhoto.caption)}
          </div>
        </div>
      </div>
    `;

    // Attach horizontal touch swipe for the image gallery
    setupGallerySwipe(card.querySelector('.phone-media-gallery'), plant.id);

    return card;
  }

  /**
   * Escape HTML utility
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
   * Switch photo in carousel
   */
  function stepPhoto(plantId, step) {
    const plant = state.plants.find(p => p.id === plantId);
    if (!plant || plant.images.length <= 1) return;

    let idx = state.photoIndices[plantId] || 0;
    idx = (idx + step + plant.images.length) % plant.images.length;
    state.photoIndices[plantId] = idx;

    const imgEl = document.getElementById(`img-${plantId}`);
    const counterEl = document.getElementById(`counter-${plantId}`);
    const captionEl = document.getElementById(`caption-${plantId}`);

    if (imgEl) {
      imgEl.style.opacity = '0.5';
      setTimeout(() => {
        imgEl.src = plant.images[idx].file;
        imgEl.style.opacity = '1';
      }, 100);
    }
    if (counterEl) {
      counterEl.textContent = `${idx + 1} / ${plant.images.length}`;
    }
    if (captionEl) {
      captionEl.innerHTML = `📷 <strong>Photo Note:</strong> ${escapeHTML(plant.images[idx].caption)}`;
    }
  }

  /**
   * Setup horizontal touch swipe on plant gallery
   */
  function setupGallerySwipe(galleryEl, plantId) {
    if (!galleryEl) return;
    let startX = 0;
    let startY = 0;

    galleryEl.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    }, { passive: true });

    galleryEl.addEventListener('touchend', (e) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      // Check if horizontal swipe was more pronounced than vertical
      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          stepPhoto(plantId, 1); // Swipe left -> Next
        } else {
          stepPhoto(plantId, -1); // Swipe right -> Prev
        }
      }
    }, { passive: true });
  }

  /**
   * Toggle expanded documentation view
   */
  function toggleExpandCard(plantId) {
    const card = document.getElementById(`plant-card-${plantId}`);
    if (!card) return;

    if (state.expandedCards.has(plantId)) {
      state.expandedCards.delete(plantId);
      card.classList.remove('expanded');
      const text = card.querySelector('.toggle-text');
      if (text) text.textContent = 'View Full Care Guide';
    } else {
      state.expandedCards.add(plantId);
      card.classList.add('expanded');
      const text = card.querySelector('.toggle-text');
      if (text) text.textContent = 'Hide Documentation';
    }
  }

  /**
   * Search filter logic: handles names, foliage color, warm weather, sunlight, soil, etc.
   */
  function handleSearch(query) {
    state.searchQuery = query.toLowerCase().trim();

    if (searchClearBtn) {
      searchClearBtn.classList.toggle('visible', state.searchQuery.length > 0);
    }

    if (!state.searchQuery) {
      state.filteredPlants = [...state.plants];
    } else {
      const tokens = state.searchQuery.split(/\s+/).filter(Boolean);

      state.filteredPlants = state.plants.filter(plant => {
        const searchableContent = [
          plant.name,
          plant.scientificName,
          plant.family,
          plant.category,
          plant.environment,
          plant.foliageColor,
          plant.flowerInfo,
          plant.wateringCycle,
          plant.sunExposure,
          plant.suitableWeather,
          plant.nutritionalRequirements,
          plant.soilRequirements,
          plant.windConditions,
          plant.cultivationTips
        ].join(' ').toLowerCase();

        return tokens.every(token => searchableContent.includes(token));
      });
    }

    renderPlants();
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      handleSearch('');
      searchInput.focus();
    });
  }

  // Global Click delegation
  document.addEventListener('click', (e) => {
    // 1. Gallery navigation buttons
    const navBtn = e.target.closest('.gallery-nav-btn');
    if (navBtn) {
      e.stopPropagation();
      const plantId = navBtn.getAttribute('data-plant-id');
      const action = navBtn.getAttribute('data-action');
      stepPhoto(plantId, action === 'next' ? 1 : -1);
      return;
    }

    // 2. Click on image itself -> advances to next photo if multiple
    const imgWrapper = e.target.closest('.gallery-image-wrapper');
    if (imgWrapper) {
      const gallery = imgWrapper.closest('.phone-media-gallery');
      if (gallery) {
        const plantId = gallery.id.replace('gallery-', '');
        stepPhoto(plantId, 1);
      }
      return;
    }

    // 3. Expand / Collapse Trigger
    const expandTrigger = e.target.closest('[data-action="toggle-expand"]');
    if (expandTrigger) {
      const plantId = expandTrigger.getAttribute('data-plant-id');
      toggleExpandCard(plantId);
      return;
    }
  });

  // Initial catalog render
  renderPlants();
});
