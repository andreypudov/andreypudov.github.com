package networkinfoservice

import (
	"encoding/json"
	"net/http"
	"strings"
)

type NetworkReport struct {
	PublicIP  string `json:"public_ip"`
	City      string `json:"city"`
	Region    string `json:"region"`
	Country   string `json:"country"`
	Latitude  string `json:"latitude"`
	Longitude string `json:"longitude"`
	UserAgent string `json:"user_agent"`
}

func GetNetworkInfo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Content-Type", "application/json")

	var clientIP string
	xfw := r.Header.Get("X-Forwarded-For")
	if xfw != "" {
		parts := strings.Split(xfw, ",")
		clientIP = strings.TrimSpace(parts[len(parts)-1])
	} else {
		clientIP = strings.Split(r.RemoteAddr, ":")[0]
	}

	city := r.Header.Get("X-Appengine-City")
	region := r.Header.Get("X-Appengine-Region")
	country := r.Header.Get("X-Appengine-Country")
	
	latLon := r.Header.Get("X-Appengine-Citylatlong")
	var lat, lon string
	if latLon != "" && strings.Contains(latLon, ",") {
		coords := strings.Split(latLon, ",")
		if len(coords) == 2 {
			lat = coords[0]
			lon = coords[1]
		}
	}

	report := NetworkReport{
		PublicIP:  clientIP,
		City:      city,
		Region:    region,
		Country:   country,
		Latitude:  lat,
		Longitude: lon,
		UserAgent: r.UserAgent(),
	}

	json.NewEncoder(w).Encode(report)
}