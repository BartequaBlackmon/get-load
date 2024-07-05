document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
  
    fetch(`/api/search?origin=${origin}&destination=${destination}`)
      .then(response => response.json())
      .then(data => {
        const results = document.getElementById('results');
        results.innerHTML = '';
  
        if (data.length === 0) {
          results.innerHTML = '<p class="no-results">No loads found</p>';
        } else {
          data.forEach(load => {
            const loadDiv = document.createElement('div');
            loadDiv.classList.add('load');
            loadDiv.innerHTML = `
              <p><strong>Origin:</strong> ${load.origin}</p>
              <p><strong>Destination:</strong> ${load.destination}</p>
              <p><strong>Weight:</strong> ${load.weight} kg</p>
              <button><i class="fas fa-trash-alt"></i> Delete</button>
            `;
            results.appendChild(loadDiv);
          });
        }
      })
      .catch(error => {
        console.error('Error fetching loads:', error);
      });
  });
  