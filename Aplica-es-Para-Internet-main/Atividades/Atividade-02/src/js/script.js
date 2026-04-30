 function loadPhoto(input, imgId, placeholderId) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.getElementById(imgId);
          const ph = document.getElementById(placeholderId);
          img.src = e.target.result;
          img.style.display = "block";
          ph.style.display = "none";
        };
        reader.readAsDataURL(file);
      }