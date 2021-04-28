# React-Weather-App

Mainly built with React Hooks + Simple CSS styling.

## Requirements

1. Display info based on UI
2. API Fetching from openweathermap.org, base on city/country inputs
3. Refetch API, and RemoveById features
4. Error handling (shows when API fetching fails)

## Structure

```
<WeatherApp>
    <TodaysWeather> -- Input section with 2 input fields and 2 CTA
    <WeatherCard> -- currently fetched data, displayed in a singular card
    <SearchHistory> -- list of previously fetched data with info + CTAs
```

## Assumptions

- API is always working; only considered when its ok (cod === '200') or country not found (cod ==='404). 
Did not consider the case where API is temporarily blocked/exceeded calls for the day

- Time displayed is set based on local Singapore time, not in said country's timezone

- Deleting of row in SearchTransaction will delete all unique entries (eg. if 2 Singapore, will delete all 2).
