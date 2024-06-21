// loadingDirective.js
function createLoadingElement () {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';

  const loadingElement = document.createElement('div');
  loadingElement.className = 'loading';
  loadingElement.innerHTML = `
    <div class="load">L O A D I N G</div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  `;

  loadingOverlay.appendChild(loadingElement);
  return loadingOverlay;
}

function insertLoadingElement (el) {
  if (!el.loadingElement) {
    el.loadingElement = createLoadingElement();
    el.style.position = 'relative';
    el.appendChild(el.loadingElement);
  }
}

function removeLoadingElement (el) {
  if (el.loadingElement) {
    el.loadingElement.remove();
    el.loadingElement = null;
    el.style.position = null;
  }
}

export default {
  bind (el, binding) {
    const style = document.createElement('style');
    style.innerHTML = `
      .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        z-index: 9999;
        pointer-events: none; /* Ensure the overlay doesn't block clicks */
      }
      .loading {
        text-align: center;
        pointer-events: auto; /* Allow interactions with the loading content */
      }
      .loading .load {
        color: #aaa;
        margin: 0;
        font: .8em verdana;
        text-transform: uppercase;
        letter-spacing: .1em;
      }
      .loading span {
        display: inline-block;
        vertical-align: middle;
        width: .6em;
        height: .6em;
        margin: .19em;
        background: #007DB6;
        border-radius: .6em;
        animation: loading 1s infinite alternate;
      }
      .loading span:nth-of-type(2) {
        background: #008FB2;
        animation-delay: 0.2s;
      }
      .loading span:nth-of-type(3) {
        background: #009B9E;
        animation-delay: 0.4s;
      }
      .loading span:nth-of-type(4) {
        background: #00A77D;
        animation-delay: 0.6s;
      }
      .loading span:nth-of-type(5) {
        background: #00B247;
        animation-delay: 0.8s;
      }
      .loading span:nth-of-type(6) {
        background: #5AB027;
        animation-delay: 1.0s;
      }
      .loading span:nth-of-type(7) {
        background: #A0B61E;
        animation-delay: 1.2s;
      }
      @keyframes loading {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    if (binding.value) {
      insertLoadingElement(el);
    }
  },
  update (el, binding) {
    if (binding.value) {
      insertLoadingElement(el);
    } else {
      removeLoadingElement(el);
    }
  },
  unbind (el) {
    removeLoadingElement(el);
  },
};
