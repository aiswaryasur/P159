AFRAME.registerComponent("info-banner", {
    init: function () {
      this.placesContainer = this.el;
      this.createBanner()
      
    },
  
    createBanner: function () {
      const thumbNailsRef = [
        {
          id: "superman",
          url: "./assets/posters/superman-poster.jpg",
          title:"SupererMan",
          description:'Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics. Superman has been adapted to a number of other media, which includes radio serials, novels, films, television shows, theater, and video games.'
        },
        {
          id: "spiderman",
          url: "./assets/posters/spiderman-poster.jpg",
          title:'SpiderMan',
          description:'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy (August 1962) in the Silver Age of Comic Books He has been featured in comic books, television shows, films, video games, novels, and plays.'
        
        },
  
        {
          id: "captain-aero",
          url: "./assets/posters/captain-aero-poster.jpg",
          title:"Captain Aero",
          description:'Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Captain Aero first adventure was written by Allen Ulmer and illustrated by Ray Willner.[3] Captain Aero is a Flying ace for the US Army, who patrols the skies with his little Chinese pal, Chop Suey In his first adventure, he tests out an experimental P-60 plane and escorts a flight of Canadian flyers taking planes to England, as America had not yet entered World War II'
        },
        {
          id: "outer-space",
          url: "./assets/posters/outer-space-poster.jpg",
          title:'Outer Space',
          description:'Outer Space is a science fiction comic book series, published in the years 1978-1982 by German publishing house Bastei Verlag , written and drawn by Polish artists. The authors of the script Arnold Mostowicz and Alfred Górny, and the drawings were made by Boguslaw Polch. '
        },
        
      ];
      const backgroundEl = this.createBackground()
      const descriptionEl = this.createDescriptionEl(item)
      const titleEl = this.createTitleEl(item);
      backgroundEl.appendChild(titleEl);
    },
    createBackground:function(){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
          primitive:'plane',
          width:50,
          height:50
        })
        entityEl.setAttribute("position", { x: 0, y: 0, z: 0 });
        entityEl.setAttribute('material',{
          color:'#000000'
        }) 
        return entityEl
      },
    createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#ffffff",
          value: item.title,
        });
        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
        entityEl.setAttribute("visible", true);
        
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 45,
          color: "#fff",
          value: item.description,
        });
        entityEl.setAttribute("position",{ x: 0, y: -2, z: 0.1});
        entityEl.setAttribute("visible", true);
        
        return entityEl;
      },
    
  });
  