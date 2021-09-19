import "./mapview.css";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
	useLoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";
import Maplogic from "./components/mapoptions";
import DisabledView from "./components/disabledview/disabledview";
import DisableForm from "./components/disableForm/disableForm";
require("dotenv").config();

const { libraries, mapContainerStyle, center, option } = Maplogic();

export default function Mapview() {
	const [description, setDescription] = useState({
		assiType: " ",
		assiUrg: " ",
		assiDescrp: " ",
	});
	const [markers, setMarkers] = useState([]);
	const [selected, setSelected] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyAdKa3hX_XP9fUbV98w3eU73UIHAEJZhvs",
		libraries,
	});

	if (loadError) return "Error Loading Maps";
	if (!isLoaded) return "Loading Maps";

	function handleChange(e) {
		const { name, value } = e.target;
		setDescription((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		setDisabled(false);
		document.getElementById('map').style.pointerEvents="auto";
	};

	function markerOnclick(e){
		setMarkers((current) => [
			...current,
			{
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
				time: new Date(),
				assType: description.assiType,
				assDescrp: description.assiDescrp,
				assUrg: description.assiUrg,
				key: Math.random(),
			},
			
		] );
		setDisabled(true);
		document.getElementById('map').style.pointerEvents="none";

	};

	return (
		<div id='general'>
			{console.log(markers)}
			<div id='content' className='container-fluid'>
				<div id='map-container' className='container-fluid'>
					<p id='maplogo'>HelpMeplease</p>
					<GoogleMap
						id='map'
						mapContainerStyle={mapContainerStyle}
						zoom={12}
						center={center}
						options={option}
						onClick={(e) => markerOnclick(e)}
					>	
						{markers.map((marker) => (
							
							<Marker
								key={marker.time.toISOString()}
								position={{ lat: marker.lat, lng: marker.lng }}
								onClick={() => {
									setSelected(marker);
								}}
							/>
						))}
						{selected ? (
							<InfoWindow
								position={{ lat: selected.lat, lng: selected.lng }}
								onCloseClick={() => setSelected(null)}
							>
								<div>
									<h4>
										<strong>{selected.assType}</strong>
									</h4>
									<p>{selected.assDescrp}</p>
								</div>
							</InfoWindow>
						) : null}
					</GoogleMap>
				</div>
				<div id='description' className='container-fluid'>
					{disabled ? (
						<div className='row h-100'>
							<div id='txtContent' className='col-sm-12 col-lg-8  border pt-2'>
								<div id='description-sub' className='h-33 mb-3'>
									<p id='description-text'>Type of assistance</p>
									<select name='assiType' onChange={(e) => handleChange(e)}>
										<option>Select Type</option>
										<option>Medical</option>
										<option>Mental</option>
										<option>Security</option>
										<option>Other</option>
									</select>
								</div>
								<div id='description-sub' className='h-33 mb-3'>
									<p id='description-text'>Priority:</p>
									<select name='assiUrg' onChange={(e) => handleChange(e)}>
										<option>Select Priority</option>
										<option>Not Urgent</option>
										<option>Urgent</option>
										<option>Critical</option>
									</select>
								</div>
								<div id='description-sub' className='h-33 '>
									<p id='description-text'>
										Description (Only 100 characters) :
									</p>
									<input
										name='assiDescrp'
										onChange={(e) => handleChange(e)}
										maxLength='100'
									></input>
								</div>
								<div
									id='mapButton'
									className='btn'
									onClick={(e) => handleSubmit(e)}
								>
									Add Location in the Map
								</div>
							</div>
							<div className='col-sm-12 col-lg-4  border pt-2'>
{/* 								<div id='eventDisplay' className='container-fluid'>
									{markers.map((item) => (
										<p key={item.key}>{item.assDescrp}</p>
									))}
								</div> */}
							</div>
						</div>
					) : (
						<DisableForm />
					)}
				</div>
			</div>
		</div>
	);
}
