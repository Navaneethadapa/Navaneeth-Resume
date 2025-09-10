import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

const LocationMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [78.4867, 17.3850], // Hyderabad coordinates
        zoom: 10,
        pitch: 45,
      });

      // Add marker for location
      new mapboxgl.Marker({
        color: '#3b82f6'
      })
      .setLngLat([78.4867, 17.3850])
      .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Disable scroll zoom for smoother experience
      map.current.scrollZoom.disable();

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
      >
        <h4 className="text-white font-semibold mb-4 text-center">Location Map</h4>
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Enter your Mapbox Public Token to view the map:
            </label>
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1..."
              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Load Map
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Get your token from{' '}
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            mapbox.com
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4"
    >
      <h4 className="text-white font-semibold mb-4 text-center">My Location</h4>
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10 rounded-lg" />
      </div>
      <p className="text-center text-gray-400 text-sm mt-3">Hyderabad, India</p>
    </motion.div>
  );
};

export default LocationMap;