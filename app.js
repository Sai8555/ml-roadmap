import { roadmapData } from './data.js';

// Application State
let completedTopics = new Set();
let currentPhaseFilter = 'all';
let searchQuery = '';
let activeNode = null;

// DOM Elements
const roadmapGrid = document.getElementById('roadmap-grid');
const searchInput = document.getElementById('search-input');
const progressPercent = document.getElementById('progress-percent');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressText = document.getElementById('progress-text');
const phaseTabs = document.querySelectorAll('.tab-btn');

const dialog = document.getElementById('topic-dialog');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const completeToggleBtn = document.getElementById('dialog-complete-toggle');
const copyCodeBtn = document.getElementById('copy-code-btn');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderRoadmap();
  setupEventListeners();
  updateProgressUI();
});

// Load progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem('ml_roadmap_completed');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      completedTopics = new Set(parsed);
    } catch (e) {
      console.error("Failed to parse progress from localStorage", e);
    }
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('ml_roadmap_completed', JSON.stringify([...completedTopics]));
}

// Update the progress bar and text values
function updateProgressUI() {
  const total = roadmapData.length;
  const completed = completedTopics.size;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  progressPercent.textContent = `${percent}%`;
  progressBarFill.style.width = `${percent}%`;
  progressText.textContent = `${completed} of ${total} topics completed`;
}

// Render the entire Roadmap based on search and filters
function renderRoadmap() {
  roadmapGrid.innerHTML = '';

  // Group data by phase
  const phases = {};
  roadmapData.forEach(node => {
    // Apply filters
    const matchesSearch = searchQuery === '' || 
      node.title.toLowerCase().includes(searchQuery) ||
      node.subtitle.toLowerCase().includes(searchQuery) ||
      node.concept.toLowerCase().includes(searchQuery);

    const matchesPhase = currentPhaseFilter === 'all' || String(node.phase) === currentPhaseFilter;

    if (matchesSearch && matchesPhase) {
      if (!phases[node.phase]) {
        phases[node.phase] = {
          title: node.phaseTitle,
          nodes: []
        };
      }
      phases[node.phase].nodes.push(node);
    }
  });

  // Sort and render phase sections
  const sortedPhases = Object.keys(phases).sort((a, b) => Number(a) - Number(b));

  if (sortedPhases.length === 0) {
    roadmapGrid.innerHTML = `
      <div class="glass-panel" style="padding: 3rem; text-align: center; grid-column: 1 / -1; color: var(--text-muted);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 48px; height: 48px; margin: 0 auto 1rem; opacity: 0.5;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No topics found</h3>
        <p style="margin-top: 0.5rem;">Try adjusting your search query or switching phase filters.</p>
      </div>
    `;
    return;
  }

  sortedPhases.forEach(phaseKey => {
    const phaseData = phases[phaseKey];
    
    // Create phase section element
    const phaseSection = document.createElement('section');
    phaseSection.className = 'phase-section';
    
    const phaseHeading = document.createElement('h2');
    phaseHeading.className = 'phase-heading';
    phaseHeading.textContent = phaseData.title;
    phaseSection.appendChild(phaseHeading);

    const nodesContainer = document.createElement('div');
    nodesContainer.className = 'roadmap-nodes-container';

    // Render node cards
    phaseData.nodes.forEach(node => {
      const isCompleted = completedTopics.has(node.id);
      const card = document.createElement('div');
      card.className = `node-card glass-panel ${isCompleted ? 'completed' : ''}`;
      card.setAttribute('data-id', node.id);
      card.setAttribute('tabindex', '0'); // Accessibility for keyboard navigation
      card.setAttribute('role', 'button');
      
      card.innerHTML = `
        <div class="node-card-top">
          <span class="phase-badge">Phase ${node.phase}</span>
          <span class="diff-badge ${node.difficulty.toLowerCase()}">${node.difficulty}</span>
        </div>
        <div class="node-card-body">
          <h3>${node.title}</h3>
          <p>${node.subtitle}</p>
        </div>
        <div class="node-card-bottom">
          <div class="node-status">
            <span class="circle-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            ${isCompleted ? 'Completed' : 'Pending'}
          </div>
          <span class="learn-indicator">
            Learn 
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </div>
      `;

      // Event listener for opening detail dialog
      card.addEventListener('click', (e) => {
        // Prevent click if clicking direct controls inside the card (e.g. if we add a direct toggle)
        openTopicDetails(node.id);
      });

      // Keyboard support
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openTopicDetails(node.id);
        }
      });

      nodesContainer.appendChild(card);
    });

    phaseSection.appendChild(nodesContainer);
    roadmapGrid.appendChild(phaseSection);
  });
}

// Populate and display the Topic Details Dialog
function openTopicDetails(nodeId) {
  const node = roadmapData.find(item => item.id === nodeId);
  if (!node) return;

  activeNode = node;

  // Set general details
  document.getElementById('dialog-title').textContent = node.title;
  document.getElementById('dialog-phase').textContent = `Phase ${node.phase}`;
  
  const diffBadge = document.getElementById('dialog-difficulty');
  diffBadge.textContent = node.difficulty;
  diffBadge.className = `diff-badge ${node.difficulty.toLowerCase()}`;
  
  document.getElementById('dialog-concept').innerHTML = node.concept;
  
  // Set Math Section
  const mathContainer = document.getElementById('dialog-math');
  mathContainer.innerHTML = node.math;
  
  // Trigger math rendering using KaTeX auto-render extension
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(mathContainer, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.error("Error rendering math in dialog:", err);
    }
  }

  // Set Code Block
  const codeEl = document.getElementById('dialog-code');
  codeEl.textContent = node.code;
  // Reset syntax highlighting classes
  codeEl.className = 'language-python';
  if (window.hljs) {
    window.hljs.highlightElement(codeEl);
  }

  // Set Resources
  const resourcesGrid = document.getElementById('dialog-resources');
  resourcesGrid.innerHTML = '';
  
  node.resources.forEach(res => {
    const card = document.createElement('a');
    card.className = 'resource-card';
    card.href = res.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    // Choose icon based on resource type
    let iconSvg = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="resource-icon">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    `;
    if (res.type.toLowerCase().includes('video')) {
      iconSvg = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="resource-icon" style="color: #ef4444;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `;
    }

    card.innerHTML = `
      <div class="resource-info">
        <span class="resource-title">${res.name}</span>
        <span class="resource-type">${res.type}</span>
      </div>
      ${iconSvg}
    `;
    resourcesGrid.appendChild(card);
  });

  // Setup completion state in dialog footer
  updateDialogCompleteButton();

  // Reset copy button state
  copyCodeBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-sm">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    Copy
  `;

  // Show Modal
  dialog.showModal();
}

// Toggle active style on complete button in details dialog
function updateDialogCompleteButton() {
  const isCompleted = completedTopics.has(activeNode.id);
  if (isCompleted) {
    completeToggleBtn.classList.add('active');
    completeToggleBtn.innerHTML = `
      <span class="checkbox-box"></span>
      Completed
    `;
  } else {
    completeToggleBtn.classList.remove('active');
    completeToggleBtn.innerHTML = `
      <span class="checkbox-box"></span>
      Mark as Completed
    `;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input typing
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderRoadmap();
  });

  // Phase filtering tabs
  phaseTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Remove active class from all tabs
      phaseTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Apply filter
      currentPhaseFilter = tab.getAttribute('data-phase');
      renderRoadmap();
    });
  });

  // Close dialog button
  closeDialogBtn.addEventListener('click', () => {
    dialog.close();
  });

  // Dialog Complete toggle button
  completeToggleBtn.addEventListener('click', () => {
    if (!activeNode) return;
    
    const isCompleted = completedTopics.has(activeNode.id);
    if (isCompleted) {
      completedTopics.delete(activeNode.id);
    } else {
      completedTopics.add(activeNode.id);
    }

    saveProgress();
    updateProgressUI();
    updateDialogCompleteButton();
    
    // Update card class in the grid directly without full re-render (maintains scroll/interaction states)
    const card = document.querySelector(`.node-card[data-id="${activeNode.id}"]`);
    if (card) {
      const statusEl = card.querySelector('.node-status');
      if (completedTopics.has(activeNode.id)) {
        card.classList.add('completed');
        statusEl.innerHTML = `
          <span class="circle-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          Completed
        `;
      } else {
        card.classList.remove('completed');
        statusEl.innerHTML = `
          <span class="circle-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          Pending
        `;
      }
    }
  });

  // Copy code button inside dialog
  copyCodeBtn.addEventListener('click', () => {
    if (!activeNode) return;

    navigator.clipboard.writeText(activeNode.code)
      .then(() => {
        copyCodeBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-sm" style="color: var(--color-success);">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;
        setTimeout(() => {
          copyCodeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-sm">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy
          `;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  });

  // Light dismiss fallback for Safari and older browsers (click on backdrop to close)
  dialog.addEventListener('click', (event) => {
    // Check if backdrop click fallback is needed
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInside) {
        dialog.close();
      }
    }
  });
}
