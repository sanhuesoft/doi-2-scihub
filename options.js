// Cargar el dominio guardado al abrir
chrome.storage.sync.get('sciHubDomain', (data) => {
  const domainInput = document.getElementById('domain');
  if (data.sciHubDomain) {
    // Si ya existe un dominio guardado, lo ponemos como placeholder y valor
    domainInput.placeholder = data.sciHubDomain;
    domainInput.value = data.sciHubDomain;
  } else {
    // Si es la primera vez, usamos uno por defecto
    domainInput.placeholder = "sci-hub.se";
  }
});

document.getElementById('save').addEventListener('click', () => {
  let domain = document.getElementById('domain').value.trim();
  domain = domain.replace(/^https?:\/\//, '').replace(/\/$/, ''); 
  
  if (!domain) domain = 'sci-hub.se';

  chrome.storage.sync.set({ sciHubDomain: domain }, () => {
    const newRule = {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { regexSubstitution: `https://${domain}/\\1` }
      },
      condition: {
        regexFilter: "^https?://doi\\.org/(.*)",
        resourceTypes: ["main_frame"]
      }
    };

    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1],
      addRules: [newRule]
    }, () => {
      const status = document.getElementById('status');
      const domainInput = document.getElementById('domain');
      
      // Actualizamos el placeholder inmediatamente después de guardar
      domainInput.placeholder = domain;
      
      status.textContent = "¡Configuración actualizada!";
      setTimeout(() => status.textContent = "", 2000);
    });
  });
});