export function parseGoogleMapsUrl(url: string) {
    if (!url) {
        return {
            latitude: null,
            longitude: null,
        };
    }

    const patterns = [
        /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,
        /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/,
        /q=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,
        /ll=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/,
    ];

    for (const regex of patterns) {
        const match = url.match(regex);

        if (match) {
            return {
                latitude: parseFloat(match[1]),
                longitude: parseFloat(match[2]),
            };
        }
    }

    return {
        latitude: null,
        longitude: null,
    };
}