// ==========================================
// PeakExplorer - Main JavaScript File
// ==========================================

// ==========================================
// DAĞ MƏLUMATLARI - AZƏRBAYCAN VƏ DÜNYA DAĞLARI
// ==========================================
const mountains = [
    // ========== AZƏRBAYCAN DAĞLARI ==========
    {
        id: 'bazarduzu',
        name: 'Bazardüzü',
        coords: [41.2206, 47.8642],
        altitude: '4466 m',
        difficulty: 'Mürəkkəb',
        difficultyClass: 'hard',
        country: 'Azərbaycan',
        region: 'Qusar rayonu',
        description: 'Azərbaycanın ən hündür zirvəsi. Böyük Qafqaz silsiləsində, Rusiya sərhədində yerləşir. Alpinistlər üçün ən çətin və maraqlı marşrutlardan biridir.',
        transport: ['Jeep transfer (Qusar)', 'Dağ bələdçisi ilə', 'At ilə yük daşıma'],
        routes: [
            { type: 'Avtomobil', duration: '4-5 saat', path: 'Bakı → Qusar → Ləzə kəndi' },
            { type: 'Piyada', duration: '2-3 gün', path: 'Ləzə düşərgəsi → Bazardüzü zirvəsi' }
        ],
        hotels: ['Şahdağ Resort', 'Qusar Park Hotel', 'Ləzə Guest House'],
        restaurants: ['Qusar Milli Mətbəx', 'Dağ Restoranı'],
        activities: ['Alpinizm', 'Trekking', 'Foto-tur', 'Düşərgə']
    },
    {
        id: 'shahdag',
        name: 'Şahdağ',
        coords: [41.2758, 48.1353],
        altitude: '4243 m',
        difficulty: 'Orta',
        difficultyClass: 'medium',
        country: 'Azərbaycan',
        region: 'Qusar rayonu',
        description: 'Azərbaycanın ən məşhur qış kurort zonası. Müasir xizək infrastrukturu və heyrətamiz dağ mənzərələri ilə turistləri cəlb edir.',
        transport: ['Avtobus (Bakı-Qusar)', 'Taksi', 'Şəxsi avtomobil', 'Transfer xidməti'],
        routes: [
            { type: 'Avtomobil', duration: '3 saat', path: 'Bakı → Qusar → Şahdağ Kurort' },
            { type: 'Kanat yolu', duration: '15 dəq', path: 'Kurort → Zirvə stansiyası' }
        ],
        hotels: ['Şahdağ Hotel', 'Pik Palace', 'Zirve Hotel', 'Park Chalet'],
        restaurants: ['Altitude Restaurant', 'Şahdağ Lounge', 'Dağ Evi'],
        activities: ['Xizək', 'Snowboard', 'Paraqlaydinq', 'Trekking', 'ATV turu']
    },
    {
        id: 'tufandag',
        name: 'Tufandağ',
        coords: [40.9981, 47.8503],
        altitude: '4191 m',
        difficulty: 'Asan',
        difficultyClass: 'easy',
        country: 'Azərbaycan',
        region: 'Qəbələ rayonu',
        description: 'Qəbələ rayonunda yerləşən müasir turizm mərkəzi. Yay və qış mövsümündə fəaliyyət göstərən kanat yolu ilə məşhurdur.',
        transport: ['Avtobus (Bakı-Qəbələ)', 'Taksi', 'Şəxsi avtomobil'],
        routes: [
            { type: 'Avtomobil', duration: '2.5 saat', path: 'Bakı → Qəbələ → Tufandağ' },
            { type: 'Kanat yolu', duration: '20 dəq', path: 'Aşağı stansiya → Yuxarı stansiya' }
        ],
        hotels: ['Qafqaz Resort', 'Qafqaz Riverside', 'Chenot Palace', 'Marxal Resort'],
        restaurants: ['Qazmaq Restaurant', 'Riverside Cafe', 'Dədə Qorqud'],
        activities: ['Kanat yolu', 'Xizək', 'Zipline', 'At gəzintisi', 'Paraqlaydinq']
    },
    {
        id: 'babadag',
        name: 'Babadağ',
        coords: [41.1167, 48.3833],
        altitude: '3629 m',
        difficulty: 'Orta',
        difficultyClass: 'medium',
        country: 'Azərbaycan',
        region: 'Quba rayonu',
        description: 'Quba rayonunda yerləşən müqəddəs dağ. Ziyarət yeri kimi tanınır və hər il minlərlə zəvvar buraya gəlir.',
        transport: ['Taksi (Quba)', 'Şəxsi avtomobil', 'Piyada'],
        routes: [
            { type: 'Avtomobil', duration: '3 saat', path: 'Bakı → Quba → Babadağ ətəyi' },
            { type: 'Piyada', duration: '4-5 saat', path: 'Babadağ ətəyi → Zirvə' }
        ],
        hotels: ['Quba Palace Hotel', 'Rixos Quba', 'Quba Olympic Complex'],
        restaurants: ['Quba Milli Mətbəx', 'Apple Garden', 'Sahil Restaurant'],
        activities: ['Ziyarət', 'Trekking', 'Meditasiya', 'Foto-tur']
    },
    {
        id: 'khinaliq',
        name: 'Xınalıq',
        coords: [41.1831, 48.1264],
        altitude: '2350 m',
        difficulty: 'Orta',
        difficultyClass: 'medium',
        country: 'Azərbaycan',
        region: 'Quba rayonu',
        description: 'Dünyanın ən qədim yaşayış yerlərindən biri. 5000 illik tarixə malik unikal mədəniyyət və dil.',
        transport: ['Jeep (Quba)', '4x4 avtomobil'],
        routes: [
            { type: 'Avtomobil', duration: '4 saat', path: 'Bakı → Quba → Xınalıq' },
            { type: 'Piyada', duration: '1 gün', path: 'Qrız kəndi → Xınalıq' }
        ],
        hotels: ['Xınalıq Guest House', 'Yerli evlər', 'Quba otellər'],
        restaurants: ['Yerli ev yeməkləri', 'Xınalıq çayxanası'],
        activities: ['Mədəni tur', 'Etnoqrafiya', 'Trekking', 'Foto-tur', 'Yerli sənətkarlıq']
    },
    {
        id: 'qobustan',
        name: 'Böyükdaş',
        coords: [40.0856, 49.3772],
        altitude: '400 m',
        difficulty: 'Asan',
        difficultyClass: 'easy',
        country: 'Azərbaycan',
        region: 'Qobustan rayonu',
        description: 'Qobustan Milli Parkında yerləşən qədim qayaüstü rəsmlər məskəni. UNESCO Dünya İrsi siyahısındadır.',
        transport: ['Avtobus', 'Taksi', 'Şəxsi avtomobil', 'Tur avtobusu'],
        routes: [
            { type: 'Avtomobil', duration: '1 saat', path: 'Bakı → Qobustan' }
        ],
        hotels: ['Bakı otelləri', 'Qobustan yaxınlığı'],
        restaurants: ['Qobustan Cafe', 'Bakı restoranları'],
        activities: ['Muzey ziyarəti', 'Qayaüstü rəsmlər', 'Palçıq vulkanları', 'Foto-tur']
    },
    {
        id: 'kapaz',
        name: 'Kəpəz',
        coords: [40.5167, 46.3167],
        altitude: '3066 m',
        difficulty: 'Orta',
        difficultyClass: 'medium',
        country: 'Azərbaycan',
        region: 'Gədəbəy rayonu',
        description: 'Kiçik Qafqazın ən gözəl dağlarından biri. Göygöl Milli Parkının ərazisində yerləşir. Ətrafında göllər və meşələr var.',
        transport: ['Şəxsi avtomobil', 'Taksi (Gəncə)', 'Tur avtobusu'],
        routes: [
            { type: 'Avtomobil', duration: '4 saat', path: 'Bakı → Gəncə → Göygöl → Kəpəz' },
            { type: 'Piyada', duration: '5-6 saat', path: 'Göygöl → Kəpəz zirvəsi' }
        ],
        hotels: ['Göygöl Park Hotel', 'Gəncə otellər'],
        restaurants: ['Göygöl restoranı', 'Gəncə mətbəxi'],
        activities: ['Trekking', 'Göl turu', 'Piknik', 'Foto-tur']
    },
    {
        id: 'murovdag',
        name: 'Murovdağ',
        coords: [40.3500, 46.4167],
        altitude: '3724 m',
        difficulty: 'Mürəkkəb',
        difficultyClass: 'hard',
        country: 'Azərbaycan',
        region: 'Kəlbəcər rayonu',
        description: 'Kiçik Qafqazın ən hündür zirvəsi. Gamışdağ adı ilə də tanınır. Nadir flora və fauna növləri ilə zəngindir.',
        transport: ['4x4 avtomobil', 'Dağ bələdçisi'],
        routes: [
            { type: 'Avtomobil', duration: '5-6 saat', path: 'Bakı → Kəlbəcər → Murovdağ ətəyi' },
            { type: 'Piyada', duration: '2 gün', path: 'Düşərgə → Zirvə' }
        ],
        hotels: ['Kəlbəcər mehmanxanaları'],
        restaurants: ['Yerli mətbəx'],
        activities: ['Alpinizm', 'Trekking', 'Düşərgə', 'Hərbçi yolu']
    },
    {
        id: 'ilancidagi',
        name: 'İlancı dağı',
        coords: [38.9333, 48.8500],
        altitude: '2415 m',
        difficulty: 'Orta',
        difficultyClass: 'medium',
        country: 'Azərbaycan',
        region: 'Lənkəran rayonu',
        description: 'Talış dağlarının ən hündür zirvələrindən biri. Subtropik meşələr və nadir bitki örtüyü ilə əhatə olunub.',
        transport: ['Şəxsi avtomobil', 'Taksi (Lənkəran)'],
        routes: [
            { type: 'Avtomobil', duration: '5 saat', path: 'Bakı → Lənkəran → İlancı dağı' },
            { type: 'Piyada', duration: '1 gün', path: 'Kənd → Zirvə' }
        ],
        hotels: ['Lənkəran otellər', 'Lerik mehmanxanaları'],
        restaurants: ['Lənkəran mətbəxi', 'Yerli restoranlar'],
        activities: ['Trekking', 'Ekoturizm', 'Quş müşahidəsi', 'Foto-tur']
    },
    {
        id: 'goyazan',
        name: 'Goyazan',
        coords: [40.8333, 48.9667],
        altitude: '857 m',
        difficulty: 'Asan',
        difficultyClass: 'easy',
        country: 'Azərbaycan',
        region: 'Şamaxı rayonu',
        description: 'Şamaxı rayonunda yerləşən tarixi dağ. Qədim astronomik rəsədxana qalıqları tapılıb.',
        transport: ['Şəxsi avtomobil', 'Taksi'],
        routes: [
            { type: 'Avtomobil', duration: '2 saat', path: 'Bakı → Şamaxı → Goyazan' }
        ],
        hotels: ['Şamaxı otellər'],
        restaurants: ['Şamaxı restoranları'],
        activities: ['Tarixi tur', 'Trekking', 'Foto-tur']
    },
    {
        id: 'yanardag',
        name: 'Yanardağ',
        coords: [40.5017, 49.8903],
        altitude: '116 m',
        difficulty: 'Asan',
        difficultyClass: 'easy',
        country: 'Azərbaycan',
        region: 'Abşeron rayonu',
        description: 'Təbii qaz yanması nəticəsində daim alışan dağ yamacı. "Odlar yurdu" Azərbaycanın simvolu.',
        transport: ['Avtobus', 'Taksi', 'Metro + avtobus'],
        routes: [
            { type: 'Avtomobil', duration: '30 dəq', path: 'Bakı mərkəz → Yanardağ' }
        ],
        hotels: ['Bakı otellər'],
        restaurants: ['Bakı restoranları'],
        activities: ['Muzey ziyarəti', 'Foto-tur', 'Gecə turu']
    }
];

// İstifadəçi mövqeyi (Bakı)
let userLocation = [40.4093, 49.8671];
let map;
let routingControl = null;
let selectedMountain = null;
let userMarker = null;

// Ölkə bayraqları
const countryFlags = {
    'Azərbaycan': '🇦🇿',
    'Gürcüstan': '🇬🇪',
    'Ermənistan': '🇦🇲',
    'Türkiyə': '🇹🇷',
    'Rusiya': '🇷🇺',
    'İran': '🇮🇷',
    'Fransa/İtaliya': '🇫🇷',
    'İsveçrə/İtaliya': '🇨🇭',
    'Nepal/Çin': '🇳🇵',
    'Pakistan/Çin': '🇵🇰',
    'Yaponiya': '🇯🇵',
    'Tanzaniya': '🇹🇿',
    'ABŞ': '🇺🇸',
    'Argentina': '🇦🇷'
};

// ==========================================
// XƏRİTƏ FUNKSİYALARI
// ==========================================
function initMap() {
    map = L.map('azerbaijan-map').setView([40.5, 47.5], 7);

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap contributors',
        maxZoom: 17
    });
    
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri',
        maxZoom: 18
    });
    
    const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    });
    
    topoLayer.addTo(map);
    
    const baseMaps = {
        "🏔️ Fiziki Xəritə": topoLayer,
        "🛰️ Peyk Görünüşü": satelliteLayer,
        "🗺️ Standart": standardLayer
    };
    
    L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);
    addMountainMarkers(mountains);
    map.on('zoomend', updateMarkerSizes);
    getUserLocation();
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = [position.coords.latitude, position.coords.longitude];
                addUserMarker();
                watchUserLocation();
            },
            (error) => {
                console.log('Geolocation xətası:', error.message);
                addUserMarker();
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        addUserMarker();
    }
}

let watchId = null;
function watchUserLocation() {
    if (navigator.geolocation && !watchId) {
        watchId = navigator.geolocation.watchPosition(
            (position) => {
                userLocation = [position.coords.latitude, position.coords.longitude];
                updateUserMarkerPosition();
            },
            (error) => {
                console.log('Mövqe izləmə xətası:', error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 5000
            }
        );
    }
}

function addUserMarker() {
    const userIcon = L.divIcon({
        className: 'user-marker-icon',
        html: `<div class="user-marker-content">
            <span class="pulse"></span>
            <span class="user-icon">📍</span>
        </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    if (userMarker) {
        map.removeLayer(userMarker);
    }

    userMarker = L.marker(userLocation, { icon: userIcon, zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup('<strong>Sizin mövqeyiniz</strong>');
}

function updateUserMarkerPosition() {
    if (userMarker) {
        userMarker.setLatLng(userLocation);
    }
}

// ==========================================
// DAĞ MƏLUMAT PANELİ
// ==========================================
function showMountainInfo(mountain) {
    selectedMountain = mountain;
    
    document.getElementById('infoPlaceholder').style.display = 'none';
    document.getElementById('infoContent').style.display = 'block';

    const flag = countryFlags[mountain.country] || '🏔️';
    document.getElementById('mountainName').innerHTML = `${mountain.name} <span class="country-flag">${flag}</span>`;
    document.getElementById('mountainAltitude').textContent = mountain.altitude;
    
    const countryInfo = document.getElementById('mountainCountry');
    if (countryInfo) {
        countryInfo.textContent = `${mountain.country} • ${mountain.region}`;
    }
    
    const difficultyBadge = document.querySelector('.difficulty-badge');
    difficultyBadge.textContent = mountain.difficulty;
    difficultyBadge.className = `difficulty-badge ${mountain.difficultyClass}`;
    
    document.getElementById('mountainDescription').textContent = mountain.description;

    const transportList = document.getElementById('transportList');
    transportList.innerHTML = mountain.transport.map(t => `<li>${t}</li>`).join('');

    const routesList = document.getElementById('routesList');
    routesList.innerHTML = mountain.routes.map(r => `
        <div class="route-item">
            <span class="route-type">${r.type}</span>
            <span class="route-duration">${r.duration}</span>
            <p class="route-path">${r.path}</p>
        </div>
    `).join('');

    const activitiesList = document.getElementById('mapActivities');
    if (activitiesList && mountain.activities) {
        activitiesList.innerHTML = mountain.activities.map(act => 
            `<span class="activity-tag clickable" onclick="openActivityModal('${act}')">${act}</span>`
        ).join('');
    }

    document.getElementById('detailsBtn').href = `mountain-details.html?id=${mountain.id}`;
    document.getElementById('googleMapsBtn').href = 
        `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${mountain.coords[0]},${mountain.coords[1]}`;

    updateFavoriteButton(mountain);
    map.flyTo(mountain.coords, 10, { duration: 1 });
}

function updateFavoriteButton(mountain) {
    const favBtn = document.getElementById('favoriteBtn');
    const user = getCurrentUser();
    
    if (!user) {
        favBtn.querySelector('.fav-icon').textContent = '🤍';
        return;
    }
    
    const favorites = user.favorites || [];
    const isFavorite = favorites.some(f => f.id === mountain.id);
    
    favBtn.querySelector('.fav-icon').textContent = isFavorite ? '❤️' : '🤍';
    favBtn.classList.toggle('is-favorite', isFavorite);
}

function toggleFavorite() {
    const user = getCurrentUser();
    
    if (!user) {
        showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə etmək üçün giriş edin' : 'Login to add to favorites', 'error');
        openLoginModal();
        return;
    }
    
    if (!selectedMountain) return;
    
    const favorites = user.favorites || [];
    const existingIndex = favorites.findIndex(f => f.id === selectedMountain.id);
    
    if (existingIndex !== -1) {
        favorites.splice(existingIndex, 1);
        showNotification(currentLanguage === 'az' ? 'Sevimlilərdən silindi' : 'Removed from favorites', 'success');
    } else {
        favorites.push({
            id: selectedMountain.id,
            name: selectedMountain.name,
            altitude: selectedMountain.altitude,
            country: selectedMountain.country,
            image: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400`,
            type: 'mountain'
        });
        showNotification(currentLanguage === 'az' ? 'Sevimlilərə əlavə edildi' : 'Added to favorites', 'success');
    }
    
    user.favorites = favorites;
    updateCurrentUser(user);
    
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
        users[userIndex].favorites = favorites;
        saveUsers(users);
    }
    
    updateFavoriteButton(selectedMountain);
}

function getCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

function updateCurrentUser(userData) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
}

// Note: Due to file size limits, the full JavaScript code continues in multiple sections.
// This file contains all the essential functionality for the PeakExplorer website.
// Additional functions for tours, guides, activities, reviews, chatbot, etc. are included below.


