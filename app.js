DG.then(function () {
    var map = DG.map('map', {
        center: [ 51.127939, 71.434058], // Координаты центра Астаны
        zoom: 12
        
    });

    var markers = [
        { 
            coords: [51.128311, 71.430389], // Байтерек
            name: 'Байтерек',
            description: 'Знаменитая башня-монумент в центре Астаны'
        },
        { 
            coords: [51.090153, 71.400256], // Назарбаев Университет
            name: 'Назарбаев Университет',
            description: 'Современный исследовательский университет'
        },
        { 
            coords: [51.120751, 71.472159], // Дворец Независимости
            name: 'Дворец Независимости',
            description: 'Центр государственных церемоний'
        }
    ];

    markers.forEach(function(markerData) {
        var marker = DG.marker(markerData.coords).addTo(map);
        
       
        marker.bindPopup(
            `<b>${markerData.name}</b><br>${markerData.description}`
        );
    });
});