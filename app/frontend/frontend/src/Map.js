import React from 'react'

const Map = () => {
    return (
        <div className="map">
            <iframe src="https://covid19canada.maps.arcgis.com/apps/Minimalist/index.html?appid=b3baccb0f30e4516b8e64009b3383f55" title="map" id="map" className="map"></iframe>
        </div>
    )
}

export default Map