import mapStyle from "./style";

export default function MapLogic() {
	const libraries = ["places"];
	const mapContainerStyle = {
		width: "100%",
		height: "100%",
	};
	const center = {
		lat: 6.230833,
		lng: -75.590553,
	};

	const option = {
		styles: mapStyle,
		disableDefaultUI: true,
		zoomControl: true,
	};

    return {libraries,mapContainerStyle,center,option}
}
