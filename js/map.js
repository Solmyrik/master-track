const mapSection = document.querySelector('.map-section');
console.log(mapSection);
if (mapSection) {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map', {
      center: [55.717083244194754, 37.62363635581959], // ваши данные
      zoom: 18,
    });

    let placemark = new ymaps.Placemark([55.717083244194754, 37.62363635581959], {}, {});

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
}
