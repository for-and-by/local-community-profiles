import React, {useState} from 'react';
import {useLocation} from '@remix-run/react';
import type {FilterSpecification} from 'maplibre-gl';

import colors from '~/utils/colors.client';

import useMap from '~/hooks/map/use-map';
import useMapEvents from '~/hooks/map/use-map-events';
import useMapLayer from '~/hooks/map/use-map-layer';
import useMapCenter from '~/hooks/map/use-map-center';

import SummaryMarker from '~/components/molecules/popup/summary';

const FILTERS = ['!', ['has', 'point_count']] as FilterSpecification;

export default function ReportIconsLayer() {
	const location = useLocation();
	const map = useMap();
	const [, setCenter] = useMapCenter();

	const [activeReport, setActiveReport] = useState<string | undefined>();

	useMapLayer({
		id: 'reports-bg',
		type: 'circle',
		source: 'reports',
		filter: FILTERS,
		paint: {
			'circle-color': colors?.brand?.[600],
			'circle-radius': 20,
		},
	});

	useMapLayer({
		id: 'reports-icon',
		type: 'symbol',
		source: 'reports',
		filter: FILTERS,
		layout: {
			'icon-image': '{type_handle}',
			'icon-allow-overlap': true,
			'icon-size': 0.2,
		},
	});

	useMapLayer({
		id: 'verify-bg',
		type: 'symbol',
		source: 'reports',
		filter: FILTERS,
		layout: {
			'icon-allow-overlap': true,
			'text-field': '●',
			'text-font': ['Inter Bold', 'Arial Unicode MS Bold'],
			'text-size': 12,
			'text-offset': [-1.2, -1.2],
		},
		paint: {
			'text-color': colors?.brand?.[900],
		},
	});

	useMapLayer({
		id: 'verify-bg-text',
		type: 'symbol',
		source: 'reports',
		filter: FILTERS,
		layout: {
			'icon-allow-overlap': true,
			'text-field': '?',
			'text-font': ['Inter Bold', 'Arial Unicode MS Bold'],
			'text-size': 8,
			'text-offset': [-1.2, -1.2]
		},
		paint: {
			'text-color': colors?.white,
		},
	});

	useMapEvents(map, 'reports-bg', {
		click: (event) => {
			if (!map) return;
			setCenter(event.lngLat);

			const [feature] = map.queryRenderedFeatures(event.point, {
				layers: ['reports-bg'],
			});

			if (!feature?.properties?.id) return;
			if (!(location.pathname === '/')) return;

			setActiveReport(feature.properties.id);
		},
	});

	return (
		<SummaryMarker
			id={activeReport}
			onClose={() => setActiveReport(undefined)}
		/>
	);
}
