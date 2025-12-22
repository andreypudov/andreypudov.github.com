package timeservice

import (
	"encoding/json"
	"net/http"
	"time"
)

type TimeReport struct {
	Unix int64 `json:"unix"`
}

func GetUnixTime(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Content-Type", "application/json")

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return
	}

	now := time.Now().UTC()
	report := TimeReport{
		Unix: now.UnixNano(),
	}

  json.NewEncoder(w).Encode(report)
}